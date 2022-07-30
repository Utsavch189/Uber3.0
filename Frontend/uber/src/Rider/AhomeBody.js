import React from 'react'
import '../Styles/Ahome.css';

export default function RideBody() {
  return (
    <>
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
            <button className="btn btn-dark">Request Now</button>
            <button className="btn btn-primary">Shedule for later</button>
          </div>
        </div>
    </>
  )
}
