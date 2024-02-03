from django.shortcuts import render


# Create your views here.
def home(request):
    context = {}
    return render(request, "main/home.html", context)


def accreditation(request):
    return render(request, "media/acc.html")

def verify(request):
    return render(request, "media/verify.html")

def accreditaionform(request):
    return render(request, "media/acc_fom.html")
