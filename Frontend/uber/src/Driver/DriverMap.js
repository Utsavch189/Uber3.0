import React,{useState,useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import '../Styles/pickup.css';
import updateCoords from '../Functions/updateDriverPos';



mapboxgl.accessToken="pk.eyJ1IjoicmV2YSIsImEiOiJjaW1kOGNvbmgwMDR5dHpra253aDM5cWtwIn0.YbIIl9U4E5OQ2YV4QWRdbQ"


export default function DriverMap() {

  const[div,setDiv]=useState(null);
  const[myLat,setMyLat]=useState(null);
  const[myLon,setMyLon]=useState(null);



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
  


  useEffect(()=>{
    allow();
    updatePos();
    setInterval(()=>{

        allow();
        console.log(myLat,myLon)
        updatePos();
        updateCoords(myLat,myLon)
    },60000)

    setDiv(window.screen.width);
    
  },[])
    
    
  

  return (<>
<div  id='map' className='map' data-aos="zoom-in"></div>

         </>
  )
}
