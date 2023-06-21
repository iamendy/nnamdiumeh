import Clock from "./icons/Clock";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div
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
          src="/img/job-alert.webp"
          alt="job-alert"
          className="group-hover:scale-105 transition-all"
        />
      </div>

      <div className={`flex flex-col justify-between my-3 space-y-2 lg`}>
        <h3 className="lg:text-lg">
          Build and Deploy a Piggy Bank dApp on Celo
        </h3>

        <div className="flex justify-between items-center w-full">
          <p className="">12 March, 2023</p>
          <p className="flex items-center space-x-1">
            <Clock />
            <span>6 mins</span>
          </p>
        </div>
      </div>

      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur
        distinctio excepturi veritatis eum alias!...
      </p>
    </motion.div>
  );
};
export default Blog;
