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
    path("admin/", admin.site.urls),
    path("accreditation/", accreditation, name="accreditation"),
    path("verify/", verify, name="verify"),
    path("events/", include("events.urls")),
    path("accreditation_form/", accreditaionform, name="accform"),
    path("media/journalists/", journs, name="journs"),
    path("media/journalist/<int:id>", update_journalist, name="journalist"),
    # path("media/journalist/<int:id>", update_journalist, name="journalist"),
    
    # path("media/journalist/<int:id>", update_journalist, name="journalist"),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
