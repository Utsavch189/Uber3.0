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



@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message text was: {data}")



@app.post("/driver")
async def driver(request:Request):
      
    req=await request.json()
    print(req)

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