import { useState } from 'react'
import Home from './components/home'
import Conuter from './components/Conuter'
import About from './components/About'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Userform from './components/Userform'
import Userstyle from './components/Userstyle'
// import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const listItem=["Home","ContactUs","Gallray"];

  return (
    <>
      <div className="container">
         <Userstyle />
      </div>
     
    </>
  )
}

export default App
