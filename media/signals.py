
from django.db import transaction, IntegrityError
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.template.loader import render_to_string
import logging

from .models import Media

logger = logging.getLogger(__name__)
User = get_user_model()


@receiver(pre_save, sender=Media)
def media_cache_old_status(sender, instance, **kwargs):
    try:
        if instance.pk:
            instance._old_status = (
                Media.objects
                .filter(pk=instance.pk)
                .values_list("status", flat=True)
                .first()
            )
            logger.debug(
                "Media %s old_status cached as %s",
                instance.pk,
                instance._old_status,
            )
    except Exception:
        logger.exception("Failed to cache old Media status")


@receiver(post_save, sender=Media)
def create_media_user(sender, instance, **kwargs):
    try:
        logger.debug(
            "post_save fired for Media %s (status=%s)",
            instance.pk,
            instance.status,
        )

        old_status = getattr(instance, "_old_status", None)

        if old_status != "pending":
            logger.debug("Exit: old_status=%s", old_status)
            return

        if instance.status != "Active":
            logger.debug("Exit: new status is not Active")
            return

        if instance.user:
            logger.debug("Exit: Media already linked to user")
            return

        def on_commit():
            try:
                from django.utils.crypto import get_random_string

                password = get_random_string(12)

                user, created = User.objects.get_or_create(
                    email=instance.email,
                    defaults={
                        "username": instance.email,
                        "is_media": True,
                        "first_name": instance.fname,
                        "last_name": instance.lname,
                    },
                )

                if created:
                    user.set_password(password)
                    user.save()

                    send_mail(
                        subject="Your Media Account Has Been Activated",
                        message="",
                        from_email="noreply@example.com",
                        recipient_list=[instance.email],
                        html_message=render_to_string(
                            "account/email.html",
                            {
                                "username": instance.email,
                                "password": password,
                            },
                        ),
                    )

                instance.user = user
                instance.save(update_fields=["user"])

                logger.info(
                    "Media %s linked to user %s",
                    instance.pk,
                    user.pk,
                )

            except Exception:
                logger.exception(
                    "Failed to create user or send email for Media %s",
                    instance.pk,
                )

        transaction.on_commit(on_commit)

    except Exception:
        logger.exception(
            "Unhandled error in Media post_save signal (Media %s)",
            instance.pk,
        )
        
   