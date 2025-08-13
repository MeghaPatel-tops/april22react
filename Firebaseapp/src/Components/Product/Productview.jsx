import React, { useEffect, useState } from 'react'
import {collection, getDocs,deleteDoc,doc} from 'firebase/firestore';
import {db} from '../Firebase';
import { Link } from 'react-router-dom';

function Productview() {
     const [isModalOpen, setIsModalOpen] = useState(false);

        const handleOpenModal = () => {
            setIsModalOpen(true);
        };

        const handleCloseModal = () => {
            setIsModalOpen(false);
        };
    function Modal({ show, onClose, children }) {
        if (!show) {
            return null; // Don't render if not visible
        }

        return (
            <div className="modal-overlay">
                <div className="modal-content">
                    {children}
                    <button onClick={onClose}>Close</button>
                    
                </div>
            </div>
        );
    }
    const [products,setProducts]=useState([]);
    const fetchData = async()=>{
         const querySnapshot = await getDocs(collection(db, "products"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(data);
      
    }
    const deleteProduct= async(id)=>{
        await deleteDoc(doc(db, "products", id));
      alert("Document deleted successfully!");
      fetchData();
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
        <div className="conatiner border p-5">
            <a href='/productcreate' className="btn btn-primary">Add</a>
            <table className="table table-borderd">
                <thead>  <tr>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th colSpan={2}>Action</th>
                </tr></thead>
                <tbody>
                    {
                    products.map((index)=>(
                         <tr>
                            <td>{index.pname}</td>
                            <td>{index.decription}</td>
                            <td>{index.price}</td>
                            <td><img src={index.pimage} alt=""  height={"100px"} width={"100px"}/></td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>deleteProduct(index.id)}>
                                    Delete
                                </button>
                            </td>
                            <td>
                                <Link className='btn btn-success' to={`/productedit/${index.id}`}>Edit Product</Link>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
               
            </table>
            
               
        </div>
    </div>
  )
}

export default Productview