import { FaArrowRight } from "react-icons/fa";
import { blogs } from "./blogs";
import Header from "../Navigation/Header";
import { Link } from "react-router";

function AllBlogs() {
  return (
    <>
      <Header />
      <section className="min-h-screen bg-accent">
        <div className="px-4 md:px-10 lg:px-20 py-10">
          <p className="text-4xl text-black my-4">Blog</p>
          <p className="text-secondary max-w-xl mb-8">
            Thoughts, learnings, and insights from my journey in EdTech,
            Software Engineering and Machine Learning.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <div
                className="bg-white border shadow rounded-2xl flex flex-col"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full rounded-t-2xl h-56 object-cover"
                />
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <p className="text-primary-foreground text-sm">{blog.date}</p>
                  <p className="text-xl font-bold">{blog.title}</p>
                  <p className="text-sm text-secondary flex-1">
                    {blog.content.substring(0, 120)}...
                  </p>
                  <Link to={`/blogs/${blog.title}`} className="text-primary-foreground flex items-center gap-2 text-sm mt-2" > Read more <FaArrowRight className="size-3" /> </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllBlogs;