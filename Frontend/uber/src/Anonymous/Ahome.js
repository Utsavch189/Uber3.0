import React,{useState} from 'react';
import '../Styles/Ahome.css';
import RideBody from '../Rider/AhomeBody';
import DriveBody from '../Driver/AHomeBody';
import UberTop from './UberTop';

export default function Ahome({error}) {

  const[is_driver,setIs_driver]=useState(false)

  return (
    <>
        <section style={{ height: "100%", width: "100%" ,overflow:"hidden"}}>
    <UberTop error={error}/>
    <div className="container-fluid body">
      { !is_driver ? (
      <img
        src="https://images.indianexpress.com/2017/03/uber-759.jpg"
        alt=""
        className="img"
      />):(
        <img
        src="https://image.cnbcfm.com/api/v1/image/105887924-1556798450906gettyimages-1137478527.jpeg?v=1596730014"
        alt=""
        className="img"
      />
      )
}
      <div className="container main">
        <div className="options">
          <div className="rider">
            <button onClick={()=>setIs_driver(false)}>
              <i
                className="fa fa-taxi"
                style={{ fontSize: 20 }}
                aria-hidden="true"
              />
            </button>
            <br />
            {!is_driver ?(<h5><strong>Rider</strong></h5>):(<h5>Rider</h5>)}
            
          </div>
          <div className="driver">
            <button onClick={()=>setIs_driver(true)}>
              <i
                className="	fa fa-vcard"
                style={{ fontSize: 20 }}
                aria-hidden="true"
              />
            </button>
            <br />
            {is_driver ?(<h5><strong>Driver</strong></h5>):(<h5>Driver</h5>)}
            
          </div>
        </div>
        

{!is_driver ? (<RideBody/>):(<DriveBody/>)}



      </div>
    </div>
  </section>
    </>
  )
}
