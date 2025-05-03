from django.shortcuts import render, redirect
from accounts.decorators import staff_required, media_required, anonymous_required
from django.contrib.auth import logout
from django.http import JsonResponse
from django.contrib.auth import login
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth.forms import AuthenticationForm
from .forms import RegistrationForm
from core.models import *
# from events.models import *
from .models import User, UserProfile
from django.contrib import messages


# dashboards views
def dashboard(request):
    context = {}
    return render(request, "dashboard/dashboard.html", context)


@anonymous_required
def user_login(request):
    if request.method == "POST":
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)

            if user.is_media:
                messages.success(request, "School login successful.")
                return redirect("media_profile")


            else:
                messages.success(request, "Login successful.")
                return redirect(
                    "dashboard"
                )  # Adjust the URL name for your dashboard view
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


from django.http import JsonResponse
from django.shortcuts import get_object_or_404

def activate_journalist(request, id):
    journalist = get_object_or_404(Media, id=id)
    journalist.status = "Active"
    journalist.save()
    messages.success(request, "Journalist activated successfully.")
    return redirect("journs")
