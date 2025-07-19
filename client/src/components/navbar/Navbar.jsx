import React, { useState, useEffect } from "react";
import Navbutton from "./Navbutton";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const menuItems = [
    { name: "Home", href: "#home", icon: "🏠" },
    { name: "Trending", href: "#trending", icon: "🔥" },
    { name: "Most Popular", href: "#popular", icon: "⭐" },
    { name: "About", href: "#about", icon: "💡" },
  ];

  return (
    <div className="w-full md:h-20 flex items-center justify-between overflow-x-hidden relative">
      {/* Logo */}
      <div className="items-center flex gap-4 font-medium text-amber-100 text-2xl z-50 relative">
        <img
          src="/bird.png"
          alt="Logo"
          className="rounded-full w-[60px] h-[70px] object-cover overflow-hidden shadow-lg"
        />
        <span className="font-bold tracking-wide">NSlog</span>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden z-50 relative">
        <Navbutton open={open} setOpen={setOpen} />

        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl transform transition-transform duration-500 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <img
                src="/bird.png"
                alt="Logo"
                className="rounded-full w-10 h-10 object-cover"
              />
              <span className="text-white font-bold text-xl">NSlog</span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="px-6 py-8">
            <nav className="space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-4 text-gray-300 hover:text-white hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:scale-105 group`}
                  style={{
                    animationDelay: open ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-lg font-medium">{item.name}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </nav>

            {/* Login Button */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <button
                className="w-full py-4 px-6 bg-gradient-to-bl from-sky-950 to-gray-800 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group"
                onClick={() => setOpen(false)}
              >
                <span className="text-2xl group-hover:animate-bounce">➡️</span>
                <span>Login</span>
              </button>
            </div>

            {/* Social Links or Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">Follow us on social media</p>
              <div className="flex justify-center gap-4 mt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-700"
                >
                  <span className="text-xl">🐦</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-300 p-2 rounded-full hover:bg-gray-700"
                >
                  <span className="text-xl">📷</span>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-gray-700"
                >
                  <span className="text-xl">💼</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Menu - Enhanced */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium text-white">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className=" hover:text-amber-100 transition-all duration-300 hover:scale-110 relative group"
          >
            {item.name}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-50 group-hover:w-full transition-all duration-300"></div>
          </a>
        ))}
        <button className="button-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
