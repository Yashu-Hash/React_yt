import React from 'react'

const App = () => {


  //  localStorage.setItem('username', 'Yash More ')

  //   localStorage.setItem('age', '25')


  //  const user = localStorage.getItem('username')


    const userDetails ={
      username:'Yash More',
      age:25,
      email:'Yashmore@gmail.com'
    }


    localStorage.setItem('userDetails',JSON.stringify(userDetails))

   console.log(userDetails)
   

  return (
    <div>
      App
    </div>
  )
}

export default App
