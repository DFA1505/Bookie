import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const PopUp = ({orderPopUp,handleOrderPopUp}) => {
  return (
    <div>
      {
        orderPopUp &&(
           <div className='h-screen w-screen fixed top-0 left-0 z-20 backdrop-blur-sm'>
            <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 dark:text-white duration-200 p-4 rounded-md shadow-md w-[300px]'>
                <div className='flex items-center justify-between'>
                    <h1>Order Your Book</h1>
                    <div>
                        <IoCloseOutline className='text-3xl cursor-pointer ' onClick={()=>handleOrderPopUp(false)}/>
                    </div>
                </div>
                <div className='mt-4'>
                    <input type="text" placeholder='Name' className='w-full p-2 rounded-md mb-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1'/>
                    <input type="email" placeholder='Email' className='w-full p-2 rounded-md mb-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1'/>
                    <input type="text" placeholder='Phone Number' className='w-full p-2 rounded-md mb-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1'/>
                </div>
            </div>
           </div> 
        )
    }
    </div>
  )
}

export default PopUp
