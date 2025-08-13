import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Productview from './Components/Product/Productview';
import Productedit from './Components/Product/Productedit';
import ProductCreate from './Components/Product/ProductCreate';

import Login from './Components/Login';
import Profile from './Components/Users/Profile';



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      
       <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Productview/>}></Route>
              <Route path='productcreate' element={ <ProductCreate/>}></Route>
              <Route path='login' element={ <Login/>}></Route>
              <Route path='product' element={ <Productview/>}></Route>
              <Route path='/profile' element={ <Profile/>}></Route>
              <Route path='productedit/:pid/' element={ <Productedit/>}></Route>
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
