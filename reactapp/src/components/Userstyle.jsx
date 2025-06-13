import React from 'react'
import './userstyle.css'
import style from './styelC.module.css'

function Userstyle() {
    const pStyle={
        backgroundColor:"black",
        color:"white"
    }
  return (
    <div>
        <h1 style={{backgroundColor:"gray",textAlign:"center"}}>Inline css Example in react</h1>
        <p style={pStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa expedita quas sit vitae? Ab, perspiciatis reiciendis quia dignissimos alias, sequi neque facere culpa incidunt vitae laboriosam, dolorum deleniti magni?</p>
        <div className="box"></div>
        <div className={style.box1}>Styled Components (CSS-in-JS)</div>
    </div>
  )
}

export default Userstyle