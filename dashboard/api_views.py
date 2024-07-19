from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from .serializers import (
    ProductSerializer, SaleSerializer, CustomerSerializer,
    OrderSerializer, EmployeeSerializer, MessageSerializer,
    NotificationSerializer, TaskSerializer
)
from .models import Product, Sale, Customer, Order, Employee, Message, Notification, Task

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def dashboard_api(request):
    products = Product.objects.all()
    sales = Sale.objects.all()
    customers = Customer.objects.all()
    orders = Order.objects.all()
    employees = Employee.objects.all()
    messages = Message.objects.all()
    notifications = Notification.objects.all()
    tasks = Task.objects.all()

    # Pagination for each queryset (example using PageNumberPagination)
    paginator = PageNumberPagination()
    products_page = paginator.paginate_queryset(products, request)
    sales_page = paginator.paginate_queryset(sales, request)
    customers_page = paginator.paginate_queryset(customers, request)
    orders_page = paginator.paginate_queryset(orders, request)
    employees_page = paginator.paginate_queryset(employees, request)
    messages_page = paginator.paginate_queryset(messages, request)
    notifications_page = paginator.paginate_queryset(notifications, request)
    tasks_page = paginator.paginate_queryset(tasks, request)

    # Serialize paginated data
    product_serializer = ProductSerializer(products_page, many=True)
    sale_serializer = SaleSerializer(sales_page, many=True)
    customer_serializer = CustomerSerializer(customers_page, many=True)
    order_serializer = OrderSerializer(orders_page, many=True)
    employee_serializer = EmployeeSerializer(employees_page, many=True)
    message_serializer = MessageSerializer(messages_page, many=True)
    notification_serializer = NotificationSerializer(notifications_page, many=True)
    task_serializer = TaskSerializer(tasks_page, many=True)

    data = {
        'products': product_serializer.data,
        'sales': sale_serializer.data,
        'customers': customer_serializer.data,
        'orders': order_serializer.data,
        'employees': employee_serializer.data,
        'messages': message_serializer.data,
        'notifications': notification_serializer.data,
        'tasks': task_serializer.data,
    }

    return Response(data)
