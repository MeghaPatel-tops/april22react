import React, { useEffect } from 'react'
import { BrowserRouter, Route, Router ,Outlet, Routes, useNavigate} from 'react-router-dom'
import Nav from '../Components/template/Nav'
import Aside from '../Components/template/Aside'
import Footer from '../Components/template/footer'
import Payroll from '../Components/Employee/Payroll'
import Empindex from '../Components/Employee/Empindex'
import Empcreate from '../Components/Employee/Empcreate'

function Home() {
 const nevigate = useNavigate();
 const userData = localStorage.getItem('user');
  
  useEffect(()=>{
     
    
    console.log("use effect called");
      if(!userData){
        nevigate('/');
      }
  });
  
  return (
    <div>  
      <Nav userData={userData}/>
    <div className="conatiner-fluid d-flex">
    
      <Aside />
     {/* <BrowserRouter> */}
      
       <div className="container p-5 m-5">
         <Routes>
         
        </Routes>
      
      <Outlet />
       </div>
     {/* </BrowserRouter>  */}
    </div>
    <Footer /></div>
  )
}

export default Home