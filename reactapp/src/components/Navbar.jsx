import React from 'react'
import Card from './Card'

function Navbar(props) {
    
    
  return (
    <div>
        {
            props.list.map((item)=>
                <li>{item}</li>
            )
        }

        <div className="row">
            <Card uname="Megha Patel" email="m@gmail.com" Contact="889898989"/>
             <Card uname="Malay Patel" email="m@gmail.com" Contact="889898989"/>
        </div>
    </div>
  )
}

export default Navbar