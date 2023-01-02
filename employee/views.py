from django.shortcuts import render
from rest_framework import generics
from .models import emp
from .serializers import employeeSerializers

# Create your views here.


class listCreateAPI(generics.ListCreateAPIView):
    queryset = emp.objects.all()
    serializer_class = employeeSerializers


class updateDeleteAPI(generics.RetrieveUpdateDestroyAPIView):
    queryset = emp.objects.all()
    serializer_class = employeeSerializers
