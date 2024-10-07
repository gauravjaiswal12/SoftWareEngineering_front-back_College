import React from 'react'
import AnimatedText from '../components/AnimeText';
import college from "../assets/pexels-pixabay-256490.jpg"
import framephoto from "../assets/frame.png"
import "./Home.css"
import connectimg from "../assets/connect-alumni.webp"
import news from "../assets/carrer and employment.jpg"
import whyconnectimg from "../assets/whyconnect.jpg"
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate=useNavigate();
  function clickhandler(){
    navigate("/signup");
  }
  return (
    <div>
      <div className="flex  justify-center text-white text-3xl  mx-auto relative mb-52">
        <div className='mt-14'>
          <h1 className='mb-14' >
            <AnimatedText/>
          </h1>
          <div className='flex justify-between '>
            <div className='w-[35rem] relative pop'>

              <img src={framephoto} alt="" width={558} height={300} loading='lazy' className='absolute h-[37rem] w-[35rem] -top-5 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]  rounded-2xl'/>
              <img src={college} alt="" width={558}  height={300} className='absolute grayscale hover:grayscale-0 hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] -top-0 right-5 bottom-6 h-[38rem] w-[35rem] rounded-2xl'/>
          
            </div>
            <div className='w-[40rem] tracking-wide'>
              <p className='text-justify text-slate-500 text-[23px] hover:text-slate-400 transition-all duration-300 '>Welcome to <span className='text-[60px] font-bold text-slate-300  hover:text-slate-100 text-5xl transition-all duration-300 leading-6'>Echo Connect</span> , where college life comes to life! Imagine a space designed just for you—a vibrant hub where you can connect with classmates, collaborate on projects, and explore exciting campus events. Whether you’re seeking study partners, networking opportunities, or a fun group to join, Echo Connect is your gateway to building meaningful relationships that enhance your college experience. Don't navigate the challenges of university life alone; join our community to unlock a world of opportunities, share knowledge, and create unforgettable memories. Dive in and discover how Echo Connect can elevate your college journey today!</p>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className='relative'>
          {/* alumni network */}
          <div className= 'relative flex   text-3xl  mx-auto  mb-52 w-full  p-6'>
            <div className=' w-10/12  max-w-[760px] mx-48 border-t-2 ' >
              <h1 className='text-center mb-10 text-[4rem] font-semibold mt-9 text-slate-50 hover:text-slate-300 hover:scale-105 transition-all duration-300 tracking-wider'>Alumni Network</h1>
             <div >
             <p className='text-slate-500 text-justify text-2xl mb-6 hover:text-slate-400 hover:scale-[1.01] transition-all duration-300 tracking-wide'>
                  Stay in touch with the community that shaped your college experience. Reconnect with fellow alumni, explore mentoring opportunities, and share your career journey with current students. Whether you're looking to give back or find new collaborations, our platform makes it easy to stay engaged. 
                  <br/>
                  <br/>

                  <ul className=' list-disc ml-5 text-2xl'>
                  <li>Mentorship Programs: Find or become a mentor to guide the next generation of students through their academic and career paths.</li>
                  <li>Networking Events: Join virtual and in-person events to meet fellow alumni and expand your professional network.</li>
                  <li>Success Stories: Get inspired by the stories of fellow alumni who have excelled in various industries.</li>
                </ul>            
                </p>
               
             </div>
                
             
             
            </div>
            <div className='w-10/12  max-w-[760px]'>
              <img src={connectimg} alt=""  className='w-[560px] rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-[-8px_2px_209px_10px_#68d391] hover:scale-105 transition-all duration-300 '/>
            </div>
          </div>


          {/* next line  */}
          <div className= 'relative flex   text-3xl  mx-auto  mb-52 w-full  p-6'>
                 <div className='w-10/12  max-w-[760px]  mx-48'>
                   <img src={news} alt=""  className='w-[560px] rounded-2xl shadow-[-21px_-10px_198px_-34px_#702459] hover:shadow-[-18px_-1px_358px_7px_#702459] hover:scale-105 transition-all  duration-300 '/>
                  </div>
              <div className=' w-10/12  max-w-[760px] mr-[10rem] border-t-2 ' >
              <h1 className='text-center mb-10 text-[4rem] font-semibold mt-9 text-slate-50 hover:text-slate-300 hover:scale-105 transition-all duration-300 tracking-wide leading-[4.5rem]'>Career & Employment News</h1>
             <div >
             <p className='text-slate-500 text-justify text-2xl mb-6 hover:text-slate-400 transition-all duration-300 tracking-wide hover:scale-[1.01]'>
                   Your journey doesn’t end with graduation. With our up-to-date employment news and career resources, Echo Connect ensures you stay ahead in your career path. Explore job postings, company insights, and industry trends tailored to your field. 
                  <br/>
                  <br/>

                  <ul className=' list-disc ml-5 text-2xl'>
                  <li>Job Listings: Browse job openings, internships, and freelance opportunities posted by top employers.</li>
                  <li>Company Spotlights: Get an inside look at companies hiring alumni, including insights into their culture and career paths.</li>
                  <li>Career Tips & Resources: Access exclusive content on resume building, interview preparation, and industry-specific career advice.</li>
                </ul>            
                </p>
               
             </div>
                
             
             
            </div>
          
            
          </div>
          <div className='relative text-white'>
            <img src={whyconnectimg} alt="" className='h-[300px] w-[300px] rounded-full absolute right-[6rem] hover:scale-105 transition-all duration-500 -top-32 shadow-[-22px_19px_50px_-20px_#f6e05e]'/>
            <div className='w-10/12  max-w-[1560px] mt-50 mx-auto'>
                <h1 className='text-center text-[5rem]  border-t-2 border-t-slate-400 font-semibold mb-20'>Why Join Echo Connect?</h1>
                <div className=' mt-9 text-justify  '>
                   <ul className=' text-2xl text-justify tracking-wide '>
                    <li className='mb-2 '> <span className='text-3xl text-slate-300'>Stay Connected</span>: <span className='text-slate-500'>Keep the bonds you made in college alive through our active alumni network.</span></li>
                    <li className='mb-2'><span className='text-3xl text-slate-300'>Unlock Career Growth</span>: <span className='text-slate-500'> Leverage the expertise of your alumni community to advance your career.</span></li>
                     <li className='mb-2'><span className="text-3xl text-slate-300">Make a Difference</span>: <span className='text-slate-500'> Mentor, support, and contribute to the growth of future graduates.</span></li>

                  </ul>
                  <div className='mt-20 mb-20 flex items-center justify-between'>
                    <p className='text-3xl font-medium ml-[65rem]'>Connect now ➤</p>
                  <button onClick={clickhandler} className='glow-on-hover text-2xl  shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] font-bold'>
                    Signup now
                  </button>
                  </div>
                 
                </div>
                
            </div>
             
            </div>


      </div>

    </div>
    
  )
}
export default Home;
