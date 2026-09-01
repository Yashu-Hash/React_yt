import React from 'react'
import {useEffect,useState} from 'react'

const App = () => {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(100)

useEffect(() => {
  console.log("useEffect called jhala re ")
},[num1])

  return (
    <div > 
      <h1>
        Value of num1 is this {num1}
      </h1>
      <h1>
        Value of num2 is this {num2}
      </h1>

      <button onClick={() => {setNum1(num1 + 1) 
        setNum2(num2 + 10)}}  > 
        Click Me
      </button>
       
    </div>
  )
}

export default App
