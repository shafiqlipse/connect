from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from events.views import *
from .views import *


urlpatterns = [
    path("accreditation/", accreditation, name="accreditation"),
    path("verify/", verify, name="verify"),
    path("accreditation_form/", accreditaionform, name="accform"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
