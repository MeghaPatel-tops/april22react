import React, { useState } from 'react'

function Userform() {

    const [uname,setUname]=useState("");
    const [email,setEmail]=useState("");

    const handleUname=(e)=>{
      setUname(e.target.value);
    }

    const handleEmail = (e)=>{
      setEmail(e.target.value);
    }

    const handleClick = ()=>{
      alert(uname);
      alert(email);
    }

  return (
    <div>
        <fieldset>
            <legend>User Form</legend>
            <label htmlFor="">Username</label>
            <input type="text" name="uname" id="" onChange={handleUname} value={uname}/>
            <br />
            <br />
             <label htmlFor="">Email</label>
            <input type="text" name="email" id="" onChange={handleEmail} value={email}  />
            <br />
            <br />
            <input type="button" value="Submit" onClick={handleClick}/>
        </fieldset>
    </div>
  )
}

export default Userform