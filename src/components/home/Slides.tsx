import { motion, useScroll, useTransform } from "framer-motion";

const Slides = () => {
  const { scrollY } = useScroll();
  //mobile
  const topXMobile = useTransform(scrollY, [0, 500], [-200, 0], {
    clamp: false,
  });
  const bottomXMobile = useTransform(scrollY, [0, 500], [450, 100], {
    clamp: false,
  });

  //desktop
  const topX = useTransform(scrollY, [0, 500], [-250, -150], {
    clamp: false,
  });
  const bottomX = useTransform(scrollY, [0, 500], [450, 250], {
    clamp: false,
  });
  return (
    <section className="my-[200px] flex flex-col flex-nowrap  items-center overflow-clip ">
      {/* TOP */}
      <div className="w-full flex flex-nowrap justify-center ">
        {/* Mobile View */}
        <motion.p
          className="lg:hidden text-[32px] whitespace-nowrap leading-[1.4em] lg:text-[80px] font-semibold"
          style={{
            translateX: topXMobile,
          }}
        >
          Responsive • Scalable • Apps
        </motion.p>

        {/* Desktop View */}
        <motion.p
          className="hidden lg:block text-[32px] whitespace-nowrap leading-[1.4em] lg:text-[80px] font-semibold"
          style={{
            translateX: topX,
          }}
        >
          Responsive • Scalable • Apps
        </motion.p>
      </div>

      {/* BOTTOM */}
      <div className="w-full flex flex-nowrap justify-center ">
        {/* Desktop View */}
        <motion.p
          style={{ translateX: bottomX }}
          className="hidden lg:block text-[32px] whitespace-nowrap leading-[1.4em] lg:text-[80px] font-semibold"
        >
          System Design • Rest APIs • Web3
        </motion.p>

        {/* Mobile View */}
        <motion.p
          style={{ translateX: bottomXMobile }}
          className="lg:hidden text-[32px] whitespace-nowrap leading-[1.4em] lg:text-[80px] font-semibold"
        >
          System Design • Rest APIs • Web3
        </motion.p>
      </div>
    </section>
  );
};
export default Slides;
