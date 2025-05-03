from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from events.views import *
from core.views import *
from accounts.views import activate_journalist


urlpatterns = [
    path("newevent/", newevent, name="newevent"),
    path("activate/<int:id>", activate_journalist, name="activate_journalist"),
    # path("activate/<int:id>", activate_journalist, name="activate_journalist"),
    path("events/", eventlist, name="eventlist"),
    path("championships/", champlist, name="championships"),
    path("evens/", evens, name="evens"),
    # path("events/", eventlist, name="eventlist"),
    path("event/<int:id>", EventDetail, name="event"),
    path("journ/<int:id>", journ_detail, name="journ_detail"),
    path("eventupdate/<int:id>", eventupdate, name="eventupdate"),
    path("eventdelete/<int:id>", deleteevent, name="eventdelete"),
    # path("eventdelete/<int:id>", deleteevent, name="eventdelete"),
    path('events/request-accreditation/<int:id>/', request_accreditation, name='request_accreditation'),
    path('events/cancel_accreditation_request/<int:id>/', cancel_accreditation_request, name='cancel_accreditation_request'),
    path('accreditation/accept/<int:id>/', accept_accreditation, name='accept_accreditation'),
    path('accreditation/reject/<int:id>/', reject_accreditation, name='reject_accreditation'),
    # path('accreditation/reject/<int:id>/', reject_accreditation, name='reject_accreditation'),
    path('deactivate_event/event/<int:id>/', deactivate_event, name='deactivate_event'),
    path('journalists/', active_journalists, name='active_journalists'),
    path('active_events/', active_events, name='active_events'),
    # path('active_events/', active_events, name='active_events'),
    path('media_profile/', media_profile, name='media_profile'),
    # path('media_profile/', media_profile, name='media_profile'),
    #Submissions
    # path('media_profile/', media_profile, name='media_profile'),
    path('create_submission/', create_submission, name='create_submission'),
    path('mysubmissions/', mysubmissions, name='mysubmissions'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
