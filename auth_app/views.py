from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from django.utils.decorators import method_decorator

from auth_app.middlewares import auth
from .serializers import MyTokenObtainPairSerializer, UserSerializer
import logging

from auth_app import serializers

logger = logging.getLogger(__name__)

# Render the index page (main React app)
def index_view(request):
    return render(request, 'auth_app/index.html')

# Handle user registration
class SignupView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request, *args, **kwargs):
        logger.info(f"Received signup request with data: {request.data}")
        
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            logger.info(f"User successfully created: {user.username}")
            
            return Response({
                'user': UserSerializer(user, context=self.get_serializer_context()).data,
            })
        except serializers.ValidationError as e:
            logger.error(f"Validation error during signup: {e.detail}")
            return Response({'errors': e.detail}, status=400)
        except Exception as e:
            logger.error(f"Unexpected error during signup: {e}")
            return Response({'errors': str(e)}, status=500)

# Handle user login
class MyLoginView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            validated_data = serializer.validated_data

            response = Response({
                'refresh': validated_data['refresh'],
                'access': validated_data['access'],
                'user': validated_data['user'],
            })

            return response
        except serializers.ValidationError as e:
            logger.error(f"Validation error during login: {e.detail}")
            return Response({'errors': e.detail}, status=400)
        except Exception as e:
            logger.error(f"Unexpected error during login: {e}")
            return Response({'errors': str(e)}, status=500)

# Render the dashboard page (dashboard React app)
@auth
def dashboard_view(request):
    return render(request, 'auth_app/dashboard.html')
