import geopy.distance
from mongoDB import DB

def formula(x1,y1,x2,y2):
    c1=(x1,y1)
    c2=(x2,y2)
    res=geopy.distance.geodesic(c1,c2).km
    return res

def distance ():
    ranges = 5
    res=[]
    a=DB('uber','coords')
    for i in a.get():
        a=formula(23.0980,88.4622 ,i['lat'],i['lon'])
        print(a)

        if (a<=ranges):
            res.append({'lat':i['lat'],'lon':i['lon']})
        return (res)


print(distance())