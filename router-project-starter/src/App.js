import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRouting from "./components/PrivateRouting";
import Contact from "./pages/Contact";


function App() {

  const [IsLoggedIn,setIsLoggedIn]=useState(false);
  return( 
  <div className="flex flex-col  w-screen bg-richblack-900 h-screen overflow-x-hidden box-border mx-auto items-center">
    <Navbar IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route  path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
      <Route path="/dashboard" element={
        <PrivateRouting IsLoggedIn={IsLoggedIn}>
              <Dashboard/>
        </PrivateRouting>
        
        }/>
    </Routes>
  </div>);
}

export default App;
