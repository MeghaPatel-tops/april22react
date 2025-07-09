import React, { useEffect, useState } from 'react'



function Hookexample() {
    const [text,setText] = useState("");
    const [count,setCount]=useState(0);
    const [toggle,setToggle] =useState(true);
    const[ctime,setCtime] = useState("");

    const  makeDate = ()=>{
                let todate = new Date();
                //console.log(todate);

                let date = `${todate.getFullYear() }:${todate.getMonth() +1}:${todate.getDate()}:  ${todate.getHours()}:${todate.getMinutes()}:${todate.getSeconds()}`;
                setCtime(date)
                //console.log(date);
        }

    useEffect(()=>{
        let itId;
        console.log("Page render")

        itId = setInterval(makeDate,1000);

        return()=>{
            clearInterval(itId);
            console.log("div remove from page");
        }
    },[toggle])


  return (
    <div>
        <label htmlFor="text">
        </label>
        <input type="text" name="" id="" 
        onChange={(e)=>{
            console.log("State render")
            setText(e.target.value)
        }}  />
        <p>Text:<strong>{text}</strong></p>
        <hr />
        <button
        onClick={()=>{
            setCount(count+1);
        }}
        >Increment</button>
        <p>You click button on <strong>{count}</strong> Time</p>
        <hr />
        <button 
        onClick={()=>{
            setToggle(!toggle);
        }}>
            show hide 
        </button>
        {
            toggle &&(
                <p>Welcome to app {ctime}</p>
            )
        }
        </div>
  )
}

export default Hookexample