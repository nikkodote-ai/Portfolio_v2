from django.db import models

# Create your models here.
class Observation(models.Model):
    # removed columns that don't predict stroke
    age = models.IntegerField()
    # gender = models.CharField(max_length=100)
    hypertension = models.BooleanField()
    heart_disease = models.BooleanField()
    ever_married = models.BooleanField()
    # work_type = models.CharField(max_length=100)    
    # residence_type = models.BooleanField()
    # smoking_status = models.CharField(max_length=100)
    avg_glucose_level = models.FloatField()
    # bmi = models.CharField(max_length=100)
