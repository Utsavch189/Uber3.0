import React,{useState,useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import '../Styles/pickup.css';
import {quote_plus} from '../Functions/UrlQuote';
import { url } from '../Functions/baseurl';
import CarList from '../Rider/CarList';
import Dist from '../Functions/CoordsDist';


mapboxgl.accessToken="pk.eyJ1IjoicmV2YSIsImEiOiJjaW1kOGNvbmgwMDR5dHpra253aDM5cWtwIn0.YbIIl9U4E5OQ2YV4QWRdbQ"
const state=quote_plus(',West Bengal')

export default function Map({signresult,accholder}) {

  const[fromDest,setFromDest]=useState('');
  const[toDest,setToDest]=useState('');
  const[response,setResponse]=useState(false);

  const[url1,setUrl1]=useState('');
  const[url2,setUrl2]=useState('');
  
  const[startLat,setStartLat]=useState(null);
  const[startLon,setStartLon]=useState(null);
  const[endLat,setEndLat]=useState(null);
  const[endLon,setEndLon]=useState(null);
  const[distance,setDistance]=useState(null);

  const[location,setLocation]=useState(false);
  const[div,setDiv]=useState(null);

  const[nearbyCar,setNearbyCar]=useState([])

  console.log(signresult)


  

  const jump=()=>{
    if(url1!=="" && url2!==""){
      setResponse(true);
    
   

      fetch(url1)
        .then(res => res.json())
        .then(data => {
          setStartLat(data[0]['lat'])
          setStartLon(data[0]['lon'])
        })
        

        
      fetch(url2)
      .then(res => res.json())
      .then(data => {
        setEndLat(data[0]['lat'])
        setEndLon(data[0]['lon'])
        setResponse(false)
      })
      .catch(err=>console.log(err))

  }
  }

if(startLat && endLat){

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
    center: [startLon, startLat],
    zoom: 9,
  })
  const marker1 = new mapboxgl.Marker({color:"black"})
  .setLngLat([startLon, startLat])
  .addTo(map);

  const marker2 = new mapboxgl.Marker({color:"black"})
  .setLngLat([endLon, endLat])
  .addTo(map);
  
  map.on('load', function () {

    map.addLayer({
        "id": "route",
        "type": "line",

        "source": {
            "type": "geojson",
            "data": {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                      [startLon,startLat],
                      [endLon, endLat]
                        
                    ]
                }
            }
        }
    });
    
});


}

const nearby=()=>{
  fetch(`${url}/nearby`, {
    method: 'POST',
   
    headers: {
        "X-CSRFToken": '{{csrf_token}}',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        'lat':startLat,
        'lon':startLon
    }),
})
.then(res=>res.json())
.then(data=>{
  setNearbyCar(data)
})
}


  const allow=()=>{
    navigator.geolocation.getCurrentPosition(data => {
      if(data){
        setLocation(true);
      }

  }, error => console.log(error), {
      enableHIghAccuracy: true
  })

  }
  


  useEffect(()=>{
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [88.2636, 22.5958],
      zoom: 9,
    })
    setDiv(window.screen.width);
    
  },[])
    
    
  

  return (<>
  {div<=540 ?(<>

    <div  id='map' className='map' data-aos="zoom-in">

  </div>
  <div className="container pickup"style={{"marginTop":"150px"}}>
  <div className="container-fluid inputss my-3">
    {
      response?(<div class="spinner-grow" role="status">
      
    </div>):(<></>)
    }
   
    <div classname="form-group">
      <input type="text" className="form-control input" placeholder="Enter Pickup Location" value={fromDest} onChange={(e)=>{
        setFromDest(e.target.value)
        setUrl1(`https://nominatim.openstreetmap.org/search/${quote_plus(e.target.value)}?format=json`)
        }}/>
    </div>
    <div classname="form-group my-3">
      <input type="text" className="form-control input my-2" placeholder="Enter Final Location" value={toDest} onChange={(e)=>{
        setToDest(e.target.value)
        setUrl2(`https://nominatim.openstreetmap.org/search/${quote_plus(e.target.value)}?format=json`)
        }}/>
    </div>
    <div className="container-fluid my-2" style={{"height":"50px","display":"flex","-webkit-flex-direction":"column","-ms-flex-direction":"column","flex-direction":"column","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center","-webkit-box-pack":"center","-webkit-justify-content":"center","-ms-flex-pack":"center","justify-content":"center"}}>
      <button className="btn btn-dark" onClick={jump}>Jump to Destination <i className="	fa fa-send-o" /></button>
    </div>
    <div className="container-fluid" style={{"height":"50px","display":"flex","-webkit-flex-direction":"column","-ms-flex-direction":"column","flex-direction":"column","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center","-webkit-box-pack":"center","-webkit-justify-content":"center","-ms-flex-pack":"center","justify-content":"center"}}>
      
        <button className="btn btn-dark" onClick={nearby}>Search Nearby Services<i className="fa fa-eye mx-4" /></button>
      
    </div>
    {!response?(
    <h6 className="text-center my-4">Nearby Services</h6>):(<></>)}
  </div>
  <div className="container-fluid car-list">
  {nearbyCar.map((i,k)=>
  <CarList data={i} key={k} car={i['data']['car']} coordist={Dist(startLat,startLon,endLat,endLon)} from={fromDest} to={toDest}/>
)
}
</div>
  
  </div>
  


  </>):(<>
    <div  id='map' className='map' data-aos="zoom-in">



<div className="container pickup" >
  <div className="container-fluid inputss my-3">
    {
      response?(<div class="spinner-grow" role="status">
      
    </div>):(<></>)
    }
  
    <div classname="form-group">
      <input type="text" className="form-control input" placeholder="Enter Pickup Location" value={fromDest} onChange={(e)=>{
       
       setFromDest(e.target.value)
        
        setUrl1(`https://nominatim.openstreetmap.org/search/${quote_plus((e.target.value),(state))}?format=json`)
        }}
        
        />
    </div>
    <div classname="form-group my-3">
      <input type="text" className="form-control input my-2" placeholder="Enter Final Location" value={toDest} onChange={(e)=>{
        setToDest(e.target.value)
        setUrl2(`https://nominatim.openstreetmap.org/search/${quote_plus((e.target.value),(state))}?format=json`)
        }}/>
    </div>
    <div className="container-fluid my-2" style={{"height":"50px","display":"flex","-webkit-flex-direction":"column","-ms-flex-direction":"column","flex-direction":"column","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center","-webkit-box-pack":"center","-webkit-justify-content":"center","-ms-flex-pack":"center","justify-content":"center"}}>
      <button className="btn btn-dark" onClick={jump}>Jump to Destination <i className="	fa fa-send-o" /></button>
    </div>
    <div className="container-fluid" style={{"height":"50px","display":"flex","-webkit-flex-direction":"column","-ms-flex-direction":"column","flex-direction":"column","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center","-webkit-box-pack":"center","-webkit-justify-content":"center","-ms-flex-pack":"center","justify-content":"center"}}>
    
        <button className="btn btn-dark" onClick={nearby}>Search Nearby Services<i className="fa fa-eye mx-4" /></button>
      
    </div>
    {!response?(
    <h6 className="text-center my-4">Nearby Services</h6>):(<></>)}
  </div>
  <div className="container-fluid car-list">
  {nearbyCar.map((i,k)=>
  <CarList data={i} key={k} coordist={Dist(startLat,startLon,endLat,endLon)} from={fromDest} to={toDest}/>
)
}
</div>
    
  </div>
  
</div>


  
  </>)}

</>
  )
}
