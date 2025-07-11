import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Users from './Components/Users'
import './App.css'
import Wheather from './Components/Wheather'
import Hookexample from './Components/Hookexample'
import FormExample from './Components/FormExample'
import Toolbar from './Components/Toolbar'
import ThemeContext from './Components/ThemeContext'
import ArrayList from './Components/ArrayList'
ArrayList

function App() {
  const [count, setCount] = useState(0);
//  const themeContext = createContext("");
  const [theme,setTheme]=useState("dark");
    

  return (
    <>
  {/* <Wheather /> */}
  {/* <Hookexample /> */}
  {/* <FormExample /> */}
  
<ArrayList />
    <button onClick={()=>{
      alert(theme)
        setTheme(theme=='dark'?'light':'dark');
      }}>
        Current Theme {theme}
      </button>
    <ThemeContext value={theme}>
        <Toolbar />
    </ThemeContext>
    </>
  )
}

export default App
