import React from 'react'

function Aside() {
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
        <a href="#" className="nav-link text-white">
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" classNameName="nav-link text-white">
          Orders
        </a>
      </li>
      <li>
        <a href="#" classNameName="nav-link text-white">
          Products
        </a>
      </li>
      <li>
        <a href="#" classNameName="nav-link text-white">
          Customers
        </a>
      </li>
    </ul>
    <hr/>
   
  </div>
  )
}

export default Aside