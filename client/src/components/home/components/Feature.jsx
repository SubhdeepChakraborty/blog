import React from 'react'
import Img from '../../imageKit/Img'
import {Link} from 'react-router-dom'

// Feature box- Second
const Box = ({src, title, paragraph, number}) => {
  return (
    <div className="flex flex-row items-center justify-center gap-4">
      <div className="rounded-3xl h-[100px] lg:h-[200px] w-1/3 overflow-hidden">
        <Img
          src={src}
          height={100}
          width={"100%"}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-4 w-1/2 h-max justify-evenly">
        <div className="flex flex-col md:flex-row gap-2">
          {/* title */}
          <div className='flex items-center gap-2'>
          <h1 className="font-semibold text-sm md:text-xl">0{number}.</h1>
          <Link className="text-blue-500 lg:text-lg">{title}</Link>
          </div>
          <span className='text-sm md:text-xl'>2 days ago</span>
        </div>
        <div>
          {/* paragraph */}
          <p className=" text-sm md:text-xl font-semibold whitespace-normal text-pretty line-clamp-2 md:line-clamp-3">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
}

const Feature = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Image */}
        <div className="rounded-3xl object-cover overflow-hidden">
          <Img src={"featured1.jpeg"} height={500} width={"100%"} />
        </div>
        {/* Details */}
        <div className="flex items-center gap-2 ">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-500 lg:text-lg">Blogs</Link>
          <span>2 days go</span>
        </div>
        {/* title */}
        <div className="whitespace-normal font-semibold text-xl lg:text-3xl text-clip w-full">
          <Link className="w-full text-pretty">
            A blog is more than just words — it's a space where your thoughts
            find their voice.
          </Link>
        </div>
      </div>
      {/* Other post */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* Second */}
        <Box
          src={"featured2.jpeg"}
          title={"Vision"}
          paragraph={
            "Got a thought you can't wait to share? Pop it into a post and hit publish!"
          }
          number={2}
        />
        <Box
          src={"featured3.jpeg"}
          title={"Inspiration"}
          paragraph={
            "Create polished articles that reflect your expertise and vision."
          }
          number={3}
        />
        <Box
          src={"featured2.jpeg"}
          title={"Vision"}
          paragraph={
            "Got a thought you can't wait to share? Pop it into a post and hit publish!"
          }
          number={4}
        />
      </div>
    </div>
  );
}

export default Feature
