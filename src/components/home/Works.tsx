import { motion } from "framer-motion";
import { opacity } from "@/lib/motion";
import Work from "../Work";
import works from "../../constants/works";

const Works = () => {
  return (
    <section
      id="works"
      className=" bg-black px-[24px] lg:px-[48px] py-28 xl:max-w-7xl xl:mx-auto"
    >
      <motion.h3
        variants={opacity}
        initial="hidden"
        whileInView="visible"
        custom={1}
        className="text-[32px] lg:text-[56px] xl:text-[68px] text-white font-extrabold mb-24 lg:mb-[10rem]"
      >
        Featured Hacks
      </motion.h3>

      <div className="flex flex-col space-y-20 lg:space-y-[10rem] ">
        {works.map((work, i) => (
          <Work work={work} key={i} />
        ))}
      </div>
    </section>
  );
};
export default Works;
