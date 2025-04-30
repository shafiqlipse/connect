from django.db import models
from accounts.models import User

# Create your models here.
status_choices = [
    ("pending", "Pending"),
    ("Active", "Active"),
    ("Inactive", "Inactive"),
]


class Media(models.Model):
    user = models.ForeignKey(
        User,
        related_name="journalist",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
    fname = models.CharField(max_length=50)
    lname = models.CharField(max_length=50)
    nationality = models.CharField(max_length=50)
    media_house = models.CharField(max_length=100, null=True, blank=True, default="")
    address = models.CharField(max_length=100, null=True, blank=True, default="")
    email = models.EmailField(max_length=100, unique=True, default="")
    phone = models.CharField(max_length=100, null=True, blank=True, default="")
    media_type = models.CharField(
        max_length=50,
        choices=[
            ("Newspapper", "Newspapper"),
            ("TV", "TV"),
            ("Magazine", "Magazine"),
            ("Radio", "Radio"),
            ("Online streaming", "Online streaming"),
            ("Blog", "Blog"),
            ("Social media channel", "Social media channel"),
            ("online news portal", "online news portal"),
        ],
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
    phone = models.CharField(max_length=30, blank=True, null=True)
    profile_photo = models.ImageField(
        upload_to="photo/",
        default="https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
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
    NIN = models.CharField(max_length=122, unique=True)
    status = models.CharField(max_length=10, choices=status_choices, default="pending")
    agree_to_terms = models.BooleanField(
        default=False,
        verbose_name="Agree to Terms",
        help_text="Check this box if you agree to the terms and conditions.",
    )



