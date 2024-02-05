from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.


class User(AbstractUser):
    is_media = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_author = models.BooleanField(default=False)


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    media_house = models.CharField(max_length=100, null=True, blank=True, default="")
    address = models.CharField(max_length=100, null=True, blank=True, default="")
    email = models.EmailField(max_length=100, null=True, blank=True, default="")
    phone = models.CharField(max_length=100, null=True, blank=True, default="")
    media_type = models.CharField(
        max_length=19,
        choices=[("Primary", "Primary"), ("Secondary", "Secondary")],
        null=True,
        blank=True,
    )
    role = models.CharField(
        max_length=19,
        choices=[
            ("Media Officer", "Media Officer"),
            ("Editor", "Editor"),
            ("Journalist", "Journalist"),
            ("photographer", "photographer"),
            ("Presenter", "Presenter"),
            ("Reporter", "Reporter"),
            ("TV/Video Journalist", "TV/Video Journalist"),
            ("Commentater", "Commentater"),
            ("Media Manager", "Media Manager"),
        ],
        null=True,
        blank=True,
    )
    bio = models.TextField(blank=True)
    gender = models.CharField(
        max_length=20,
        choices=(("male", "Male"), ("female", "Female")),
        blank=True,
        null=True,
    )
    personal_email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=30, blank=True, null=True)
    profile_photo = models.ImageField(
        upload_to="photo/",
        blank=True,
        null=True,
        default="http://localhost:8000/static/images/profile.png",
    )
    office_id = models.ImageField(
        upload_to="ids/",
        blank=True,
        null=True,
        default="http://localhost:8000/static/images/profile.png",
    )
    nid = models.ImageField(
        upload_to="ids/",
        blank=True,
        null=True,
        default="http://localhost:8000/static/images/profile.png",
    )
    NIN = models.CharField(max_length=122, null=True, blank=True, unique=True)
    phone = models.IntegerField(null=True, blank=True)

    agree_to_terms = models.BooleanField(
        default=False,
        verbose_name="Agree to Terms",
        help_text="Check this box if you agree to the terms and conditions.",
    )
