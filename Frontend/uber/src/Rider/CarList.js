import React, { useEffect, useState } from 'react';
import '../Styles/pickup.css';
import cost from '../Functions/EtherCost';
import Booking from './Booking';



function CarList({data,coordist,from,to}) {

  const[selected,setSelected]=useState(false);
  
 


  return (
    <>
       {selected?<Booking setCanvas={setSelected} cost={cost(data['distance']).toFixed(7)} data={data} coordist={coordist} from={from} to={to}/>:<></>}
    <div className="container-fluid my-3 cars" onClick={()=>setSelected(true)} style={{"cursor":"pointer"}}>
      <div className="left">
        <p>{data['data']['car']}({data['distance'].toFixed(2)}km)</p>
      </div>
      <div className="right">
        <p>{cost(data['distance']).toFixed(7)}Eth</p>
      </div>
    </div>
    
 
    </>
  )
}

export default CarList