import { FaArrowRight } from "react-icons/fa";
import { blogs } from "./blogs";

const featuredBlog = blogs[0];

function Desktop() {
  return (
    <div className="mx-30">
      <p className="text-4xl text-black my-4">Blog</p>
      <div className="flex justify-between">
        <p className=" text-secondary  w-150 mb-8">Thoughts, learnings, and insights from my journey in EdTech, Software Engineering and Machine Learning.</p>
        <a href="./blogs" className=" flex gap-2 text-lg text-secondary">See all <FaArrowRight className="mt-1 size-5"></FaArrowRight></a>
      </div>
      <div className="w-250 h-120 bg-white rounded-2xl flex">
          <div><img src="./blog1.jpg" alt="project" className="w-350 h-full rounded-l-2xl object-cover"/></div>
          <div className="py-25 px-10 flex flex-col gap-3 w-280">
            <p className="text-primary-foreground">{featuredBlog.date}</p>
            <p className="text-4xl font-bold">{featuredBlog.title}</p>
            <p className="text-sm text-secondary">{featuredBlog.content.substring(0, 250)}</p>
            <a href="./" className="text-primary-foreground flex gap-2 text-sm">Read more <FaArrowRight className="mt-1 size-3"></FaArrowRight></a>
          </div>
      </div>
    </div>
  )
}

export default Desktop;
