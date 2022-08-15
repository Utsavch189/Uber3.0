import React,{useState} from 'react';
import { useEffect } from 'react';
import '../../Styles/Canvas.css';
import TripCards from './TripCards';
import TripDetails from './TripDetails';

function Canvas({setCanvas,trips}) {

const[data,setData]=useState(null);
useEffect(()=>{

  const a=localStorage.getItem('data')
  setData(JSON.parse(a)[1])

},[])


  return (
    <>
    {window.screen.width<=540?(<>
    
      <div className="container canvass" data-aos="fade-left">
          <h4 className="text-center my-2">Previous Trips</h4>
          <button className='text-left' onClick={()=>setCanvas(false)} style={{"height":"25px","width":"25px"}}><i class="fa fa-times"style={{"fontSize":"19px"}}></i></button>
          <div className="container tripss my-4">
            {data ? data.map((i,k)=>
            <TripCards key={k} data={i}/>
            ):<></>
                
            }
          </div>
         
      </div>
    
    </>):
      <div className="container canvas" data-aos="fade-left">
          <h4 className="text-center my-2">Previous Trips</h4>
          <button className='text-left' onClick={()=>setCanvas(false)} style={{"height":"25px","width":"25px"}}><i class="fa fa-times"style={{"fontSize":"19px"}}></i></button>
          <div className="container trips mx-3 my-4">
          {data ? data.map((i,k)=>
            <TripCards key={k} data={i}/>
            ):<></>
                
            }
          </div>
      
      </div>
}

    </>
  )
}

export default Canvas