from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import *


urlpatterns = [
    path("accreditation/", accreditation, name="accreditation"),
    path("verify/", verify, name="verify"),
    path("register/", accreditaionform, name="accform"),
    path("journalists/", journalists, name="journalists"),
    path("journalist/<int:id>/", journalist, name="journalist"),
    
    path("activate/<int:id>", activate_journalist, name="activate_journalist"),
    path("active_journalists/", active_journalists, name="active_journalists"),
    path("inactive_journalists/", inactive_journalists, name="inactive_journalists"),
    path("profile/", media_profile, name="media_profile"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
