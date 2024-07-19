from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .admin import user_admin_site, dashboard_admin_site

# Create a router and register viewsets
router = DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'sales', views.SaleViewSet)
router.register(r'customers', views.CustomerViewSet)
router.register(r'orders', views.OrderViewSet)
router.register(r'employees', views.EmployeeViewSet)
router.register(r'messages', views.MessageViewSet)
router.register(r'tasks', views.TaskViewSet)
router.register(r'notifications', views.NotificationViewSet)
router.register(r'events', views.CalendarEventViewSet)
router.register(r'customerinsights', views.CustomerInsightDataViewSet)
router.register(r'inventoryitems', views.InventoryItemViewSet)
router.register(r'inventorytransactions', views.InventoryTransactionViewSet)
router.register(r'inventory', views.InventoryViewSet)  # Register the inventory viewset
router.register(r'customer-data', views.CustomerDataViewSet, basename='customerdata')

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('admin/', admin.site.urls),  # Default Django admin
    path('user-admin/', user_admin_site.urls),  # User Admin site
    path('dashboard-admin/', dashboard_admin_site.urls),  # Dashboard Admin site
    path('', include(router.urls)),  # Include API URLs under the root path
]

# Optionally, you can add more paths as needed for other parts of your application
