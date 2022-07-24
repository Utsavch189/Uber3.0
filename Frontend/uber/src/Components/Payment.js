import React,{useState} from 'react'
import {ethers} from 'ethers';

export default function Payment() {

    const [address,setAddress]=useState("");
    const [value,setValue]=useState(null);

    const pay=async()=>{
        if(!window.ethereum){
            console.log("no wallet");
        }
        try{

            await window.ethereum.send("eth_requestAccounts");
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            console.log('Found account', accounts[0])
            
            const provider=new ethers.providers.Web3Provider(window.ethereum);
            const signer=provider.getSigner();

            const tx=await signer.sendTransaction({
                to: address,
                value: ethers.utils.parseEther(value)
            })

        }catch(err){
            console.log(err)
        }

    }

  return (
    <>
        <input placeholder='address' value={address} onChange={(e)=>setAddress(e.target.value)} />
        <input placeholder='ether' value={value} onChange={(e)=>setValue(e.target.value)} />
        <button className='btn btn-primary' onClick={pay}>Pay</button>
    </>
  )
}
