import secrets
import string
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import User, User
from django.core.mail import send_mail
from core.models import Media
from django.utils.html import strip_tags
from django.template.loader import render_to_string
from django.contrib.auth.hashers import make_password


@receiver(post_save, sender=Media)
def create_journalist(sender, instance, created, **kwargs):
    if instance.status == "Active" and not created:
        # Officer's status changed to Active
        # Generate username based on first name and last name
        username = instance.email
        email = instance.email
        first_name =instance.fname
        last_name =instance.lname

        # Check if user with the officer's email already exists
        user_exists = User.objects.filter(email=email).exists()

        if not user_exists:
            # Generate a stronger random password

            password = f"U{instance.phone[3:7]}2024"

            try:
                # Create user with username and password
                user = User.objects.create_user(
                    username=username, password=password, email=email, is_media=True
                )
                instance.user = user
                instance.save()

                # Prepare the email content
                subject = "Your account has been activated"
                message = render_to_string(
                    "account/email.html",
                    {
                        "username": username,
                        "password": password,
                    },
                )

                # Send the email with HTML content
                send_mail(
                    subject,  # Subject
                    "",  # Plain text message (empty if HTML is used)
                    "noreply@example.com",  # Sender email
                    [email],  # Recipient email
                    html_message=message,  # HTML content
                )
            except Exception as e:
                # Handle any errors during user creation or email sending
                print(f"Error: {e}")
