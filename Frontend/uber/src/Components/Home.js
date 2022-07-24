import React,{useState,useEffect} from 'react'
import {ethers} from 'ethers';
import Header from '../Anonymous/Header';
import Error from './Error';

export default function Home() {

 const[error,setError]=useState('');
 const[address,setAddress]=useState('');
 const[balance,setBalance]=useState('');

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
        console.log(ethers.utils.formatEther(bal))
        setBalance(ethers.utils.formatEther(bal));
        

    }
    else{
        setError("Network is wrong")
    }
}
 }

 useEffect(()=>{Login();},[])


  return (
    <>
    <Header/>
    {error!==''?(<Error error={error}/>):(<></>)}
    <p>Address: {address}</p>
    <p>Balance: {balance}</p>
    </>
  )
}
