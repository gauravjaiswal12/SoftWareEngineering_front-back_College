import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();

    const [formData,setformData]=useState({
        email:"",password:""
    })
    const [showPassword,setshowPassword]=useState(false);

    function changeHandler(event){
        setformData(prevState=>{
            return{
          ...prevState,
            [event.target.name]:event.target.value
         }
        })
    }

    // function submitHandler(event){
    //     event.preventDefault();
    //     setIsLoggedIn(true);
    //     toast.success("Logged In");
    //     navigate("/dashboard");

    // }

    function submitHandler(event){
        event.preventDefault();
       
        

        axios.post("http://localhost:4000/api/v1/login",formData)
        .then( res => {
            console.log(res);
            setIsLoggedIn(true);
            toast.success("Logged In");
            navigate("/dashboard"); 
            // alert(res.message);
         })
        .catch( (err) => { 

            if(err.status === 403){ toast.error("incorrect password"); }
            else if( err.status === 401){ toast.error("user not registered"); }
            else if( err.status === 500){ toast.error("login fail"); }

            console.log(err);
            
         });

    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address
                <sup className='text-pink-200'>*</sup>
            </p>
            <input type="email" required name='email' value={formData.email} onChange={changeHandler} placeholder='Enter email address' className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
        </label>
        

        <label className='w-full  relative'>
            <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.375rem]'>
            Password
                <sup className='text-pink-200'>*</sup>
            </p>
            <input type={showPassword?("text"):("password")} required name='password' value={formData.password} onChange={changeHandler} placeholder='Enter Password'  className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
  
            <span className='absolute top-[38px] right-3  cursor-pointer' onClick={()=>setshowPassword((prev)=>(!prev)) }>
                {
                    showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                }
            </span>
            <Link to="#">
                <p className='text-xs text-blue-100 mt-1 max-w-max ml-auto'>
                    Forgot Password
                </p>
            </Link>

        </label>
        <button className='bg-yellow-50  rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Sign In
        </button>
        
    </form>
  )
}
export default LoginForm;
