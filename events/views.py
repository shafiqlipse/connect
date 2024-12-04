from django.shortcuts import render, redirect, get_object_or_404

# from accounts.decorators import school_required, anonymous_required
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import *
from .filters import *
from .forms import *
from accounts.forms import *

# from school.models import school_official
from django.http import JsonResponse
import datetime
from django.contrib import messages
from core.models import Media


# Create your views here.
# @school_required
def register(request):
    if request.method == "POST":
        form = CapacityForm(request.POST)
        if form.is_valid():
            form.save()

            return redirect("trainees")
        else:
            # Attach errors to the form for display in the template
            error_message = "There was an error in the form submission. Please correct the errors below."
    else:
        form = CapacityForm()

    return render(request, "capacityb/capacity.html", {"form": form})


def journs(request):
    journs = Media.objects.all()

    # officialFilter = OfficialFilter(request.GET, queryset=officials)
    myFilter = MediaFilter(request.GET, queryset=journs)

    journslist = myFilter.qs

    items_per_page = 10

    paginator = Paginator(journslist, items_per_page)
    page = request.GET.get("page")

    try:
        journslist = paginator.page(page)
    except PageNotAnInteger:
        # If the page is not an integer, deliver the first page
        journslist = paginator.page(1)
    except EmptyPage:
        # If the page is out of range, deliver the last page
        journslist = paginator.page(paginator.num_pages)
    context = {
        "journslist": journslist,
        # "teamsFilter": teamsFilter,
        "myFilter": myFilter,
        # "teamlist": teamlist,
    }

    return render(request, "media/journs.html", context)


# # Events details......................................................
def EventDetail(request, id):
    event = get_object_or_404(Event, id=id)
    relatedevents = Event.objects.filter(event_type=event.event_type).exclude(id=id)
    recent = Event.objects.all().order_by("-Created")[:10]
    # new_comment_reply = None

    context = {"event": event, "recent": recent, "relatedevents": relatedevents}

    return render(request, "events/event.html", context)


# # Events details......................................................
# event admin or user list
# @login_required(login_url='login')
def eventlist(request):
    events = Event.objects.all()

    context = {"events": events}

    return render(request, "event/eventlist.html", context)


# # news Event creation.....................................................
# @login_required(login_url='login')
def newevent(request):
    if request.method == "POST":
        form = EventForm(request.POST, request.FILES)

        if form.is_valid():
            new_event = form.save(commit=False)
            new_event.poster = request.user
            # Assign the current user to the 'poster' field
            new_event.save()
            return redirect("eventlist")
    else:
        form = EventForm()

    return render(request, "event/newevent.html", {"form": form})


# # Event update page-----------------------------------------------------------------------
# @login_required(login_url='login')
def eventupdate(request, id):
    event = Event.objects.get(id=id)

    if request.method == "POST":
        form = EventForm(request.POST, instance=event)
        if form.is_valid():
            form.save()

            return redirect("eventlist")
    else:
        form = EventForm(instance=event)
    context = {"form": form}
    return render(request, "event/newevent.html", context)


# def (request,id):------------------------------------------------------------------
# @login_required(login_url='login')
def deleteevent(request, id):
    stud = Event.objects.get(id=id)
    if request.method == "POST":
        stud.delete()
        return redirect("Events")

    return render(request, "events/deleteEvent.html", {"obj": stud})
