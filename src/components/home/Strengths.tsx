import js from "../../../public/img/logos/javascript.svg";
import ts from "../../../public/img/logos/typescript.svg";
import bootstrap from "../../../public/img/logos/bootstrap.svg";
import css from "../../../public/img/logos/css.svg";
import tailwind from "../../../public/img/logos/tailwind.svg";
import next from "../../../public/img/logos/next.svg";
import laravel from "../../../public/img/logos/laravel.svg";
import react from "../../../public/img/logos/react.svg";
import sass from "../../../public/img/logos/sass.svg";
import hardhat from "../../../public/img/logos/hardhat.svg";
import truffle from "../../../public/img/logos/truffle.svg";
import ethers from "../../../public/img/logos/ethers.svg";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeSlideUp } from "@/lib/motion";

const Strengths = () => {
  return (
    <section className=" bg-black px-[24px] lg:px-[48px] py-28 xl:max-w-7xl xl:mx-auto">
      <div>
        <motion.h1
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          className="text-[30px] lg:text-[38px] xl:text-[48px] font-semibold leading-[1.4em] mb-8"
        >
          Strengths
        </motion.h1>
      </div>

      <div className="flex flex-col gap-y-9 lg:space-y-0 lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-y-9 lg:text-[20px] xl:text-[24px] lg:pt-3">
          <div className="flex flex-col gap-y-6 lg:gap-y-12">
            <div className="flex space-x-6 ">
              <div className="w-12 h-12 flex items-center justify-center lg:w-16 lg:h-13">
                <Image
                  src={js}
                  alt="Javascript"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-12 h-12 flex items-center justify-center lg:w-16 lg:h-13">
                <Image
                  src={ts}
                  alt="Typescript"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex space-x-6 ">
              <div className="w-12 h-12 flex items-center justify-center lg:w-16 lg:h-13">
                <Image
                  src={react}
                  alt="React"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-12 h-12 flex items-center justify-center lg:w-16 lg:h-13">
                <Image
                  src={next}
                  alt="Next Js"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex space-x-6 ">
              <div className="w-12 h-12 flex items-center justify-center lg:w-16 lg:h-13">
                <Image
                  src={css}
                  alt="CSS"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-12 h-12 flex items-center justify-center lg:w-16 lg:h-13">
                <Image
                  src={tailwind}
                  alt="Tailwind CSS"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-12 h-12 flex items-center justify-center lg:w-16 lg:h-13">
                <Image
                  src={bootstrap}
                  alt="Bootstrap"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-12 h-12 flex items-center justify-center lg:w-16 lg:h-13">
                <Image
                  src={sass}
                  alt="Sass"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex space-x-6 ">
              <div className="w-12 h-12 flex items-center justify-center lg:w-16 lg:h-13">
                <Image
                  src={laravel}
                  alt="Javascript"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-12 h-12 flex items-center justify-center lg:w-16 lg:h-13">
                <Image
                  src={hardhat}
                  alt="Typescript"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-12 h-12 flex items-center justify-center lg:w-16 lg:h-13">
                <Image
                  src={ethers}
                  alt="Ethers"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-9 lg:text-[20px] xl:text-[24px] mt-8 lg:mt-0">
          <motion.p
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
            className="lg:leading-[1.6em]"
          >
            I have built successful products for clients and businesses ranging
            from marketing websites to complex solutions with focus on security,
            speed, and elegant user experiences.
          </motion.p>

          <motion.p
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
          >
            Equipped with just the right tools, and can absolutely function
            independently of them to deliver fast and resilient solutions
            optimized for scale - from system design to pixel perfect results.
          </motion.p>

          <motion.p
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
          >
            Passionate about web3. I also enjoy participating in web3 hackathons
            and contributing to projects that makes a difference and help others
            create success.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
export default Strengths;
