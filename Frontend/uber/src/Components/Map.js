import React,{useState,useEffect} from 'react';
import mapboxgl from 'mapbox-gl'


mapboxgl.accessToken="pk.eyJ1IjoicmV2YSIsImEiOiJjaW1kOGNvbmgwMDR5dHpra253aDM5cWtwIn0.YbIIl9U4E5OQ2YV4QWRdbQ"
export default function Map() {

  useEffect(()=>{
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [88.4176937, 23.1969878],
      zoom: 12,
    })
 
    
  },[])
    
    
  

  return (<>
<div style={{"width":"100vw","height":"100vh"}} id='map' />
</>
  )
}
