import React from 'react'
import { Link } from 'react-router-dom'

function Aside(props) {
  let userid= props.userData.roledata.userRoleId;
  
  return (
    
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark mt-1"  style={{width:'280px',height:'700px'}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      
      <span className="fs-4">Sidebar</span>
    </a>
    <hr />
     <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link" aria-current="page">
          Home
        </a>
      </li>
      <li>
       <Link to="/" className="nav-link text-white" >Dashboard</Link>
      </li>
      {
        (userid==1)?<div> <li>
        
        <Link to="/employee" className="nav-link text-white" >Employee</Link>
      </li>
      <li>
        <Link to="/payroll" className="nav-link text-white" >Payroll</Link>
      </li></div>:''
      }
     
      <li>
        <a href="#" className="nav-link text-white">
          Customers
        </a>
      </li>
    </ul>
    <hr/>
   
  </div>
  )
}

export default Aside