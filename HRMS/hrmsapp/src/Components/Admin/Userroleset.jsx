import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Userroleset() {
    const navigate = useNavigate()
  const [Employee,setEmployee]=useState([]);
  const [data,SetData]=useState({});

  const handleChange = (e)=>{
        let {name,value}=e.target;
        SetData({
            ...data,
            [name]:value
        })
  }
  const handleClick = async()=>{
    console.log(data);
    
      let getEmpRole = await axios.get('http://localhost:5000/role_permision?empid='+data.empid);
      
      
      
      getEmpRole = getEmpRole.data[0];
      let newRole ={
            userRoleId:data.userrole,
            empid:data.empid
        };
      if(getEmpRole){
        console.log(getEmpRole);  
        let deleteRole = await axios.delete('http://localhost:5000/role_permision/'+getEmpRole.id);
        
        
        console.log(newRole);
        
        let userRole = await axios.post('http://localhost:5000/role_permision/'+newRole);
        navigate('/home')
      }
      else{
        console.log(newRole);
        
        let userRole1 = await axios.post('http://localhost:5000/role_permision/',newRole);
        navigate('/home')
      }
    
  }
const fetchEmployee = async()=>{
    let allEmp = await axios.get('http://localhost:5000/employee');
    allEmp = allEmp.data;
    setEmployee(allEmp)
}
  useEffect(()=>{
    fetchEmployee();
  },[]);
  return (
    <div className='p-5'>
        <h1>Apply role to Users</h1>
        <fieldset className="p-3 bg-light border border-rounded">
            <legend>Assign Role</legend>
            <label htmlFor="">Select Employee:</label>
            <select name="empid" id=""  className='ms-5' onChange={handleChange}>
                {
                    Employee.map((index)=>(
                        <option value={index.id}>{index.empname}</option>
                    ))
                }
            </select>
            <br /><br />
            <label htmlFor="">Enter Role</label>
            <input list="roles" name="userrole" id="browser" className='ms-5' onChange={handleChange}></input>
            <datalist id="roles">
                <option value="1">Admin</option>
                <option value="2">HR</option>
                <option value="3">Employee</option>
            </datalist>
            <br /><br /><br />
            <input type="button" value="Submit" onClick={handleClick} />
        </fieldset>
    </div>
  )
}

export default Userroleset