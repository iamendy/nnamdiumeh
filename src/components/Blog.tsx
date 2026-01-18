import { motion } from "framer-motion";
import getDate from "@/helpers/formatDate";

interface Blog {
  title: string;
  brief: string;
  slug: string;
  coverImage: string;
  dateAdded: string;
}

const Blog = ({ blog }: { blog: Blog }) => {
  return (
    <motion.a
      href={`${process.env.NEXT_PUBLIC_BLOG_URL}/${blog.slug}`}
      target="_blank"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{
        opacity: 1,
        y: -20,
        transition: { duration: 0.6 },
      }}
      whileHover={{ y: -30 }}
      className=" bg-white/10 p-5 rounded-md cursor-pointer group "
    >
      <div className="w-full overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="group-hover:scale-105 transition-all"
        />
      </div>

      <div className={`flex flex-col justify-between my-3 space-y-2 lg`}>
        <h3 className="lg:text-lg ">{blog.title}</h3>

        <div className="flex justify-between items-center w-full">
          <p className="">{getDate(blog.dateAdded)}</p>
        </div>
      </div>

      <p className="">{blog.brief}</p>
    </motion.a>
  );
};
export default Blog;
