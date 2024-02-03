from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth.forms import AuthenticationForm

from django.contrib import messages

# Create your views here.

def user_login(request):
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            # Get the user without logging in
            user = form.get_user()
            login(request, user)

        else:
            messages.error(request, "Error in login. Please check your credentials.")
    else:
        form = AuthenticationForm()
    return render(request, "account/login.html", {"form": form})
