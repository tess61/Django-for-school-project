from rest_framework import serializers
from .models import teach


class teacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = teach
        fields = '__all__'
