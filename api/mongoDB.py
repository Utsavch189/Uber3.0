
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



