import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';



function Users() {

const  getData = async()=>{
     const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Network response was not ok');
    //console.log(await res.json())
    const result = await res.json();
    console.log(result)
    //setData(result)
}

// useEffect(()=>{
//   getData()
// })
//   const [data, setData]= useState([]);
  const { data, isLoading, isError,error } = useQuery({queryKey:['products'],queryFn: async () => {
    
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) throw new Error('Network response was not ok');
    //console.log(await res.json())
    const result = await res.json();
    console.log(result)
    return result;
    
}});

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </div>
  );
}

export default Users;
