import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [userData,setUserData] = useState({});
  const [error,setError]=useState("");

  const handleChange = (e)=>{
      const {name,value}=e.target;
      setUserData(
        {
          ...userData,
        [name]:value
        }
      )
  }
  const handlClick=async(e)=>{
      e.preventDefault()
      console.log(userData);
      let allUser = await axios.get("http://localhost:5000/employee");
      allUser= allUser.data;
      let currentUser= allUser.filter((index)=>{
             if(index.email==userData.email && index.pwd==userData.pwd){
              return index;
             }
      });

      if(currentUser && currentUser != ""){
         currentUser =currentUser[0];
          localStorage.setItem('user',JSON.stringify(currentUser));
          navigate('/home')
      }
      else{
          setError("Please Enter Valid Details");
      }
      
      
  }
  return (
    <div>
      <div className="container mt-5 p-5 border border-radius " style={{width:'40%'}}>
      <h1 style={{textAlign:'center'}}>Login Form</h1>
      <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handleChange} />
    
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" name="pwd" onChange={handleChange}/>
    </div>
    
    <button type="submit" class="btn btn-primary" onClick={handlClick}>Submit</button>
    <p className='text-danger'>{error}</p>
  </form>
      </div>
    </div>
  )
}

export default Login