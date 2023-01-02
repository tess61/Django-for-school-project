from rest_framework import serializers
from .models import emp


class employeeSerializers(serializers.ModelSerializer):
    class Meta:
        model = emp
        fields = '__all__'
