from django import forms
from .models import *


class EventForm(forms.ModelForm):
   

    class Meta:
        model = Event
        fields = "__all__"
        widgets = {
            "start_date": forms.DateInput(
                attrs={"type": "date", "class": "datepicker"}
            ),
            "end_date": forms.DateInput(attrs={"type": "date", "class": "datepicker"}),
        }
