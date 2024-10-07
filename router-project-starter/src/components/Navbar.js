import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assets/echo logo.jpg"
import { toast } from 'react-toastify';



const Navbar = ({IsLoggedIn,setIsLoggedIn}) => {
   
  return (
    <div className='flex justify-between items-center w-11/12   max-w-[1160px] py-4 mx-auto'>
        <Link to="/">
            <img src={Logo} alt="Logo" height={32} width={160} loading='lazy' className='rounded-2xl' />

        </Link>

        <nav>
            <ul className='flex gap-x-6 text-richblack-25'>
                <li>
                    <Link to="/" className='text-[15px] border-r-4 pr-4 border-slate-400 '>Home</Link>
                </li>
                <li>
                    <Link to="/" className='text-[15px]  border-r-4 pr-4 border-slate-400'>About</Link>
                </li>
                <li>
                    <Link to="/contact"  className='text-[15px] '>Contact</Link>
                </li>
            </ul>
        </nav>

        {/* Login signup logout dashboard */}

        <div className='flex items-center gap-x-4 '>
            { !IsLoggedIn && <Link to="/login">
                <button className='bg-richblack-800  text-richblack-100 py-[8px] px-[12px]  rounded-[4px] border text-[1.2rem] border-richblack-700  hover:text-slate-200 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:scale-105 hover:border-4 hover:bg-slate-900 transition-all duration-200'>Log In</button>
            </Link>
            }
            {!IsLoggedIn && <Link  to="/signup">
                <button className='bg-richblack-800  text-richblack-100 py-[8px] px-[12px] text-[20px] rounded-[4px] border border-richblack-700 hover:py-[10px]  hover:text-slate-200 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:scale-105 hover:border-4 hover:bg-slate-900 transition-all duration-200'>Sign up</button>
            </Link>
            }
            { IsLoggedIn && <Link to="/">
                <button  className='bg-richblack-800  text-richblack-100  py-[8px] px-[12px] rounded-[4px] border border-richblack-700  hover:text-slate-200 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:scale-105 hover:border-4 hover:bg-slate-900 transition-all duration-200' onClick={()=>{
                    setIsLoggedIn(false);
                    toast.success("Logged Out!")
                }}>Log Out</button>
            </Link>
            }
            {IsLoggedIn && <Link to="/dashboard">
                <button className='bg-richblack-800  text-richblack-100  py-[8px] px-[12px] rounded-[4px] border border-richblack-700  hover:text-slate-200 hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] hover:scale-105 hover:border-4 hover:bg-slate-900 transition-all duration-200'>Dashboard</button>
            </Link>

            }
        </div>


    </div>
  )
}
export default Navbar;
