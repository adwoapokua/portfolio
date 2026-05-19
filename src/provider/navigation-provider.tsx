import { BrowserRouter, Route, Routes } from "react-router";
import App from "../App";
import BlogDetails from "@/components/Blog/BlogDetails";
import AllBlogs from "@/components/Blog/AllBlogs";

export function NavigationProvider() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="/blogs" element={<AllBlogs />} />
            <Route path="/blogs/:blogTitle" element={<BlogDetails />} />
        </Routes>
    </BrowserRouter>
  )
}
