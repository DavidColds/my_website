from django.contrib import admin
from django.urls import path, include
from django.views import static
from django.views.static import serve
from django.contrib.staticfiles.urls import staticfiles_urlpatterns


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('base.urls')),
    path('', include('sendemail.urls')),
]

urlpatterns += staticfiles_urlpatterns()
