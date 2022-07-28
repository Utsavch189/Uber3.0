from matplotlib.pyplot import cla
import requests
import urllib.parse







class Coord:
    def __init__(self,address):
        self.address=address
    def get(self):
        url = 'https://nominatim.openstreetmap.org/search/' + urllib.parse.quote(self.address) +'?format=json'
        response = requests.get(url).json()
        lat=float(response[0]["lat"])
        lon=float(response[0]["lon"])
        return lat,lon
        
a=Coord('Guptipara,West Bengal')
print(a.get()[0])