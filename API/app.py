from email import message
import pickle
from unittest import result
import pandas as pd
import numpy as np
from flask import Flask, jsonify,request
import xgboost
from sklearn.preprocessing import StandardScaler

app=Flask(__name__)

@app.route('/')
def index():
    result={
        "message":"api running"
    }
    return jsonify(result)



#STOMACH
@app.route('/stomach',methods=['POST'])
def detection1():
    model=pickle.load(open("stomach.pkl",'rb'))
    std=StandardScaler()
    df=pd.read_csv("stomach1.csv")
    X=df.drop(columns=["prognosis","Unnamed: 0","Unnamed: 133"])
    X=std.fit(X)
    req=request.get_json()
    if req==None:
        result={
        "messgae":"Empty Object"
        }
        return jsonify(result)
    feat=req["feat"]
    feat=np.array(feat)
    feat=std.transform(feat.reshape(1,-1))
    result=model.predict(feat)[0]
    result
    result={
        "answer":result,
        "messgae":"Running"
    }
    return jsonify(result)


#HEPATITIS
@app.route('/hepatitis',methods=['POST'])
def detection2():
    model=pickle.load(open("hepamodel.pkl",'rb'))
    std=StandardScaler()
    df=pd.read_csv("input_hepa.csv")
    df=df.drop(columns=["Unnamed: 0"])
    df=std.fit(df)
    req=request.get_json()
    if req==None:
        result={
        "messgae":"Empty Object"
        }
        return jsonify(result)
    feat=req["feat"]
    feat=np.array(feat)
    feat=std.transform(feat.reshape(1,-1))
    result=model.predict(feat)[0]
    result={
        "answer":result,
        "messgae":"Running"
    }
    return jsonify(result)


#SKIN
@app.route('/skin',methods=['POST'])
def detection():
    model=pickle.load(open("skinmodel.pkl",'rb'))
    std=StandardScaler()
    df=pd.read_csv("input_skin.csv")
    df=df.drop(columns=["Unnamed: 0"])
    df=std.fit(df)
    req=request.get_json()
    if req==None:
        result={
        "messgae":"Empty Object"
        }
        return jsonify(result)
    feat=req["feat"]
    feat=np.array(feat)
    feat=std.transform(feat.reshape(1,-1))
    result=model.predict(feat)[0]
    result={
        "answer":result,
        "messgae":"Running"
    }
    return jsonify(result)


#MEDICAL INSURNACE
@app.route('/medicalinsurance',methods=['POST'])
def medicalinsurance():
    df_ins=pd.read_csv("df.csv")
    std=StandardScaler()
    df_med=std.fit(df_ins)
    model=pickle.load(open('model.pkl','rb'))
    req=request.json
    if req==None:
        result={
        "messgae":"Empty Object"
        }
        return jsonify(result)
    feat=[]
    feat.append(req["age"])
    if req["sex"]=="male":
        feat.append(1)
    else:
        feat.append(0)
    
    
    feat.append(req["bmi"])
    feat.append(req["children"])


    if req["smoker"]=="yes":
        feat.append(1)
    else:
        feat.append(0)

    feat=np.array(feat)
    feat=std.transform(feat.reshape(1,-1))
    print(feat)
    ans=model.predict(feat)
    ans=ans[0]
    ans=round(ans,0)
    result={
        "answer":ans,
        "messgae":"Running"
    }
    return jsonify(result)



# #BREASTCANCER
# @app.route('/breastcancerprediction',methods=['POST'])
# def breastcancerprediction():
#     model = load_model('ultrasound.h5')
#     img=cv.imread("1benignbc.png")
#     print(img.shape)
#     img = img.reshape(1,224,260,3)
#     # req=request.get_json()
#     answer=model.predict(img)
#     print(answer)
#     answer=answer[0]
#     ind=np.argmax(answer)
#     str=""
#     if ind==0:
#         str="Benign-Non Cancerous"
#     elif ind==1:
#         str="Malignant-Cancerous"
#     else:
#         str="Normal"
#     print(answer)
#     result={
#         "answer":str
#     }
#     return jsonify(result)


if __name__ == '__main__':
    app.run(debug=True)
