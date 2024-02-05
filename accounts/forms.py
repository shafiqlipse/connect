from django import forms
from django.contrib.auth.forms import UserCreationForm,PasswordChangeForm
from .models import User,UserProfile
from django.core.validators import RegexValidator


class RegistrationForm(UserCreationForm):
    first_name = forms.CharField(max_length=255)
    last_name = forms.CharField(max_length=255)
    email = forms.EmailField(max_length=100)
    phone = forms.CharField(max_length=20, required=False)

    class Meta:
        model = User
        fields = [
            "email",
            "first_name",
            "last_name",
            "phone",
            "username",
            "password1",
            "password2",
            "is_media",
        ]

class PasswordResetForm(forms.Form):
    new_password1 = forms.CharField(widget=forms.PasswordInput())
    new_password2 = forms.CharField(widget=forms.PasswordInput())

    class Meta:
        fields = ["new_password1", "new_password2"]

class ProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = '__all__'
        widgets = {
            'agree_to_terms': forms.CheckboxInput(),
        }