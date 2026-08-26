import React from 'react'

const Rightcard = () => {
  return (
    <div className="h-full overflow-hidden relative w-80 rounded-4xl ">

      <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="working_woman" />
     
      <div className="top-0 left-0 absolute h-full w-full p-8 flex flex-col justify-between ">

        <h3 className="bg-white rounded-full h-10 w-10 flex justify-center items-center txt-xl font-semibold">1</h3>
        <div>
            <p className='text-xl font-semibold leading-relaxed text-white mb-14'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est magnam doloribus aspernatur culpa sapiente quas.
            </p>
            <div>
                <button className='bg-blue-500 text-white rounded-full px-8 py-3 font-medium text-lg'>
                    Satisfied
                </button>
                <button  className='bg-blue-500 text-white rounded-full px-4 py-3 font-medium text-lg'>
                    <i className ="ri-arrow-right-line"></i>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Rightcard
