import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Userreg() {
    const [userData , setUserData]=useState({});
    const navigate = useNavigate();

    const hadleChange = (e) =>{
        const {name,value}=e.target;
        setUserData({
            ...userData,
            [name]:value
        })
    }
    const hadleClick = async()=>{
        try {
            const result = await axios.post("http://localhost:5000/users/",userData);
            console.log(result)
            if(result){
              navigate('/user')
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
      <div className="containerFluid p-5">
        <h1>User Regisration  Form</h1>
        <form>
            <div class="form-group">
    <label for="exampleInputEmail1">User Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" name="username" onChange={hadleChange}/>
   
  </div> 
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email'  onChange={hadleChange}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name='pwd'  onChange={hadleChange}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Contact Number</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Contact" name='contact'  onChange={hadleChange}/>
   
  </div>
  
  <button type="button" class="btn btn-primary" onClick={hadleClick}>Submit</button>
</form>
</div>
  )
}

export default Userreg