import joblib
import os
import pandas as pd
from imblearn.over_sampling import SMOTE
from sklearn.model_selection import train_test_split
# model
from lightgbm import LGBMClassifier

# Data from Kaggle
df = pd.read_csv(os.environ['STROKE_DATASET'])

# NOT NEEDED. Only 5 columns were considered and the obs do not require one-hot coding
# def onehot_code(df, columns):
#     """Takes a dataframe and a list of columns that are to be onehot coded. Returns a dataframe"""
#     for column in columns:
#         one_hot = pd.get_dummies(df[[column]], prefix=column, prefix_sep="_")
#         df = pd.concat([df, one_hot], axis=1)
#         df.drop(column, axis=1, inplace=True)
#     return df


def preprocessing(df, target):
    """Takes a dataframe and target to preprocess the healthcare data.
    Returns X_train, X_test, y_train, y_test"""

    # replace to values to binary
    ##convert ever_married values to boolean so it's machine-interpretable
    df.ever_married.replace({'Yes': 1, 'No': 0}, inplace=True)


    #fill null values with median value; another option is imputation by KNNImputer
    # define X and y data
    X = df.drop([target, 'id'], axis=1)
    # Data analysis showed that only 5 columns were significant
    X = X[['age', 'hypertension', 'heart_disease','ever_married', 'avg_glucose_level']]
    X['age'] = X['age'].astype(int)
    X.fillna(X.median(), inplace=True)
    y = df[target]

   
    #split to training and test data before further processing
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, shuffle=True, random_state=0)

    #oversample training data using SMOTENC (mixed continuous and categorical data) due to class imbalance.
    #Not an ideal approach because we are introducing synthetic data to the test data which can introduce error
    smote = SMOTE()
    X_train_resampled, y_train_resampled =smote.fit_resample(X_train, y_train)
    X_test_resampled, y_test_resampled = smote.fit_resample(X_test, y_test)
    print("Data oversampled with SMOTENC.")

    print('Data pre-processing complete.')
    return  X_train_resampled, X_test_resampled, y_train_resampled, y_test_resampled
    

def predict(form_answers: list):
    return clf.predict(form_answers)


def make_pkl():
    # pickle.dump(clf, open('works/apps/stroke_prediction/model_stroke.pkl', 'wb'))
    joblib.dump(clf, 'model_stroke.pkl')

X_train_oversampled, X_test, y_train_oversampled, y_test= preprocessing(df, 'stroke')

# Random Forest Classifier performed best during pre-testing with accuracy of 0.969 and F-1 Score of 0.969
#note that this is on practice dataset and oversampled data
# During test: [ LightGBM Accuracy: 0.867   F1-Score: 0.854]
clf = LGBMClassifier()
print(X_train_oversampled)
# print(y_train_oversampled)
clf.fit(X_train_oversampled, y_train_oversampled)
print(f'MODEL_TRAINING PREDICTION: {clf.predict(X_test)}')
print('Model trained')
make_pkl()