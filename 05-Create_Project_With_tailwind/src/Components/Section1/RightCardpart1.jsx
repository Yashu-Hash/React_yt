import React from 'react'

const RightCardpart1 = (props) => {

    // console.log(props);
  return (
   
      <div className="top-0 left-0 absolute h-full w-full p-8 flex flex-col justify-between ">

        <h3 className="bg-white rounded-full h-10 w-10 flex justify-center items-center txt-xl font-semibold">{props.id+1}</h3>
        <div>
            <p className='text-xl font-semibold leading-relaxed text-white-900 text-white mb-14'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est magnam doloribus aspernatur culpa sapiente quas.
            </p>

            <div className='flex justify-between'>

                <button className='bg-blue-500 text-white rounded-full px-8 py-3 font-medium text-lg'>
                  {props.tag}

                </button>

                <button  className='bg-blue-500 text-white rounded-full px-4 py-3 font-medium text-lg'>
                    <i className ="ri-arrow-right-line"></i>
                </button>
            </div>
        </div>
      </div>
  )
}

export default RightCardpart1
