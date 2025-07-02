import React, { useEffect, useState } from 'react'

function Userdata() {
   const [users,setUsers]= useState([]);
   const [user,setUser]= useState({}); 

   const handleChange = (e)=>{
        setUser({...user,
            
            [e.target.name] : e.target.value,
        
        }
        )
      }

    const handleClick =()=>{
        //console.log(user);

    setUsers((prevUsers)=>[
        ...prevUsers,
        user
    ])

        setUser({uname:"",email:"",pass:""});
        
    }

    useEffect(()=>{
        console.log(users);
    })
    
    
  return (
    <div>
        <form class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        User Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="uname" onChange={handleChange} value={user.uname}/>
      
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Email
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name"  name="email" type="text" onChange={handleChange} value={user.email}/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" name="pass" type="password" onChange={handleChange} value={user.pass} />
      
    </div>
  </div>
   <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleClick}> 
        Sign Up
      </button>
    </div>
  </div>
  
</form>

<table class="border-collapse border border-gray-400 ...">
  <thead>
    <tr>
      <th class="border border-gray-300 ...">UserName</th>
      <th class="border border-gray-300 ...">Email</th>
    </tr>
  </thead>
  <tbody>
      {
        users.map((item)=>(
        <tr>
                <td class="border border-gray-300 ...">{item.uname}</td>
                 <td class="border border-gray-300 ...">{item.email}</td>
        </tr>
        ))
      }
    
  </tbody>
</table>

    </div>
  )
}

export default Userdata