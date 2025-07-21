import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Users from './Components/Users'
// import './App.css'
import Wheather from './Components/Wheather'
import Hookexample from './Components/Hookexample'
import FormExample from './Components/FormExample'
import Toolbar from './Components/Toolbar'
import ArrayList from './Components/ArrayList'
import ThemeContext from './Components/themeContext'
import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Welcome from './Components/Welcome'
import Bootsrapex from './Components/Bootsrapex'
import Userreg from './Components/User/Userreg'
import Userview from './Components/User/Userview'
import Useredit from './Components/User/Useredit'

ArrayList

function App() {
  const [count, setCount] = useState(0);
//  const themeContext = createContext("");
  const [theme,setTheme]=useState("dark");
    

  return (
    <>

    <BrowserRouter>
    <Navbar />
      <Routes>
          <Route path='/arraylist' element={<ArrayList />} ></Route>
          <Route path='/wheatherapp' element={<Wheather />} ></Route>
          <Route path='/hookex' element={<Hookexample />} ></Route>
          <Route path='/formex' element={<FormExample />} ></Route>
          <Route path='/welcome' element={<Welcome />} ></Route>
          <Route path='/bootsrapex' element={<Bootsrapex />} ></Route>
           <Route path='/user/reg' element={<Userreg />} ></Route>
            <Route path='/user' element={<Userview />} ></Route>
            <Route path='/useredit' element={<Useredit />} ></Route>


      </Routes>
    </BrowserRouter>
    {/* <button onClick={()=>{
      alert(theme)
        setTheme(theme=='dark'?'light':'dark');
      }}>
        Current Theme {theme}
      </button>
     */}
    </>
  )
}

export default App
