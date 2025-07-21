import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function FormExample() {
    const useText = useRef();
    const count = useRef(0);
    const [text,setText] = useState("");
    const navigate = useNavigate();

    const hasleChange =(e)=>{
         setText(e.target.value);
    }

    useEffect(()=>{
        useText.current.focus()
    })

    const textGet=()=>{
      alert(text)
      navigate('/welcome',{state:{username:text}});
    }

  return (
    <div>
        <label htmlFor="">Enter Your name</label>
        <input type="text" name="" id=""  ref    ={useText} onChange={hasleChange} />
       <button onClick={textGet}>Submit</button>
        <br />
        <button
        onClick={()=>{
           
            count.current= count.current+ 1;
            console.log(`incremnt by ${count.current}`)
        }}
        >Increment</button>
        <p>button licked on <strong>{count.current}</strong> times</p>
    </div>
  )
}

export default FormExample