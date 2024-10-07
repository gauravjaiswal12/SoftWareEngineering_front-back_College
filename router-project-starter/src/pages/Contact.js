import React from 'react'
import flamingo from "../assets/flamingo-with-black-background-black-leaves_902846-19337.jpeg"
const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full '>
        <p className='text-slate-400 text-3xl'>Strategic Thinkers</p>
        <img src={flamingo} alt=""  className='rounded-3xl'/>
    </div>
  )
}

export default Contact