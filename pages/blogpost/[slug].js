import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useToast } from "@/hooks/use-toast"

const Slug = ({ login, Setlogin, userdetails, Setuserdetails }) => {
  const [blog, setBlog] = useState(null);
  const [comments, Setcomments] = useState([]);
  const [loading, Setloading] = useState(false);
  const [blogloading, Setblogloading] = useState(true);
  const [usercomment, Setusercomment] = useState("");

  const router = useRouter();
  const { slug } = router.query;
  const { toast } = useToast();

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
        if (data?.comments) Setcomments(data.comments);

        Setblogloading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        Setblogloading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const addComment = async () => {
    if (!login) {
      toast({ variant: "destructive", title: "Please Login to add comments!" });
      return;
    }

    if (!usercomment.trim()) return;

    Setloading(true);

    let username = userdetails.username;

    const response = await fetch("/api/addcomment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, usercomment, slug }),
    });

    const data = await response.json();

    if (data.success === true) {
      toast({ variant: "success", title: "Success! Comment Added" });
      Setcomments(data.blog.comments);
    } else {
      toast({ title: "Something went wrong!" });
    }

    Setloading(false);
    Setusercomment("");
  };

  if (blogloading) {
    return (
      <div className="fixed flex inset-0 items-center justify-center">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="fixed inset-0 flex justify-center items-center">
        Page not found
      </div>
    );
  }

  return (
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

      <div dangerouslySetInnerHTML={{ __html: blog.content }} className="mt-8"></div>

      <h1 className="text-4xl my-4 mt-8 font-bold">
        Comments ({comments?.length || 0})
      </h1>

      <div className="my-5">
        <textarea
          type="text"
          onChange={(e) => Setusercomment(e.target.value)}
          value={usercomment}
          className="p-3 text-white w-full bg-transparent border-b-2 border-gray-500 h-auto"
          placeholder="Add your Comment"
        />
      </div>

      <button
        className={`inline-block ${
          !usercomment.trim()
            ? "bg-gray-600 text-gray-900"
            : "bg-purple-600 text-white"
        } pt-4 pb-4 px-6 rounded-xl text-sm`}
        disabled={!usercomment.trim()}
        onClick={addComment}
      >
        {loading ? "Please wait..." : "Post Comment"}
      </button>

      {comments.map((e, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="bg-purple-600 text-white w-[50px] h-[50px] rounded-full flex items-center justify-center">
            {e.username.slice(0, 1).toUpperCase()}
          </div>

          <div
            className="my-5 p-3 rounded-lg grow"
            style={{ backgroundColor: "#8080801c" }}
          >
            <h2 className="text-md mb-2">@{e.username}</h2>
            <div>{e.comment}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slug;
