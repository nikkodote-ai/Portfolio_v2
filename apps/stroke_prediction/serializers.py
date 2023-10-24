from .models import Observation
from rest_framework.serializers import ModelSerializer


class StrokeSerializer(ModelSerializer):
    class Meta:
        model = Observation
        fields = ['age', 'hypertension', 'heart_disease', 'ever_married', 'avg_glucose_level' ]
