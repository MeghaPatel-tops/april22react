import React from 'react'
import { Link } from 'react-router-dom'

function Empindex() {
  return (
    <div>
       <div className="d-flex justify-content-between" style={{width:'100%'}}>
            <h1>Employee Details</h1>
            <div className="rigth align-self-end">
                <Link to='/employeeCreate' className='btn btn-primary'>Add New</Link>
            </div>
            
       </div>
       <div className="table table-borderd">
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
                <tr>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                    <td>test</td>
                </tr>
            </div>
    </div>
  )
}

export default Empindex