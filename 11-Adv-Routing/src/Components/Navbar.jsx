import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 items-center bg-purple-500 justify-between'>
     <h2 className='text-xl font-bold'>Navbar</h2>
     <div className='flex gap-8'>

      <Link className='text-l font-medium' to="/">Home</Link>
      <Link className='text-l font-medium' to="/About">About</Link>
      <Link className='text-l font-medium' to="/Contact">Contact</Link>
      {/* <a className='text-l font-medium' href="/">Home</a>
      <a className='text-l font-bold' href="/about">About</a>
      <a className='text-l font-bold' href="/contact">Contact</a> */}

     </div>
    </div>
  )
}

export default Navbar
