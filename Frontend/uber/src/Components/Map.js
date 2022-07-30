import React,{useState,useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import Destinations from '../Rider/Destination'
import Ahome from '../Anonymous/Ahome'


mapboxgl.accessToken="pk.eyJ1IjoicmV2YSIsImEiOiJjaW1kOGNvbmgwMDR5dHpra253aDM5cWtwIn0.YbIIl9U4E5OQ2YV4QWRdbQ"
export default function Map() {

  useEffect(()=>{
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [88.2636, 22.5958],
      zoom: 12,
    })
    const marker1 = new mapboxgl.Marker()
    .setLngLat([88.2636, 22.5958])
    .addTo(map);
 
    const marker2 = new mapboxgl.Marker()
    .setLngLat([88.3760639, 22.9052114])
    .addTo(map);
  },[])
    
    
  

  return (<>
<div style={{"width":"100vw","height":"100vh"}} id='map' >
 <Destinations/>
  </div>
</>
  )
}
