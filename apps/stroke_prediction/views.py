from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import StrokeSerializer
from .models import Observation
from rest_framework.response import Response

import pandas as pd
import numpy as np
# load pickle locally and remotely
from urllib.request import urlopen
from sklearn.externals import joblib
# turn model prediction to proper JSON HTTP response
from django.http import JsonResponse
# read environmental variables
import os

model = None
if os.environ['PRODUCTION'] == "True":
    model = joblib.load(urlopen(os.environ['MODEL_URL']))
    print("Remote Model Successfully Loaded")
else:
    model = pickle.load(open('../model_stroke.pkl', 'rb'))
    print('Local Model loaded')
class StrokeView(APIView):
    serializer_class = StrokeSerializer

    def get(self, request):
        output = [{
                #    "gender": output.gender,
                   "age": output.age,
                   "hypertension": output.hypertension,
                   "heart_disease": output.heart_disease,
                   "ever_married": output.ever_married,
                #    "work_type": output.work_type,
                #    "residence_type": output.residence_type,
                   "avg_glucose_level": output.avg_glucose_level,
                #    "bmi": output.bmi,
                #    "smoking_status": output.smoking_status,
                   }
                    for output in Observation.objects.all()]
        return Response(output)
    

    def post(self, request):
        serializer = StrokeSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            form = serializer.data
            userform_data = {
                'age': [int(form['age'])],
                'hypertension': [int(form['hypertension'])],
                'heart_disease':[int(form['heart_disease'])],
                'ever_married':[int(form['ever_married'])],
                'avg_glucose_level':[float(form['avg_glucose_level'])]
            }
            print(userform_data)
            user_input_df = pd.DataFrame.from_dict(userform_data)
            
            print(user_input_df)
            # serializer.save()
            prediction = int(model.predict(user_input_df))
            print(f'PREDICTION:{prediction}')
            return JsonResponse({'prediction': prediction}, status=200)
        