import React, { useState } from 'react'
import {collection, addDoc} from 'firebase/firestore';
import {db} from '../Firebase';
import { useNavigate } from 'react-router-dom';


function ProductCreate() {
    const [product,setProduct]= useState({});
    const nevigate = useNavigate();

    const hadleClick = (e)=>{
        const {name,value}=e.target;
        setProduct({
            ...product,
            [name]:value
        })
    }

    const handleClickbtn= async()=>{
        console.log(product);
         const result = await addDoc(collection(db, "products"),product);
        if(result){
            nevigate('/product')
        }
    }
  return (
    <div>
         <div className="container">
            <h1>ProductCreate</h1>
              <form method="post" enctype="multipart/form-data">
                
                <div className="form-group">
                    <label for="exampleInputEmail1">ProductName</label>
                    <input type="text" className="form-control" id="" name="pname" onChange={hadleClick}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input type="text" className="form-control" id="" name="price" onChange={hadleClick}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input type="text" className="form-control" id="" name="decription" onChange={hadleClick} />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Image</label>
                    <input type="url" className="form-control" id="" name="pimage" onChange={hadleClick} />
                </div>
               
                <button type="button" className="btn btn-primary" name="submit" onClick={handleClickbtn}>Submit</button>
</form>
         </div>
    </div>
  )
}

export default ProductCreate