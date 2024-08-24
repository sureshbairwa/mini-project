import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="">
        <nav className="">
            <ul className='flex justify-start '>
                <li className=' bg-green-400 rounded pl-3 pr-3 pt-1 pb-1'>
                    <a href='#bmical'>BMI Calculater</a>
                </li>
                <li className=' bg-green-400 rounded pl-3 pr-3 pt-1 pb-1'>
                    <a href='#clock'>clock</a>
                </li>
                <li className=' bg-green-400 rounded pl-3 pr-3 pt-1 pb-1'>
                    <a href='#analogclock'>Analog clock</a>
                </li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
