from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path,include
from events.views import *
from core.views import *


urlpatterns = [
    path("", home, name="home"),
    path("admin/", admin.site.urls),
    path("usssa/", include("core.urls")),
    path("connect/", include("events.urls")),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
