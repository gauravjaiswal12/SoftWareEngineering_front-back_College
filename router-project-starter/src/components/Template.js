import React from 'react'
import frameImage from "../assets/frame.png";
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import "./Template.css"
import {FcGoogle}  from "react-icons/fc";

const Template = ({title,desc,desc2,image,formtype,setIsLoggedIn}) => {
  return (
    // form type tells which type of  formm to make login or signup
    <div className='flex justify-between max-w-[1160px] w-11/12 mx-auto py-12 gap-x-12 gap-y-0'>
        <div className='w-11/12  max-w-[450px]'>
            <h1 className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                    <span className='
                    text-richblack-100'>{desc}</span>
                    <br/>
                    <span className='text-blue-100 italic'>Empowering Your Future Through Lifelong Learning</span>
            </p>
            {
                    formtype==="Signup"?(<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }
            <div className='flex w-full items-center my-4  gap-x-2'>
                    <div className='w-full h-[1px] bg-richblack-700 '></div>
                    <p className='text-richblack-700 font-medium leading-[1.375rem] '>OR</p>
                    <div className='w-full h-[1px] bg-richblack-700 '></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium  text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                        <FcGoogle/>
                    <p> Sign in wih Google</p>
                </button>
        </div>

        <div className='relative max-w-[450px] w-11/12  '>
            <div className='popi'>
              <img src={frameImage} alt="" width={558} height={490} loading='lazy'className='pop ' />
            <img src={image} alt="" width={558}  height={504} className='absolute -top-4 right-4 rounded-2xl'/>
            </div>
            
        </div>
    </div>
   
  )
}
export default Template;