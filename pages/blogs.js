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
    {blogs.map(e=>{
       return <Link href={`/blogpost/${e.slug}`} className='cursor-pointer transition-all hover:scale-105'>
      <div className=' overflow-hidden transition-all bg-[#070606] shadow-lg shadow-[gray]'>
        <div className='w-full h-[250px] text-center mx-auto'><img src={e.img} alt="" className='w-full h-full object-cover'/></div> 
        <div className='m-6'>
        <h1 className='mt-3 text-lg font-bold'>{e.title}</h1> 
          <div className="flex my-3 items-center gap-4">
              <div className='flex gap-2 items-center'>
              <div className='w-[30px] h-[30px] rounded-full overflow-hidden'><img src="/imageTwo.jpeg" alt="" className='object-cover rounded-lg'/></div>
              <div className='text-white'>{e.author}</div>
              </div>
              <div className='text-gray-600'>{e.date}</div>
          </div>
          <div className='text-center'><Link href={`/blogpost/${e.slug}`}><Button variant="outline" className="bg-white text-black hover:scale-105 transition-all">Read More</Button></Link></div>
          </div>
      </div>
      </Link>
    })}
    </div>}
    </>
  
  )
}

export default Blogs

