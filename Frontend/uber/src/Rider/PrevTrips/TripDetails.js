import React from 'react'

function TripDetails({data,set}) {
  return (
    <>
        <div className="container" data-aos="zoom-in"
        style={{"backgroundColor":"rgb(239, 239, 239)","width":"100%","height":"80vh"}}>
            
            <button className='text-left' onClick={()=>set(false)} style={{"height":"25px","width":"25px"}}><i class="fa fa-arrow-left"style={{"fontSize":"19px"}}></i></button>
            
            <h5 style={{"fontSize":"13px"}} className="text-center my-4"><b>Travel Route:</b> {data.from} to {data.to}</h5>
            <h6 style={{"fontSize":"13px"}} className="text-center my-3"><b>Date:</b>  {data.date}</h6>
            <h6 style={{"fontSize":"13px"}} className="text-center my-3"><b>Driver Name:</b>  {data.driver}</h6>
            <h6 style={{"fontSize":"13px"}} className="text-center my-3"><b>Car No:</b>  {data.car}</h6>
            <h6 style={{"fontSize":"13px"}} className="text-center my-3"><b>Cost:</b>  {data.cost}eth</h6>
        </div>

    </>
  )
}

export default TripDetails