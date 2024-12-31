import React, { useState } from 'react'
import { useToast } from "@/hooks/use-toast"


const addblog = () => {
  let [title , Settitle] = useState()
  let [slug , Setslug] = useState()
  let [image , Setimage] = useState()
  let [author , Setauthor] = useState()
  let [date , Setdate] = useState()
  let [content , Setcontent] = useState()
  const {toast} = useToast()
  const addtheblog = async()=>{
    if (!title || !slug || !image || !author || !date || !content){
      toast({variant : "destructive", title : "All fields required"})
    }else{
      let response = await fetch("/api/addblog", {
        method : "POST",
        headers : {"Content-type" : "application/json"},
        body : JSON.stringify({title,slug,image,author,date,content})
      })
      let data = await response.json()
      if (data.response === "Slugexist"){
        toast({variant : "destructive", title : "All fields required"})
      }else if (data.response === "success"){
        toast({ variant: "success",title: "Blog added successfully!"})
      }
    }
  }
  return (
    <div className='mt-7 w-[90vw] mx-auto text-black p-4 flex flex-col gap-4'>
    <div>
       <div><label htmlFor="title" className='text-lg text-white'>Title</label></div>
       <div><input id='title' type="text" className='w-full p-4 rounded-lg bg-gray-800 text-white' onChange={(e)=>{Settitle(e.target.value)}}/></div>
      </div>

      <div>
       <div><label htmlFor="slug" className='text-lg text-white'>Slug</label></div>
       <div><input id='slug' type="text" className='w-full p-4 rounded-lg bg-gray-800 text-white' onChange={(e)=>{Setslug(e.target.value)}}/></div>
      </div>

      <div>
       <div><label htmlFor="img" className='text-lg text-white'>Img</label></div>
       <div><input id='img' type="text" className='w-full p-4 rounded-lg bg-gray-800 text-white' onChange={(e)=>{Setimage(e.target.value)}}/></div>
      </div>

      <div>
       <div><label htmlFor="author" className='text-lg text-white'>Author</label></div>
       <div><input id='author' type="text" className='w-full p-4 rounded-lg bg-gray-800 text-white' onChange={(e)=>{Setauthor(e.target.value)}}/></div>
      </div>

      <div>
       <div><label htmlFor="date" className='text-lg text-white'>Date</label></div>
       <div><input id='date' type="text" className='w-full p-4 rounded-lg bg-gray-800 text-white' onChange={(e)=>{Setdate(e.target.value)}}/></div>
      </div>

      <div>
       <div><label htmlFor="content" className='text-lg text-white'>Content</label></div>
       <div><textarea id = "content" type="text" className='w-full p-4 rounded-lg bg-gray-800 text-white' onChange={(e)=>{Setcontent(e.target.value)}}/></div>
      </div>
      <button className='bg-green-600 text-white cursor-pointer p-4' onClick={addtheblog}>Add Blog</button>
    </div>
  )
}
// Hey everyone, My name is Amritpreet Singh, born and brought up in Amritsar, Punjab, India. In this blogpost, I will be sharing my incentives to start blogging and my learning journey so far. From my early childhood, it was my aspiration to become a software engineer, though I didn't do anything focused towards my career-goal, but one thing that I did well is that I performed really well in school and developed strong foundation in mathematics and physics. After completing my high school in 2021 in science stream, I decided to pursue my further studies abroad in Canada. Therefore, I enrolled my self in Computer-Networking diploma at Georgian College in Barrie, Ontario. After studying Computers a little bit, I developed my string interest in programming. But, unlike my interest, my program as the name suggest, was more focused  towards computer networking. So, I started learning programming and web development from online tutorials, books and of course AI (mainly chatgpt). After learning web development, I thought it would be a great idea to make a portfolio website to showcase my skills to the potential employers. I started making my website, and there I realised that I can add blogs in that as well. So from here, I decided to make blogs and the first blog, I am writing in about my journey. This blog is not too long, but I will be making coding blogs in near future. Considering my skills, I have learned Html, Css, Javascript, React, Next.js, Node.js, Express.js, Python, MongoDB, Docker, Git and Github and currently learning Aws and jenkins for Devops.   
export default addblog
