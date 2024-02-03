from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from events.views import *



urlpatterns = [

    path("admin/", admin.site.urls),
    path("trainees/", trainees, name="trainees"),
    path("newtrainee/", register, name="newtrainee"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
