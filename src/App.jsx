import { useState } from 'react'
import Home from "./components/Home"
import Header from './components/Header'
import Navbar from './components/Navbar'
import Clock from './components/clock/Clock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='' >
        <Header/>

        <Navbar/>
        <Home/>
        {/* <h1 className='text-5xl underline'>hi</h1> */}
        <Clock/>
        
        
      </div>
      
    </>
  )
}

export default App
