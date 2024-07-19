from django.contrib import admin
from django.contrib.admin import AdminSite
from django.utils.translation import gettext_lazy as _
from .models import Product, Sale, Customer, Order, Employee, Message, Notification, Task, Inventory

class UserAdminSite(AdminSite):
    site_header = _('User Admin')
    site_title = _('User Admin Panel')
    index_title = _('Dashboard')

user_admin_site = UserAdminSite(name='user_admin')

# Register models for the User Admin site
user_admin_site.register(Product)
user_admin_site.register(Sale)
user_admin_site.register(Customer)
user_admin_site.register(Order)
user_admin_site.register(Employee)
user_admin_site.register(Message)
user_admin_site.register(Notification)
user_admin_site.register(Task)
user_admin_site.register(Inventory)

class DashboardAdminSite(AdminSite):
    site_header = _('Dashboard Admin')
    site_title = _('Dashboard Admin Panel')
    index_title = _('Dashboard')

dashboard_admin_site = DashboardAdminSite(name='dashboard_admin')

# Register models for the Dashboard Admin site
dashboard_admin_site.register(Product)
dashboard_admin_site.register(Sale)
dashboard_admin_site.register(Customer)
dashboard_admin_site.register(Order)
dashboard_admin_site.register(Employee)
dashboard_admin_site.register(Message)
dashboard_admin_site.register(Notification)
dashboard_admin_site.register(Task)
dashboard_admin_site.register(Inventory)
