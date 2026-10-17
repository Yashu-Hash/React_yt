import React from 'react'
import { useState } from 'react'

const App = () => {

const [num, setNum] = useState(1)

  const btnClick = () => {
    setNum(prev => prev+3)
    console.log('button clicked')
  }

  return (
    <div>
      <h1>{num}</h1>

      <button onClick={btnClick}> Click Me</button>
      
    </div>
  )
}

export default App
