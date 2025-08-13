import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { doc, getDoc,updateDoc } from "firebase/firestore";
import {db} from '../Firebase';

function Productedit() {
    const {pid,name}= useParams();
    const [product,setProduct]=useState({});
    const [product1,setProduct1]=useState({});
    const nevigate = useNavigate();

    const fetchData= async()=>{
        try {
             const docRef = doc(db, "products", pid); // "products" = collection name
        const docSnap = await getDoc(docRef);
         if(docSnap){
              setProduct(docSnap.data())
         }
        
        } catch (error) {
            console.log(error);
            
        }
    }
      const hadleClick = (e)=>{
        const {name,value}=e.target;
        setProduct1({
            ...product1,
            [name]:value
        })
    }

    const handleClickbtn= async()=>{
        try {
              console.log(product1);
         const docRef = doc(db, "products", pid);
         const result =await updateDoc(docRef, product1);
        //alert("Product updated successfully!");
        console.log(result);
        
        
            nevigate('/product')
       
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchData();
    })
  return (
    <div>
        <div className="main">
           
               <h1>ProductCreate</h1>
              <form method="post" enctype="multipart/form-data">
                
                <div className="form-group">
                    <label for="exampleInputEmail1">ProductName</label>
                    <input type="text" className="form-control" id="" name="pname" onChange={hadleClick} defaultValue={product.pname}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Price</label>
                    <input type="text" className="form-control" id="" name="price" onChange={hadleClick} defaultValue={product.price}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Description</label>
                    <input type="text" className="form-control" id="" name="decription" onChange={hadleClick} defaultValue={product.decription}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Image</label>
                    <input type="url" className="form-control" id="" name="pimage" onChange={hadleClick} defaultValue={product.pimage}/>
                </div>
               
                <button type="button" className="btn btn-primary" name="submit" onClick={handleClickbtn}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Productedit