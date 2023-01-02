from django.urls import path
from . import views

urlpatterns = [
    path('list-create', views.listCreateAPI.as_view()),
    path('update-delete/<int:pk>',
         views.updateDeleteAPI.as_view(), name='Update-delete'),
]
