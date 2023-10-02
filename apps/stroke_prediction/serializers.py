from .models import Observation
from rest_framework.serializers import ModelSerializer


class StrokeSerializer(ModelSerializer):
    class Meta:
        model = Observation
        fields = ['gender', 'age', 'hypertension', 'heart_disease', 
                  'ever_married', 'work_type', 'residence_type', 'avg_glucose_level', 
                  'bmi', 'smoking_status', 'stroke']
