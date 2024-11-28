import React from 'react'
import { Button } from './ui/button'
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"




const Navbar = () => {
  return (
    <div className='flex p-6 justify-between w-[95vw] border-b-2 m-auto backdrop-blur-lg sticky top-0 z-20 items-center'>
      <div className="text-3xl font-bold mx-4">Port<span className='text-purple-600'>folio</span></div>
      <div className="hidden lg:flex gap-7 text-md font-semibold items-center justify-between">
        <Link href={"/"}><div className='transition-all hover:text-purple-600 hover:cursor-pointer'>Home</div></Link>
        <Link href={"/#contact"}><div className='transition-all hover:text-purple-600 hover:cursor-pointer'>Contact</div></Link>
        <Link href={"/"}><div className='transition-all hover:text-purple-600 hover:cursor-pointer'>About</div></Link>
        <Link href={"/blogs"}><div className='transition-all hover:text-purple-600 hover:cursor-pointer'>Blogs</div></Link>
        <div className="flex gap-3">
        <Link href={"/login"}><div><Button variant="outline">Login</Button></div></Link>
        <Link href={"/signup"}><div><Button variant="outline">Signup</Button></div></Link>
        </div>
      </div>
        <div className='lg:hidden'>
        <Sheet>
    <SheetTrigger><RxHamburgerMenu className='text-xl text-white'/></SheetTrigger>
  <SheetContent>
    <SheetHeader className="text-xl">
      <SheetTitle className="mt-5"><span className='text-purple-600 text-2xl'>Amrit</span>'s Port<span>Folio</span></SheetTitle>
      <SheetDescription>
        <div className='flex flex-col gap-4 mt-5 text-white text-xl'>
        <div className='text-center'><Link href={"/"} className='transition-all hover:text-purple-600'>Home</Link></div>
        <div className='text-center'><Link href={"/#contact"} className='transition-all hover:text-purple-600'>Contact</Link></div>
        <div className='text-center'><Link href={"/"} className='transition-all hover:text-purple-600'>About</Link></div>
        <div className='text-center'><Link href={"/blogs"} className='transition-all hover:text-purple-600'>Blogs</Link></div>
        <div className="flex gap-3 mx-auto mt-6">
        <div><Link href={"/login"}><Button variant="outline">Login</Button></Link></div>
        <div><Link href={"/signup"}><Button variant="outline">Signup</Button></Link></div>
        </div>
        </div>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>

    </div>
  )
}

export default Navbar
