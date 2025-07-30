import React, { useState } from 'react'
import axios from 'axios';

function Empcreate() {
  const [formData,setFormData]=useState({
    'empname':'',
    'email':'',
    'pwd':'',
    'contact':'',
    'adharid':'',
    'panid':'',
    'pimage':''
  });
  const [errorMsg ,setErrorMsg]=useState({});

  const hadleChange = (e)=>{
     const {name,value}=e.target;
     
     
     setFormData(
     {
       ...formData,
      [name]:value
     }
     )
  }

  const handleClick=async(e)=>{
    e.preventDefault();
    console.log(formData);
    let errorlog= validation(formData)
    setErrorMsg(errorlog);
    console.log(errorlog)
     if (Object.keys(errorlog).length === 0) {
            let result = await axios.post("http://localhost:5000/employee",formData);
           if(result){
             alert("Form submitted successfully!")
           }
            
        } else {
          
            console.log('Form submission failed due to validation errors.');
        }
    
  }
  const validation= (data)=>{
    const error = {};
      if(!data.empname.trim()){
          error.empname="Empoyee Name is Required"
      }
      else if(data.empname.length<4){
          error.empname="Enter Valid Name 'John'";
      }
      //email validation
      if(!data.email){
        error.email="Email Required"
      }
      else if(!/\S+@\S+\.\S+/.test(data.email)){
        error.email="Enter valid email ex:'john@gmail.com'"
      }

      //password
      if(!data.pwd){
        error.pwd="Password Required";
      }
      else if(data.pwd.length<8){
        error.pwd="Password must be at least 8 characters long";
      }
      //contact 
      if(!data.contact && data.contact.length<10){
        error.contact="Enter Valid contact Number";
      }

      //adharid
     
      if(!data.adharid && data.adharid.length<12){
        error.adharid="Enter Valid AdharId";
      }
      //pancard
     
      if(!data.panid && data.panid.length<10){
        error.panid="Enter Valid Panid";
      }
      //img 
      if(!data.pimage){
        error.pimage="choose profile image";
      }
      return error;
  }

  return (
    <div>
        <h1>Create Employee</h1>
        <form>
          <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="empname" onChange={hadleChange} />
   <p className='text-danger'>{errorMsg.empname}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={hadleChange}/>
   <p className='text-danger'>{errorMsg.email}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="pwd" onChange={hadleChange} />
    <p className='text-danger'>{errorMsg.pwd}</p>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Contact</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={hadleChange} name="contact"/><p className='text-danger'>{errorMsg.contact}</p>
  </div>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">AdharId Number</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='adharid' onChange={hadleChange} />
    <p className='text-danger'>{errorMsg.adharid}</p>
  </div>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Pancard Id</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="panid" onChange={hadleChange} />
    <p className='text-danger'>{errorMsg.panid}</p>
  </div>
   <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Profile Image</label>
    <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={hadleChange} name="pimage"/>
    <p className='text-danger'>{errorMsg.pimage}</p>
  </div> 
  
  <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    </div>
  )
}

export default Empcreate