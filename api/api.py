from codecs import utf_8_decode
from fastapi import FastAPI,Request
from fastapi.middleware.cors import CORSMiddleware
from Givelatlong import Coord
import json

app=FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/latlong")
async def give(request:Request):
  
    
    req=await request.json()
    
    fromaddress=str(req['fromaddress'])
    toaddress=str(req['toaddress'])
    obj=Coord(fromaddress,toaddress)
    dictt=[
        {"fromlat":obj.get()[0],
        "fromlon":obj.get()[1],
        "tolat":obj.get()[2],
        "tolon":obj.get()[3],
        "distance":obj.get()[4]
        }
    ]
    
   
    return dictt
