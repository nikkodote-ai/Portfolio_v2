# Generated by Django 4.2.6 on 2023-10-22 03:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stroke_prediction', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='observation',
            name='age',
            field=models.IntegerField(default=15),
            preserve_default=False,
        ),
    ]