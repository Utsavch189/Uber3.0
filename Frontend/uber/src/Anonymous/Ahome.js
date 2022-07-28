import React,{useState} from 'react';
import '../Styles/Ahome.css';
import RideBody from '../Rider/AhomeBody';
import DriveBody from '../Driver/AHomeBody';

export default function Ahome() {

  const[is_driver,setIs_driver]=useState(false)

  return (
    <>
        <section style={{ height: "100%", width: "100%" ,overflow:"hidden"}}>
    <div className="container-fluid notifi">
      <div className="writes">
        <p>
          <strong> Helping to keep each other safe</strong>
        </p>
        <p>
          We are actively monitoring the COVID-19 situation and are continually
          working to help keep those who rely on our platform healthy and safe.
        </p>
        <br />
        <p>
          <a href="">Go to Uber`s COVID-19 hub</a>
        </p>
        <br />
        <p>
          <a href="">Read about our Door-to-Door Safety Standard</a>
        </p>
      </div>
      <div className="cross">
        <button>
          <i className="fa fa-close" style={{ fontSize: 18 }} />
        </button>
      </div>
    </div>
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
                className="fa fa-car"
                style={{ fontSize: 30 }}
                aria-hidden="true"
              />
            </button>
            <br />
            {!is_driver ?(<h5><strong>Rider</strong></h5>):(<h5>Rider</h5>)}
            
          </div>
          <div className="driver">
            <button onClick={()=>setIs_driver(true)}>
              <i
                className="fa fa-car"
                style={{ fontSize: 30 }}
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
