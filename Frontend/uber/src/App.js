import './App.css';
import Home from './Components/Home';
import Map from './Components/Map';
import {ethers} from 'ethers';
import React,{useState,useEffect} from 'react';
import { url } from './Functions/baseurl';
import Canvas from './Rider/PrevTrips/Canvas';



function App() {

  const[error,setError]=useState('');
  const[address,setAddress]=useState('');
  const[balance,setBalance]=useState('');
  const [isLogged,setISLogged]=useState(false);
  const [isSigned,setIsSigned]=useState(false);
  const[signresult,setSignresult]=useState([]);
  const[accholder,setAccholder]=useState('');
  const[type,setType]=useState('');
  const[canvas,setCanvas]=useState(false);


  const sign=async()=>{
     if(!window.ethereum){
         setError("Wallet Not Found");
     }
     else{
     await window.ethereum.send("eth_requestAccounts");
     const chain='0x4';
     let chainid=await window.ethereum.request({method:'eth_chainId'});
     if(chain===chainid){
         
         const ac=await window.ethereum.request({method:"eth_requestAccounts"})
         setAddress(ac[0])

         let name=prompt('USERNAME');

         if (name && ac[0]){
         localStorage.setItem('log',ac[0]);
         setIsSigned(true)

         fetch(`${url}/sign`, {
          method: 'POST',

          headers: {
              "X-CSRFToken": '{{csrf_token}}',
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({

              'account': ac[0],
              'name':name
          }),
      })
      .then(res => res.json())
      .then(data => {
        setSignresult(data)
        if(data[0][0]){
        localStorage.setItem('name',data['0'][0]['name'])
        localStorage.setItem('type',data['0'][1]['type'])
        setAccholder(data['0'][0]['name'])
        setType(data['0'][1]['type'])
        }
        else{
          localStorage.setItem('name',data[0]['name'])
          localStorage.setItem('type',data[1]['type'])
          setAccholder(data[0]['name'])
          setType(data[1]['type'])
        }
      })
    
         const provider=new ethers.providers.Web3Provider(window.ethereum);
 
         const bal=await provider.getBalance(ac[0])
         setBalance(ethers.utils.formatEther(bal));

    }
        
     }
     else{
         setError("Network is wrong")
     }
 }
  }

  const log=()=>{
    if(localStorage.getItem('log') && localStorage.getItem('name') && localStorage.getItem('type')){
      setISLogged(true);
      setAccholder(localStorage.getItem('name'))
      setType(localStorage.getItem('type'))
    }
    else{
      setISLogged(false)
    }
  }

  const logout=()=>{
    localStorage.removeItem('log');
    setISLogged(false);
  }
 
  useEffect(()=>{log();},[])
 

  return (
<>
{!isLogged?<>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Uber 3.0</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        {!isSigned?
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" onClick={sign}>Sign In</a>
        </li>:(<></>)
}
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={log}>Login</a>
        </li>
  
      </ul>
    </div>
  </div>
</nav>



<Home acc={address} error={error}/>

</>:
  <>

{type==='rider'?(
  <>
  
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{accholder}</a>
    <img src="https://tse3.mm.bing.net/th?id=OIP.ssqWbRUTpo45aWTW7NfbFgHaG8&pid=Api&P=0" alt="" style={{"borderRadius":"50%","height":"32px","width":"32px","backgroundPosition":"center","backgroundSize":"cover","backgroundRepeat":"no-repeat"}} className='my-2'/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Wallet</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={()=>setCanvas(true)}>Previous Trips</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={logout}>Logout</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

{canvas?<Canvas setCanvas={setCanvas}/>:<></>}


<Map signresult={signresult} name={accholder}/>
</>
)
:
(<>

<h1>driver</h1>


</>)
}
</>
}
</>
  );
}

export default App;
