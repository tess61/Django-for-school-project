from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import generics
from .models import teach
from .serializers import teacherSerializer

# Create your views here.


class listCreateAPI(generics.ListCreateAPIView):
    queryset = teach.objects.all()
    serializer_class = teacherSerializer


class updateDeleteAPI(generics.RetrieveUpdateDestroyAPIView):
    queryset = teach.objects.all()
    serializer_class = teacherSerializer
