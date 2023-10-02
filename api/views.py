from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import ProjectSerializer
# Create your views here.
from .models import Project
from rest_framework.response import Response

class ProjectView(APIView):
    serializer_class = ProjectSerializer
    def get(self, request):
        output = [{"title" : output.title, 
                   "subtitle" : output.subtitle,
                   "description" : output.description,
                   "image" : output.image,
                   "background_image" : output.background_image,
                   "url" : output.url,
                   "created_at" : output.created_at,
                    "modified_at" : output.modified_at}
                     for output in Project.objects.all()]
        return Response(output)
    

    def post(self, request):
        serializer = ProjectSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)