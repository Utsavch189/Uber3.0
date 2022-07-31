import React,{useState,useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import '../Styles/pickup.css';





mapboxgl.accessToken="pk.eyJ1IjoicmV2YSIsImEiOiJjaW1kOGNvbmgwMDR5dHpra253aDM5cWtwIn0.YbIIl9U4E5OQ2YV4QWRdbQ"
export default function Map() {

  const[fromDest,setFromDest]=useState('');
  const[toDest,setToDest]=useState('');
  const[response,setResponse]=useState(false);
  
  const[startLat,setStartLat]=useState(null);
  const[startLon,setStartLon]=useState(null);
  const[endLat,setEndLat]=useState(null);
  const[endLon,setEndLon]=useState(null);
  const[distance,setDistance]=useState(null);

  const[myLat,setMyLat]=useState(null);
  const[myLon,setMyLon]=useState(null);
  const[location,setLocation]=useState(false);


  function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}


  const jump=()=>{
    if(fromDest!=="" && toDest!==""){
      setResponse(true);
      fetch(`http://127.0.0.1:8000/latlong`, {
          method: 'POST',

          headers: {
              "X-CSRFToken": '{{csrf_token}}',
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "fromaddress": fromDest,
              "toaddress":toDest
          }),
      })
      .then(res=>res.json())
      .then(data=>{
        setStartLat(data[0].fromlat);
        setStartLon(data[0].fromlon);
        setEndLat(data[0].tolat);
        setEndLon(data[0].tolon);
       

        const dist=Math.sqrt(Math.pow((endLat-startLat),2)+Math.pow((endLon-startLon),2))
        setDistance(dist);
        console.log(dist)

        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [startLon, startLat],
          zoom: 12,
        })
        const marker1 = new mapboxgl.Marker()
        .setLngLat([startLon, startLat])
        .addTo(map);
     
        const marker2 = new mapboxgl.Marker()
        .setLngLat([endLon, endLat])
        .addTo(map);

        setResponse(false)
      })
  }
  }

  const allow=()=>{
    navigator.geolocation.getCurrentPosition(data => {
      if(data){
        setLocation(true);
      }

      setMyLon(data.coords.longitude);
      setMyLat(data.coords.latitude);

 
      

      

  }, error => console.log(error), {
      enableHIghAccuracy: true
  })

  }
  


  useEffect(()=>{
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [88.2636, 22.5958],
      zoom: 12,
    })

  },[])
    
    
  

  return (<>
<div style={{"width":"100vw","height":"100vh"}} id='map' >



<div className="container pickup">
  <div className="container-fluid inputss my-3">
    {
      response?(<div class="spinner-grow" role="status">
      
    </div>):(<></>)
    }
    <div classname="form-group">
      <input type="text" className="form-control input" placeholder="Enter Pickup Location" value={fromDest} onChange={(e)=>setFromDest(e.target.value)}/>
    </div>
    <div classname="form-group my-3">
      <input type="text" className="form-control input my-2" placeholder="Enter Final Location" value={toDest} onChange={(e)=>setToDest(e.target.value)}/>
    </div>
    <div className="container-fluid my-2" style={{"height":"50px","display":"flex","-webkit-flex-direction":"column","-ms-flex-direction":"column","flex-direction":"column","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center","-webkit-box-pack":"center","-webkit-justify-content":"center","-ms-flex-pack":"center","justify-content":"center"}}>
      <button className="btn btn-dark" onClick={jump}>Jump to Destination <i className="	fa fa-send-o" /></button>
    </div>
    <div className="container-fluid" style={{"height":"50px","display":"flex","-webkit-flex-direction":"column","-ms-flex-direction":"column","flex-direction":"column","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center","-webkit-box-pack":"center","-webkit-justify-content":"center","-ms-flex-pack":"center","justify-content":"center"}}>
      {!location ? (
      <button className="btn btn-dark" onClick={allow}>Allow Your Location <i className="fas fa-location mx-4" /></button>
      ):(
        <button className="btn btn-dark">Search Nearby Services<i className="fa fa-eye mx-4" /></button>
      )
      }
    </div>
    {!response?(
    <h6 className="text-center my-4">Nearby Services</h6>):(<></>)}
  </div>
  <div className="container-fluid car-list">
    <div className="container-fluid my-3 cars" >
      <div className="left">
        <p>UberX</p>
      </div>
      <div className="right">
        <p>300rs</p>
      </div>
    </div>
  </div>
  <div className="foot container-fluid" style={{"height":"50px","display":"flex","-webkit-flex-direction":"column","-ms-flex-direction":"column","flex-direction":"column","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center","-webkit-box-pack":"center","-webkit-justify-content":"center","-ms-flex-pack":"center","justify-content":"center"}}>
    <button className="btn btn-dark">Book<i className="fa fa-taxi mx-4" /></button>
  </div>
</div>


  </div>
</>
  )
}
