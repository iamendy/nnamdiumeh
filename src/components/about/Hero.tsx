import { motion } from "framer-motion";
import { opacity, hero, slideUpHero, fadeSlideUp } from "@/lib/motion";

const Hero = () => {
  return (
    <section className="px-[24px] lg:px-[48px] flex flex-col space-y-9 xl:max-w-7xl xl:mx-auto lg:space-y-16 pt-48 pb-28 lg:pt-[250px] lg:pb-[200px]">
      <div className="mb-[8rem]">
        {/* Mobile animation */}
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          custom={3}
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
              I am Nnamdi,
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
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          className="text-[30px] lg:text-[38px] xl:text-[48px] font-semibold leading-[1.4em] "
        >
          About me
        </motion.h1>
        <div className="space-y-9 lg:text-[20px] xl:text-[24px]">
          <motion.p
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
            className="lg:leading-[1.6em]"
          >
            An exceptionally creative and visionary individual with a solid
            foundation in Javascript web development, strategic planning, and
            technical writing.
          </motion.p>

          <motion.p
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
          >
            A dynamic entrepreneur who successfully established Premium
            Interiors NG, an interior design company that has made a significant
            impact in the industry. Over the span of two years, our company has
            provided design solutions for more than five homes and delivered
            top-quality furniture products.
          </motion.p>

          <motion.p
            variants={fadeSlideUp}
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true }}
          >
            In addition to my professional work, I have a strong passion for
            writing. I am highly motivated to embark on new challenges and
            constantly seek opportunities to expand my knowledge and skills.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
export default Hero;
