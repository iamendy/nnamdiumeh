import { motion } from "framer-motion";
import { slideUp, opacity, hero, slideUpHero } from "@/lib/motion";

const About = () => {
  return (
    <>
      <section className="px-[24px] lg:px-[48px] flex flex-col space-y-9 xl:max-w-7xl xl:mx-auto lg:space-y-16 pt-48 pb-28 lg:pt-[250px] lg:pb-[200px]">
        <div className="mb-[8rem]">
          {/* Mobile animation */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.4 },
            }}
            viewport={{ once: true }}
            className="lg:hidden text-[38px] font-semibold leading-tight mb-9"
          >
            <h1>Hello, I am Nnamdi, a developer by heart.</h1>
          </motion.div>

          {/* Desktop animation */}
          <motion.div
            variants={hero}
            initial="hidden"
            animate="visible"
            className="hidden lg:block text-[38px] lg:text-[72px] font-semibold lg:leading-[1.25em] lg:w-[70%] leading-tight mb-9 lg:mb-24 whitespace-pre"
          >
            <motion.div
              variants={slideUpHero}
              custom={1}
              className="lg:flex whitespace-pre xl:text-[88px]"
            >
              <h1 className="mr-5">Hello,</h1>{" "}
              <motion.h1 variants={opacity} custom={1}>
                I am Nnamdi
              </motion.h1>
            </motion.div>
            <motion.div className="flex xl:text-[88px]">
              <motion.h1 variants={opacity} custom={2} className="mr-5">
                a developer
              </motion.h1>{" "}
              <motion.h1 variants={opacity} custom={3}>
                by heart
              </motion.h1>
            </motion.div>
          </motion.div>

          <div>
            <img src="/img/me.jpg" alt="Nnamdi Umeh" />
          </div>
        </div>

        <div className="space-y-9 lg:space-y-0 lg:grid lg:grid-cols-2">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.2, duration: 0.4 },
            }}
            className="text-[30px] lg:text-[38px] xl:text-[48px] font-semibold leading-[1.4em] "
          >
            About
          </motion.h1>
          <div className="space-y-9 lg:text-[20px] xl:text-[24px]">
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.2, duration: 0.4 },
              }}
              viewport={{ once: true }}
              className="lg:leading-[1.6em]"
            >
              I have always been intrigued by how technology has the ability to
              connect people and enhance our daily experiences. As a digital
              designer, I recognize my duty to develop designs that are
              aesthetically pleasing, user-friendly, intuitive, and accessible
              to all.
            </motion.p>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3, duration: 0.4 },
              }}
              viewport={{ once: true }}
            >
              In my professional experience, I have been fortunate to work on
              diverse projects such as web and mobile app design, as well as
              developing branding and marketing materials for several
              organizations. I am highly motivated to explore new challenges and
              strive to expand my knowledge and abilities.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="flex flex-col space-y-9 lg: lg:space-y-16 py-20 lg:pt-[150px] lg:pb-[200px]">
        <div className="relative h-24 w-full  flex justify-center items-center overflow-hidden z-10">
          <div className="absolute lg:text-[26px] whitespace-nowrap flex top-0 left-0 w-full h-full justify-center items-center space-x-8 lg:space-x-28">
            <div className="likes space-x-8 lg:space-x-28">
              <span>Arsenal FC</span>
              <span>ReactJs</span>
              <span>Action Games</span>
              <span>NextJs</span>
              <span>Nigerian Jollof</span>
              <span>Typescript</span>
              <span>Docker</span>
              <span>Solidity</span>
              <span>Reading</span>
              <span>TailwindCSS</span>
              <span>Hiking</span>
              <span>NodeJs</span>
            </div>
            <div className="likes space-x-8 lg:space-x-28">
              <span>Arsenal FC</span>
              <span>ReactJs</span>
              <span>Action Games</span>
              <span>NextJs</span>
              <span>Nigerian Jollof</span>
              <span>Typescript</span>
              <span>Docker</span>
              <span>Solidity</span>
              <span>Reading</span>
              <span>TailwindCSS</span>
              <span>Hiking</span>
              <span>NodeJs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[24px] flex flex-col space-y-9 py-20 lg:px-[48px] xl:max-w-7xl xl:mx-auto lg:grid lg:grid-cols-2 lg:space-y-0 lg:pb-[200px]">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.4 },
          }}
          className="text-3xl lg:text-[38px] mb-9 font-semibold"
        >
          Experience
        </motion.h3>

        <div className="-mt-8">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.4 },
            }}
            viewport={{ once: true }}
            className="border-b border-b-white/10 py-8 lg:pt-0"
          >
            <h3 className="text-[22px] lg:text-[28px] xl:text-[34px] font-semibold mb-2">
              Tunga
            </h3>
            <p className="mb-4 lg:text-[20px] xl:text-[24px]">
              Senior Frontend Developer
            </p>
            <p className="text-white/50 xl:text-[20px]">2020 - Present</p>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.4 },
            }}
            viewport={{ once: true }}
            className="border-b border-b-white/10 py-8"
          >
            <h3 className="text-[22px] lg:text-[28px] xl:text-[34px] font-semibold mb-2">
              NCK Tech
            </h3>
            <p className="mb-4 lg:text-[20px] xl:text-[24px]">
              Frontend Developer
            </p>
            <p className="text-white/50 xl:text-[20px]">2018 - 2019</p>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.4 },
            }}
            viewport={{ once: true }}
            className="border-b border-b-white/10 py-8"
          >
            <h3 className="text-[22px] lg:text-[28px] xl:text-[34px] font-semibold mb-2">
              The Lazy Print
            </h3>
            <p className="mb-4 lg:text-[20px] xl:text-[24px]">
              Fullstack developer
            </p>
            <p className="text-white/50 xl:text-[20px]">2018</p>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.3, duration: 0.4 },
            }}
            viewport={{ once: true }}
            className="border-b border-b-white/10 py-8"
          >
            <h3 className="text-[22px] lg:text-[28px] xl:text-[34px] font-semibold mb-2">
              Chenjo LTD
            </h3>
            <p className="mb-4 lg:text-[20px] xl:text-[24px]">
              Frontend Developer
            </p>
            <p className="text-white/50 xl:text-[20px]">2017 - 2018</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};
export default About;
