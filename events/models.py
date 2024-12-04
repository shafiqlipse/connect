from django.db import models
from accounts.models import User


etypes = (
    ("Press Conference", "Press Conference"),
    ("Engagement", "Engagement"),
    ("Symposium", "Symposium"),
    ("Meeting", "Meeting"),
    ("Webinar", "Webinar"),
    ("Seminar", "Seminar"),
    ("Conference", "Conference"),
    ("Training", "Training"),
    ("Trivial", "Trivial"),
)


class Event(models.Model):
    title = models.CharField(max_length=250)
    event_type = models.CharField(max_length=250, choices=etypes)
    venue = models.CharField(max_length=250)
    organiser = models.CharField(max_length=250)
    description = models.TextField(default="No description provided.")
    start_date = models.DateTimeField(auto_now=False, auto_now_add=False)
    end_date = models.DateTimeField(auto_now=False, auto_now_add=False)
    poster = models.ForeignKey(User, related_name="user", on_delete=models.CASCADE)
    event_photo = models.ImageField(
        upload_to="photo/",
        blank=True,
        null=True,
        default="http://localhost:8000/static/images/profile.png",
    )
    event_cover = models.ImageField(
        upload_to="photo/",
        blank=True,
        null=True,
        default="http://localhost:8000/static/images/profile.png",
    )

    def __str__(self):
        return self.title
