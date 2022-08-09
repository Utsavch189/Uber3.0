
import './App.css';
import Home from './Components/Home';
import Map from './Components/Map';
import Destinations from './Rider/Destination';
import Register from './Driver/Register';
import {ethers} from 'ethers';
import React,{useState,useEffect} from 'react';
import Header from './Anonymous/Header';


function App() {

  const[error,setError]=useState('');
  const[address,setAddress]=useState('');
  const[balance,setBalance]=useState('');
  const [isLogged,setISLogged]=useState(false);
  const [isSigned,setIsSigned]=useState(false);


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
 
         const provider=new ethers.providers.Web3Provider(window.ethereum);
 
         const bal=await provider.getBalance(ac[0])
         setBalance(ethers.utils.formatEther(bal));

     
        
         localStorage.setItem('log',ac[0]);
         setIsSigned(true)
         
 
     }
     else{
         setError("Network is wrong")
     }
 }
  }

  const log=()=>{
    if(localStorage.getItem('log')){
      setISLogged(true);
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



<Home/>

</>:
  <>


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Uber 3.0</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Wallet</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Previous Trips</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onClick={logout}>Logout</a>
        </li>
        <li class="nav-item">
          <img src="https://tse1.mm.bing.net/th?id=OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK&pid=Api&P=0" alt="" style={{"borderRadius":"50%","height":"30px","width":"30px"}} className='mx-2 my-2'/>
        </li>
      </ul>
    </div>
  </div>
</nav>




<Map/>
</>
}
</>
  );
}

export default App;
