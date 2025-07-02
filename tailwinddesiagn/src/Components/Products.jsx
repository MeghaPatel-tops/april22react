import React, { useEffect, useState } from 'react'
import axios  from 'axios';

function Products() {
  const imgStyale ={
      height:'100px',
      width:'100px',
      display:'inline-block',
      marginLeft:'20px'
  }
  const [products,setProducts] = useState([]);
  const [singleProduct,setSingleProduct]= useState({})
    const getData=async()=>{
        //const productReq= await fetch('https://fakestoreapi.com/products');
        //const productData = await productReq.json();
        const productReq = await axios.get('https://fakestoreapi.com/products');
        const productData= productReq.data;
        setProducts(productData);
        console.log(productData);
        
    }

    const handleChange = (e)=>{
            setSingleProduct(
              {
                ...singleProduct,
              [e.target.name]:e.target.value
              }
            )
    }

    const handleClick = async()=>{
         singleProduct.id=101;
         console.log(singleProduct)
          const res =await axios.post('https://fakestoreapi.com/products',singleProduct);
          console.log(res.data);
          

          
    }

    useEffect(()=>{
        console.log("here")
        getData();
    },[setProducts])
  return (
    <div>
      <div className="productdiv">
        {
        products.map((item)=>(
          <img src={item.image} alt="" style={imgStyale} />
        ))
      }
      </div>

        <fieldset style={{border:'5px solid black',padding:"20px"}}>
            <legend><h1>Subject Add</h1></legend>
            <label htmlFor="">Enter Productname</label>
            <input type="text" name="title" id="" style={{border:'2px solid black'}} onChange={handleChange} />
            <br />
            <label htmlFor="">Enter Product Price</label>
            <input type="text" name="price" id="" style={{border:'2px solid black'}} onChange={handleChange} />
            <br />
            <label htmlFor="">Enter Decription</label>
            <input type="text" name="description" id="" style={{border:'2px solid black'}} onChange={handleChange} />
            <br />
            <label htmlFor="">Enter Category</label>
            <input type="text" name="category" id="" style={{border:'2px solid black'}} onChange={handleChange} />
            <br />
            <label htmlFor="">Enter image Url</label>
            <input type="text" name="image" id="" style={{border:'2px solid black'}} onChange={handleChange} />
            <br />
            <br />
            <input type="button" value="Add" style={{border:'2px solid black',padding:"10px 20px"}} onClick={handleClick}/>
        </fieldset>

    </div>
    
  )
}

export default Products