import React,{useState} from 'react'
import '../Styles/DriverRegister.css';
import '../Styles/Registe.css';
import { url } from '../Functions/baseurl';




export default function Register({set,acc}) {


    const[name,setName]=useState('')
    const[phone,setPhone]=useState('')
    const[email,setEmail]=useState('')
    const[address,setAddress]=useState('')
    const[exp,setExp]=useState('')
    const[car,setCar]=useState('')
    


   

    const submit=()=>{
      
      fetch(`${url}/driver`, {
        method: 'POST',
       
        headers: {
            "X-CSRFToken": '{{csrf_token}}',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            'name':name,
            'phone':phone,
            'email':email,
            'address':address,
            'exp':exp,
            'car':car,
            'account':localStorage.getItem('log')
        }),
    })
    }


  return (
    <>{window.screen.width<=540?(<>
    
    <div className="mainns">
    <div className="container-fluid cancel my-2">
      <button onClick={()=>set(false)} style={{"width":"30px"}}><i class="fa fa-times"style={{"fontSize":"15px"}}></i></button>
  </div>
  <div className="container additionalDatas my-3">
    <div className="form-group">
      <label htmlFor="usr">Name:</label>
      <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
   
    <div className="form-group">
      <label htmlFor="usr">Phone Number:</label>
      <input type="number" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="usr">Email:</label>
      <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="form-group">
      <label htmlFor="usr">Address:</label>
      <input type="text" className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)}/>
    </div>

    <div className="form-group">
      <label htmlFor="usr">Driving Experience:</label>
      <input type="text" className="form-control" value={exp} onChange={(e)=>setExp(e.target.value)}/>
    </div>
    <div className="form-group">
      <label htmlFor="usr">Car Name:</label>
      <input type="text" className="form-control" value={car} onChange={(e)=>setCar(e.target.value)}/>
    </div>
    <div className="submit-button">
  <button className="btn btn-primary px-3" onClick={submit}>Add</button>
</div>
  </div>
 
</div>
    
    </>):(
    <div className="mainn">
    <div className="container-fluid cancel">
      <button onClick={()=>set(false)} style={{"width":"30px"}}><i class="fa fa-times"style={{"fontSize":"15px"}}></i></button>
  </div>
  <div className="container additionalData my-4">
    <div className="form-group">
      <label htmlFor="usr">Name:</label>
      <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
   
    <div className="form-group">
      <label htmlFor="usr">Phone Number:</label>
      <input type="number" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="usr">Email:</label>
      <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div className="form-group">
      <label htmlFor="usr">Address:</label>
      <input type="text" className="form-control" value={address} onChange={(e)=>setAddress(e.target.value)}/>
    </div>

    <div className="form-group">
      <label htmlFor="usr">Driving Experience:</label>
      <input type="text" className="form-control" value={exp} onChange={(e)=>setExp(e.target.value)}/>
    </div>
    <div className="form-group">
      <label htmlFor="usr">Car Name:</label>
      <input type="text" className="form-control" value={car} onChange={(e)=>setCar(e.target.value)}/>
    </div>
    <div className="submit-button">
  <button className="btn btn-primary px-3" onClick={submit}>Add</button>
</div>
  </div>
 
</div>
)}
    </>
  )
}
