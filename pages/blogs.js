import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { Button } from '@/components/ui/button'

const Blogs = () => {
  const [blogs, Setblogs] = useState([]);
  const [loading, Setloading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        let response = await fetch("/api/blog", {
          method: "POST"
        });

        let data = await response.json();
        Setblogs(data || []);
        Setloading(false);
      } catch (error) {
        console.log("Error fetching blogs:", error);
        Setloading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <h1 className='text-center mt-6 text-3xl'>Blogs</h1>

      {loading && (
        <div className='fixed inset-0 flex justify-center items-center bg-opacity-50'>
          <div className='text-white text-2xl font-semibold animate-pulse'>
            Loading...
          </div>
        </div>
      )}

      {!loading && (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[80vw] mx-auto mt-6 gap-10">

          {blogs.map((e, index) => (
            <Link
              key={index}
              href={`/blogpost/${e.slug}`}
              className='cursor-pointer transition-all hover:scale-105'
            >
              <div className='overflow-hidden transition-all bg-[#070606] shadow-lg shadow-[gray]'>
                
                {/* Blog Image */}
                <div className='w-full h-[250px]'>
                  <img
                    src={e.img}
                    alt={e.title}
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Blog Content */}
                <div className='m-6'>
                  <h1 className='mt-3 text-lg font-bold'>{e.title}</h1>

                  <div className="flex my-3 items-center gap-4">
                    <div className='flex gap-2 items-center'>
                      <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                        <img
                          src="/imageTwo.jpeg"
                          alt={e.author}
                          className='object-cover'
                        />
                      </div>
                      <div className='text-white'>{e.author}</div>
                    </div>
                    <div className='text-gray-600'>{e.date}</div>
                  </div>

                  <div className='text-center'>
                    <Button
                      variant="outline"
                      className="bg-white text-black hover:scale-105 transition-all"
                    >
                      Read More
                    </Button>
                  </div>
                </div>

              </div>
            </Link>
          ))}

        </div>
      )}
    </>
  );
};

export default Blogs;
