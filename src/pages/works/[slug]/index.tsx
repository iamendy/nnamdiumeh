import Link from "next/link";
import BackArrow from "@/components/icons/BackArrow";
import Arrow from "@/components/icons/Arrow";
import { motion } from "framer-motion";
import works from "../../../constants/works";
import { useRouter } from "next/router";

const ExtLink = ({ link, text }: { link: string; text: string }) => (
  <a href={link} target="_blank" className="underline">
    {text}
  </a>
);

const Index = () => {
  const router = useRouter();
  const work = works?.filter((d) => d.title == router?.query?.slug)[0];

  return (
    <section className="px-[24px] lg:px-[48px] xl:max-w-7xl xl:mx-auto flex flex-col pt-32 pb-28 lg:pt-[250px] lg:pb-[200px]">
      <div
        onClick={() => router?.back()}
        className="w-fit hover:cursor-pointer"
      >
        <div className="flex space-x-1 items-center hover:scale-[105%] transition-all">
          <BackArrow />

          <span>Back</span>
        </div>
      </div>

      <div className="lg:flex lg:justify-between">
        <div className="flex flex-col gap-y-12 lg:gap-y-16 mt-4 lg:w-[60%] overflow-hidden">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.1, duration: 0.4 },
            }}
            className="text-[32px] xl:text-[72px] font-semibold leading-[1.4em] lg:text-[56px]"
          >
            {work?.title}
          </motion.h1>

          <div className="flex flex-col gap-y-6">
            {work?.description.map((d, i) => (
              <div key={i}>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: { delay: 0.2, duration: 0.4 },
                  }}
                  className="leading-[1.6em] lg:text-[20px] xl:text-[24px]"
                >
                  {d}
                </motion.p>
              </div>
            ))}

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.2, duration: 0.4 },
              }}
              className="leading-[1.6em] lg:text-[20px] xl:text-[24px]"
            >
              <ExtLink link={work?.ext.link} text={work?.ext.text} />
            </motion.p>
          </div>

          <div className="space-x-3">
            {work?.tags.map((d, i) => (
              <span
                key={i}
                className="leadng-0 p-2 rounded-lg border border-white/20"
              >
                {d}
              </span>
            ))}
          </div>

          <div className="flex gap-x-3 mb-4">
            {work?.links.map((d, i) => (
              <Link
                href={d.link}
                className="flex items-baseline w-fit hover:scale-[105%] transition-all"
              >
                <span className="underline tracking-wide xl:text-[24px]">
                  {d.name}
                </span>{" "}
                &nbsp; <Arrow />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-9 lg:flex-col lg:items-start lg:justify-center lg:space-y-14 lg:w-[30%] lg:mt-0">
          <div className="flex flex-col">
            <h4 className="xl:text-[18px]">Client</h4>
            <b className="lg:text-18px xl:text-[20px]">{work?.client}</b>
          </div>

          <div className="flex flex-col">
            <h4 className="xl:text-[18px]">Role</h4>
            <b className="lg:text-18px xl:text-[20px]">{work?.role}</b>
          </div>

          <div className="flex flex-col">
            <h4 className="xl:text-[18px]">Year</h4>
            <b className="lg:text-18px xl:text-[20px]">{work?.year}</b>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:w-[60%] rounded-md overflow-hidden">
        <img src={work?.thumbnail} alt={work?.title} />
      </div>
    </section>
  );
};
export default Index;
