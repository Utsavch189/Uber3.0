import React from 'react';
import { url } from '../../Functions/baseurl';
import { quote_plus } from '../../Functions/UrlQuote';


function ReqCard({data}) {

    const accept=()=>{
        fetch(`${url}/accept`, {
            method: 'POST',
    
            headers: {
                "X-CSRFToken": '{{csrf_token}}',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              'id':data._id
            }),
        })
        let from=`https://nominatim.openstreetmap.org/search/${quote_plus(data.from)}?format=json`
        let to=`https://nominatim.openstreetmap.org/search/${quote_plus(data.to)}?format=json`
    
        fetch(from)
        .then(res => res.json())
        .then(data => {

          localStorage.setItem('userFrom',JSON.stringify({'lat':data[0]['lat'],'lon':data[0]['lon']}))
        })
        

        
      fetch(to)
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('userTo',JSON.stringify({'lat':data[0]['lat'],'lon':data[0]['lon']}))
      })
    
    }

    const reject=()=>{
        fetch(`${url}/reject`, {
            method: 'POST',
    
            headers: {
                "X-CSRFToken": '{{csrf_token}}',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              'id':data._id
            }),
        })
    }

  return (
    <>{window.screen.width<=540?(<>
      
        <div className="container-fluid reqcard my-2" style={{"height":"110px","width":"100%","display":"flex","alignItems":"center","justifyContent":"space-between","backgroundColor":"rgb(240, 238, 236)"}}>
                <div className="detailss"style={{"width":"100%"}}>
                <h6 className="text-left my-2" style={{"fontSize":"13px"}}><b> {data.from} to {data.to}</b></h6>
                <h6 className="text-left my-4" style={{"fontSize":"11px"}}><b>Date:</b> {data.date}</h6>
                </div>
                <div className="btnbar" >
                    <button style={{"cursor":"pointer"}} onClick={accept}><i className='fa fa-check'aria-hidden="true" style={{"fontSize":"20px"}}></i></button>
                    <button style={{"cursor":"pointer"}} onClick={reject}><i className='fa fa-ban'aria-hidden="true" style={{"fontSize":"20px"}}></i></button>
                </div>
            </div>
 
        </>):(
    
     
            <div className="container-fluid reqcard my-2" style={{"height":"110px","display":"flex","alignItems":"center","justifyContent":"space-between","backgroundColor":"rgb(240, 238, 236)"}}>
                <div className="detailss">
                <h6 className="text-left my-2" style={{"fontSize":"13px"}}><u><b> {data.from} to {data.to}</b></u></h6>
                <h5 className="text-left my-4" style={{"fontSize":"13px"}}><b>Date:</b> {data.date}</h5>
                </div>
                <div className="btnbar" >
                <button style={{"cursor":"pointer"}} onClick={accept}><i className='fa fa-check'aria-hidden="true" style={{"fontSize":"20px"}}></i></button>
                    <button style={{"cursor":"pointer"}} onClick={reject}><i className='fa fa-ban'aria-hidden="true" style={{"fontSize":"20px"}}></i></button>
                </div>
            </div>
        
   
        )
    }
    </>
  )
}

export default ReqCard