import React, { useState } from 'react'
const main= {
    width:"30%",
    display:"flex",
    gap:"10px",
    padding:"10px",
    border:"2px solid black"
    
}
const btn={
    height:"50px",
    width:"50px",
    display:"flex",
    backgroundColor:"yellow",
    justifyContent:"center"
}
const textDiv={
    border:"1px solid black"
}


function Calc() {
    const [ans,setAns] = useState("");
    const [numbers, setNumbers]=useState([]);
   
    const handleChange = (e)=>{
        const {name,value}=e.target;
        setNumbers((prevNumbers)=>{
            return{
            ...prevNumbers,
            [name]:value
        }});
    }

    const calGen = (val)=>{
       let num1 = numbers.num1;
       let num2 = numbers.num2;
       num1=Number(num1);
       num2=Number(num2);
        switch(val){
            case '+':
                setAns(`Addition = ${num1+num2}`)
            break; 
             case '-':
                setAns(`sub = ${num1-num2}`)
            break; 
             case '*':
                setAns(`Mul = ${num1*num2}`)
            break; 
             case '/':
                setAns(`div = ${num1/num2}`)
            break;    
        }
        
        
      
        
          setNumbers((prevNumbers)=>{
            return{
            ...prevNumbers,
            num1:'',
            num2:''
        }});
         console.log(numbers);
        // setAns("");
}

  return (
    <div>
        
        <div >
            <label htmlFor="">Enter Number 1</label>
            <input type="text" name="num1" id="" style={textDiv} onChange={handleChange} value={numbers.num1}  />
            <br />
            <label htmlFor="">Enter Number 2</label>
            <input type="text" name="num2" id="" style={textDiv} onChange={handleChange} value={numbers.num2}  />

            <br />
            <button style={btn} onClick={()=>calGen('+')}>+</button>
            <button style={btn} onClick={()=>calGen('-')}>-</button>
            <button style={btn} onClick={()=>calGen('*')}>*</button>
            <button style={btn} onClick={()=>calGen('/')}>/</button>
            <p>{ans}</p>
        </div>
    </div>
  )
}

export default Calc