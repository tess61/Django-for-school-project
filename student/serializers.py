from rest_framework import serializers
from .models import stud


class studentSerializer(serializers.ModelSerializer):
    class Meta:
        model = stud
        fields = '__all__'
