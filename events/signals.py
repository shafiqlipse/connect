from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.db import transaction

from .models import AccreditationRequest


@receiver(post_save, sender=AccreditationRequest)
def send_approval_email(sender, instance, created, **kwargs):

    # Only when status CHANGES to approved
    if instance._old_status != 'approved' and instance.status == 'approved':

        def send_email():
            subject = "Accreditation Request Approved"
            html_message = render_to_string(
                "email/approved_email.html",
                {
                    "journalist": instance.journalist,
                    "event": instance.event,
                }
            )

            send_mail(
                subject=subject,
                message="",
                from_email="noreply@example.com",
                recipient_list=[instance.journalist.email],
                html_message=html_message,
            )

        # Ensures email is sent only after DB commit
        transaction.on_commit(send_email)
