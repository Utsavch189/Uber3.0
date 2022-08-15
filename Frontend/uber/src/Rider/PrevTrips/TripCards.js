import React,{useState} from 'react';
import TripDetails from './TripDetails';

function TripCards({data}) {

    const[is_details,setIs_details]=useState(false);
    
  return (
    <>{window.screen.width<=540?(<>
    {is_details?<TripDetails set={setIs_details} data={data}/>:
    <div className="container-fluid tripcard my-2" style={{"height":"110px","display":"flex","alignItems":"center","justifyContent":"space-between","backgroundColor":"rgb(240, 238, 236)"}}>
            <div className="detailss">
            <h6 className="text-left my-2" style={{"fontSize":"13px"}}><b> {data.from} to {data.to}</b></h6>
            <h6 className="text-left my-4" style={{"fontSize":"11px"}}><b>Date:</b> {data.date}</h6>
            </div>
            <div className="icon" >
                <button style={{"cursor":"pointer"}} onClick={()=>setIs_details(true)}><i className='fa fa-file-text' style={{"fontSize":"20px"}}></i></button>
            </div>
        </div>
}
    </>):(
   <>
   {is_details?<TripDetails set={setIs_details} data={data}/>:
        <div className="container-fluid tripcard my-2" style={{"height":"110px","display":"flex","alignItems":"center","justifyContent":"space-between","backgroundColor":"rgb(240, 238, 236)"}}>
            <div className="detailss">
            <h6 className="text-left my-2" style={{"fontSize":"13px"}}><u><b> {data.from} to {data.to}</b></u></h6>
            <h5 className="text-left my-4" style={{"fontSize":"13px"}}><b>Date:</b> {data.date}</h5>
            </div>
            <div className="icon" >
                <button style={{"cursor":"pointer"}} onClick={()=>setIs_details(true)}><i className='fa fa-file-text' style={{"fontSize":"45px"}}></i></button>
            </div>
        </div>
    }
    </>
    )
}
    </>
  )
}

export default TripCards