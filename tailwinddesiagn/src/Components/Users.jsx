import React from 'react'
import { useQuery } from 'react-query';
async function userData(){
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      return res.json();
 }
function Users() {
  
    const {data,status} = useQuery("users",userData)

 
  return (
    <div>

        {
            data.map((item)=>(
            <h1>{item.name}</h1>
        ))
        }
    </div>
  )
}

export default Users