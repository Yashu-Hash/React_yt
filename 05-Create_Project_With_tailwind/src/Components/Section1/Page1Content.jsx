import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1Content = () => {
  return (
    <div className='py-10 px-10  flex items-center gap-10 h-[90vh]
     '>
    <Leftcontent/> 
    <Rightcontent/>
    </div>
  )
}

export default Page1Content
