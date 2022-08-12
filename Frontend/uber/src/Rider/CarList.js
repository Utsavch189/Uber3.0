import React, { useEffect, useState } from 'react';
import '../Styles/pickup.css';
import cost from '../Functions/EtherCost';
import Booking from './Booking';



function CarList({data,car}) {

  const[selected,setSelected]=useState(false);
  
  const details=()=>{

    setSelected(true)
  }


  return (
    <>
       {selected?<Booking setCanvas={setSelected}/>:<></>}
    <div className="container-fluid my-3 cars" onClick={()=>setSelected(true)}>
      <div className="left">
        <p>{data['data']['car']}({data['distance'].toFixed(2)}km)</p>
      </div>
      <div className="right">
        <p>{cost(data['distance']).toFixed(7)}Eth</p>
      </div>
    </div>
    <div className="foot container-fluid" style={{"height":"50px","display":"flex","-webkit-flex-direction":"column","-ms-flex-direction":"column","flex-direction":"column","-webkit-align-items":"center","-webkit-box-align":"center","-ms-flex-align":"center","align-items":"center","-webkit-box-pack":"center","-webkit-justify-content":"center","-ms-flex-pack":"center","justify-content":"center","position":"absolute","bottom":"0"}}>
   {car? <button className="btn btn-dark" style={{"marginRight":"35px"}}>Book<i className="fa fa-taxi mx-4" /></button>:<></>}
  </div>
 
    </>
  )
}

export default CarList