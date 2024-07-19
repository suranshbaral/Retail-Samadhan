"""
ASGI config for Retail project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/asgi/
"""

import os

from django.core.asgi import get_asgi_application

# Set the Django settings module for the 'asgi' module.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Retail.settings')

# Load the ASGI application.
application = get_asgi_application()
