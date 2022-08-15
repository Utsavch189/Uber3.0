from fastapi import FastAPI,Request
from fastapi.middleware.cors import CORSMiddleware
from CoordDist import distance
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


@app.post("/sign")
async def sign(request:Request):
    req=await request.json()
    ac=str(req['account'])
    name=str(req['name']) 
    rider_db=DB('uber','riders')
    driver_db=DB('uber','drivers')
    trip_db=DB('uber','prevtrips')

    rider_obj=rider_db.find_rider(ac,name)
    driver_obj=driver_db.find_driver(ac,name)
    trip_obj=trip_db.prev_trip(ac,name)

    user=[]
    
    res=[]
    
    if rider_obj!=None:       
        trip=[]     
        user.append(rider_obj)
        user.append({"type":"rider"})
        
        if trip_obj!=None:
            for i in trip_obj:
                print(i)
                trip.append(i)         
            res.append(user)
            res.append(trip)
            return res
        else:
            return user

    elif driver_obj!=None:
        
        user.append(driver_obj)
        user.append({"type":"driver"})
        return user

    
    else:        
        
        if(rider_obj!=None):
            datas={"name":name,"acc":ac}
            rider_db.insert_riders(datas)
            return {"msg":"created"}
            





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
    obj.insert_drivers(data)
       
    return {"msg":"server is running","status":200}



@app.post("/nearby")
async def nearby(request:Request):
      
    req=await request.json()
    lat=float(req['lat'])
    lon=float(req['lon'])
    a=distance(10,lat,lon)

    return a


@app.post("/addtrip")
async def nearby(request:Request):
      
    req=await request.json()

    froms=str(req['from'])
    to=str(req['to'])
    driver=str(req['driver'])
    car=str(req['car'])
    cost=str(req['cost'])
    accholder=str(req['accholder'])
    admin=str(req['admin'])
    date=str(req['date'])

    data={
        "from":froms,"to":to,"driver":driver,"car":car,"cost":cost,"date":date,"acc":accholder,"name":admin
    }

    a=DB('uber','prevtrips')
    a.add_trip(data)

    return {"msg":"added Successfully"}



@app.post("/updatecoords")
async def nearby(request:Request):
      
    req=await request.json()
    ac=str(req['acc'])
    lat=float(req['lat'])
    lon=float(req['lon'])

    a=DB('uber','drivers_pos')
    a.add_driverPos(ac,lat,lon)

    return {"msg":"updated Successfully"}