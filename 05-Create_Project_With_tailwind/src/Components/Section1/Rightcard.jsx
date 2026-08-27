import React from 'react'
import Rightcardpart1 from './RightCardpart1'

const Rightcard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl ">

      <img className="h-full w-full object-cover" src={props.img} alt="working_woman" />

      <Rightcardpart1 tag={props.tag} id={props.id} />
    </div>
  )
}

export default Rightcard
