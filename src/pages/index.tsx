import { motion, useScroll, useMotionValue, useSpring } from "framer-motion";
import Work from "@/components/Work";
import Arrow from "@/components/icons/Arrow";
import Blog from "@/components/Blog";
import Link from "next/link";

const hero = {
  hidden: {
    y: 30,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.3,
      duration: 1,
      type: "ease",
      staggerChildren: 0.5,
    },
  },
};

const slideUpHero = {
  hidden: {
    y: 20,
  },
  visible: (custom: number) => ({
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: custom * 0.3,
      type: "ease",
    },
  }),
};

const slideUp = {
  hidden: {
    y: 20,
    opacity: [0, 0, 0, 0],
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: [0, 0.4, 0.8, 1],
    transition: {
      delay: custom * 0.1,
      duration: 0.3,
      type: "ease",
    },
  }),
};

const opacity = {
  hidden: {
    opacity: [0, 0, 0, 0],
  },
  visible: (custom: number) => ({
    opacity: [0, 0.4, 0.8, 1],
    transition: {
      delay: custom * 0.1,
    },
  }),
};

export default function Home() {
  const { scrollYProgress, scrollY } = useScroll();
  const y = useSpring(scrollY, { stiffness: 100 });
  const x = useMotionValue(0);

  return (
    <>
      <section className="px-[24px] lg:px-[48px] flex flex-col space-y-9 lg: lg:space-y-16 py-28 lg:pt-[150px] lg:pb-[200px]">
        {/* Desktop view animation */}
        <motion.div
          variants={hero}
          initial="hidden"
          animate="visible"
          className="hidden lg:block lg:font-semibold lg:leading-[1.25em] lg:text-[88px]"
        >
          <motion.div
            variants={slideUpHero}
            custom={1}
            className="flex justify-start flex-nowrap relative w-full"
          >
            <motion.h1 variants={opacity} custom={1} className="mr-5">
              Developing
            </motion.h1>
            <motion.h1 variants={opacity} custom={2} className="">
              emotional
            </motion.h1>
          </motion.div>

          <motion.div
            variants={slideUpHero}
            custom={2}
            className="flex justify-start"
          >
            <motion.h1 variants={opacity} custom={3} className="mr-5">
              digital
            </motion.h1>
            <motion.h1 variants={opacity} custom={3.5} className="mr-5">
              experiences
            </motion.h1>
            <motion.h1 variants={opacity} custom={4}>
              that
            </motion.h1>
          </motion.div>

          <motion.div
            variants={slideUpHero}
            custom={3}
            className="flex justify-start"
          >
            <motion.h1 variants={opacity} custom={4.1} className="mr-5">
              people
            </motion.h1>
            <motion.h1 variants={opacity} custom={4.2}>
              love
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Mobile view animation */}
        <motion.h2
          variants={slideUp}
          custom={6}
          initial="hidden"
          animate="visible"
          className="text-[38px] font-semibold leading-[1.25em] lg:hidden"
        >
          Developing emotional digital experiences that people love
        </motion.h2>

        {/* Desktop view animation */}
        <motion.div variants={hero} className="lg:flex items-center mt-7">
          <div
            className="hidden lg:block leading-[1.7rem] font-medium lg:text-2xl lg:order-2 lg:w-[60%] lg:leading-[1.6em]
          lg:pl-[5rem]"
          >
            <motion.div
              variants={slideUp}
              custom={8}
              initial="hidden"
              animate="visible"
            >
              I'm a web developer with over 4 years experience,
            </motion.div>
            <motion.div
              variants={slideUp}
              custom={10}
              initial="hidden"
              animate="visible"
            >
              based in Lagos, Nigeria. I love to help people refine
            </motion.div>
            <motion.div
              variants={slideUp}
              custom={12}
              initial="hidden"
              animate="visible"
            >
              their ideas, and build products that resonate.
            </motion.div>
          </div>

          {/* Mobile view animation */}
          <motion.div
            variants={slideUp}
            custom={10}
            initial="hidden"
            animate="visible"
            className="lg:hidden leading-[1.7rem] font-medium"
          >
            I'm a web developer with over 4 years experience, based in Lagos,
            Nigeria. I love to help people refine their ideas, and build
            products that resonate.
          </motion.div>

          <div className="mt-12 lg:mt-0 flex justify-end lg:justify-start lg:w-[40%] lg:order-1">
            <motion.div
              variants={opacity}
              custom={15}
              initial="hidden"
              animate="visible"
              className="relative w-16 h-16 lg:w-24 lg:h-24 ml-24 rounded-full overflow-clip border 
          border-white/50 shadow-sm shadow-white 
          "
            >
              <div className="absolute right-0 top-0 bg-white w-5 h-5 rounded-full">
                {" "}
              </div>
              <img src="/img/nnamdi.jpg" alt="Nnamdi Umeh" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="my-[200px] flex flex-col flex-nowrap  items-center overflow-clip">
        <div className="w-[2000px] lg:w-[3000px] flex justify-start">
          <motion.p
            className="element translate-x-[-100px] text-[32px] leading-[1.4em] lg:text-[80px] font-semibold"
            style={{
              translateX: scrollY,
              perspective: "1200px",
            }}
          >
            Product Design • Digital Design • 3D Art • Digital Design • 3D Art•
          </motion.p>
        </div>

        {/* <motion.p
          style={{ x }}
          className="transform text-[32px] leading-[1.4em] lg:text-[80px] font-semibold"
        >
          Illustration • No Code • Art Direction
        </motion.p> */}
      </section>

      <section className=" bg-black px-[24px] lg:px-[48px] py-28">
        <motion.h3
          whileInView={slideUp}
          className="text-[32px] lg:text-[56px] text-white font-extrabold mb-24 lg:mb-[10rem]"
        >
          Featured Work
        </motion.h3>

        <div className="flex flex-col space-y-20 lg:space-y-[10rem] ">
          <Work />

          <Work alt />
        </div>

        <div className="flex items-center justify-center mt-9 lg:mt-24">
          <Link
            href="/works"
            className="rounded-lg border border-white/20 p-3 flex items-center w-fit"
          >
            <span>View Portfolio</span> &nbsp; <Arrow />
          </Link>
        </div>
      </section>

      <section className=" bg-black px-[24px] lg:px-[48px] py-28">
        <h3 className="text-[32px] lg:text-[56px] text-white font-extrabold mb-24 lg:mb-[10rem]">
          Featured Blog
        </h3>

        <div className="flex flex-col space-y-20 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-4">
          <Blog />

          <Blog />

          <Blog />
        </div>

        <div className="flex items-center justify-center mt-9">
          <button className="rounded-lg border border-white/20 p-3 flex items-center w-fit">
            <span>Visit Blog</span> &nbsp; <Arrow />
          </button>
        </div>
      </section>
    </>
  );
}
