import { Link, useParams } from "react-router";
import { blogs } from "./blogs";
import Header from "../Navigation/Header";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { FaArrowLeft } from "react-icons/fa";

function BlogDetails() {
  const { blogTitle } = useParams();
  const blog = blogs.find((blog) => blog.title === blogTitle);

  if (!blog) return (
    <>
      <Header />
      <main className="min-h-screen bg-accent flex flex-col items-center justify-center gap-4">
        <p className="text-xl">Blog not found.</p>
        <Link to="/blogs" className="text-primary-foreground flex justify-center items-center gap-2">
          <FaArrowLeft /> Back to Blogs
        </Link>
      </main>
    </>
  );

  return (
    <div className="bg-accent min-h-screen">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 flex flex-col gap-6 pb-16 lg:pb-40 text-primary">
        <Link to="/blogs" className="flex items-center gap-2 w-fit hover:opacity-70 transition-opacity">
          <ArrowLeftIcon className="size-5" /> Go Back
        </Link>

        <div className="flex flex-col gap-4">
          <p className="text-sm">{blog.date}</p>
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">{blog.title}</h1>

          <div className="w-full h-56 sm:h-72 lg:h-96 overflow-hidden rounded-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full text-sm sm:text-base leading-relaxed flex flex-col gap-4">
            {blog.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph} <br /> </p>
              
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogDetails;