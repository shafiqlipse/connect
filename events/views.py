from django.shortcuts import render, redirect, get_object_or_404
# from accounts.decorators import school_required, anonymous_required
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import *
from .filters import capacityBuildingFilter #, TeamFilter
from .forms import *
# from school.models import school_official
from django.http import JsonResponse
import datetime
from django.contrib import messages


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


def trainees(request):
    trainees = capacityBuilding.objects.all()

    # officialFilter = OfficialFilter(request.GET, queryset=officials)
    myFilter = capacityBuildingFilter(request.GET, queryset=trainees)

    traineelist = myFilter.qs

    items_per_page = 10

    paginator = Paginator(traineelist, items_per_page)
    page = request.GET.get("page")

    try:
        traineelist = paginator.page(page)
    except PageNotAnInteger:
        # If the page is not an integer, deliver the first page
        traineelist = paginator.page(1)
    except EmptyPage:
        # If the page is out of range, deliver the last page
        traineelist = paginator.page(paginator.num_pages)
    context = {
        "traineelist": traineelist,
        # "teamsFilter": teamsFilter,
        "myFilter": myFilter,
        # "teamlist": teamlist,
    }

    return render(request, "capacityb/trainees.html", context)
