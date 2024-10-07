import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import { toast } from 'react-toastify';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';



const SignUpForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();
    const [formData,setformData]=useState({
        name:"",lastName:"",email:"",password:""
    })
    const [showPassword,setshowPassword]=useState(false);
    const [showPassword1,setshowPassword1]=useState(false);
    const [AccountType,setAccountType]=useState("student");

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
    //     if(formData.password!==formData.confirmPassword)
    //     {
    //         toast.error("Password didn't Match");
    //         return;
    //     }
    //     setIsLoggedIn(true);
    //     const accData={
    //         ...formData,AccountType
    //     };
    //     toast.success("Account Created");
    //     console.log("printing acc  data");
    //     console.log(accData);
    //     navigate("/dashboard");

    // }

    //
    function submitHandler(event){
        event.preventDefault();

        // event.preventDefault();
            if(formData.password!==formData.confirmPassword)
            {
                toast.error("Password didn't Match");
                return;
            }
        
        axios.post("http://localhost:4000/api/v1/signup",formData)
        .then( res => { 
            console.log(res);
            
            navigate("/dashboard"); 
            setIsLoggedIn(true);
            const accData={
                ...formData,AccountType
            };
            toast.success("Account Created");
            console.log("printing acc  data");
            console.log(accData);
        })
        .catch( 
            (err) => {

                if(err.status === 400){ toast.error("user already exist"); }
                else if(err.status === 500){ toast.error("there is some error");
                    console.log(formData);
                 }
                console.log(err);
            });

        

    }

  return (
    <div>
        {/* student instructor tab */}
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${AccountType==="student" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("student")}>
                Student
            </button>
            <button className={`${AccountType==="instructor" ? "bg-richblack-900 text-richblack-5" : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("instructor")}>
                Alumni
            </button>
        </div>
        <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
            {/* first name aand last name  */}
            <div className='w-full flex gap-x-4 mt-[10px]'>
                <label className='w-full mt-[10px]'>
                    <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                    <input type="text" name='name' required onChange={changeHandler}  placeholder='Enter First Names' value={formData.name} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>

                <label className='w-full mt-[10px]'>
                    <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                    <input type="text" name='lastName' required onChange={changeHandler}  placeholder='Enter First Names' value={formData.lastName} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                </label>
            </div>
            {/* email add */}
            <label className='mt-[3px]'>
                    <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input type="email" name='email' required onChange={changeHandler}  placeholder='Enter Email  id' value={formData.email} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
            </label>
    	    {/* create password */}
            <div className='w-full flex gap-x-4'>
                <label className='relative  w-full'>
                        <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                        <input type={showPassword?("text"):("password")} name='password' required onChange={changeHandler}  placeholder='Enter Password' value={formData.password} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

                        <span className='absolute top-[38px] right-3  cursor-pointer' onClick={()=>setshowPassword((prev)=>(!prev))}>
                            {
                                showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                            }
                        </span>
                </label>

                <label className='relative w-full'>
                        <p className='text-[0.875rem]  text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                        <input type={showPassword1?("text"):("password")} name='confirmPassword' required onChange={changeHandler}  placeholder='Confirm Password' value={formData.confirmPassword} className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>

                        <span className='absolute top-[38px] right-3  cursor-pointer' onClick={()=>setshowPassword1((prev)=>(!prev))}>
                            {
                                showPassword1?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                            }
                        </span>
                </label>
            </div>
           
           <button className='bg-yellow-50  rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>

        </form>
    </div>
  )
}
export default SignUpForm;
