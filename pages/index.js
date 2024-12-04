import Typed from 'typed.js';
import React from 'react';
import { Button } from "@/components/ui/button";
import { FaCogs } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import Link from "next/link"
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";





export default function Home() {

  const el = React.useRef(null);
  React.useEffect(() => {
    AOS.init();
    const typed = new Typed(el.current, {
      strings: ['Web Developer.', 'Programmer.'],
      typeSpeed: 50,
      loop : true,
      backDelay : 500,
      backSpeed : 50
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
   <>
   <div>
   <section className="flex justify-around items-center my-12 flex-wrap xl:flex-nowrap w-[95vw] xl:w-full xl:gap-0 gap-10 bg-">
    <div data-aos="fade-up"
     data-aos-duration="3000">
      <h2 className="text-white=600 text-2xl my-4">&lt; &gt;</h2>
      <h1 className="xl:text-7xl text-4xl font-bold">Hi, I am <span className="text-purple-500">Amrit</span> and</h1>
      <p className="xl:text-5xl text-3xl my-4">I am a passionate </p>
      <p className="xl:text-5xl text-3xl my-4"><span className="text-purple-200" ref={el}></span></p>
      <div className="flex gap-8 my-8">
        <Link href={"/#skills"}><div><Button className = "bg-purple-600 text-white p-7 transition-all hover:bg-purple-400">Skills</Button></div></Link>
        <Link href={""}><div><Button className = "bg-purple-600 text-white p-7 transition-all hover:bg-purple-400">Projects</Button></div></Link>
      </div>
      <h2 className="text-white=600 text-2xl my-4">&lt; /&gt;</h2>
      </div>
    <div data-aos="fade-up"
     data-aos-duration="3000">
      <img src="/imageTwo.jpeg" alt="" className="xl:w-[400px] w-[200px] lg:w-[300px] rounded-[100px]"/>
    </div>
    </section>
    <div>
 <img src="/cloud.png" alt="" className='opacity-10'/>
    </div>
   </div>

  
   <section className="bg-slate-900 p-7 py-28" id="skills" >
    <h1 className="text-center text-4xl font-bold" >My Core Skills</h1>
    <div className="flex md:w-[95vw] my-16 mx-auto justify-around items-center xl:flex-nowrap flex-wrap xl:gap-0 gap-10">
    
    <div className="xl:w-1/4 md:w-3/4 w-[80vw] transition-all relative hover:translate-y-[-10px]">
    <div data-aos="fade-up" className=" w-full bg-transparent rounded-md border-2 border-purple-600 p-8 h-[430px] transition-all hover:bg-purple-900 hover:translate-y-4">
    <div className="text-8xl my-4"><FaCode /></div>
    <h1 className="text-center font-bold text-4xl ">Frontend Development</h1>
    <p className="my-5 leading-7">Crafting responsive and interactive user interfaces using technologies like React, Next.js, and Tailwind CSS and many more.</p>
    </div>
    </div>

    <div className="xl:w-1/4 md:w-3/4 w-[80vw] transition-all relative hover:translate-y-[-10px]">
    <div data-aos="fade-up" className="w-full bg-transparent rounded-md border-2 border-purple-600 p-8 h-[430px] transition-all hover:bg-purple-900">
    <div className="text-8xl my-4"><FaCogs /></div>
    <h1 className="text-center font-bold text-4xl ">Backend Development</h1>
    <p className="my-5 leading-7">Building robust and scalable server-side applications using Node.js, Express, and MongoDB.</p>
    </div>
    </div>
   
    <div className="xl:w-1/4 md:w-3/4 w-[80vw] transition-all relative hover:translate-y-[-10px]">
    <div data-aos="fade-up" className="w-full bg-transparent rounded-md border-2 border-purple-600 p-8 h-[430px] transition-all hover:bg-purple-900">
    <div className="text-8xl my-4"><FaCodeBranch /></div>
    <h1 className="text-center font-bold text-4xl ">API's and Databases</h1>
    <p className="my-5 leading-7">Crafting seamless connections between robust databases and powerful APIs to drive efficient, scalable, and secure applications.</p>
    </div>
    </div>

    </div>
   <h1 data-aos="fade-up" className="text-center font-bold text-4xl my-16"><span>Tech Stack </span></h1>
   <div  data-aos="fade-up" className="grid xl:grid-cols-4 gap-10 xl:w-[80vw] my-7 mx-auto w-full grid-cols-1 md:grid-cols-2">
 
    <div  data-aos="fade-up" className="p-6 bg-gradient-to-br from-black to-transparent rounded-lg transition-all hover:bg-purple-900">
     <div  data-aos="fade-up" className="text-9xl"><FaHtml5 className="mx-auto"/></div>
     <h1  className="text-center font-bold my-4 text-4xl">HTML</h1>
    </div>


    <div data-aos="fade-up" className=" p-6 bg-gradient-to-br from-black to-transparent rounded-lg hover:bg-purple-900">
     <div data-aos="fade-up" className="text-9xl"><IoLogoCss3  className="mx-auto"/></div>
     <h1 className="text-center font-bold my-4 text-4xl">CSS</h1>
    </div>

    <div  data-aos="fade-up" className=" p-6 bg-gradient-to-br from-black to-transparent rounded-lg hover:bg-purple-900">
     <div  data-aos="fade-up" className="text-9xl"><IoLogoJavascript className="mx-auto"/></div>
     <h1 className="text-center font-bold my-4 text-4xl">JAVASCRIPT</h1>
    </div>

    <div data-aos="fade-up" className=" p-6 bg-gradient-to-br from-black to-transparent rounded-lg hover:bg-purple-900">
     <div data-aos="fade-up" className="text-9xl"><FaReact  className="mx-auto"/></div>
     <h1 className="text-center font-bold my-4 text-4xl">REACT</h1>
    </div>

    <div data-aos="fade-up" className=" p-6 bg-gradient-to-br from-black to-transparent rounded-lg hover:bg-purple-900">
     <div data-aos="fade-up" className="text-9xl"><SiNextdotjs  className="mx-auto"/></div>
     <h1 className="text-center font-bold my-4 text-4xl">NEXT JS</h1>
    </div>

    <div data-aos="fade-up" className=" p-6 bg-gradient-to-br from-black to-transparent rounded-lg hover:bg-purple-900">
     <div data-aos="fade-up" className="text-9xl"><SiNodedotjs  className="mx-auto"/></div>
     <h1 className="text-center font-bold my-4 text-4xl">NODE JS</h1>
    </div>


    <div data-aos="fade-up" className=" p-6 bg-gradient-to-br from-black to-transparent rounded-lg hover:bg-purple-900">
     <div data-aos="fade-up" className="text-9xl"><SiExpress  className="mx-auto"/></div>
     <h1 className="text-center font-bold my-4 text-4xl">EXPRESS JS</h1>
    </div>


    <div data-aos="fade-up" className=" p-6 bg-gradient-to-br from-black to-transparent rounded-lg hover:bg-purple-900">
     <div data-aos="fade-up" className="text-9xl"><SiMongodb className="mx-auto"/></div>
     <h1 className="text-center font-bold my-4 text-4xl">MONGODB</h1>
    </div>

   </div>
   </section>
    <div id='contact'></div>
   <div data-aos="fade-up" className="flex justify-around items-center xl:flex-nowrap flex-wrap pt-16" >
    <div data-aos="fade-up"><img src="/rb_2336.png" alt="" className="xl:w-[500px] md:w-[300px] w-[200px] animate-updown"/></div>
    <section data-aos="fade-up" className="text-white=600 body-font relative xl:w-[50%] md:w-[80%] w-full">
  <div data-aos="fade-up" className="px-5 xl:py-24 py-16">
    <div data-aos="fade-up" className="flex flex-col text-center w-full mb-12">
      <h1 data-aos="fade-up" className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white=900">Contact Me</h1>
      <p data-aos="fade-up" className="xl:w-2/3 mx-auto leading-relaxed text-base">Looking forward for a positive response.</p>
    </div>
    <div data-aos="fade-up" className="xl:w-full md:w-full mx-auto">
      <div data-aos="fade-up" className="flex flex-wrap -m-2">
        <div data-aos="fade-up" className="p-2 md:w-1/2 w-full">
          <div data-aos="fade-up" className="relative">
            <label data-aos="fade-up" htmlFor="name" className="leading-7 text-sm text-white=600">Name</label>
            <input data-aos="fade-up" type="text" id="name" name="name" className="w-full bg-white=100 bg-opacity-50 rounded border border-white=300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-white=700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-black"/>
          </div>
        </div>
        <div data-aos="fade-up" className="p-2 md:w-1/2 w-full">
          <div data-aos="fade-up" className="relative">
            <label data-aos="fade-up" htmlFor="email" className="leading-7 text-sm text-white=600">Email</label>
            <input data-aos="fade-up" type="email" id="email" name="email" className="w-full bg-white=100 bg-opacity-50 rounded border border-white=300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 text-base outline-none text-white=700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out text-black"/>
          </div>
        </div>
        <div data-aos="fade-up" className="p-2 w-full">
          <div data-aos="fade-up" className="relative">
            <label data-aos="fade-up" htmlFor="message" className="leading-7 text-sm text-white=600">Message</label>
            <textarea data-aos="fade-up" id="message" name="message" className="w-full bg-white=100 bg-opacity-50 rounded border border-white=300 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-white=700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out text-black"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Send</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-white=200 text-center">
          
        </div>
      </div>
    </div>
  </div>
</section>
   </div>
    </>
  )
}
