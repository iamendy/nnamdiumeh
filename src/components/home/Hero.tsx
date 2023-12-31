import { motion } from "framer-motion";
import { hero, slideUpHero, opacity, slideUp } from "@/lib/motion";

const Hero = () => {
  return (
    <section className="px-[24px] lg:px-[48px] flex flex-col space-y-9 lg: lg:space-y-16 pt-32 pb-28 lg:pt-[250px] lg:pb-[200px] xl:max-w-7xl xl:mx-auto">
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
            Frontend developer with over 4 years experience,
          </motion.div>
          <motion.div
            variants={slideUp}
            custom={10}
            initial="hidden"
            animate="visible"
          >
            based in Lagos, Nigeria. I love to craft scalable products that help
            10x your business growth.
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
          Nigeria. I love to craft scalable products that help 10x your business
          growth.
        </motion.div>

        <div className="mt-12 lg:mt-0 flex justify-end lg:justify-start lg:w-[40%] lg:order-1">
          <motion.div
            variants={opacity}
            custom={12}
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
  );
};
export default Hero;
