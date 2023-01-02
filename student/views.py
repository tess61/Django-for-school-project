from django.shortcuts import render
from rest_framework import generics
from .models import stud
from .serializers import studentSerializer

# Create your views here.


class listCreateAPI(generics.ListCreateAPIView):
    queryset = stud.objects.all()
    serializer_class = studentSerializer


class updateDeleteAPI(generics.RetrieveUpdateDestroyAPIView):
    queryset = stud.objects.all()
    serializer_class = studentSerializer
