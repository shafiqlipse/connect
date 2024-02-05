from django.shortcuts import render, redirect
from accounts.decorators import school_required, anonymous_required
from django.contrib.auth import logout
from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth.forms import AuthenticationForm
from .forms import RegistrationForm

from .models import User, UserProfile
from django.contrib import messages


# dashboards views
def dashboard(request):
    context = {}
    return render(request, "dashboard/dashboard.html", context)


#  auth views
@anonymous_required
def Register(request):
    if request.method == "POST":
        form = RegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(
                commit=False
            )  # Create the user object without saving to the database
            user.is_media = True  # Set is_school to True
            user.save()  # Save the user object with is_school set to True
        else:
            # Log in the user
            login(request, user)

            return redirect("mediaprofile")
    else:
        form = RegistrationForm()
    return render(request, "account/sregister.html", {"form": form})


@anonymous_required
def user_login(request):
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            # Get the user without logging in
            user = form.get_user()
            login(request, user)

            # Check if the user is a school
            if user.is_media:
                # Check if the school user has a profile
                profile = UserProfile.objects.filter(user=user).first()
                if profile:
                    messages.info(request, "Welcome back!")
                    return redirect(
                        "mediaproile"
                    )  # Redirect to home for school users with a profile
                else:
                    messages.info(request, "Welcome! Please complete your  profile.")
                    return redirect(
                        "profile"
                    )  # Adjust the URL name for your create school profile view
            # else:
            # If the user is not a school, log in and redirect to dashboard
            messages.success(request, "Login successful.")
            return redirect("dashboard")  # Adjust the URL name for your dashboard view
        else:
            messages.error(request, "Error in login. Please check your credentials.")
    else:
        form = AuthenticationForm()
    return render(request, "account/login.html", {"form": form})


def user_logout(request):
    # if user.is_authenticated:
    logout(request)
    return redirect("login")


def custom_404(request, exception):
    return render(request, "account/custom404.html", {}, status=404)
