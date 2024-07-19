from django.urls import path
from . import views
from .views import MyLoginView, SignupView  # Import your SignupView

urlpatterns = [
    path('', views.index_view, name='index'),
    path('login/', MyLoginView.as_view(), name='token_obtain_pair'),
    path('signup/', SignupView.as_view(), name='signup'),  # Use SignupView for signup path
    path('dashboard/', views.dashboard_view, name='dashboard'),  # Ensure the correct view function for dashboard
    #path('verify-payment/', views.verify_payment_view, name='verify_payment'),
]

