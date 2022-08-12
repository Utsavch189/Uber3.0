import geopy.distance
from mongoDB import DB

def formula(x1,y1,x2,y2):
    c1=(x1,y1)
    c2=(x2,y2)
    res=geopy.distance.geodesic(c1,c2).km
    return res

def distance (ranges,lat,lon):
    
    res=[]
    a=DB('uber','drivers_pos')
    for i in a.get_coords():

        a=formula(lat,lon ,i['lat'],i['lon'])
 
        if (a<=ranges):
            res.append({'lat':i['lat'],'lon':i['lon'],'distance':a})
    return (res)


