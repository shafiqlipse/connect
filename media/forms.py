
from django import forms
from .models import *

from django.forms.widgets import CheckboxSelectMultiple


class MediaForm(forms.ModelForm):
    class Meta:
        model = Media
        fields = [
            "fname",
            "lname",
           
            "nationality",
            "profile_photo",
            "office_id",
            
            "media_house",
            "media_type",
            "role",
            
            "phone",
            "email",
            "address",
            "gender",
            "agree_to_terms",
        ]
        widgets = {
            "fname": forms.TextInput(attrs={"class": "form-control"}),
            "lname": forms.TextInput(attrs={"class": "form-control"}),
            "email": forms.TextInput(attrs={"class": "form-control"}),
            "school": forms.TextInput(attrs={"class": "form-control"}),
            "media_house": forms.TextInput(attrs={"class": "form-control"}),
            "personal_email": forms.TextInput(attrs={"class": "form-control"}),
            "phone": forms.TextInput(attrs={"class": "form-control"}),
            
            "nationality": forms.TextInput(attrs={"class": "form-control"}),
            "media_type": forms.Select(attrs={"class": "form-control"}),
            "role": forms.Select(attrs={"class": "form-control"}),
            "address": forms.TextInput(attrs={"class": "form-control"}),
            
            "gender": forms.Select(attrs={"class": "form-control"}),
            "agree_to_terms": forms.CheckboxInput(attrs={"class": "form-check-input"}),
        }
