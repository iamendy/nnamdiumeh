import { motion } from "framer-motion";
import { opacity } from "@/lib/motion";
import Work from "../Work";
import Link from "next/link";
import Arrow from "../icons/Arrow";
import works from "../../constants/works";

const Works = () => {
  return (
    <section className=" bg-black px-[24px] lg:px-[48px] py-28 xl:max-w-7xl xl:mx-auto">
      <motion.h3
        variants={opacity}
        initial="hidden"
        whileInView="visible"
        custom={1}
        className="text-[32px] lg:text-[56px] xl:text-[68px] text-white font-extrabold mb-24 lg:mb-[10rem]"
      >
        Featured Work 🚧🔺
      </motion.h3>

      <div className="flex flex-col space-y-20 lg:space-y-[10rem] ">
        {works.map((work, i) => (
          <Work work={work} key={i} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-9 lg:mt-24">
        <Link
          href="/works"
          className="rounded-lg border border-white/20 p-3 flex items-center w-fit hover:border-white hover:text-white/90 active:text-white transition-colors"
        >
          <span>View Portfolio</span> &nbsp; <Arrow />
        </Link>
      </div>
    </section>
  );
};
export default Works;
