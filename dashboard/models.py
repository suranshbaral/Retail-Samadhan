from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Product(models.Model):
    commodity = models.CharField(max_length=255)
    date = models.DateField()
    unit = models.CharField(max_length=50)
    minimum = models.FloatField()
    maximum = models.FloatField()
    average = models.FloatField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_products')

    def __str__(self):
        return self.commodity

class Sale(models.Model):
    commodity = models.CharField(max_length=255)
    date = models.DateField()
    unit = models.CharField(max_length=50)
    quantity_sold = models.FloatField()
    unit_price = models.FloatField()
    total_sales = models.FloatField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sales')

    def __str__(self):
        return self.commodity

class Customer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=50)  # Adjust max_length as needed
    address = models.TextField()
    earnings = models.FloatField(default=0.0)
    yearly_sales = models.FloatField(default=0.0)
    refunds = models.FloatField(default=0.0)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='customers')

    def __str__(self):
        return self.name

class Order(models.Model):
    image = models.ImageField(upload_to='orders/')
    item = models.CharField(max_length=255)
    customer_name = models.CharField(max_length=100)
    total_amount = models.FloatField()
    status = models.CharField(max_length=50)
    order_id = models.CharField(max_length=50, unique=True)
    location = models.CharField(max_length=255)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')

    def __str__(self):
        return self.order_id

class Employee(models.Model):
    name = models.CharField(max_length=100)
    designation = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    hire_date = models.DateField()
    reports_to = models.ForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='reportees')
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='employees')

    def __str__(self):
        return self.name

class Message(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_messages')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_messages')
    timestamp = models.DateTimeField(auto_now_add=True)
    content = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='messages')

    def __str__(self):
        return f'{self.sender} to {self.recipient}'

    class Meta:
        ordering = ['-timestamp']

class Task(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    assigned_to = models.ForeignKey(User, on_delete=models.CASCADE, related_name='assigned_tasks')
    due_date = models.DateField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_tasks')

    def __str__(self):
        return self.title

class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications_received')
    message = models.CharField(max_length=255)
    timestamp = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notifications_sent')

    def __str__(self):
        return self.message

class CalendarEvent(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='calendar_events')

    def __str__(self):
        return self.title

class CustomerInsightData(models.Model):
    customer_name = models.CharField(max_length=100)
    total_spent = models.DecimalField(max_digits=10, decimal_places=2)
    last_purchase_date = models.DateField()
    feedback = models.TextField()
    recommendations = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='customer_insights')

    def __str__(self):
        return self.customer_name

class InventoryItem(models.Model):
    item_name = models.CharField(max_length=255)
    quantity = models.IntegerField()
    category = models.CharField(max_length=100)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_inventory_items')

    def __str__(self):
        return self.item_name

class InventoryTransaction(models.Model):
    item = models.ForeignKey(InventoryItem, on_delete=models.CASCADE, related_name='transactions')
    transaction_type = models.CharField(max_length=50)  # In/Out
    quantity = models.IntegerField()
    transaction_date = models.DateField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='inventory_transactions')

    def __str__(self):
        return f"{self.item} - {self.transaction_type}"

class Products(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='products', blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_products_products')

    def __str__(self):
        return self.name

class Inventory(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=[('vegetable', 'Vegetable'), ('fruits', 'Fruits')])
    quantity = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_inventories')

    def __str__(self):
        return self.name

class CustomerData(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='customer_data')
    customer_id = models.IntegerField()
    gender = models.CharField(max_length=10)
    age = models.IntegerField()
    annual_income = models.FloatField()
    spending_score = models.FloatField()
    demand = models.FloatField()

    def __str__(self):
        return f"CustomerData {self.customer_id} - {self.owner.username}"
