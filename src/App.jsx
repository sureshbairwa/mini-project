import { useState } from 'react'
import Home from "./components/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='' >
        <Home/>
        {/* <h1 className='text-5xl underline'>hi</h1> */}
        
      </div>
      
    </>
  )
}

export default App
