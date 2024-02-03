import django_filters
from .models import *


class capacityBuildingFilter(django_filters.FilterSet):
    class Meta:
        model = capacityBuilding
        fields = ("first_name","last_name", "designation", "gender", "resident","discipline")
