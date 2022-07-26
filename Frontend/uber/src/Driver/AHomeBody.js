import React,{useState} from 'react';
import '../Styles/Ahome.css';
import Register from './Register';

export default function DriveBody({acc}) {

  const[show,setShow]=useState(false);

  return (
    <>
   {show?(<Register set={setShow} acc={acc}/>):(<></>)}
     
    {window.screen.width<=540?(<>
    
    
    <div className="sub-bodys my-1">
                <br /><br />
          <h1 className="text-center">Get in the driver’s seat and get paid</h1>
          <br />
         <h6 className="text-center">Drive on the platform with the largest network of active riders.</h6><br />
          <div className="footers2">
            <button className="btn btn-dark" onClick={()=>setShow(true)}>Sign Up for Drive</button>
            
          </div>
          <br />
          <h6 className="text-left " style={{"margin-left":"32px"}}><a href="">Learn more about driving and delivering</a></h6>
        </div>
    
    </>):(
               <div className="sub-body my-1">
                <br /><br />
          <h1 className="text-center">Get in the driver’s seat and get paid</h1>
          <br />
         <h6 className="text-center">Drive on the platform with the largest network of active riders.</h6><br />
          <div className="footer2">
            <button className="btn btn-dark" onClick={()=>setShow(true)}>Sign Up for Drive</button>
            
          </div>
          <br />
          <h6 className="text-left " style={{"margin-left":"32px"}}><a href="">Learn more about driving and delivering</a></h6>
        </div>
       
        )
        
}

    </>
  )
}
