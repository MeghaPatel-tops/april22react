import React from 'react'
import About from './About'
import Home from './Home'


function Mainbox() {
  return (
    <div><div class="container  h-96 flex flex-row">
        <About class="basis-64"></About>
        <Home ></Home>
    </div>
</div>
  )
}

export default Mainbox