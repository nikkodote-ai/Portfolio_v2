# Generated by Django 4.2.6 on 2023-10-22 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stroke_prediction', '0003_alter_observation_stroke'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='observation',
            name='stroke',
        ),
        migrations.AlterField(
            model_name='observation',
            name='residence_type',
            field=models.BooleanField(),
        ),
    ]
