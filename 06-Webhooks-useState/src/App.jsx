    import React, { useState } from 'react'

    const App = () => {

    const [num, setNum] = useState(0)

    function increasingNum(){

      setNum(num+1)

    }
    function decreasingNum(){
      setNum(num- 1)
    }
      return (
        <div>
          <h1 className='box'>  {num}</h1>
          <button onClick={increasingNum}>increase</button>
          <button onClick={decreasingNum}>decrease</button>

        </div>
      )
    }

    export default App
