from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from events.views import *


urlpatterns = [
    path("newevent/", newevent, name="newevent"),
    path("events/", events, name="events"),
    path("event/<int:id>", EventDetail, name="event"),
    path("eventupdate/<int:id>", eventupdate, name="eventupdate"),
    path("eventdelete/<int:id>", deleteevent, name="eventdelete"),
    # path("eventdelete/<int:id>", deleteevent, name="eventdelete"),
    path('events/request-accreditation/<int:id>/', request_accreditation, name='request_accreditation'),
    path('events/cancel_accreditation_request/<int:id>/', cancel_accreditation_request, name='cancel_accreditation_request'),
    path('accreditation/accept/<int:id>/', accept_accreditation, name='accept_accreditation'),
    path('accreditation/reject/<int:id>/', reject_accreditation, name='reject_accreditation'),
    # path('accreditation/reject/<int:id>/', reject_accreditation, name='reject_accreditation'),
    path('comming_events/', coming_events, name='coming_events'),
    path('completed_events/', completed_events, name='completed_events'),
    # path('accreditation/reject/<int:id>/', reject_accreditation, name='reject_accreditation'),
    path('deactivate_event/event/<int:id>/', deactivate_event, name='deactivate_event'),
    path('allsubmissions/', allsubmissions, name='allsubmissions'),
    path('approve_submission/<int:pk>/', approve_submission, name='approve_submission'),
    path('create_submission/', create_submission, name='create_submission'),
    path('mysubmissions/', mysubmissions, name='mysubmissions'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
