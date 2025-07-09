import React, { useEffect, useRef } from 'react'

function FormExample() {
    const useText = useRef();
    const count = useRef(0);

    useEffect(()=>{
        useText.current.focus()
    })

  return (
    <div>
        <label htmlFor="">Enter Your name</label>
        <input type="text" name="" id="" ref    ={useText} />

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