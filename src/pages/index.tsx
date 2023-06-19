import { motion, useScroll, useMotionValue, useSpring } from "framer-motion";
import Work from "@/components/Work";
import Arrow from "@/components/icons/Arrow";
import Blog from "@/components/Blog";

export default function Home() {
  const { scrollYProgress, scrollY } = useScroll();
  const y = useSpring(scrollY, { stiffness: 100 });
  const x = useMotionValue(0);

  return (
    <>
      <section className="px-[24px] lg:px-[48px] flex flex-col space-y-9 lg: lg:space-y-16 py-28 lg:pt-[150px] lg:pb-[200px]">
        <h2 className="text-[38px] font-semibold leading-[1.25em] lg:text-[88px]">
          Developing emotional digital experiences that people love
        </h2>

        <div className="lg:flex items-center mt-7">
          <p
            className="leading-[1.7rem] font-medium lg:text-2xl lg:order-2 lg:w-[65%] lg:leading-[1.6em]
          lg:px-5"
          >
            I'm a web developer with over 4 years experience, based in Lagos,
            Nigeria. I love to help people refine their ideas, and build
            products that resonate.
          </p>

          <div className="mt-12 lg:mt-0 flex justify-end lg:justify-start lg:w-[35%] lg:order-1">
            <div
              className="relative w-16 h-16 lg:w-24 lg:h-24 ml-24 rounded-full overflow-clip border 
          border-white/50 shadow-sm shadow-white 
          "
            >
              <div className="absolute right-0 top-0 bg-white w-5 h-5 rounded-full">
                {" "}
              </div>
              <img src="/img/nnamdi.jpg" alt="Nnamdi Umeh" />
            </div>
          </div>
        </div>
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
        <h3 className="text-[32px] lg:text-[56px] text-white font-extrabold mb-24 lg:mb-[10rem]">
          Featured Work
        </h3>

        <div className="flex flex-col space-y-20 lg:space-y-[10rem] ">
          <Work />

          <Work alt />
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

      <section className=" bg-black px-[24px] lg:px-[48px] py-28">
        <div className="lg:grid lg:grid-cols-2">
          <div className="flex flex-col">
            <div>
              <h1 className="text-[56px] lg:text-[80px] font-semibold leading-[0.9em]">
                Let’s
              </h1>
              <h1 className="text-[56px] lg:text-[80px] font-semibold leading-[0.9em]">
                work
              </h1>
              <h1 className="text-[56px] lg:text-[80px] font-semibold leading-[0.9em]">
                together
              </h1>
            </div>

            <div className="py-9 space-y-4">
              <div className="w-full h-5 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
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

              <div className="flex justify-end">
                <a href="#" className="lg:text-xl lg:-translate-x-10">
                  hey@nnamdiumeh.dev
                </a>
              </div>
            </div>
          </div>

          <div className="lg:h-full lg:pt-[6rem]">
            <p className="text-center self-center lg:text-left lg:text-xl lg:w-[70%] lg:ml-auto">
              I'm currently available for new work. Let me know if you're
              looking for a digital designer. Let’s talk about the next big
              thing!
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t border-t-white/20 w-[calc(100%-48px)] mx-auto mb-8 px-[24px] lg:px-[48px]" />

      <footer className="flex flex-col justify-between px-[24px] lg:flex-row-reverse lg:items-center lg:px-[48px] py-5 lg:py-10 space-y-8 lg:space-y-0">
        <div className="flex items-center justify-between lg:space-x-4">
          <a href="#" className="flex items-center">
            <span>LinkedIn</span> &nbsp; <Arrow />
          </a>
          <a href="#" className="flex items-center">
            <span>Twitter</span> &nbsp; <Arrow />
          </a>
          <a href="#" className="flex items-center">
            <span>Resume</span> &nbsp; <Arrow />
          </a>
        </div>
        <div className="text-center my-4 lg:my-0">
          <span className=""> &copy; Nnamdi Umeh</span>
        </div>
      </footer>
    </>
  );
}
