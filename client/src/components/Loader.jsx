
import React from 'react'

function Loader() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col items-center'>
        <div className='animate-spin rounded-full h-20 w-20 border-4 border-t-white border-purple-500'></div>
        <p className='mt-4 text-center text-gray-700 font-extrabold'>Wait data is fetching...</p>
      </div>
    </div>
  )
}

export default Loader
