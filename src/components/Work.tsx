import Arrow from "@/components/icons/Arrow";
import { motion } from "framer-motion";
import Link from "next/link";

const Work = ({ alt = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{
        opacity: 1,
        y: -20,
        transition: { duration: 0.8 },
      }}
      className={`lg:w-[80%] lg:flex group ${alt && "lg:ml-auto"}`}
    >
      <div
        className={`w-full transition-all overflow-hidden ${alt && "order-2"}`}
      >
        <Link href="/works/job-description">
          <img
            src="/img/job-alert.webp"
            alt="job-alert"
            className="group-hover:scale-105 transition-all"
          />
        </Link>
      </div>

      <Link
        href="/works/job-description"
        className={`lg:order-1 ${alt ? "mr-5" : "lg:ml-5"}`}
      >
        <div
          className={`flex justify-between my-3 lg:my-0 lg:space-y-2 lg:flex-col ${
            alt && "items-end"
          }`}
        >
          <h3 className="lg:text-3xl flex items-center ">
            Job Portal &nbsp; <Arrow />
          </h3>
          <span className="border w-fit border-white/40 text-xs rounded-xl p-2 leading-none">
            UI & UX Design
          </span>
        </div>

        <p
          className={`lg:mt-5 lg:w-[70%] lg:text-xl  ${
            alt && "lg:ml-auto lg:text-right"
          }`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          aspernatur distinctio excepturi veritatis eum alias!
        </p>
      </Link>
    </motion.div>
  );
};
export default Work;
