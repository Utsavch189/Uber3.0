import React,{useState} from 'react'
import '../Styles/DriverRegister.css';
import ReCAPTCHA from "react-google-recaptcha";




export default function Register() {


    const[name,setName]=useState('')
    const[gurdianname,setGurdianname]=useState('')
    const[phone,setPhone]=useState('')
    const[email,setEmail]=useState('')
    const[address,setAddress]=useState('')
    const[passyear,setPassyear]=useState('')
    const[universityRoll,setUniversityRoll]=useState('')
    const[degree,setDegree]=useState('')


  return (
    <>
    <div className="mainn">
  <div className="container additionalData">
    <div className="form-group">
      <label htmlFor="usr">Name:</label>
      <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div className="form-group">
      <label htmlFor="usr">Gurdian Name:</label>
      <input type="text" className="form-control" value={gurdianname} onChange={(e)=>setGurdianname(e.target.value)} />
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
      <label htmlFor="usr">Passout Year:</label>
      <input type="number" className="form-control" value={passyear} onChange={(e)=>setPassyear(e.target.value)}/>
    </div>
    <div className="form-group">
      <label htmlFor="usr">University Roll Number:</label>
      <input type="number" className="form-control" value={universityRoll} onChange={(e)=>setUniversityRoll(e.target.value)}/>
    </div>
    <div className="form-group">
      <label htmlFor="usr">Degree Name:</label>
      <input type="text" className="form-control" value={degree} onChange={(e)=>setDegree(e.target.value)}/>
    </div>
  </div>
  <div className="container-fluid footer my-3">
<div className="recaptcha">
  <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={captcha}/>
</div>
<div className="submit-button">
  <button className="btn btn-primary px-3" onClick={submit}>Add</button>
</div>
  </div>
</div>
    </>
  )
}
