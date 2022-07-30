import React,{useState} from 'react'

export default function Destinations() {
    const[fromDest,setFromDest]=useState('');
    const[toDest,setToDest]=useState('');

    const FromDest=(e)=>{
        e.preventDefault();
        setFromDest(e.target.value);
       
    }
    const ToDest=()=>{
        
    }
    const go=()=>{
        if(fromDest!==""){
            fetch(`http://127.0.0.1:8000/latlong`, {
                method: 'POST',
    
                headers: {
                    "X-CSRFToken": '{{csrf_token}}',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "address": fromDest
                }),
            })
            .then(res=>res.json())
            .then(data=>console.log(data))
        }
    }

  return (
    <>
    <div  style={{"backgroundColor":"bisque","position":"absolute","width":"200px","height":"200px","zIndex":"1000"}}>
     <div classname="form-group ">
        <input type="text" value={fromDest} onChange={FromDest} placeholder="From"  style={{"position":"absolute"}}/>
        </div><br />
        <div classname="form-group ">
        <input type="text" value={toDest} onChange={ToDest} placeholder="To"style={{"position":"absolute"}}/>
        </div><br />
        <button onClick={go}>go</button>
        </div>
    </>
  )
}
