import AllBlogs from "./AllBlogs";
import FeaturedBlog from "./FeaturedBlog";

export default function Blogs() {
  return (
    <div className="text-white flex flex-col items-center justify-center">
      <FeaturedBlog />
      <AllBlogs />
    </div>
  );
}
