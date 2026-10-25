import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Contact = () => {
  return (
    <div>
      <div className='flex justify-center gap-6 py-5'>
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       to="/Contact/men">Men</Link> 

      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
      to="/Contact/women">Women</Link> 
  <Outlet/>
      </div>
    
    
    </div>
  )
}

export default Contact
