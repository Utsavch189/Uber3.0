import React,{useState,useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import '../Styles/pickup.css';
import updateCoords from '../Functions/updateDriverPos';
import {url} from '../Functions/baseurl';
import Success from '../Components/Success'



mapboxgl.accessToken="pk.eyJ1IjoicmV2YSIsImEiOiJjaW1kOGNvbmgwMDR5dHpra253aDM5cWtwIn0.YbIIl9U4E5OQ2YV4QWRdbQ"


export default function DriverMap() {

  const[div,setDiv]=useState(null);
  const[myLat,setMyLat]=useState(0);
  const[myLon,setMyLon]=useState(0);
  const[passReq,setPassReq]=useState([]);
  const[hasPass,setHasPass]=useState(false)
  const[startLat,setStartLat]=useState(null);
  const[startLon,setStartLon]=useState(null);
  const[endLat,setEndLat]=useState(null);
  const[endLon,setEndLon]=useState(null);
  const[bridges,setBridge]=useState(false)


  const allow=()=>{
    navigator.geolocation.getCurrentPosition(data => {
      if(data){
        setMyLat(data.coords.latitude);
        setMyLon(data.coords.longitude)
      }

  }, error => console.log(error), {
      enableHIghAccuracy: true
  })

  }


  const passengers=()=>{
    fetch(`${url}/reqs`, {
      method: 'POST',

      headers: {
          "X-CSRFToken": '{{csrf_token}}',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'acc':localStorage.getItem('log')
      }),
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data)
      let a=JSON.parse(localStorage.getItem('reqs'))
      if(a){
      if(data.length>a.length){
        setHasPass(true)
      }}
      localStorage.setItem('reqs',JSON.stringify(data))
      
  })
  }

  const set=()=>{
    if (localStorage.getItem('userFrom') && localStorage.getItem('userTo')){
    let a=JSON.parse(localStorage.getItem('userFrom'));
    let b=JSON.parse(localStorage.getItem('userTo'));
    setStartLat(a.lat);
    setStartLon(a.lon);
    setEndLat(b.lat);
    setEndLon(b.lon);
    setBridge(true)
    }
  }
  
  const bridge=()=>{
    if (localStorage.getItem('userFrom') && localStorage.getItem('userTo') && myLat && myLon){
   

      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [startLon, startLat],
        zoom: 9,
      })
      const marker1 = new mapboxgl.Marker({color:"blue"})
      .setLngLat([startLon, startLat])
      .addTo(map);
    
      const marker2 = new mapboxgl.Marker({color:"blue"})
      .setLngLat([endLon, endLat])
      .addTo(map);

      const marker3 = new mapboxgl.Marker({color:"black"})
      .setLngLat([myLon, myLat])
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
                          [myLon,myLat],
                          [startLon,startLat],
                          [endLon, endLat]
                          
                            
                        ]
                    }
                }
            }
        });
        
    });
    
    }
  }

  const Dispatch=()=>{
    localStorage.removeItem('userFrom')
    localStorage.removeItem('userTo')
    setBridge(false)
  }

  useEffect(()=>{
    allow();
    passengers();
    set();
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [88.363892, 22.572645],
      zoom: 11,
    })
    const interval=setInterval(()=>{
      navigator.geolocation.getCurrentPosition(data => {
        //updateCoords(data.coords.latitude,data.coords.longitude)
   
     
      if(localStorage.getItem('userFrom') && localStorage.getItem('userTo')){
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [startLon, startLat],
          zoom: 9,
        })

      const marker3 = new mapboxgl.Marker({color:"black"})
      .setLngLat([data.coords.longitude, data.coords.latitude])
      .addTo(map);

      const marker1 = new mapboxgl.Marker({color:"blue"})
      .setLngLat([JSON.parse(localStorage.getItem('userFrom')).lon, JSON.parse(localStorage.getItem('userFrom')).lat])
      .addTo(map);
    
      const marker2 = new mapboxgl.Marker({color:"blue"})
      .setLngLat([JSON.parse(localStorage.getItem('userTo')).lon, JSON.parse(localStorage.getItem('userTo')).lat])
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
                          [data.coords.longitude,data.coords.latitude],
                          [JSON.parse(localStorage.getItem('userFrom')).lon, JSON.parse(localStorage.getItem('userFrom')).lat],
                          [JSON.parse(localStorage.getItem('userTo')).lon, JSON.parse(localStorage.getItem('userTo')).lat]
                          
                            
                        ]
                    }
                }
            }
        });
      
    });
  }
else{
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
    center: [data.coords.longitude, data.coords.latitude],
    zoom: 9,
  })

  const marker = new mapboxgl.Marker({color:"black"})
  .setLngLat([data.coords.longitude, data.coords.latitude])
  .addTo(map);
}
          
        }, error => console.log(error), {
          enableHIghAccuracy: true
      })
       
       passengers();
       
       set();
    },70000)

    setDiv(window.screen.width);
    return ()=>clearInterval(interval)
  },[])
    
  


  return (<>
  {hasPass?<Success data="New Passenger!"/>:<></>}
<div  id='map' className='map' data-aos="zoom-in" style={{"height":"100vh"}}>
 {bridges? 
 
 <>
 <button style={{"position":"absolute","zIndex":"100","height":"30px","width":"50px","color":"white","border":"none"}} className='bg bg-dark my-4 mx-4' onClick={bridge}>Bridge</button>
 <button style={{"position":"absolute","zIndex":"100","height":"30px","width":"60px","color":"white","border":"none","marginLeft":"90px"}} className='bg bg-dark my-4 ' onClick={Dispatch}>Dispatch</button>
 </>
 
 :<></>}
</div>

         </>
  )
}
