import React from 'react'

const addblog = () => {
  return (
    <div className='mt-7 w-[90vw] mx-auto text-black p-4 flex flex-col gap-4'>
    <div>
       <div><label htmlFor="title" className='text-lg text-white'>Title</label></div>
       <div><input id='title' type="text" className='w-full p-4 rounded-lg bg-gray-800 text-white'/></div>
      </div>

      <div>
       <div><label htmlFor="slug" className='text-lg text-white'>Slug</label></div>
       <div><input id='slug' type="text" className='w-full p-4 rounded-lg bg-gray-800 text-white'/></div>
      </div>

      <div>
       <div><label htmlFor="img" className='text-lg text-white'>Img</label></div>
       <div><input id='img' type="text" className='w-full p-4 rounded-lg bg-gray-800 text-white'/></div>
      </div>

      <div>
       <div><label htmlFor="author" className='text-lg text-white'>Author</label></div>
       <div><input id='author' type="text" className='w-full p-4 rounded-lg bg-gray-800 text-white'/></div>
      </div>

      <div>
       <div><label htmlFor="date" className='text-lg text-white'>Date</label></div>
       <div><input id='date' type="text" className='w-full p-4 rounded-lg bg-gray-800 text-white'/></div>
      </div>

      <div>
       <div><label htmlFor="content" className='text-lg text-white'>Content</label></div>
       <div><textarea id = "content" type="text" className='w-full p-4 rounded-lg bg-gray-800 text-white'/></div>
      </div>

      
      
    </div>
  )
}

export default addblog
