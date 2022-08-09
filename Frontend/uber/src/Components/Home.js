import React,{useState,useEffect} from 'react'
import Header from '../Anonymous/Header';
import Error from './Error';
import Ahome from '../Anonymous/Ahome';

export default function Home({error}) {

 

  return (
    <>

    
    <Ahome error={error}/>
    </>
  )
}
