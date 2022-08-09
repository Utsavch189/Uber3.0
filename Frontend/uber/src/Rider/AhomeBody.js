import React from 'react'
import '../Styles/Ahome.css';

export default function RideBody() {
  return (
    <>{window.screen.width<=540?(<>
    
    <div className="sub-bodys my-1">
                <br /><br />
          <h1 className="text-center">Request a ride now!</h1>
          
          <div className="inputt">
            <div classname="form-group">
              <input
                type="text"
                classname="form-control inputt"
                placeholder="Enter Pickup Location"
                style={{"backgroundColor":"rgb(247, 247, 247)","width":"90vw","border":"0!important","borderColor":"rgb(249, 247, 247)"}}
              />
            </div>
            <div classname="form-group ">
              <input
                type="text"
                classname="form-control inputt"
                placeholder="Enter Destination"
                style={{"backgroundColor":"rgb(247, 247, 247)","width":"90vw","border":"0!important","borderColor":"rgb(249, 247, 247)"}}
              />
            </div>
          </div>
          <div className="footers">
            <button className="btn btn-dark riderbuttons1" >Request Now</button>
            <button className="btn btn-primary  riderbutton2" >Shedule for later</button>
          </div>
        </div>
    
    </>):(
            <div className="sub-body my-1">
                <br /><br />
          <h1 className="text-center">Request a ride now!</h1>
          
          <div className="inputs">
            <div classname="form-group">
              <input
                type="text"
                classname="form-control input"
                placeholder="Enter Pickup Location"
              />
            </div>
            <div classname="form-group ">
              <input
                type="text"
                classname="form-control input"
                placeholder="Enter Destination"
              />
            </div>
          </div>
          <div className="footer">
            <button className="btn btn-dark riderbutton1" >Request Now</button>
            <button className="btn btn-primary  riderbutton2" >Shedule for later</button>
          </div>
        </div>)
}
    </>
  )
}
