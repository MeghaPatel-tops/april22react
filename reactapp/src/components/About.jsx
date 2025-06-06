import React from 'react'


function Header(props) {
  return (
    <div><h1>{props.title}</h1></div>
  )
}

function Productcard(props){
     return (
    <div><h1>{props.pname}</h1>
    <h2>Price:{props.price}</h2>
    <h3>Description :{props.desc}</h3>
    </div>
  )
}

function About() {
  return (
    <div>
        <Header title="About Page Load" />
        <Productcard pname="Laptop" price="21000" desc="lenovo" />

    </div>
  )
}

export default About