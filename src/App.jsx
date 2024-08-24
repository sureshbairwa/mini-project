import { useState } from 'react'
import Home from "./components/Home"
import Header from './components/Header'
import Navbar from './components/Navbar'
import Clock from './components/clock/Clock'
import AnalogClock from './components/Analog Clock/AnalogClock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='' >
        <Header/>

        <Navbar/>
        <Home/>
       
        <Clock/>
        <AnalogClock/>
        
        
      </div>
      
    </>
  )
}

export default App
