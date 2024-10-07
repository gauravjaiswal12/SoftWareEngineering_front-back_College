import React from 'react'
import Template from '../components/Template';
import SignupImg from "../assets/signup.png"

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
        title="Connect, Inspire, Thrive: Join Our Alumni Community Today!"
        desc="Build skills for today,tomorrow and  beyond"   
        desc2="Connect to future-proof your career" 
        image={SignupImg}
        formtype="Signup"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}
export default Signup;
