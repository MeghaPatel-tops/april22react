import React, { useMemo } from 'react'

function ArrayList() {
    const Item = ["apple","kiwi",'banana'];
    const proccedItem = useMemo(()=>{
        return [...Item].sort();
    },[Item])
    
  return (
    <div>ArrayList
        {
            proccedItem.map((item)=>(
                <li>{item}</li>
            ))
        }
    </div>
  )
}

export default ArrayList