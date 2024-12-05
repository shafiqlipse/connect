from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from events.views import *
from accounts.views import activate_journalist


urlpatterns = [
    path("newtrainee/", register, name="newtrainee"),
    path("newevent/", newevent, name="newevent"),
    path("activate/<int:id>", activate_journalist, name="activate_journalist"),
    path("events/", eventlist, name="eventlist"),
    path("event/<int:id>", eventlist, name="event"),
    path("journ/<int:id>", journ_detail, name="journ_detail"),
    path("eventupdate/<int:id>", eventupdate, name="eventupdate"),
    path("eventdelete/<int:id>", deleteevent, name="eventdelete"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
