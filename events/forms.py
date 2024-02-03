from django import forms
from .models import *


class CapacityForm(forms.ModelForm):
    class Meta:
        model = capacityBuilding
        fields = "__all__"
