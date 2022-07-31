from matplotlib.pyplot import cla
import requests
import urllib.parse







class Coord:
    def __init__(self,address1,address2):
        self.address1=address1
        self.address2=address2
    def get(self):
        url1 = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(self.address1) +'?format=json'
        response1 = requests.get(url1).json()
        lat1=float(response1[0]["lat"])
        lon1=float(response1[0]["lon"])

        url2 = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(self.address2) +'?format=json'
        response2 = requests.get(url2).json()
        lat2=float(response2[0]["lat"])
        lon2=float(response2[0]["lon"])
        
        return lat1,lon1,lat2,lon2
        
