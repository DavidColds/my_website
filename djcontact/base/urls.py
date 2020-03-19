from django.urls import path
from . import views
from .views import homepage, successView
from django.contrib import admin
from django.urls import path

app_name =  "main"

from .views import homepage, successView

urlpatterns = [
    path('', views.homepage, name='base-home'),
    path('email/', views.homepage, name='email'),
    path('success/', successView, name='success'),
]