import { FaArrowRight } from "react-icons/fa";
import { blogs } from "./blogs";

const featuredBlog = blogs[0];

function Mobile() {
  return (
    <div className="px-4 py-8">

      <div className="flex items-center justify-between mb-2">
        <p className="text-2xl font-semibold text-black">Blog</p>
        <a href="./blogs" className="flex items-center gap-1.5 text-sm text-secondary">
          See all <FaArrowRight className="size-3 mt-0.5" />
        </a>
      </div>

      <p className="text-sm text-secondary leading-relaxed mb-6">
        Thoughts, learnings, and insights from my journey in EdTech, Software
        Engineering and Machine Learning.
      </p>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">

        <img
          src="./blog1.jpg"
          alt="Featured blog"
          className="w-full h-48 object-cover"
        />

        <div className="px-5 py-6 flex flex-col gap-2.5">
          <p className="text-xs text-primary-foreground">{featuredBlog.date}</p>

          <p className="text-xl font-bold leading-snug">{featuredBlog.title}</p>

          <p className="text-sm text-secondary leading-relaxed">
            {featuredBlog.content.substring(0, 180)}…
          </p>

          <a
            href="./"
            className="flex items-center gap-1.5 text-sm text-primary-foreground mt-1"
          >
            Read more <FaArrowRight className="size-3 mt-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;