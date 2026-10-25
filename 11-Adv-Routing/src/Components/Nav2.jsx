import React from 'react'
import { useNavigate } from 'react-router-dom'

const Nav2 = () => {

const useNav = useNavigate();

  return (
    <div className='flex py-2 px-4 items-center 
    '>

  <button onClick={()=> useNav('/')}
    className="btn bg-amber-400 p-4 m-4 active:scale-95 rounded cursor-pointer"
    > Back To Homepage</button>

         <button onClick={()=> useNav(-1)}
       className="btn  bg-amber-400 p-4 m-4 active:scale-95 rounded cursor-pointer">Go backward</button>
      <button onClick={()=> useNav(1)}
       className="btn bg-amber-400 p-4 m-4 active:scale-95 rounded cursor-pointer">Go forward</button>
     
    </div>
  )
}

export default Nav2
