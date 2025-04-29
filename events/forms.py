from django import forms
from .models import *


class EventForm(forms.ModelForm):
    class Meta:
        model = Event
        fields = [
            'title',
            'event_type',
            'venue',
            'organiser',
            'description',
            'start_date',
            'end_date',
            'event_photo',
            'event_cover'
        ]
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'event_type': forms.Select(attrs={'class': 'form-select'}),
            'venue': forms.TextInput(attrs={'class': 'form-control'}),
            'organiser': forms.TextInput(attrs={'class': 'form-control'}),
            'description': forms.Textarea(attrs={'class': 'form-control', 'rows': 4}),
            'start_date': forms.DateTimeInput(attrs={'class': 'form-control', 'type': 'datetime-local'}),
            'end_date': forms.DateTimeInput(attrs={'class': 'form-control', 'type': 'datetime-local'}),
            'event_photo': forms.ClearableFileInput(attrs={'class': 'form-control'}),
            'event_cover': forms.ClearableFileInput(attrs={'class': 'form-control'}),
        }