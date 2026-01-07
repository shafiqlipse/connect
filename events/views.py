from django.shortcuts import render, redirect, get_object_or_404

# from accounts.decorators import school_required, anonymous_required
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import *
from .forms import *
from accounts.forms import *

# from school.models import school_official
from django.http import JsonResponse
import datetime
from django.contrib import messages
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
from accounts.decorators import staff_required, media_required, anonymous_required
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.template.loader import get_template
from django.http import HttpResponse
from xhtml2pdf import pisa
from io import BytesIO
from .models import Event, AccreditationRequest

@login_required
def events(request):
    events = Event.objects.filter(status="Active")

    # Collect accreditation requests grouped by event
    event_accreditations = []
    for event in events:
        requests = AccreditationRequest.objects.filter(event=event, status='approved').select_related('journalist')
        if requests.exists():
            journalist_data = []
            for req in requests:
                try:
                    media_profile = req.journalist.journalist.first()  # safer than .get()
                except:
                    media_profile = None
                journalist_data.append({
                    "request": req,
                    "media": media_profile
                })

            event_accreditations.append({
                "event": event,
                "journalists": journalist_data
            })

    if request.method == "POST":
        # Determine the submitted form type
        if "Accreditation" in request.POST:
            template = get_template("media/acred.html")
            filename = "Delegate_Accreditation.pdf"
        elif "Certificate" in request.POST:
            template = get_template("certificate_temaplate.html")
            filename = "Filtered_Certificate.pdf"
        else:
            return HttpResponse("Invalid form submission")

        # Prepare context for template
        context = {
            "event_accreditations": event_accreditations
        }

        # Render to HTML
        html = template.render(context)

        # Generate PDF
        pdf_buffer = BytesIO()
        pisa_status = pisa.CreatePDF(html, dest=pdf_buffer)

        if pisa_status.err:
            return HttpResponse("We had some errors <pre>" + html + "</pre>")

        pdf_buffer.seek(0)
        response = HttpResponse(content_type="application/pdf")
        response["Content-Disposition"] = f'attachment; filename="{filename}"'
        response.write(pdf_buffer.getvalue())
        return response

    # Render page for GET requests
    return render(request, "event/eventlist.html", {
        "events": events,
        "event_accreditations": event_accreditations
    })



@login_required(login_url="login")
def EventDetail(request, id):
    event = get_object_or_404(Event, id=id)
    accreditation_requests = AccreditationRequest.objects.filter(event=event).select_related('journalist')
    relatedevents = Event.objects.filter(event_type=event.event_type).exclude(id=id)
    # recent = Event.objects.all().order_by("-created_at")[:10]
    user_requests = AccreditationRequest.objects.filter(
        journalist=request.user
    ).values_list('event_id', flat=True)
    requested_event_ids = set(user_requests)
    # new_comment_reply = None
    accreditation_request = None
    if request.user.is_authenticated and request.user.is_media:
        accreditation_request = AccreditationRequest.objects.filter(
            journalist=request.user,
            event=event
        ).first()
    context = {"event": event, "accreditation_request": accreditation_request, "accreditation_requests": accreditation_requests, "relatedevents": relatedevents, "requested_event_ids": requested_event_ids,}

    return render(request, "event/event.html", context)




@login_required(login_url="login")
def active_events(request):
    events = Event.objects.filter(status = "Active")

    context = {"events": events}

    return render(request, "event/eventlist.html", context)


# # news Event creation.....................................................
@staff_required
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
@staff_required
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
@staff_required
def deleteevent(request, id):
    stud = Event.objects.get(id=id)
    if request.method == "POST":
        stud.delete()
        return redirect("Events")

    return render(request, "event/deleteevent.html", {"obj": stud})


def request_accreditation(request, id):
    if request.method == "POST":
        event = get_object_or_404(Event, id=id)
        reason = request.POST.get("reason", "").strip()

        if not reason:
            messages.error(request, "Please provide a reason for the accreditation request.")
            return redirect("event_detail", id=event.id)

        existing_request = AccreditationRequest.objects.filter(
            journalist=request.user,
            event=event
        ).first()

        if existing_request:
            messages.info(request, "You have already requested accreditation for this event.")
        else:
            AccreditationRequest.objects.create(
                journalist=request.user,
                event=event,
                reason=reason
            )
            messages.success(request, "Accreditation request submitted.")

        return redirect("event", id=event.id)
    
    
    
@login_required
def accept_accreditation(request, id):
    accreditation = get_object_or_404(AccreditationRequest, id=id)
    accreditation.status = 'approved'
    accreditation.save()
    messages.success(request, 'Accreditation request approved.')
    return redirect(request.META.get('HTTP_REFERER', 'home'))

@login_required
def reject_accreditation(request, id):
    accreditation = get_object_or_404(AccreditationRequest, id=id)
    accreditation.status = 'rejected'
    accreditation.save()
    messages.success(request, 'Accreditation request rejected.')
    return redirect(request.META.get('HTTP_REFERER', 'home'))



def deactivate_event(request, id):
    event = get_object_or_404(Event, id=id)
    event.status = "Inactive"
    event.save()
    messages.success(request, "Event activated successfully.")
    return redirect("active_events")

from django.urls import reverse

def cancel_accreditation_request(request, id):
    if request.method == "POST":
        AccreditationRequest.objects.filter(
            journalist=request.user,
            event_id=id
        ).delete()
    return redirect(reverse('event', args=[id]))


# # Events details......................................................
# event admin or user list

# views.py
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .models import Submission
from .forms import SubmissionForm

@login_required
def create_submission(request):
    if request.method == 'POST':
        form = SubmissionForm(request.POST)
        if form.is_valid():
            submission = form.save(commit=False)
            submission.journalist = request.user
            submission.save()
            messages.success(request, 'Submission created successfully.')
            return redirect('mysubmissions')
    else:
        form = SubmissionForm()
    return render(request, 'submissions/new_submission.html', {'form': form})

@login_required
def mysubmissions(request):
    user=request.user
    submissions = Submission.objects.filter(journalist=user).order_by('-submitted_at')
    return render(request, 'submissions/submissions_list.html', {'submissions': submissions})

@login_required
def allsubmissions(request):
    submissions = Submission.objects.all().order_by('-submitted_at')
    return render(request, 'submissions/submissions_list.html', {'submissions': submissions})

@login_required
def approve_submission(request, pk):
    submission = get_object_or_404(Submission, pk=pk)
    submission.approved = True
    submission.save()
    messages.success(request, 'Submission approved.')
    return redirect(request.META.get('HTTP_REFERER', 'submission_list'))

@login_required
def reject_submission(request, pk):
    submission = get_object_or_404(Submission, pk=pk)
    submission.approved = False
    submission.save()
    messages.success(request, 'Submission rejected.')
    return redirect(request.META.get('HTTP_REFERER', 'submission_list'))

# views.py
# ... other imports ...
# from .models import Event, AccreditationRequest

def coming_events(request):
    events = Event.objects.filter(status="Active").order_by('start_date')
    return render(request, "event/coming_events.html", {"events": events})



def completed_events(request):
    events = Event.objects.filter(status="Completed").order_by('-start_date')
    return render(request, "event/completed_events.html", {"events": events})

