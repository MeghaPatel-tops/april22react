import React, { useState } from 'react'

function Subjectlist() {
    const [subject,setSubject]=useState("");
    const [subjectArray,setSubjectArray]=useState([]);

    const handleChange =(e)=>{
        setSubject(e.target.value);
    }

    const handleClick=()=>{
         if (subject.trim() !== "") {
            setSubjectArray([...subjectArray, subject]);
            setSubject("");
        }
         console.log(subjectArray);
         
        setSubject("");   
    }
    const delSubject=(indexToDelete)=>{
        const updatedArray = subjectArray.filter((_, index) => index !== indexToDelete);
        setSubjectArray(updatedArray);
    }

  return (
    <div>
        <fieldset style={{border:'5px solid black',padding:"20px"}}>
            <legend><h1>Subject Add</h1></legend>
            <label htmlFor="">Enter Subject</label>
            <input type="text" name="subname" id="" style={{border:'2px solid black'}} onChange={handleChange} value={subject}/>
            <br />
            <input type="button" value="Add" style={{border:'2px solid black',padding:"10px 20px"}} onClick={handleClick}/>
        </fieldset>
        <div className="tablediv" style={{border:'5px solid black',padding:"20px",margin:"40px"}}>
        <table style={{border:'2px solid black'}}>
            <thead>
                <tr>
                <th>Subject List</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
                subjectArray.map((item,index,subjectArray)=>(
                    <tr>
                        <td>{item}</td>
                        <td></td>
                        <td><button onClick={()=>delSubject(index)}>Delete</button></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Subjectlist