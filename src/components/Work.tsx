import Arrow from "@/components/icons/Arrow";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
//@ts-ignore
import { Work } from "../constants/interface/work.interface";

const Work = ({
  work,
  alt = false,
}: {
  work: Work;
  alt?: boolean | undefined;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      whileInView={{
        opacity: 1,
        y: -20,
        transition: { duration: 0.8 },
      }}
      className={`lg:w-[80%] lg:gap-x-5 xl:w-full lg:flex group ${
        alt && "lg:ml-auto"
      }`}
    >
      <div
        className={`w-full transition-all overflow-hidden ${
          alt && "order-2"
        } w-full lg:w-[500px] h-[250px] lg:h-[300px]`}
      >
        <Link href={`/works/${work?.title}`}>
          <div className="lg:w-[100%] relative h-full">
            <div className="w-full h-full">
              <Image
                src={work?.thumbnail}
                fill={true}
                alt={work?.title}
                className="group-hover:scale-105 transition-all rounded-md object-contain"
              />
            </div>
          </div>
        </Link>
      </div>

      <Link
        href={`/works/${work?.title}`}
        className={`lg:order-1 ${alt ? "mr-5" : "lg:ml-5"} w-full`}
      >
        <div
          className={`flex justify-between my-3 lg:my-0 lg:space-y-2 lg:flex-col flex-1 ${
            alt && "items-end"
          }`}
        >
          <h3 className="lg:text-3xl flex items-center">
            {work?.title} &nbsp; <Arrow />
          </h3>
          <div className="flex gap-x-3 items-center ">
            {work?.tags?.map((d: string, i: number) => (
              <span
                key={i}
                className="border w-fit border-white/40 text-xs rounded-xl p-2 leading-none"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        <p
          className={`lg:mt-5 lg:w-[70%] xl:w-[50%] lg:text-xl  ${
            alt && "lg:ml-auto lg:text-right "
          }`}
        >
          {work?.description[0]}
        </p>
      </Link>
    </motion.div>
  );
};
export default Work;
