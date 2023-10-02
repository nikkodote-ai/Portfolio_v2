from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100)
    description = models.CharField(max_length=250)
    image = models.CharField(max_length=1000)
    background_image = models.CharField(max_length=1000)
    url = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
