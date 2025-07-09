import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Users from './Components/Users'
import './App.css'
import Wheather from './Components/Wheather'
import Hookexample from './Components/Hookexample'
import FormExample from './Components/FormExample'

function App() {
  const [count, setCount] = useState(0)
    

  return (
    <>
  {/* <Wheather /> */}
  {/* <Hookexample /> */}
  <FormExample />
    </>
  )
}

export default App
