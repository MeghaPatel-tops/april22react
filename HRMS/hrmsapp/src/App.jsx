import { useState } from 'react'
import Nav from './Components/Nav'
import Aside from './Components/Aside'
import Footer from './Components/template/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <div className="conatiner-fluid d-flex">
    
      <Aside />
      
    </div>
    <Footer />
    </>
  )
}

export default App
