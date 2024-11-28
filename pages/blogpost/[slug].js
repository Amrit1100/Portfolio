import React, { useEffect, useState } from 'react'


const Slug = ({blog}) => {
  return (
    <div className='w-[70vw] mx-auto mt-10 p-6 rounded-lg'>
      <div className="flex items-center gap-7">
      <div className='w-[150px] rounded-lg overflow-hidden'><img src={blog.img} alt=""  className='object-cover'/></div>
      <div>
     <h1 className='text-3xl font-bold'>{blog.title}</h1>
     <div className="flex items-center mt-4 gap-4">
      <div className="flex items-center gap-2">
     <div className='w-[30px] h-[30px] rounded-full overflow-hidden'><img src="/imageTwo.jpeg" alt="" className='object-cover'/></div>
     <div>{blog.author}</div>
     </div>
     <div className='text-gray-500'>{blog.date}</div>
     </div>

     </div>
      </div>
   
    </div>
  )
}

export default Slug;

export async function getServerSideProps(context){
  const { slug } = context.params;
  console.log(slug)
  let response = await fetch("http://localhost:3000/api/getblog", {
    method : "POST", 
    headers : {"Content-Type" : "application/json"},
    body : JSON.stringify({slug})
  })
  let blog = await response.json()
  return {
    props : {blog}
  }
}
  

  
  
