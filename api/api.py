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
  
    
    print(await request.json())
   
    return {"status":"ok"}

@app.get("/get")
def get():
    r=[{
        "id":1
    }]
   
    return r