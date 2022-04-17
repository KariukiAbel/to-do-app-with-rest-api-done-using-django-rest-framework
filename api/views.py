from django.shortcuts import render

# Create your views here.
def apiOverview(request):
    return JsonResponse("API BASE POINT ", safe=False)