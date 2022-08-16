import React,{useState} from 'react';
import { useEffect } from 'react';
import '../../Styles/Canvas.css';
import '../../Styles/PassReqsCard.css';
import ReqCard from './ReqCard';


function ReqCanvas({setCanvas,data}) {

console.log(data)


  return (
    <>
    {window.screen.width<=540?(<>
    
      <div className="container canvass" data-aos="fade-left">
          <h4 className="text-center my-2">Requests</h4>
          <button className='text-left' onClick={()=>setCanvas(false)} style={{"height":"25px","width":"25px"}}><i class="fa fa-times"style={{"fontSize":"19px"}}></i></button>
          <div className="container passess my-4">
            {data? data.map((i,k)=>
              <ReqCard data={i} key={k}/>
            ):<></>}
          </div>
         
      </div>
    
    </>):
      <div className="container canvas" data-aos="fade-left">
          <h4 className="text-center my-2">Requests</h4>
          <button className='text-left' onClick={()=>setCanvas(false)} style={{"height":"25px","width":"25px"}}><i class="fa fa-times"style={{"fontSize":"19px"}}></i></button>
          <div className="container passes mx-3 my-4">
          {data? data.map((i,k)=>
              <ReqCard data={i} key={k}/>
            ):<></>}
          </div>
      
      </div>
}

    </>
  )
}

export default ReqCanvas