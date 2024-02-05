from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from events.views import *
from accounts.views import *
from core.views import *


urlpatterns = [
    path("", home, name="home"),
    path("dashboard/", dashboard, name="dashboard"),
    path("login/", user_login, name="login"),
    path("logout/", user_logout, name="logout"),
    # path("password/", passwordReset, name="password"),
    path("register/", Register, name="register"),
    path("admin/", admin.site.urls),
    path("usssa/", include("core.urls")),
    path("connect/", include("events.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
