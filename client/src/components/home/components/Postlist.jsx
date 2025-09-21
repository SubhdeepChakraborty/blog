import Img from "../../imageKit/Img";
import { Link } from "react-router-dom";

const PostItem = ({ title, para, user, topic }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      <div className="flex justify-center flex-col gap-8 flex-1 p-5">
        <h2 className="text-3xl font-bold text-amber-50">
          <Link>{title}</Link>
        </h2>
        <p className="text-xl text-pretty whitespace-normal">{para}</p>
        <Link className="text-blue-500">Read more</Link>
        <div className="flex gap-2 text-lg">
          <span>Written by</span>
          <Link className="text-blue-500">{user}</Link>
          <span>on</span>
          <Link className="text-blue-500">{topic}</Link>
          <span>5 min ago</span>
        </div>
      </div>
      <div className="flex-none hidden xl:block rounded-3xl obejct-cover overflow-hidden">
        <Img src="featured1.jpeg" alt="Post" />
      </div>
    </div>
  );
};

const Postlist = () => {
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-amber-50">Recent Posts</h1>
      <div className="flex flex-col gap-4">
        <PostItem
          title={"Unlocking Creativity Through Daily Writing"}
          para={
            "Writing every day is like exercising your creative muscles,The more you show up, the easier it becomes to find fresh ideas. Daily practice helps you sharpen your voice and gain confidence."
          }
          user={"Subhdeep"}
          topic={"Blogs"}
        />
        <PostItem
          title={"Unlocking Creativity Through Daily Writing"}
          para={
            "Writing every day is like exercising your creative muscles,The more you show up, the easier it becomes to find fresh ideas. Daily practice helps you sharpen your voice and gain confidence."
          }
          user={"Subhdeep"}
          topic={"Blogs"}
        />
        <PostItem
          title={"Unlocking Creativity Through Daily Writing"}
          para={
            "Writing every day is like exercising your creative muscles,The more you show up, the easier it becomes to find fresh ideas. Daily practice helps you sharpen your voice and gain confidence."
          }
          user={"Subhdeep"}
          topic={"Blogs"}
        />
        <PostItem
          title={"Unlocking Creativity Through Daily Writing"}
          para={
            "Writing every day is like exercising your creative muscles,The more you show up, the easier it becomes to find fresh ideas. Daily practice helps you sharpen your voice and gain confidence."
          }
          user={"Subhdeep"}
          topic={"Blogs"}
        />
        <PostItem
          title={"Unlocking Creativity Through Daily Writing"}
          para={
            "Writing every day is like exercising your creative muscles,The more you show up, the easier it becomes to find fresh ideas. Daily practice helps you sharpen your voice and gain confidence."
          }
          user={"Subhdeep"}
          topic={"Blogs"}
        />
      </div>
    </div>
  );
};

export default Postlist;
