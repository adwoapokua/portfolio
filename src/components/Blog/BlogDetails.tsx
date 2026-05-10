import { useParams } from "react-router";
import { blogs } from "./blogs";
import Header from "../Navigation/Header";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

function BlogDetails() {
    const { blogTitle} = useParams();
    const blog = blogs.find((blog) => blog.title === blogTitle);

  return (
    <div className="bg-accent ">
        <Header/>

        <main className="lg:px-100 lg:py-5 p-5 lg:gap-10 gap-5 pb-10 lg:pb-40 text-primary flex flex-col ">
            <a href="/" className="flex gap-5"> <ArrowLeftIcon className="size-5"></ArrowLeftIcon> Go Back </a>
            <div className="flex flex-col gap-5">
                <p className="text-sm">{blog?.date}</p>
                <div className="font-semibold text-4xl">{blog?.title}</div>
                <div className="w-90 lg:w-full">
                    {
                        blog ? blog.content : "Blog not found"
                    }
                </div>
            </div>
        </main>

        <footer className="border-t border-gray-300 shadow h-15 p-5 text-secondary">
        <div className="flex justify-between">
          <p>© 2025 Adwoa Aboagye. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default BlogDetails
