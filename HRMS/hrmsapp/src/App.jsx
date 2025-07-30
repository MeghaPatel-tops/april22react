import { useState } from 'react'
import { BrowserRouter, Route, Router ,Outlet, Routes} from 'react-router-dom'
// import Nav from './Components/template/Nav'
// import Aside from './Components/template/Aside'
// import Footer from './Components/template/footer'
import Payroll from './Components/Employee/Payroll'
import Empindex from './Components/Employee/Empindex'
import Empcreate from './Components/Employee/Empcreate'
import Home from './Components/home'
import Login from './Components/Employee/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
          <Route path='/'  element={<Login /> }></Route>
          <Route path='/home'  element={<Home /> }></Route>
           <Route path='/employee'  element={<Empindex /> }></Route>
          <Route path='/employeecreate'  element={<Empcreate /> }></Route>
          <Route path='/payroll' element={<Payroll />}></Route>
          
        </Routes>
    </>
  )
}

export default App
