import React from 'react'
import { useNavigate } from 'react-router-dom';

function Nav() {
  const nevigate = useNavigate();
  let cuser=localStorage.getItem('user');

  cuser=JSON.parse(cuser)?? {};
  
  const logout =()=>{
        localStorage.removeItem('user');
        nevigate('/');
  }
  
  return (
    <div> 
   <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item me-2">
          <a className="nav-link" href="">Welcome :{cuser.empname}</a>
        </li>
         <li className="nav-item me-2">
          <button className='nav-link' onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  )
}

export default Nav