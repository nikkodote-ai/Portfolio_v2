from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import StrokeSerializer
from .models import Observation
from rest_framework.response import Response

class StrokeView(APIView):
    serializer_class = StrokeSerializer
    def get(self, request):
        output = [{"gender": output.gender,
                   "age": output.age,
                   "hypertension": output.hypertension,
                   "heart_disease": output.heart_disease,
                   "ever_married": output.ever_married,
                   "work_type": output.work_type,
                   "residence_type": output.residence_type,
                   "avg_glucose_level": output.avg_glucose_level,
                   "bmi": output.bmi,
                   "smoking_status": output.smoking_status,
                   "stroke": output.stroke}
                    for output in Observation.objects.all()]
        return Response(output)
    

    def post(self, request):
        serializer = ProjectSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)