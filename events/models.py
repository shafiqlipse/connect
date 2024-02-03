from django.db import models


# Create your models here.
class capacityBuilding(models.Model):
    first_name = models.CharField(
        max_length=155,
    )
    last_name = models.CharField(
        max_length=155,
    )
    date_of_birth = models.DateField()
    gender = models.CharField(
        max_length=20, choices=(("male", "Male"), ("female", "Female"))
    )
    email = models.EmailField(blank=True, null=True)
    phone = models.CharField(max_length=30)
    designation = models.CharField(
        max_length=20,
        choices=(
            ("student", "Student"),
            ("primary teacher", "Primary Teacher"),
            ("secondary teacher", "Secondary Teacher"),
            ("other", "Other"),
        ),
    )
    specify = models.CharField(max_length=122, blank=True, null=True)
    workplace = models.CharField(max_length=122, blank=True, null=True)

    resident = models.CharField(
        max_length=20,
        choices=(
            ("residential", "Residential"),
            ("non residential", "Non Residential"),
        ),
    )
    district = models.CharField(max_length=122, blank=True, null=True)
    venue = models.CharField(max_length=122, blank=True, null=True)
    discipline = models.CharField(
        max_length=122,
        choices=(
            ("Football", "Football"),
            ("Volleyball", "Volleyball"),
            ("Netball", "Netball"),
            ("Badminton", "Badminton"),
            ("Basketball", "Basketball"),
            ("Athletics", "Athletics"),
            ("Mind games", "Mind games"),
            ("Media", "Media"),
            ("Tennis", "Tennis"),
            ("Table tennis", "Table tennis"),
            ("Handball", "Handball"),
            ("Woodball", "Woodball"),
            ("Rugby", "Rugby"),
            ("First Aid & Injury MGT", "First Aid & Injury MGT"),
            ("Beach soccer", "Beach soccer"),
            ("Beach Volleyball", "Beach Volleyball"),
        ),
        blank=True,
        null=True,
    )

    def __str__(self):
        return self.first_name + " " + self.last_name
