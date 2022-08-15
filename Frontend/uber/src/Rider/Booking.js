import React from 'react'
import { useState } from 'react';
import '../Styles/Booking.css';
import pay from '../Functions/PayEth';
import addon from '../Functions/AddTrip';
import book from '../Functions/book';
import { useEffect } from 'react';


function Booking({setCanvas,data,cost,coordist,from,to}) {

  const [bookPending,setBookPending]=useState(false)
  const date=new Date();
  
  const books=()=>{
    book(from,to,data['data']['acc'],date);
    setBookPending(true)
    localStorage.setItem('pendings',data['data']['name'])
  }

  useEffect(()=>{
    if(data && localStorage.getItem('pendings')){
    if(data['data']['name']===localStorage.getItem('pendings')){
      setBookPending(true)
    }
  }
  },[])
  
const add=()=>{
  
  
  pay(data['data']['acc'],cost);
  addon(from,to,data['data']['name'],data['data']['car'],cost,date)

}

  return (
    <>
    {window.screen.width<=540?(<>
    
    <div className="container canvassi" data-aos="fade-left">
        <h4 className="text-center my-4">Book Now!</h4>
        <button className='text-left' onClick={()=>setCanvas(false)} style={{"height":"25px","width":"25px"}}><i class="fa fa-times"style={{"fontSize":"19px"}}></i></button>
        <div className="container about my-3">

        <h6 className="text-left my-4">
            <b>Your Destination distance:</b>  {coordist} km
          </h6>

          <h6 className="text-left my-4">
            <b>Car Name:</b>  {data['data']['car']}
          </h6>
          <h6 className="text-left my-4">
            <b>Driver:</b>  {data['data']['name']}
          </h6>

          <h6 className="text-left my-4">
            <b>Phone Number:</b>  {data['data']['phone']}
          </h6>

          <h6 className="text-left my-4">
            <b>Driving Exp:</b>  {data['data']['exp']} years
          </h6>

          <h6 className="text-left my-4">
            <b>The car is:</b>  {data['distance'].toFixed(3)} km far from you
          </h6>

          <h6 className="text-left my-4">
            <b>According Your Destination:</b>  {cost} ether will be charged
          </h6>
<div className="footss">
      <div className="container bookbutton">
          {!bookPending?<button style={{"color":"white","width":"82%"}} onClick={books} className='bg bg-dark'>Book {data['data']['car']} <i className='fa fa-taxi'></i></button>:
          <button style={{"color":"white","width":"82%"}} onClick={books} className='bg bg-dark'>Pending...</button>
          }
      </div>
      </div>

        </div>
    </div>
  
  </>):
    <div className="container canvasi" data-aos="fade-left">
        <h4 className="text-center my-2">Book Now!</h4>
        <button className='text-left' onClick={()=>setCanvas(false)} style={{"height":"25px","width":"25px"}}><i class="fa fa-times"style={{"fontSize":"19px"}}></i></button>
        <div className="container about my-3">

<h6 className="text-left my-4">
    <b>Your Destination distance:</b>  {coordist} km
  </h6>

  <h6 className="text-left my-4">
    <b>Car Name:</b>  {data['data']['car']}
  </h6>
  <h6 className="text-left my-4">
    <b>Driver:</b>  {data['data']['name']}
  </h6>

  <h6 className="text-left my-4">
    <b>Phone Number:</b>  {data['data']['phone']}
  </h6>

  <h6 className="text-left my-4">
    <b>Driving Exp:</b>  {data['data']['exp']} years
  </h6>

  <h6 className="text-left my-4">
    <b>The car is:</b>  {data['distance'].toFixed(3)} km far from you
  </h6>

  <h6 className="text-left my-4">
    <b>According Your Destination:</b>  {cost} ether will be charged
  </h6>
<div className="footss">
<div className="container bookbutton">
{!bookPending?<button style={{"color":"white","width":"82%"}} onClick={books} className='bg bg-dark'>Book {data['data']['car']} <i className='fa fa-taxi'></i></button>:
          <button style={{"color":"white","width":"82%"}} onClick={books} className='bg bg-dark'>Pending...</button>
          }
</div>
</div>

</div>
    </div>
}
    </>
  )
}

export default Booking