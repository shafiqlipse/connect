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
from django.shortcuts import render, redirect, get_object_or_404
from xhtml2pdf import pisa
from django.template.loader import get_template
from django.http import HttpResponse
from django.contrib import messages
from xhtml2pdf import pisa
from io import BytesIO
from .models import *
from .forms import *
from django.db import IntegrityError
from django.core.files.base import ContentFile
import base64


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


from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa
from io import BytesIO


def journs(request):
    # Get all journs
    journs = Media.objects.all()

    # Apply the filter
    journs_filter = MediaFilter(request.GET, queryset=journs)
    alljourns = journs_filter.qs

    if request.method == "POST":
        # Check which form was submitted
        if "Accreditation" in request.POST:
            template = get_template("media/acred.html")
            filename = "Delegate_Accreditation.pdf"
        elif "Certificate" in request.POST:
            template = get_template(
                "certificate_temaplate.html"
            )  # Your certificate template
            filename = "Filtered_Certificate.pdf"
        else:
            return HttpResponse("Invalid form submission")

        # Generate PDF
        context = {"alljourns": alljourns}
        html = template.render(context)

        # Create a PDF
        pdf_buffer = BytesIO()
        pisa_status = pisa.CreatePDF(html, dest=pdf_buffer)

        if pisa_status.err:
            return HttpResponse("We had some errors <pre>" + html + "</pre>")

        pdf_buffer.seek(0)

        # Return the PDF as a response
        response = HttpResponse(content_type="application/pdf")
        response["Content-Disposition"] = f'attachment; filename="{filename}"'
        response.write(pdf_buffer.getvalue())
        return response
    else:
        # Render the filter form
        return render(request, "media/journs.html", {"journs_filter": journs_filter})


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


# def eventupdate(request, id):
def journ_detail(request, id):
    journ = get_object_or_404(Media, id=id)

    context = {"journ": journ}
    return render(request, "media/journ.html", context)


# def (request,id):------------------------------------------------------------------
# @login_required(login_url='login')
def deleteevent(request, id):
    stud = Event.objects.get(id=id)
    if request.method == "POST":
        stud.delete()
        return redirect("Events")

    return render(request, "events/deleteEvent.html", {"obj": stud})
