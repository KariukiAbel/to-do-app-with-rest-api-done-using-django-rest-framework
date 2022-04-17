"""
WSGI config for Todo_app_in_django_with_rest_framework project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Todo_app_in_django_with_rest_framework.settings')

application = get_wsgi_application()
