import React from 'react'

function TripDetails() {
  return (
    <>
        <div className="container"
        style={{"backgroundColor":"rgb(239, 239, 239)","width":"100%","height":"80vh"}}>
            <h5 style={{"fontSize":"13px"}} className="text-center"><b>Travel Route:</b>Bandel to Chuchura</h5>
            <h6 style={{"fontSize":"13px"}} className="text-center my-3"><b>Date:</b>8/12/2022</h6>
            <h6 style={{"fontSize":"13px"}} className="text-center my-3"><b>Driver Name:</b>Supratim</h6>
            <h6 style={{"fontSize":"13px"}} className="text-center my-3"><b>Car No:</b>8B15c</h6>
            <h6 style={{"fontSize":"13px"}} className="text-center my-3"><b>Cost:</b>0.0023eth</h6>
        </div>

    </>
  )
}

export default TripDetails