from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import *

urlpatterns = [
    path('overview/', overview, name="overview"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
