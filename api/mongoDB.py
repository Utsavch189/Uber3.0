
from asyncio.windows_events import NULL
from http import client
import pymongo


client = pymongo.MongoClient("mongodb://localhost:27017")

class DB:
    def __init__(self,db,col):
        self.db=db
        self.col=col
        

    def insert_drivers(self,data):

        db=client[f'{self.db}']
        col = db[f'{self.col}']

        col.insert_one(data)

    def prev_trip(self,ac,name):
        db=client[f'{self.db}']
        col = db[f'{self.col}']
       
        data={"name":name,"acc":ac}
       
        res=col.find(data,{"_id":0})

        
        return res

    def insert_riders(self,data):
        db=client[f'{self.db}']
        col = db[f'{self.col}']

        col.insert_one(data)

    def find_driver(self,ac,name):
        db=client[f'{self.db}']
        col = db[f'{self.col}']
        data={"name":name,"acc":ac}
        user=col.find_one(data,{"_id":0})
        return user

    def find_rider(self,ac,name):
        db=client[f'{self.db}']
        col = db[f'{self.col}']
        data={"name":name,"acc":ac}
        user=col.find_one(data,{"_id":0})
        return user

    def insert_prevTrips(self,data):
        db=client[f'{self.db}']
        col = db[f'{self.col}']

        col.insert_one(data)

    def get_coords(self):
        db=client[f'{self.db}']
        col = db[f'{self.col}']

        return col.find()

    def driver(self,ac):
        db=client[f'{self.db}']
        col = db[f'{self.col}']
        data={"acc":ac}
        user=col.find_one(data,{"_id":0})
        return user

    def add_trip(self,data):
         db=client[f'{self.db}']
         col = db[f'{self.col}']
         col.insert_one(data)

    def add_driverPos(self,ac,lat,lon):
        db=client[f'{self.db}']
        col = db[f'{self.col}']
        q={"acc":ac}
        f=col.find_one(q)
        if(f==None):
            data={"acc":ac,"lat":float(lat),"lon":float(lon)}
            col.insert_one(data)
        else:
            qq={"$set":{
                "lat":float(lat),
                "lon":float(lon)
            }}
            col.update_one(q,qq)

    def add_booking(self,data):
        db=client[f'{self.db}']
        col = db[f'{self.col}']
        col.insert_one(data)

    def remove_booking(self,driverac,userac):
        db=client[f'{self.db}']
        col = db[f'{self.col}']
        f={"driverac":driverac,"booked":0,"userac":userac}
        col.delete_one(f)

    def get_booking(self,ac):
        db=client[f'{self.db}']
        col = db[f'{self.col}']
        f={"driverac":ac,"booked":0}
        c=col.find(f)
        return c

    def accept(self,_id):
        db=client[f'{self.db}']
        col = db[f'{self.col}']
        f={"_id":_id,"booked":0}
        c={"$set":{"booked":1}}
        col.update_one(f,c)

    def reject(self,_id):
        db=client[f'{self.db}']
        col = db[f'{self.col}']
        f={"_id":_id,"booked":0}
        
        col.delete_one(f)

    def accept_or_reject(self,dac,uac):
        db=client[f'{self.db}']
        col = db[f'{self.col}']
        f={"driverac":dac,"userac":uac}
        c=col.find_one(f,{"booked":1})
        if c:
            if c['booked']==0:
                return 'pending'
            elif c['booked']==1:
                return 'accepted'
            else:
                return NULL
        else:
            return "reject"
        
   


        



