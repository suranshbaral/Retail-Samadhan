# Retail/urls.py

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('auth_app.urls')),  # Example: Include app-specific URLs
    path('dashboard/', include('dashboard.urls')),
    path('khalti/', include('khalti.urls')),
    
]

# Serve static files during development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
