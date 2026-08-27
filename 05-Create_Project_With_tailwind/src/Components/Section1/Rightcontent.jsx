import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  
  return (
    <div id="right" className='h-full w-2/3 flex flex-nowrap overflow-x-auto  gap-4 scroll-auto overflow-auto p-4  '>
      
      {props.users.map(function(elem,idx){

        return <Rightcard key={idx}  img={elem.img} name={elem.name} tag={elem.tag}  id={idx}/>
       })}
   
    </div>
  )
}

export default Rightcontent
