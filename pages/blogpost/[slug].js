import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useToast } from "@/hooks/use-toast"

const Slug = ({login,Setlogin, userdetails, Setuserdetails}) => {
  const [blog, setBlog] = useState(null);
  const [comments, Setcomments] = useState(null);
  const [loading, Setloading] = useState(false)
  const [usercomment, Setusercomment] = useState()
  const router = useRouter();
  const { slug } = router.query;
  const { toast } = useToast()

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const response = await fetch("/api/getblog", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug }),
        });
        const data = await response.json();
        setBlog(data);
        Setcomments(data.comments)
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <div className="fixed flex inset-0 items-center justify-center"><div className='text-xl font-semibold'>Loading...</div></div>;
  }

  const addComment = async()=>{
    if (!login){
      toast({ variant: "destructive",title: "Please Login to add comments!"})
    }else{
      Setloading(true)
      let email = userdetails.email
      const response = await fetch("/api/addcomment", {
        method : "POST",
        headers : {"Content-Type": "application/json"},
        body : JSON.stringify({email,usercomment,slug})
      })
      let data = await response.json()
      if (data.success === true){
        toast({title : "Success! Comment Added"})
        Setcomments(data.blog.comments)
      }else{
        toast({title : "Something went wrong!"})
      }
      Setloading(false)
      Setusercomment("")
    }
  }
  return (
    <>    
    <div className="md:w-[70vw] w-[90vw] mx-auto mt-10 md:p-6 p-3 rounded-lg">
      <div className="flex items-center gap-7 md:flex-nowrap flex-wrap justify-center md:justify-start">
        <div className="md:w-[150px] w-[100px] rounded-lg overflow-hidden">
          <img src={blog.img} alt="" className="object-cover" />
        </div>
        <div>
          <h1 className="lg:text-3xl text-xl font-bold">{blog.title}</h1>
          <div className="flex items-center mt-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
                <img src="/imageTwo.jpeg" alt="" className="object-cover" />
              </div>
              <div>{blog.author}</div>
            </div>
            <div className="text-gray-500">{blog.date}</div>
          </div>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{__html : blog.content}} className='mt-8'></div>
      <h1 className='text-4xl my-4 mt-8 font-bold'>Comments({(blog.comments).length})</h1>
      <div className='my-5'><input type="text" onChange={(e)=>{Setusercomment(e.target.value)}} value={usercomment} className='p-3 text-white w-full bg-transparent border-b-2 border-gray-500' placeholder='Add your Comment'/></div>
      <div className='inline-block bg-purple-700 text-white pt-4 pb-4 pl-6 pr-6 rounded-xl text-sm' onClick={addComment}><button>{loading?<span>Please wait...</span>:<span>Post Comment</span>}</button></div>

      {comments.map(e=>{
        return  <div className='my-5 bg-slate-900 p-3 rounded-lg'>
        <h2 className='text-lg'>{e.name}</h2>
        <div>{e.comment}</div>
        </div>
      })}
     
    </div>
    </>

  );
};

export default Slug;
