# Generated by Django 4.2.6 on 2023-10-23 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stroke_prediction', '0005_remove_observation_bmi_remove_observation_gender_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='observation',
            name='avg_glucose_level',
            field=models.FloatField(),
        ),
    ]
