import Blogs from "@/components/home/Blogs";
import Works from "@/components/home/Works";
import Slides from "@/components/home/Slides";
import Hero from "@/components/home/Hero";
import { motion } from "framer-motion";

import { fadeSlideUp } from "@/lib/motion";
export default function Home() {
  return (
    <>
      <Hero />

      <Slides />

      <section className=" bg-black px-[24px] lg:px-[48px] py-28 xl:max-w-7xl xl:mx-auto">
        <div className="space-y-9 lg:space-y-0 lg:grid lg:grid-cols-2">
          <div>
            <motion.h1
              variants={fadeSlideUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              className="text-[30px] lg:text-[38px] xl:text-[48px] font-semibold leading-[1.4em] "
            >
              Strengths
            </motion.h1>
          </div>
          <div className="space-y-9 lg:text-[20px] xl:text-[24px]">
            <motion.p
              variants={fadeSlideUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
              className="lg:leading-[1.6em]"
            >
              I have built successful products for clients and businesses
              ranging from marketing websites to complex solutions with focus on
              fast, elegant, and accessible user experiences.
            </motion.p>

            <motion.p
              variants={fadeSlideUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              Equipped with just the right tools, and can absolutely function
              independently of them to deliver fast, resilient solutions
              optimized for scale - from UI designs to pixel perfect results.
            </motion.p>

            <motion.p
              variants={fadeSlideUp}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              Passionate about web development. I enjoy contributing to projects
              that makes a difference and helping others create success.
            </motion.p>
          </div>
        </div>
      </section>

      <Works />

      <Blogs />
    </>
  );
}
