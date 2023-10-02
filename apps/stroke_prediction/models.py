from django.db import models

# Create your models here.
class Observation(models.Model):
    gender = models.CharField(max_length=100)
    age = models,models.IntegerField()
    hypertension = models.BooleanField()
    heart_disease = models.BooleanField()
    ever_married = models.BooleanField()
    work_type = models.CharField(max_length=100)    
    residence_type = models.CharField(max_length=100)
    avg_glucose_level = models.CharField(max_length=100)
    bmi = models.CharField(max_length=100)
    smoking_status = models.CharField(max_length=100)
    stroke = models.CharField(max_length=100)
