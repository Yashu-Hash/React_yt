import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {


  // using api fetching with help of fetch method

// const getData = async () => {

//   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//   console.log(await response.json())
  
// }


// Ussing api fetching with help of axios method

const [data, setData] = useState([])

const getData =async () => {

  const response = await axios.get('https://picsum.photos/v2/list')


  setData(response.data)
}

  return (

    <div>
      <button onClick={getData}>
        Click Me
      </button>
      <div>
        {data.map(function(elem,idx){

          return <h2>hey , {elem.author} {idx}</h2>
          
        })}
      </div>
    </div>
  )
}

export default App
