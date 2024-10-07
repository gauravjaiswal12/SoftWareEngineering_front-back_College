import React from 'react'
import loginImg from "../assets/iconic.jpg"
import Template from '../components/Template'


const Login = ({setIsLoggedIn}) => {
  return (
    <Template
        title="Welcome back"
        desc="Build skills for today,tomorrow and  beyond"   
        desc2="Education to future-proof your career" 
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login;
