from django.shortcuts import render, redirect, get_object_or_404
from accounts.forms import MediaForm
from core.models import Media
from django.contrib.auth.decorators import login_required


# Create your views here.
def home(request):
    context = {}
    return render(request, "media/acc.html", context)


def accreditation(request):
    return render(request, "media/acc.html")


def verify(request):
    return render(request, "media/verify.html")

from django.db import IntegrityError
from django.core.files.base import ContentFile
import base64
from django.contrib import messages

def accreditaionform(request):
    if request.method == "POST":
        form = MediaForm(request.POST, request.FILES)
        if form.is_valid():
                try:
                    new_journalist = form.save(commit=False)

                    # Assign the school from the user profile
                    
                    # Handle cropped image data for the "photo" field
                    cropped_data = request.POST.get("photo_cropped")
                    if cropped_data:
                        try:
                            format, imgstr = cropped_data.split(";base64,")
                            ext = format.split("/")[-1]
                            data = ContentFile(
                                base64.b64decode(imgstr), name=f"photo.{ext}"
                            )
                            new_journalist.photo = data  # Assign cropped image
                        except (ValueError, TypeError) as e:
                            messages.error(request, "Invalid image data.")
                            return render(
                                request, "journalists/newAthlete.html", {"form": form}
                            )

                    new_journalist.save()
                    messages.success(request, "Journalist added successfully!")
                    return redirect("verify")

                except IntegrityError as e:
                    if "lin" in str(e).lower():
                        messages.error(
                            request,
                            "An journalist with this NIN already exists.",
                        )
                    else:
                        messages.error(request, f"Error adding journalist: {str(e)}")
                except Exception as e:
                    messages.error(request, f"Error adding journalist: {str(e)}")
        else:
                # Form validation error messages
                for field, errors in form.errors.items():
                    for error in errors:
                        messages.error(request, f"{field.capitalize()}: {error}")
    else:
        form = MediaForm()

    return render(request, "media/acc_form.html", {"form": form})

@login_required
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



def media_profile(request):
    user=request.user
    journ = Media.objects.get(user=user)
    context={"journ":journ}
    return render(request, "media/journ.html",context)