import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="px-[24px] lg:px-[48px] flex flex-col space-y-9 lg: lg:space-y-16 py-20 lg:pt-[150px] lg:pb-[200px]">
        <div className="mb-[8rem]">
          <h1 className="text-[38px] lg:text-[72px] font-semibold lg:leading-[1.25em] lg:w-[70%] leading-tight mb-9 lg:mb-24">
            Hello, <br className="lg:hidden" /> I am Nnamdi,
            <br className="lg:hidden" /> a developer by heart.
          </h1>

          <div>
            <img src="/img/me.jpg" alt="Nnamdi Umeh" />
          </div>
        </div>

        <div className="space-y-9 lg:space-y-0 lg:grid lg:grid-cols-2">
          <h1 className="text-[30px] lg:text-[38px] font-semibold leading-[1.4em] ">
            About
          </h1>
          <div className="space-y-9 lg:text-[20px]">
            <p className="lg:leading-[1.6em]">
              I have always been intrigued by how technology has the ability to
              connect people and enhance our daily experiences. As a digital
              designer, I recognize my duty to develop designs that are
              aesthetically pleasing, user-friendly, intuitive, and accessible
              to all.
            </p>
            <p>
              In my professional experience, I have been fortunate to work on
              diverse projects such as web and mobile app design, as well as
              developing branding and marketing materials for several
              organizations. I am highly motivated to explore new challenges and
              strive to expand my knowledge and abilities.
            </p>
          </div>
        </div>
      </section>

      <section className="px-[24px] lg:px-[48px] flex flex-col space-y-9 lg: lg:space-y-16 py-20 lg:pt-[150px] lg:pb-[200px]">
        <div className="relative h-24 w-full  flex justify-center items-center overflow-hidden z-10">
          <div className="absolute lg:text-[20px] whitespace-nowrap flex top-0 left-0 w-full h-full justify-center items-center space-x-8 lg:space-x-24">
            <div className="likes space-x-8 lg:space-x-24">
              <span>Arsenal FC</span>
              <span>ReactJs</span>
              <span>NextJs</span>
              <span>Nigerian Jollof</span>
              <span>Typescript</span>
              <span>Solidity</span>
              <span>TailwindCSS</span>
              <span>Hiking</span>
              <span>NodeJs</span>
            </div>
            <div className="likes space-x-8 lg:space-x-24">
              <span>Arsenal FC</span>
              <span>ReactJs</span>
              <span>NextJs</span>
              <span>Nigerian Jollof</span>
              <span>Typescript</span>
              <span>Web3</span>
              <span>Solidity</span>
              <span>TailwindCSS</span>
              <span>Hiking</span>
              <span>NodeJs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[24px] flex flex-col space-y-9 py-20 lg:px-[48px] lg:grid lg:grid-cols-2 lg:space-y-0 lg:pb-[200px]">
        <h3 className="text-3xl lg:text-[38px] mb-9 font-semibold">
          Experience
        </h3>

        <div className="-mt-8">
          <div className="border-b border-b-white/10 py-8 lg:pt-0">
            <h3 className="text-[22px] font-semibold mb-2">Tunga</h3>
            <p className="mb-4">Senior Frontend Developer</p>
            <p className="text-white/50">2020 - Present</p>
          </div>

          <div className="border-b border-b-white/10 py-8">
            <h3 className="text-[22px] font-semibold mb-2">NCK Tech</h3>
            <p className="mb-4">Frontend Developer</p>
            <p className="text-white/50">2018 - 2019</p>
          </div>

          <div className="border-b border-b-white/10 py-8">
            <h3 className="text-[22px] font-semibold mb-2">The Lazy Print</h3>
            <p className="mb-4">Fullstack developer</p>
            <p className="text-white/50">2018</p>
          </div>

          <div className="border-b border-b-white/10 py-8">
            <h3 className="text-[22px] font-semibold mb-2">Chenjo LTD</h3>
            <p className="mb-4">Frontend Developer</p>
            <p className="text-white/50">2017 - 2018</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
