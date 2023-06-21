import Blog from "@/components/Blog";
import { motion } from "framer-motion";
import { opacity } from "@/lib/motion";
import Arrow from "../icons/Arrow";
import blogs from "@/constants";

const Blogs = () => {
  return (
    <section className=" bg-black px-[24px] lg:px-[48px] py-28 xl:max-w-7xl xl:mx-auto">
      <motion.h3
        variants={opacity}
        initial="hidden"
        whileInView="visible"
        custom={1}
        className="text-[32px] lg:text-[56px] xl:text-[68px] text-white font-extrabold mb-24 lg:mb-[10rem]"
      >
        Featured Blog
      </motion.h3>

      <div className="flex flex-col space-y-20 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        {blogs.map((blog) => (
          <Blog blog={blog} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-9">
        <a
          href="https://blog.nnamdiumeh.dev"
          target="_blank"
          className="rounded-lg border border-white/20 p-3 flex items-center w-fit hover:border-white hover:text-white/90 active:text-white transition-colors"
        >
          <span>Visit Blog</span> &nbsp; <Arrow />
        </a>
      </div>
    </section>
  );
};
export default Blogs;
