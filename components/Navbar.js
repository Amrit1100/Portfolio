import React, { useState } from "react";
import Cookies from 'js-cookie';
import { Button } from "./ui/button";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useToast } from "@/hooks/use-toast";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


const Navbar = ({ login, Setlogin, userdetails, Setuserdetails}) => {
  const { toast } = useToast();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [showdialog, Setshowdialog] = useState(false);

  const makeLogout = () => {
    Setshowdialog(false)
    Setlogin(false);
    Setuserdetails();
    Cookies.remove("islogin")
    Cookies.remove("userdetails")
    toast({ title: "Logout Successful!" });
    setIsSheetOpen(false); // Close the sheet after logout
  };

  

  const handleLinkClick = () => {
    setIsSheetOpen(false); // Close the sheet after link click
  };
  
  const handleLogoutclick = ()=>{
    handleLinkClick()
    Setshowdialog(true)
  }

  return (
    <>
    {showdialog && <div className="fixed inset-0 flex justify-center items-center z-50 bg-[#0000006b]"><div className="bg-[#9a9898] rounded-md p-7 flex justify-center"><div><div className="my-4 text-2xl text-black">Are you sure you want to logout?</div><div className="flex justify-start space-x-6"><button className="p-4 hover:bg-black hover:text-white transition-all rounded-md cursor-pointer bg-white text-black " onClick={()=>{Setshowdialog(false)}}>No</button> <button className="p-4 hover:bg-black transition-all rounded-md cursor-pointer bg-white text-black hover:text-white" onClick={makeLogout}>Yes</button></div></div></div></div>}
    <div className="flex p-4 justify-between w-[95vw] border-b-2 m-auto backdrop-blur-lg sticky top-0 z-20 items-center ">
      <Link href={"/"}>
        <div className="lg:text-3xl text-xl font-bold mx-4">
          Port<span className='text-purple-500'>folio</span>
        </div>
      </Link>
      <div className="hidden lg:flex gap-7 text-md font-semibold items-center justify-between">
        <Link href={"/"}>
          <div className="transition-all hover:text-purple-600 hover:cursor-pointer">Home</div>
        </Link>
        <Link href={"/#contact"}>
          <div className="transition-all hover:text-purple-600 hover:cursor-pointer">Contact</div>
        </Link>
        <Link href={"/"}>
          <div className="transition-all hover:text-purple-600 hover:cursor-pointer">About</div>
        </Link>
        <Link href={"/blogs"}>
          <div className="transition-all hover:text-purple-600 hover:cursor-pointer">Blogs</div>
        </Link>
        <div>
          {login ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MdOutlineAccountCircle className="text-xl" />
                <div>{userdetails.name}</div>
              </div>
              <Button variant="outline" onClick={()=>{Setshowdialog(true)}}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link href={"/login"}>
                <Button variant="outline">Login</Button>
              </Link>
              <Link href={"/signup"}>
                <Button variant="outline">Signup</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="lg:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger>
            <RxHamburgerMenu className="text-xl text-white" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="mt-5">
                <span className="text-purple-600 text-2xl">Amrit</span>'s Port<span>Folio</span>
              </SheetTitle>
            </SheetHeader>
            <SheetDescription>
              <div className="flex flex-col gap-4 mt-5 text-white text-xl">
                <div className="text-center" onClick={handleLinkClick}>
                  <Link href={"/"} className="transition-all hover:text-purple-600">
                    Home
                  </Link>
                </div>
                <div className="text-center" onClick={handleLinkClick}>
                  <Link href={"/#contact"} className="transition-all hover:text-purple-600">
                    Contact
                  </Link>
                </div>
                <div className="text-center" onClick={handleLinkClick}>
                  <Link href={"/"} className="transition-all hover:text-purple-600">
                    About
                  </Link>
                </div>
                <div className="text-center" onClick={handleLinkClick}>
                  <Link href={"/blogs"} className="transition-all hover:text-purple-600">
                    Blogs
                  </Link>
                </div>
                
                <div>
                  {login ? (
                    <div>
                      <div className="flex items-center gap-1 lg:hidden justify-center mb-4">
                        <MdOutlineAccountCircle className="text-xl" />
                        <span>{userdetails.name}</span>
                      </div>
                      <Button variant="outline" onClick={handleLogoutclick}>
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="flex gap-3 mx-auto mt-6 justify-center">
                      <Button variant="outline" onClick={handleLinkClick}>
                        <Link href={"/login"}>Login</Link>
                      </Button>
                      <Button variant="outline" onClick={handleLinkClick}>
                        <Link href={"/signup"}>Signup</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </div>
    </>
  );
};

export default Navbar;
