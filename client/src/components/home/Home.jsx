import React from 'react'
import {Link} from "react-router-dom"
import "./home.css"
import Category from './components/Category'

const Home = () => {
  return (
    <div className="mt-4 flex flex-col gap-4 text-gray-400">
      {/* //Breadcrumb */}
      <div className="gap-4 flex">
        <Link to={"/"}>Home</Link>
        <span>.</span>
        <span>Blogs and Articles</span>
      </div>
      {/* //introduction */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div>
          <h1 className="text-2xl font-bold text-gray-50 md:text-5xl lg:text-6xl whitespace-normal text-clip">
            Social media has changed the way we communicate with each other.
          </h1>
          <p className="mt-8 text-md md:text-xl whitespace-normal text-clip">
            while social media helps us communicate more often, it might also
            make our conversations less personal and more complicated.
          </p>
        </div>
        {/* button */}
        <Link to={"/write"} className='relative hidden md:inline-block'>
          <svg viewBox="0 0 200 200" width="200" height="200" className='animate-spin animatedButton'>
            <path
              id="innerCirclePath"
              fill="none"
              d="M 100, 100 m -60, 0 a 60, 60 0 1, 1 120, 0 a 60, 60 0 1,1 -120,0"
            />
            <text className="tracking-widest text-lg" fill="white">
              <textPath xlinkHref="#innerCirclePath" startOffset={"0%"}>
                Write your story.
              </textPath>
              <textPath xlinkHref="#innerCirclePath" startOffset="50%">
                Share your story.
              </textPath>
            </text>
          </svg>
          <button className="cursor-pointer absolute top-0 left-0 right-0 bottom-0 m-auto h-20 w-20 bg-blue-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* categories */}
      <Category />
      {/* //featured post */}
      {/* //post list */}
    </div>
  );
}

export default Home
