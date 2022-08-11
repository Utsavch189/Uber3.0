from codecs import utf_8_decode
from fastapi import FastAPI,Request,WebSocket
from fastapi.middleware.cors import CORSMiddleware
from Givelatlong import Coord
import json
from mongoDB import DB

app=FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/trips")
async def trips(request:Request):
    req=await request.json()
    ac=str(req['account'])
    print(ac)
    obj=DB('uber','prevtrips')
    data=obj.prev_trip(ac)
    trips=[]
    for i in data:
 
        trips.append(i)

    return trips



@app.post("/driver")
async def driver(request:Request):
      
    req=await request.json()
   

    name=str(req['name'])
    phone=str(req['phone'])
    email=str(req['email'])
    address=str(req['address'])
    exp=str(req['exp'])
    car=str(req['car'])
    acc=str(req['account'])

    data={
        "name":name,"phone":phone,"email":email,"address":address,"exp":exp,"car":car,"acc":acc
    }
    obj=DB('uber','drivers')
    obj.insert(data)
       
    return {"msg":"server is running","status":200}