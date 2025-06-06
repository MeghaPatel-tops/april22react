import React from 'react'

function Card(props) {
  return (
    <div>
        <div className="card">
            <h1>UserName:{props.uname}</h1>
            <hr />
            <h2>Email:{props.email}</h2>
            <hr />
            <h3>Contact:{props.contact}</h3>
        </div>
    </div>
  )
}

export default Card