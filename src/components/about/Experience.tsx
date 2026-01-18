import { motion } from "framer-motion";
import { fadeSlideUp } from "@/lib/motion";

const Experience = () => {
  return (
    <section className="px-[24px] flex flex-col space-y-9 py-20 lg:px-[48px] xl:max-w-7xl xl:mx-auto lg:grid lg:grid-cols-2 lg:space-y-0 lg:pb-[200px]">
      <motion.h3
        variants={fadeSlideUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        className="text-3xl lg:text-[38px] mb-9 font-semibold"
      >
        Experience
      </motion.h3>

      <div className="-mt-8">
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          custom={3}
          viewport={{ once: true }}
          className="border-b border-b-white/10 py-8 lg:pt-0"
        >
          <h3 className="text-[22px] lg:text-[28px] xl:text-[34px] font-semibold mb-2">
            Tunga
          </h3>
          <p className="mb-4 lg:text-[20px] xl:text-[24px]">
            Fullstack Engineer
          </p>
          <p className="text-white/50 xl:text-[20px]">2020 - Present</p>
        </motion.div>

        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          custom={3}
          viewport={{ once: true }}
          className="border-b border-b-white/10 py-8"
        >
          <h3 className="text-[22px] lg:text-[28px] xl:text-[34px] font-semibold mb-2">
            NCK Tech
          </h3>
          <p className="mb-4 lg:text-[20px] xl:text-[24px]">
            Frontend Developer
          </p>
          <p className="text-white/50 xl:text-[20px]">2019 - 2020</p>
        </motion.div>

        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          custom={3}
          viewport={{ once: true }}
          className="border-b border-b-white/10 py-8"
        >
          <h3 className="text-[22px] lg:text-[28px] xl:text-[34px] font-semibold mb-2">
            Chenjo LTD
          </h3>
          <p className="mb-4 lg:text-[20px] xl:text-[24px]">
            Frontend Developer
          </p>
          <p className="text-white/50 xl:text-[20px]">2018 - 2019</p>
        </motion.div>
      </div>
    </section>
  );
};
export default Experience;
