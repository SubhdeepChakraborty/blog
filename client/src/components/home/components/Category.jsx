import React from 'react'
import {Link} from "react-router-dom"

const Category = () => {
  return (
    <div className=" md:flex bg-white rounded-3xl xl:rounded-full shadow-lg items-center p-4 justify-center gap-8">
      {/* links */}
      <div className="flex flex-1 mb-4 sm:mb-0">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 text-center items-center w-full">
          <Link
            to={"/posts"}
            className="hover:text-blue-500 hover:text-under font-medium relative group"
          >
            All post{" "}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link
            to={"/posts?cat=web"}
            className="hover:text-blue-500 hover:text-under font-medium relative group w-full"
          >
            Web design{" "}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link
            to={"/posts?cat=dev"}
            className="hover:text-blue-500 hover:text-under font-medium relative group lg:hidden xl:inline-block"
          >
            Development
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link
            to={"/posts?cat=base"}
            className="hover:text-blue-500 hover:text-under font-medium relative group"
          >
            Databases
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link
            to={"/posts?cat=ai"}
            className="hover:text-blue-500 hover:text-under font-medium relative group lg:hidden xl:inline-block"
          >
            Hot topics
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
          </Link>
          <Link
            to={"/posts?cat=ai"}
            className="hover:text-blue-500 hover:text-under font-medium relative group"
          >
            Trending
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
          </Link>
        </div>
      </div>
      <span className="text-xl font-medium hidden sm:inline-block">|</span>
      {/* search */}
      <div className="relative">
        {/* Optional search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg px-4 pr-10 py-2 text-sm text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

export default Category
