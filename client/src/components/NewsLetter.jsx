import React from 'react'

function NewsLetter() {
  return (
    <div className='mt-10 flex flex-col items-center justify-center text-center space-y-2 my-27'>

        <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss The Trending Blogs</h1>

        <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to get new and, Latest Blog</p>
        
        <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
            <input className='border border-gray-300 rounded-sm h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' type="text" placeholder='Enter your email id' required/>
            <button type='submit' className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-l-none rounded-r-sm '>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter