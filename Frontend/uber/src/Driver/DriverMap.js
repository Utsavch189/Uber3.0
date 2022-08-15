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

  const updatePos=()=>{
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [myLon, myLat],
        zoom: 11,
      })

      const marker1 = new mapboxgl.Marker({color:"black"})
      .setLngLat([myLon, myLat])
      .addTo(map);
    
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
      let a=JSON.parse(localStorage.getItem('reqs'))
      if(data.length>a.length){
        setHasPass(true)
      }
      localStorage.setItem('reqs',JSON.stringify(data))
      
  })
  }
  


  useEffect(()=>{
    allow();
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [88.363892, 22.572645],
      zoom: 11,
    })
    setInterval(()=>{

      navigator.geolocation.getCurrentPosition(data => {
        if(data){
          const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [data.coords.longitude, data.coords.latitude],
            zoom: 11,
          })
    
          const marker1 = new mapboxgl.Marker({color:"black"})
          .setLngLat([data.coords.longitude, data.coords.latitude])
          .addTo(map);

          //updateCoords(data.coords.latitude,data.coords.longitude)
        }
  
    }, error => console.log(error), {
        enableHIghAccuracy: true
    })
        
       passengers();
        
    },100000)

    setDiv(window.screen.width);
    
  },[])
    
  


  return (<>
  {hasPass?<Success data="New Passenger!"/>:<></>}
<div  id='map' className='map' data-aos="zoom-in"></div>

         </>
  )
}
