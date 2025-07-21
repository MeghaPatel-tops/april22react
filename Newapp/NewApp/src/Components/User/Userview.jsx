import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom';

function Userview() {
    const [users,setUsers]=useState([]);
    const navigate = useNavigate();

    const getUsers= async()=>{
        try {
            const userData = await axios.get("http://localhost:5000/users/");
            console.log(userData.data)
            setUsers(userData.data)
        } catch (error) {
            
        }
    }

    const editUser=(id)=>{
        navigate({
          pathname:'/useredit',
          search:`?${createSearchParams({'id':id})}`
        }

        );
    }

    const deleteUser=async(id)=>{
         try {
            const result = await axios.delete(`http://localhost:5000/users/${id}`);
           if(result){
               alert("User details removed");
               getUsers();
           }
         } catch (error) {
          
         }
    }
    useEffect(()=>{
        getUsers();
    },[])
  return (
    <div><div class="container mt-3">
  <h2>User Details</h2>
  <p><a href="/user/reg" className='btn btn-primary'>Add New</a></p>            
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Contact</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((index)=>(
                    <tr>
                        <td>{index.username}</td>
                         <td>{index.email}</td>
                        <td>{index.contact}</td>
                        <td><button className='btn btn-danger' onClick={()=>{deleteUser(index.id)}}>Delete</button></td>
                         <td><button className='btn btn-success' onClick={()=>{editUser(index.id)}}>Edit</button></td>
                    </tr>
            ))
        }
      
     
    </tbody>
  </table>
</div></div>
  )
}

export default Userview