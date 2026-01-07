from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import *
from django.contrib.auth import views as auth_views


urlpatterns = [
    path("login/", loginUser, name="login"),
    path("logout/", user_logout, name="logout"),
    path("passwordconfirmation/", passwordconfirmation, name="passwordconfirmation"),

    path("password-reset/", ResetPasswordView.as_view(), name="password_reset"),
    path(
        "password-reset-confirm/<uidb64>/<token>/",
        auth_views.PasswordResetConfirmView.as_view(
            template_name="auth/password_reset_confirm.html"
        ),
        name="password_reset_confirm",
    ),
    path(
        "password-reset-complete/",
        auth_views.PasswordResetCompleteView.as_view(
            template_name="auth/password_reset_complete.html"
        ),
        name="password_reset_complete",
    ),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
