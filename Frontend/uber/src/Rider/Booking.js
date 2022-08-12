import React from 'react'
import '../Styles/Booking.css';

function Booking({setCanvas}) {
  return (
    <>
    {window.screen.width<=540?(<>
    
    <div className="container canvassi" data-aos="fade-left">
        <h4 className="text-center my-2">Previous Trips</h4>
        <button className='text-left' onClick={()=>setCanvas(false)} style={{"height":"25px","width":"25px"}}><i class="fa fa-times"style={{"fontSize":"19px"}}></i></button>
        
    </div>
  
  </>):
    <div className="container canvasi" data-aos="fade-left">
        <h4 className="text-center my-2">Previous Trips</h4>
        <button className='text-left' onClick={()=>setCanvas(false)} style={{"height":"25px","width":"25px"}}><i class="fa fa-times"style={{"fontSize":"19px"}}></i></button>
        
    </div>
}
    </>
  )
}

export default Booking