from django.conf.urls.static import static
from django.conf import settings
from django.urls import path, include
from django.contrib import admin



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('cosmos.urls')),
]