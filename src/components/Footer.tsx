import Arrow from "./icons/Arrow";
import { motion, useScroll } from "framer-motion";
import { slideUp } from "@/lib/motion";
const Footer = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.section
        style={{ opacity: scrollYProgress }}
        className=" bg-black px-[24px] lg:px-[48px] py-28 xl:max-w-7xl xl:mx-auto"
      >
        <div className="lg:grid lg:grid-cols-2">
          <div className="flex flex-col">
            <div>
              <h1 className="text-[56px] lg:text-[80px] xl:text-[88px] font-semibold leading-[0.9em]">
                Let’s
              </h1>
              <h1 className="text-[56px] lg:text-[80px] xl:text-[88px] font-semibold leading-[0.9em]">
                work
              </h1>
              <h1 className="text-[56px] lg:text-[80px] xl:text-[88px] font-semibold leading-[0.9em]">
                together
              </h1>
            </div>

            <div className="py-9 space-y-4">
              <div className="w-full h-5 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                  />
                </svg>
              </div>

              <div className="flex justify-end ">
                <a
                  href="#"
                  className="lg:text-xl lg:-translate-x-10 xl:text-2xl hover:scale-[105%] p-1 transition-all inline-block"
                >
                  hey@nnamdiumeh.dev
                </a>
              </div>
            </div>
          </div>

          <div className="lg:h-full lg:pt-[6rem]">
            <p className="text-center self-center lg:text-left lg:text-xl lg:w-[70%] xl:w-[65%] lg:ml-auto">
              I'm currently available for new work. Let me know if you're
              looking for a digital designer. Let’s talk about the next big
              thing!
            </p>
          </div>
        </div>
      </motion.section>

      <hr className="border-t border-t-white/20 w-[calc(100%-48px)] mx-auto mb-8 lg:mb-5 px-[24px] lg:px-[48px]" />

      <footer className="flex flex-col justify-between px-[24px] lg:flex-row-reverse lg:items-center lg:px-[48px] py-5 lg:py-10 space-y-8 lg:space-y-0">
        <div className="flex items-center justify-between lg:space-x-6">
          <motion.a
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            custom={1}
            href="https://linkedin.com/in/iamendy"
            target="_blank"
            className="flex items-center hover:animate-pulse"
          >
            <span>LinkedIn</span> &nbsp; <Arrow />
          </motion.a>
          <motion.a
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            custom={1.5}
            href="https://twitter.com/nnamdipremium"
            target="blank"
            className="flex items-center hover:animate-pulse"
          >
            <span>Twitter</span> &nbsp; <Arrow />
          </motion.a>
          <motion.a
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            href="https://resume.io/r/nBWabjUEK"
            target="_blank"
            className="flex items-center hover:animate-pulse"
          >
            <span>Resume</span> &nbsp; <Arrow />
          </motion.a>
        </div>
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          className="text-center my-4 lg:my-0"
        >
          <span className=""> &copy; Nnamdi Umeh ❤️</span>
        </motion.div>
      </footer>
    </>
  );
};
export default Footer;
