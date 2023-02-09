import React, {useState,  useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getMessages } from '../../resources/Firebase/firebaseconfig';
export const Chat = () => {
const {docID} = useParams();

useEffect(()=>{
  getMessages({docID});

},[])

  return (
    <div className='bg-slate-50 border text-black flex-grow'>
    consectetur adipisicing elit. Quisquam omnis, dolores ut cum ipsam ad debitis velit minima sunt! </div>
  )
}
