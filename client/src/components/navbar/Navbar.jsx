import React, { useState } from 'react'
import Navbutton from './Navbutton';

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className="w-full md:h-20 flex items-center justify-between">
    {/* Logo */}
      <div className='items-center flex gap-4 font-medium text-amber-100  text-2xl'>
        <img
          src="/bird_2.jpg"
          alt="Logo"
          className="rounded-full w-[70px] h-[70px] object-cover overflow-hidden"
        />
        <span>Slog</span>
      </div>
      {/* Mobile Menu */}
      <div className='md:hidden'>
        <Navbutton open={open} setOpen={setOpen} />
      </div>
      {/* Desktop Menu */}
      <div className='hidden md:flex'>
        D
      </div>
    </div>
  );
}

export default Navbar
