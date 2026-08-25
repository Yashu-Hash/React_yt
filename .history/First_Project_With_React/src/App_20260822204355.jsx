import React from 'react'
import { Bookmark } from 'lucide-react';

const App = () => {
  return (
    <div className='parent'>
      <div className='card'>
         <div className='top'>
          <img src="https://imgs.search.brave.com/wCsXkphbgTVitOK7NR_O8ZwD54_tPmUxKCDNQ7XMQY8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWFtYXpvbi1sb2dv/LWljb24tc3ZnLWRv/d25sb2FkLXBuZy00/NDk3ODE2LnBuZz9m/PXdlYnAmdz0xMjg"
           alt="Description" />
          <button>Save<Bookmark /></button>
         </div>
        <div className='center'>
        </div>
        <div className='bottom'>
        </div>
         </div>
    </div>
  )
}

export default App
