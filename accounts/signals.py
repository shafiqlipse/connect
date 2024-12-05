from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import User, UserProfile
from django.core.mail import send_mail
from core.models import Media


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created and instance.is_media:
        UserProfile.objects.create(user=instance)


@receiver(post_save, sender=Media)
def media_status_handler(sender, instance, **kwargs):
    instance._original_status = "pending"
    if instance.status == "accepted":
        # Check if the user with the email exists
        user = User.objects.filter(email=instance.email).first()
        if not user:  # If user does not exist, create a new one
            user = User.objects.create_user(
                username=instance.email,
                is_media=True,
                email=instance.email,
            )

            # Additional user profile fields can be updated here
            # For example, user.profile.bio = instance.bio
            user.save()

            # Create UserProfile for the user
            instance.user = user

            # Generate a unique token for the user (if needed for other purposes)
            # uid = urlsafe_base64_encode(force_bytes(user.pk))
            # token = default_token_generator.make_token(user)

            # Sending confirmation email with the login link
            send_mail(
                "Account Approved",
                f"Your account has been approved. Click the following link to set your password:{user.email} ",
                "noreply@example.com",
                [instance.email],
                fail_silently=True,  # Change to False for debugging, True for production
            )
