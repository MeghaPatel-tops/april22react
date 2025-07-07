import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function Wheather() {
    const [city,setCity]=useState("");
    let [whetherData ,setWhetherData]=useState(null);
    let key = "04efb7796586439b09f90f8ca239e2de";
    let [lon,setLon]=useState("");
    let [lat,setLat]=useState("");
    const handleChange = async(e)=>{
        
        let city1 = e.target.value;
        try {
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=${key}&units=metric`;
            console.log(url)
            let result = await axios.get(url);
            let res= result.data;

            let lon=res.coord.lon;
            let lat=res.coord.lat;
           
             let url1=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

            let req1 = await axios.get(url1);
            console.log(url1)
            let wData = req1.data;

            setWhetherData(wData.main);
            
           

        } catch (error) {
            
        }
        
    }
    
        useEffect(()=>{
            console.log(whetherData)
        })
  return (
    <div>
    
    <Form.Select aria-label="Default select example" onChange={handleChange}>
      <option >Select City</option>
      <option value="surat">Surat</option>
      <option value="vadodara">Vadodra</option>
      <option value="vapi">Vapi</option>
    </Form.Select>

    
        {(whetherData)?
        <div>
            <h1>Temp:{Math.round(whetherData.temp-273.15) ?? ''}</h1>
             <h1>Humidity:{whetherData.humidity ?? ''}</h1>
             <h1>pressure:{whetherData.pressure ?? ''}</h1>
             <h1>temp_max:{whetherData.temp_max ?? ''}</h1>
             <h1>temp_min:{whetherData.temp_min ?? ''}</h1>
             <h1>sea_level:{whetherData.sea_level ?? ''}</h1>
        </div>
        :"" 
        
        }
    
  

    </div>
  )
}

export default Wheather