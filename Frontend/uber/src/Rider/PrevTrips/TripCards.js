import React from 'react'

function TripCards() {
  return (
    <>{window.screen.width<=540?(<>
    
    <div className="container-fluid tripcard my-2" style={{"height":"90px","display":"flex","alignItems":"center","justifyContent":"space-between","backgroundColor":"rgb(240, 238, 236)"}}>
            <div className="detailss">
            <h6 className="text-left my-2" style={{"fontSize":"13px"}}><u><b>Bandel to Chuchura</b></u></h6>
            <h5 className="text-left my-4" style={{"fontSize":"13px"}}><b>Date:</b>8/12/2022</h5>
            </div>
            <div className="icon" >
                <button ><i className='fa fa-file-text' style={{"fontSize":"20px"}}></i></button>
            </div>
        </div>
    
    </>):
        <div className="container-fluid tripcard my-2" style={{"height":"90px","display":"flex","alignItems":"center","justifyContent":"space-between","backgroundColor":"rgb(240, 238, 236)"}}>
            <div className="detailss">
            <h6 className="text-left my-2"><u><b>Bandel to Chuchura</b></u></h6>
            <h5 className="text-left my-4"><b>Date:</b>8/12/2022</h5>
            </div>
            <div className="icon" >
                <button ><i className='fa fa-file-text' style={{"fontSize":"45px"}}></i></button>
            </div>
        </div>
}
    </>
  )
}

export default TripCards