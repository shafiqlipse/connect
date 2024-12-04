import django_filters
from .models import *
from core.models import *



class MediaFilter(django_filters.FilterSet):
    class Meta:
        model = Media
        fields = ("fname", "lname", "role", "gender", "status")
