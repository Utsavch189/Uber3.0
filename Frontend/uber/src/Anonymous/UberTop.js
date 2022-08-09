import { click } from '@testing-library/user-event/dist/click';
import React,{useEffect, useState} from 'react';
import '../Styles/Ahome.css';

export default function UberTop({error}) {
    const[open,setOpen]=useState(false)
    console.log(error)
    const check=()=>{
        if (error){
        setOpen(true);
    }
    else{
        setOpen(false);
    }
}
const click=()=>{
    setOpen(false)
}
useEffect(()=>{check();},[])
  return (
    <>{window.screen.width<=540?(<>
    
    <div className="container-fluid notifis">
      <div className="writes">
        <p>
          <strong> Helping to keep each other safe</strong>
        </p>
        <p>
          We are actively monitoring the COVID-19 situation and are continually
          working to help keep those who rely on our platform healthy and safe.
        </p>
        {open ?(<>
        <p style={{"color":"red"}}><strong>{error}</strong></p>
        </>):(<></>)
        }
        <br />
        <p>
          <a href="">Go to Uber`s COVID-19 hub</a>
        </p>
       
        <p>
          <a href="">Read about our Door-to-Door Safety Standard</a>
        </p>
      </div>
      <div className="cross">
       {open ? (<>
            <button onClick={click}><i className='fa fa-close' style={{"font":"18px"}}></i></button>
       </>):(<></>)}
      </div>
    </div>
    
    </>):(
        <div className="container-fluid notifi">
      <div className="writes">
        <p>
          <strong> Helping to keep each other safe</strong>
        </p>
        <p>
          We are actively monitoring the COVID-19 situation and are continually
          working to help keep those who rely on our platform healthy and safe.
        </p>
        {open ?(<>
        <p style={{"color":"red"}}><strong>{error}</strong></p>
        </>):(<></>)
        }
        <br />
        <p>
          <a href="">Go to Uber`s COVID-19 hub</a>
        </p>
       
        <p>
          <a href="">Read about our Door-to-Door Safety Standard</a>
        </p>
      </div>
      <div className="cross">
       {open ? (<>
            <button onClick={click}><i className='fa fa-close' style={{"font":"18px"}}></i></button>
       </>):(<></>)}
      </div>
    </div>)}
    </>
  )
}
