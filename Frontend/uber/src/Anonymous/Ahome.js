import React from 'react';
import '../Styles/Ahome.css';

export default function Ahome() {
  return (
    <>
        <section style={{ height: "100vh", width: "100vw" }}>
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
      <img
        src="https://image.cnbcfm.com/api/v1/image/105887924-1556798450906gettyimages-1137478527.jpeg?v=1596730014"
        alt=""
        className="img"
      />
      <div className="container main">
        <div className="options">
          <div className="rider">
            <button>
              <i
                className="fa fa-car"
                style={{ fontSize: 30 }}
                aria-hidden="true"
              />
            </button>
            <br />
            <h5>Rider</h5>
          </div>
          <div className="driver">
            <button>
              <i
                className="fa fa-car"
                style={{ fontSize: 30 }}
                aria-hidden="true"
              />
            </button>
            <br />
            <h5>Driver</h5>
          </div>
        </div>
        <div className="sub-body my-1">
          <h2 className="text-center">Request a ride now!</h2>
          <br />
          <div className="inputs">
            <div classname="form-group">
              <input
                type="text"
                classname="form-control"
                placeholder="Enter Pickup Location"
              />
            </div>
            <div classname="form-group ">
              <input
                type="text"
                classname="form-control"
                placeholder="Enter Destination"
              />
            </div>
          </div>
          <div className="footer">
            <button className="btn btn-dark">Request Now</button>
            <button className="btn btn-primary">Shedule for later</button>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
