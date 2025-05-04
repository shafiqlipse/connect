from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.contrib.auth import get_user_model
from core.models import Media

User = get_user_model()

@receiver(post_save, sender=Media)
def create_journalist(sender, instance, created, **kwargs):
    if instance.status == "Active" and not created and not instance.user:
        # Check if user with the email already exists
        if not User.objects.filter(email=instance.email).exists():
            try:
                # Generate credentials
                username = instance.email
                password = "Media.USSSA@2025"

                # Create the user
                user = User.objects.create_user(
                    username=username,
                    password=password,
                    email=instance.email,
                    is_media=True,
                    first_name=instance.fname,
                    last_name=instance.lname,
                )

                # Link user to journalist
                instance.user = user
                Media.objects.filter(id=instance.id).update(user=user)  # avoid calling instance.save()

                # Send email
                subject = "Your account has been activated"
                message = render_to_string(
                    "account/email.html",
                    {
                        "username": username,
                        "password": password,
                    },
                )

                send_mail(
                    subject,
                    "",
                    "noreply@example.com",
                    [instance.email],
                    html_message=message,
                )

            except Exception as e:
                print(f"[SIGNAL ERROR] Failed to create user for journalist: {e}")
