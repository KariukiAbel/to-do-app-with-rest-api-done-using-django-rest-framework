from django.urls import path
from views import views

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
]
