# create_dummy_data.py

import os
import django
import datetime
from django.core.management.base import BaseCommand
from faker import Faker
from django.contrib.auth import get_user_model

# Initialize Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Retail.settings')
django.setup()

# Import your models here
from dashboard.models import Product, Sale, Customer, Order, Employee, Message, Task, Notification, CalendarEvent, CustomerInsightData, InventoryItem, InventoryTransaction, Products

User = get_user_model()
fake = Faker()

class Command(BaseCommand):
    help = 'Create dummy data for testing'

    def handle(self, *args, **kwargs):
        # Get or create the user
        sujan_user, created = User.objects.get_or_create(username='sujan', email='sujan@example.com', defaults={'password': 'your_password'})

        # Create Products
        for _ in range(10):
            Product.objects.create(
                commodity=fake.word(),
                date=fake.date_this_year(),
                unit=fake.random_element(elements=('kg', 'liters', 'units')),
                minimum=fake.random_number(digits=2),
                maximum=fake.random_number(digits=2),
                average=fake.random_number(digits=2),
                owner=sujan_user
            )

        # Create Sales
        for _ in range(10):
            Sale.objects.create(
                commodity=fake.word(),
                date=fake.date_this_year(),
                unit=fake.random_element(elements=('kg', 'liters', 'units')),
                quantity_sold=fake.random_number(digits=3),
                unit_price=fake.random_number(digits=2),
                total_sales=fake.random_number(digits=4),
                owner=sujan_user
            )

        # Create Customers
        for _ in range(10):
            Customer.objects.create(
                name=fake.name(),
                email=fake.email(),
                phone=fake.bothify(text='###-###-####'),  # Ensures the phone number fits within 20 characters
                address=fake.address(),
                earnings=fake.random_number(digits=5),
                yearly_sales=fake.random_number(digits=5),
                refunds=fake.random_number(digits=3),
                owner=sujan_user
            )

        # Create Orders
        for _ in range(10):
            Order.objects.create(
                image=fake.file_path(extension='jpg'),
                item=fake.word(),
                customer_name=fake.name(),
                total_amount=fake.random_number(digits=4),
                status=fake.random_element(elements=('Pending', 'Shipped', 'Delivered', 'Cancelled')),
                order_id=fake.uuid4(),
                location=fake.address(),
                owner=sujan_user
            )

        # Create Employees
        for _ in range(5):
            Employee.objects.create(
                name=fake.name(),
                designation=fake.job(),
                country=fake.country(),
                hire_date=fake.date_this_decade(),
                reports_to=None,  # Adjust if you have specific reporting logic
                owner=sujan_user
            )

        # Create Messages
        for _ in range(10):
            Message.objects.create(
                sender=sujan_user,
                recipient=sujan_user,  # For simplicity, you can adjust this
                content=fake.text(),
                owner=sujan_user
            )

        # Create Tasks
        for _ in range(10):
            Task.objects.create(
                title=fake.sentence(),
                description=fake.text(),
                assigned_to=sujan_user,
                due_date=fake.date_this_year(),
                owner=sujan_user
            )

        # Create Notifications
        for _ in range(10):
            Notification.objects.create(
                user=sujan_user,
                message=fake.sentence(),
                read=fake.boolean(),
                owner=sujan_user
            )

        # Create Calendar Events
        for _ in range(5):
            start_date = fake.date_time_this_year(tzinfo=datetime.timezone.utc)  # Use timezone-aware datetimes
            CalendarEvent.objects.create(
                title=fake.sentence(),
                description=fake.text(),
                start_date=start_date,
                end_date=start_date + datetime.timedelta(hours=2),
                owner=sujan_user
            )

        # Create Customer Insights
        for _ in range(10):
            CustomerInsightData.objects.create(
                customer_name=fake.name(),
                total_spent=fake.random_number(digits=5, fix_len=True),
                last_purchase_date=fake.date_this_year(),
                feedback=fake.text(),
                recommendations=fake.text(),
                owner=sujan_user
            )

        # Create Inventory Items
        for _ in range(10):
            InventoryItem.objects.create(
                item_name=fake.word(),
                quantity=fake.random_number(digits=3),
                category=fake.word(),
                owner=sujan_user
            )

        # Create Inventory Transactions
        for _ in range(10):
            item = InventoryItem.objects.order_by('?').first()
            InventoryTransaction.objects.create(
                item=item,
                transaction_type=fake.random_element(elements=('In', 'Out')),
                quantity=fake.random_number(digits=2),
                transaction_date=fake.date_this_year(),
                owner=sujan_user
            )

        # Create Products (additional model)
        for _ in range(10):
            Products.objects.create(
                name=fake.word(),
                description=fake.text(),
                price=fake.random_number(digits=5, fix_len=True),
                image=fake.file_path(extension='jpg'),
                owner=sujan_user
            )

        self.stdout.write(self.style.SUCCESS("Dummy data created successfully!"))
