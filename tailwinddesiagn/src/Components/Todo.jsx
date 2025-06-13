import React, { useState,useEffect } from 'react'

function Todo() {
    const [userData,setUserData]=useState([]);
    const [user,setUser] = useState({})
    

    const handleChange=(e)=>{
        setUser({
             
                ...user,
            [e.target.name]:e.target.value,
            
        });
        
    }

    const handleClick=()=>{
        setUserData([...userData,user]);
        setUser({email:"",fname:""});
    }

    useEffect(() => {
        console.log(userData);
    }, [userData]);

    const handleDelete=(index)=>{
       
       setUserData(userData.filter((item,pindex) => pindex !== index));
    }


  return (
    <div>  
        <h1>UserData</h1>
           <form class="w-full max-w-sm">
  <div class="md:flex md:items-center mb-6">
     
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Full Name
      </label>
    </div>
   
    <div class="md:w-2/3">
      <input class="  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={user.fname} onChange={handleChange} name="fname" />
    </div>
  </div>
 <div class="md:flex md:items-center mb-6">
     
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Email
      </label>
    </div>
   
    <div class="md:w-2/3">
      <input class="  border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={user.email}  onChange={handleChange} name="email" />
    </div>
  </div>
 
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
     <button
      type="button"
      class="bg-blue hover:bg-purple-600 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500"
    onClick={handleClick}>
      Add
    </button>
    </div>
  </div>
            </form>
<h1>Users Details</h1>
<table >
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      
    </tr>
  </thead>
  <tbody>
        {
            userData.map((item,index)=>(
                    <tr>
                        <td>{item.fname}</td>
                        <td>{item.email}</td>
                        <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                    </tr>
            ))
        }
  </tbody>
</table>
</div>
  )
}

export default Todo