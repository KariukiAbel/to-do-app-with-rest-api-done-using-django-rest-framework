from typing import Pattern
from django.urls import path
from frontend import views

urlpatterns = [
    path('', views.list, name='list'),
]
