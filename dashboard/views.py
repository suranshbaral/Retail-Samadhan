from rest_framework import viewsets, permissions

from rest_framework.permissions import IsAuthenticated
from .models import CustomerData, Product, Sale, Customer, Order, Employee, Message, Task, Notification, CalendarEvent, CustomerInsightData, InventoryItem, InventoryTransaction, Products, Inventory
from .serializers import CustomerDataSerializer, ProductSerializer, SaleSerializer, CustomerSerializer, OrderSerializer, EmployeeSerializer, MessageSerializer, TaskSerializer, NotificationSerializer, CalendarEventSerializer, CustomerInsightDataSerializer, InventoryItemSerializer, InventoryTransactionSerializer, ProductsSerializer, InventorySerializer
from rest_framework.response import Response

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return Product.objects.filter(owner=self.request.user)

class SaleViewSet(viewsets.ModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return Sale.objects.filter(owner=self.request.user)

class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return Customer.objects.filter(owner=self.request.user)

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return Order.objects.filter(owner=self.request.user)

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return Employee.objects.filter(owner=self.request.user)

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return Message.objects.filter(owner=self.request.user)

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return Task.objects.filter(owner=self.request.user)

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return Notification.objects.filter(owner=self.request.user)

class CalendarEventViewSet(viewsets.ModelViewSet):
    queryset = CalendarEvent.objects.all()
    serializer_class = CalendarEventSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return CalendarEvent.objects.filter(owner=self.request.user)

class CustomerInsightDataViewSet(viewsets.ModelViewSet):
    queryset = CustomerInsightData.objects.all()
    serializer_class = CustomerInsightDataSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return CustomerInsightData.objects.filter(owner=self.request.user)

class InventoryItemViewSet(viewsets.ModelViewSet):
    queryset = InventoryItem.objects.all()
    serializer_class = InventoryItemSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return InventoryItem.objects.filter(owner=self.request.user)

class InventoryTransactionViewSet(viewsets.ModelViewSet):
    queryset = InventoryTransaction.objects.all()
    serializer_class = InventoryTransactionSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return InventoryTransaction.objects.filter(owner=self.request.user)

class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    def get_queryset(self):
        return Products.objects.filter(owner=self.request.user)

class InventoryViewSet(viewsets.ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)  # Save the owner with the current user

    def get_queryset(self):
        return Inventory.objects.filter(owner=self.request.user)
    
class CustomerDataViewSet(viewsets.ModelViewSet):
    queryset = CustomerData.objects.all()
    serializer_class = CustomerDataSerializer
    permission_classes = [permissions.IsAuthenticated]  # Example permission (customize as needed)

    def list(self, request, *args, **kwargs):
        # Customize list method to only show objects owned by the current user
        queryset = self.queryset.filter(owner=request.user)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        # Automatically set owner to the current authenticated user
        serializer.save(owner=self.request.user)
