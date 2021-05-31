import numpy as np
import tensorflow as tf
import pandas as pd

train_path = "gs://capstone-b21-cap0156-backend/text-sentiment-dataset/train.csv"
alay_path = "gs://capstone-b21-cap0156-backend/text-sentiment-dataset/new_kamusalay.csv"

train = pd.read_csv(train_path, encoding='latin-1')
alay_dict = pd.read_csv(alay_path, encoding='latin-1', header=None)
alay_dict = alay_dict.rename(columns={0: 'original', 
                                      1: 'replacement'})

# =====================================================
#                       PREPROCESS
# =====================================================

import re
def lowercase(text):
    return text.lower()

def remove_unnecessary_char(text):
    text = re.sub('\n',' ',text)    # Remove every '\n'
    text = re.sub('rt',' ',text)    # Remove every retweet symbol
    text = re.sub('user',' ',text)  # Remove every username
    text = re.sub('((www\.[^\s]+)|(https?://[^\s]+)|(http?://[^\s]+))',' ',text) # Remove every URL
    text = re.sub('  +', ' ', text) # Remove extra spaces
    return text
    
def remove_nonaplhanumeric(text):
    text = re.sub('[^0-9a-zA-Z]+', ' ', text) 
    return text

alay_dict_map = dict(zip(alay_dict['original'], alay_dict['replacement']))
def normalize_alay(text):
    return ' '.join([alay_dict_map[word] if word in alay_dict_map else word for word in text.split(' ')])

def preprocess(text):
    text = lowercase(text) # 1
    text = remove_nonaplhanumeric(text) # 2
    text = remove_unnecessary_char(text) # 2
    text = normalize_alay(text) # 3
    return text

train['Comment'] = train['Comment'].apply(preprocess)

decode_map = {0: "NEGATIF", 1: "POSITIF"}
def decode_sentiment(label):
    return decode_map[int(label)]

# ======================================
#               TOKENIZER
# ======================================

from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
SEQUENCE_LENGTH=300
tokenizer = Tokenizer(num_words=2000)
tokenizer.fit_on_texts(train.Comment)
import json

# =========================================
#                   PREDICT
# =========================================

def comment_to_instances(text):
    # Tokenize text
    x_test = pad_sequences(tokenizer.texts_to_sequences([text]), maxlen=SEQUENCE_LENGTH)
    json_string = json.dumps(x_test[0].tolist())
    return json.loads(json_string)

import googleapiclient.discovery
from google.api_core.client_options import ClientOptions
import os
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "../capstone-b21-cap0156-4fa21fe5e78d.json" # change for your GCP key

def predict_json(project, region, model, instances, version=None):
    """Send json data to a deployed model for prediction.

    Args:
        project (str): project where the Cloud ML Engine Model is deployed.
        region (str): regional endpoint to use; set to None for ml.googleapis.com
        model (str): model name.
        instances ([Mapping[str: Any]]): Keys should be the names of Tensors
            your deployed model expects as inputs. Values should be datatypes
            convertible to Tensors, or (potentially nested) lists of datatypes
            convertible to tensors.
        version: str, version of the model to target.
    Returns:
        Mapping[str: any]: dictionary of prediction results defined by the
            model.
    """
    # Create the ML Engine service object.
    # To authenticate set the environment variable
    # GOOGLE_APPLICATION_CREDENTIALS="../capstone-b21-cap0156-4fa21fe5e78d.json"
    prefix = "{}-ml".format(region) if region else "ml"
    api_endpoint = "https://{}.googleapis.com".format(prefix)
    client_options = ClientOptions(api_endpoint=api_endpoint)
    service = googleapiclient.discovery.build(
        'ml', 'v1', client_options=client_options)
    name = 'projects/{}/models/{}'.format(project, model)

    if version is not None:
        name += '/versions/{}'.format(version)

    response = service.projects().predict(
        name=name,
        body={'instances': [instances]}
    ).execute()

    if 'error' in response:
        raise RuntimeError(response['error'])

    return response['predictions']

def decode_sentiment(score):
    return "NEGATIVE" if score < 0.1 else "POSITIVE"

PROJECT = "capstone-b21-cap0156" # GCP project ID
REGION = "asia-southeast1" # GCP region (where your model is hosted)
MODEL = "text_sentiment"

def fetch_sentiment(comment):
    instances = comment_to_instances(comment)
    score = predict_json(PROJECT,REGION,MODEL,instances)
    return decode_sentiment(score[0][0])

def predict(request):
    request_json = request.get_json(silent=True)
    request_args = request.args

    status = "INVALID"
    if request_json and 'comment' in request_json:
        comment = request_json['comment']
        status = fetch_sentiment(comment)
    elif request_args and 'comment' in request_args:
        comment = request_args['comment']
        status = fetch_sentiment(comment)
    return {
        "status": status
    }