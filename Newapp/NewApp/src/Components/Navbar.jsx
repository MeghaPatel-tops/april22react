import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    const navItem= {
        display:'inline-block',
        width:"100px",
    }
  return (
    


  <div className="containerFluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ms-5">
         <Link to="/arraylist">Array Example</Link>
      </li>
      <li class="nav-item ms-5">
         <Link to="/wheatherapp">Wether App</Link>
      </li>
      <li class="nav-item ms-5">
                            <Link to="/hookex">Hook Example</Link>

      </li>
      <li class="nav-item ms-5">
        <Link to="/formex">Form Example</Link>
      </li>
      <li class="nav-item ms-5">
          <Link to="/bootsrapex">Bootstrap Example</Link>
      </li>
      <li class="nav-item ms-5">
          <Link to="/user">User Registration Details</Link>
      </li>
     
      
    </ul>
   
  </div>
</nav>
</div>

  )
}

export default Navbar