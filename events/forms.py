from django import forms
from .models import *


class CapacityForm(forms.ModelForm):
    class Meta:
        model = capacityBuilding
        fields = "__all__"
        widgets = {
            "date_of_birth": forms.DateInput(
                attrs={"type": "date", "class": "datepicker"}
            ),
        }
