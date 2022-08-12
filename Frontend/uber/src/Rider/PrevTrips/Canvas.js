import React from 'react';
import '../../Styles/Canvas.css';
import TripCards from './TripCards';
import TripDetails from './TripDetails';

function Canvas({setCanvas}) {
  return (
    <>
    {window.screen.width<=540?(<>
    
      <div className="container canvass" data-aos="fade-left">
          <h4 className="text-center my-2">Previous Trips</h4>
          <button className='text-left' onClick={()=>setCanvas(false)} style={{"height":"25px","width":"25px"}}><i class="fa fa-times"style={{"fontSize":"19px"}}></i></button>
          <div className="container tripss my-4">
                <TripCards/>
          </div>
          <div className="container tripDetailss">
                <TripDetails/>
          </div>
      </div>
    
    </>):
      <div className="container canvas" data-aos="fade-left">
          <h4 className="text-center my-2">Previous Trips</h4>
          <button className='text-left' onClick={()=>setCanvas(false)} style={{"height":"25px","width":"25px"}}><i class="fa fa-times"style={{"fontSize":"19px"}}></i></button>
          <div className="container trips mx-3 my-4">
                <TripCards/>
          </div>
          <div className="container tripDetails">
                <TripDetails/>
          </div>
      </div>
}

    </>
  )
}

export default Canvas