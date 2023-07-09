from django.urls import path
from .views import *
urlpatterns = [
    path('', store, name="store"),
	path('cart/', cart, name="cart"),
	path('checkout/', checkout, name="checkout"),
	path('update_item/',UpdateItem,name="update_item"),
	path('cart/update_item/', UpdateItem, name="update_item2"),
	path('process_order/', processOrder, name="process_order"),
	path('checkout/process_order/', processOrder, name="process_order2"),

]