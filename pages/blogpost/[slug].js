import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Slug = () => {
  const [blog, setBlog] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

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
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <div className="fixed flex inset-0 items-center justify-center"><div className='text-xl font-semibold'>Loading...</div></div>;
  }

  return (
    <>    <div className="md:w-[70vw] w-[90vw] mx-auto mt-10 md:p-6 p-3 rounded-lg">
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
    </div>
    </>

  );
};

export default Slug;
