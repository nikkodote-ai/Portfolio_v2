from .models import Project
from rest_framework.serializers import ModelSerializer

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ['title', 'subtitle', 'description', 'image', 'background_image', 'url', 'created_at', 'modified_at']