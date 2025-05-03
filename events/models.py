from django.db import models
from accounts.models import User
status_choices = [
    ("pending", "Pending"),
    ("Active", "Active"),
    ("Inactive", "Inactive"),
]

etypes = (
    ("Press Conference", "Press Conference"),
    ("Engagement", "Engagement"),
    ("Championships", "Championships"),
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
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    status = models.CharField(max_length=10, choices=status_choices, default="Active")
    def __str__(self):
        return self.title

class AccreditationRequest(models.Model):
    journalist = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'role': 'journalist'})
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    reason = models.TextField()
    status = models.CharField(
        max_length=20,
        choices=[('pending', 'Pending'), ('approved', 'Approved'), ('rejected', 'Rejected')],
        default='pending'
    )
    submitted_at = models.DateTimeField(auto_now_add=True)



# models.py
class Submission(models.Model):
    journalist = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    url = models.URLField(blank=True, null=True)  # <-- New
    type = models.CharField(max_length=50, choices=[
        ('photo', 'Photo'), 
        ('video', 'Video'), 
        ('article', 'Article'), 
        ('report', 'Report'),
        ('link', 'External Link')  # Optional
    ])
    description = models.TextField(blank=True)
    submitted_at = models.DateTimeField(auto_now_add=True)
    approved = models.BooleanField(default=False)
