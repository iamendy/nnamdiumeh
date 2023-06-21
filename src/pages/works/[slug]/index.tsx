import Link from "next/link";
import BackArrow from "@/components/icons/BackArrow";
import Arrow from "@/components/icons/Arrow";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <section className="px-[24px] lg:px-[48px] xl:max-w-7xl xl:mx-auto flex flex-col pt-48 pb-28 lg:pt-[250px] lg:pb-[200px]">
      <Link href="/works" className="w-fit">
        <div className="flex space-x-1 items-center hover:scale-[105%] transition-all">
          <BackArrow />

          <span>Back</span>
        </div>
      </Link>

      <div className="lg:flex lg:justify-between">
        <div className="space-y-9 lg:space-y-16 mt-4 lg:w-[60%]">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.1, duration: 0.4 },
            }}
            className="text-[32px] xl:text-[72px] font-semibold leading-[1.4em] lg:text-[56px]"
          >
            Job Query
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.2, duration: 0.4 },
            }}
            className="leading-[1.6em] lg:text-[20px] xl:text-[24px]"
          >
            By providing job seekers with the ability to search, explore, and
            discover suitable job postings based on their individual preferences
            and criteria, the job portal app enables job seekers to take a more
            proactive and informed approach to their job search process.
          </motion.p>

          <div className="space-x-3">
            <span className="leadng-0 p-2 rounded-lg border border-white/20">
              typescript
            </span>
            <span className="leadng-0 p-2 rounded-lg border border-white/20">
              nodeJs
            </span>
            <span className="leadng-0 p-2 rounded-lg border border-white/20">
              TailwindCSS
            </span>
          </div>

          <Link href="#" className="flex items-baseline">
            <span className="underline tracking-wide xl:text-[24px]">
              Live Link
            </span>{" "}
            &nbsp; <Arrow />
          </Link>
        </div>

        <div className="flex justify-between items-center mt-9 lg:flex-col lg:items-start lg:justify-center lg:space-y-14 lg:w-[30%] lg:mt-0">
          <div className="flex flex-col">
            <h4 className="xl:text-[18px]">Client</h4>
            <b className="lg:text-18px xl:text-[20px]">AirBnB</b>
          </div>

          <div className="flex flex-col">
            <h4 className="xl:text-[18px]">Role</h4>
            <b className="lg:text-18px xl:text-[20px]">Frontend Dev.</b>
          </div>

          <div className="flex flex-col">
            <h4 className="xl:text-[18px]">Year</h4>
            <b className="lg:text-18px xl:text-[20px]">2023</b>
          </div>
        </div>
      </div>

      <div className="mt-16 lg:w-[60%] rounded-md overflow-hidden">
        <img src="/img/job-alert.webp" alt="Job alert" />
      </div>
    </section>
  );
};
export default Index;
