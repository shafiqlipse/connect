from django.shortcuts import render, redirect, get_object_or_404
from accounts.forms import MediaForm
from core.models import Media


# Create your views here.
def home(request):
    context = {}
    return render(request, "main/home.html", context)


def accreditation(request):
    return render(request, "media/acc.html")


def verify(request):
    return render(request, "media/verify.html")


def accreditaionform(request):
    if request.method == "POST":
        form = MediaForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect("verify")  # Redirect to journalist dashboard
    else:
        form = MediaForm()
    return render(request, "media/acc_form.html", {"form": form})


def update_journalist(request, id):
    jounalist = get_object_or_404(Media, id=id)

    if request.method == "POST":
        form = MediaForm(request.POST, instance=jounalist)
        if form.is_valid():
            form.save()
            return redirect(
                "journs"
            )  # Redirect to the official list page or another URL
    else:
        form = MediaForm(instance=jounalist)

    return render(
        request, "media/acc_form.html", {"form": form, "jounalist": jounalist}
    )
