
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
  const [isLogged,setISLogged]=useState(false)
 
  const Login=async()=>{
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
         setISLogged(true);
         localStorage.setItem('log',address);
         
 
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
 
  useEffect(()=>{Login();log();},[])
 

  return (
<>
<Header/>
<Map/>

</>
  );
}

export default App;
