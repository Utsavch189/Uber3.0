
from http import client
import pymongo


client = pymongo.MongoClient("mongodb://localhost:27017")

class DB:
    def __init__(self,db,col):
        self.db=db
        self.col=col
        

    def get(self):
        db=client[f'{self.db}']
        col = db[f'{self.col}']
        
        return col.find()

    def insert(self,data):

        db=client[f'{self.db}']
        col = db[f'{self.col}']

        col.insert_one(data)



