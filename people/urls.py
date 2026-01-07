from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

from core.views import *


urlpatterns = [
    path("", home, name="home"),
    path("admin/", admin.site.urls),
    path("events/", include("events.urls")),
    path("auth/", include("accounts.urls")),
    path("media/", include("media.urls")),
    path("dashboard/", include("dashboard.urls")),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
