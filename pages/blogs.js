import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { Button } from '@/components/ui/button'


const Blogs = () => {
    let [blogs, Setblogs] = useState(null)
    let [loading, Setloading] = useState(true)

  useEffect(()=>{
    const fetchBlogs = async()=>{
        try{
            let response = await fetch("/api/blog", {
                method : "POST"
            })
            let data = await response.json()
            console.log(data)
            Setloading(false)
            Setblogs(data)
        }catch(error){
          console.log(error)
            console.log("Error fetching blogs")
        }
    }
    fetchBlogs()

  },[])
  
  return (
   <>
   <h1 className='text-center mt-6 text-3xl'>Blogs</h1>
   {loading && <div className='fixed inset-0 flex justify-center items-center bg-opacity-50r'><div className='text-white text-2xl font-semibold animate-pulse'>Loading...</div></div>}
   {!loading &&  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[80vw] mx-auto mt-6 gap-10">
    <Link href={`/blogpost/${blogs.slug}`} className='cursor-pointer'>
    <div className='rounded-lg overflow-hidden p-4 transition-all'>
      <div className='w-full h-[250px] text-center mx-auto'><img src={blogs.img} alt="" className='w-full h-full object-cover'/></div> 
      <h1 className='mt-3 text-lg font-bold'>{blogs.title}</h1> 
        <div className="flex my-3 items-center gap-4">
            <div className='flex gap-2 items-center'>
            <div className='w-[30px] h-[30px] rounded-full overflow-hidden'><img src="/imageTwo.jpeg" alt="" className='object-cover rounded-lg'/></div>
            <div className='text-white'>{blogs.author}</div>
            </div>
            <div className='text-gray-600'>{blogs.date}</div>
        </div>
        <div className='text-center'><Link href={`/blogpost/${blogs.slug}`}><Button variant="outline">Read More</Button></Link></div>
    </div>
    </Link>
    </div>}
   

    </>
  
  )
}

export default Blogs
