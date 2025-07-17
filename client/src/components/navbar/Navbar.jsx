import React, { useState } from 'react'
import Navbutton from './Navbutton';
import "./navbar.css"

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className="w-full md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="items-center flex gap-4 font-medium text-amber-100  text-2xl">
        <img
          src="/bird_2.jpg"
          alt="Logo"
          className="rounded-full w-[40px] h-[40px] object-cover overflow-hidden"
        />
        <span>NSlog</span>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden overflow-x-hidden">
        <Navbutton open={open} setOpen={setOpen} />
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute bg-white top-16 transition-all duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
            open ? "right-0" : "-right-full"
          }`}
        >
          <a>Home</a>
          <a>Trending</a>
          <a>Most Popular</a>
          <a>About</a>
          <a>
            <button className="py-2 px-4 rounded-3xl bg-gray-700 cursor-pointer drop text-white">
              Login 👋
            </button>
          </a>
        </div>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium text-white">
        <a>Home</a>
        <a>Trending</a>
        <a>Most Popular</a>
        <a>About</a>
        <a>
          <button className="py-2 px-4 rounded-3xl bg-gray-700 cursor-pointer drop">
            Login 👋
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar
