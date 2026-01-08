from urllib3 import request
from .forms import *
from .models import *
from django.contrib.auth import login, logout
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth import update_session_auth_hash
from django.urls import reverse_lazy
from django.contrib.auth.views import PasswordResetView
from django.contrib.messages.views import SuccessMessageMixin
from django.http import JsonResponse
from django.core.paginator import Paginator
from .models import User
from django.db.models import Q


def loginUser(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, "Login successful.")

            # Redirect based on role
            if user.is_media:
                return redirect("media_profile")   # 🔹 replace "profile" with your profile view name
            else:
                return redirect("overview")  # 🔹 dashboard/overview for other roles
        else:
            messages.error(request, "Invalid username or password.")

    return render(request, "auth/login.html")


def user_logout(request):
    # if user.is_authenticated:
    logout(request)
    return redirect("login")


def custom_404(request, exception):
    return render(request, "account/custom404.html", {}, status=404)





@login_required
def change_password(request):
    if request.method == "POST":
        form = PasswordChangeForm(request.user, request.POST)
        if form.is_valid():
            user = form.save()
            # Update the session to maintain the user's login status
            update_session_auth_hash(request, user)
            messages.success(request, "Your password was successfully updated!")
            return redirect("login")
        else:
            messages.error(request, "Please correct the error below.")
    else:
        form = PasswordChangeForm(request.user)
    return render(request, "change_password.html", {"form": form})




from.forms import UserEditForm

@login_required
def edit_user(request, id=None):
    if id:
        # Fetch the user to edit by their ID
        user = get_object_or_404(User, id=id)
    else:
        # Default to the logged-in user if no ID is provided
        user = request.user

    if request.method == "POST":
        form = UserEditForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            messages.success(request, "The profile was updated successfully.")
            return redirect("users")
    else:
        form = UserEditForm(instance=user)

    return render(request, "accounts/edit_user.html", {"form": form, "id": user.id})


def users_data(request):
    """ Handle AJAX DataTables request for large datasets """

    try:
        draw = int(request.GET.get('draw', 1))
        start = int(request.GET.get('start', 0))
        length = int(request.GET.get('length', 10))
        search_value = request.GET.get("search[value]", "")

        # Fetch and filter users
        users_query = User.objects.filter(is_school=True)

        # Apply search across multiple fields
        if search_value:
            users_query = users_query.filter(
                Q(username__icontains=search_value) |
                Q(email__icontains=search_value) |
                Q(school_profile__school_name__icontains=search_value) |  # Search school name
                Q(school_profile__EMIS__icontains=search_value)   # Search EMIS
            )

        # Paginate results
        paginator = Paginator(users_query, length)
        page_number = (start // length) + 1
        users_page = paginator.get_page(page_number)

        # Prepare JSON response
        data = []
        for user in users_page:
            school = user.school_profile.first() if user.school_profile.exists() else None
            school_name = school.school_name if school else "No School"
            emis = school.EMIS if school else "N/A"

            action_buttons = f"""
                
                <a href="/dashboard/user/edit/{user.id}/" class="btn btn-warning btn-sm">Edit</a>
                
            """

            data.append({
                "username": user.username,
                "email": user.email,
                "school_profile": f"{school_name} | {emis}",
                "actions": action_buttons,
            })

        response = {
            "draw": draw,
            "recordsTotal": User.objects.filter(is_school=True).count(),
            "recordsFiltered": users_query.count(),
            "data": data,
        }

        return JsonResponse(response)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)



def users(request):
    staff = User.objects.all().exclude(is_school=True)
    users = User.objects.select_related("school").filter(is_school=True)

    context = {
        "users": users,
        "staff": staff,
        # "teamsFilter": teams
    }
    return render(request, "horizon/users.html", context)

def staff(request):
    staff = User.objects.filter(is_staff=True)
    

    context = {
        "staff": staff,
        # "teamsFilter": teams
    }
    return render(request, "horizon/staff.html", context)





class ResetPasswordView(SuccessMessageMixin, PasswordResetView):
    template_name = "auth/password_reset.html"
    email_template_name = "auth/password_reset_email.html"
    subject_template_name = "auth/password_reset_subject.txt"
    success_message = (
        "We've emailed you instructions for setting your password, "
        "if an account exists with the email you entered. You should receive them shortly."
        " If you don't receive an email, "
        "please make sure you've entered the address you registered with, and check your spam folder."
    )
    success_url = reverse_lazy("passwordconfirmation")


def passwordconfirmation(request):
    
    return render(request, "auth/Email_reset_confirmation.html")

def activate_journalist(request, id):
    journalist = get_object_or_404(Media, id=id)
    journalist.status = "Active"
    journalist.save()
    messages.success(request, "Journalist activated successfully.")
    return redirect("active_journalists")
