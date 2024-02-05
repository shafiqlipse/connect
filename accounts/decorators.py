from django.contrib.auth.decorators import user_passes_test
from django.http import HttpResponseForbidden
from functools import wraps

from django.contrib.auth.decorators import login_required
from django.shortcuts import render


def school_required(view_func):
    @login_required(login_url="login")
    def _wrapped_view(request, *args, **kwargs):
        if request.user.is_school:
            return view_func(request, *args, **kwargs)
        else:
            return render(
                request, "dashboard/login.html"
            )  # You can customize this template

    return _wrapped_view




def anonymous_required(view_func):
    """
    Decorator to ensure that the view is only accessible to anonymous users (not logged in).
    """

    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        if request.user.is_authenticated:
            return render(request, "main/home.html")  # Customize this template
        else:
            return view_func(request, *args, **kwargs)

    return _wrapped_view
