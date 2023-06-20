import { useRouter } from "next/router";
import Link from "next/link";
import BackArrow from "@/components/icons/BackArrow";
import Arrow from "@/components/icons/Arrow";

const Index = () => {
  const router = useRouter();

  return (
    <section className="px-[24px] lg:px-[48px] flex flex-col py-20 lg:pt-[150px] lg:pb-[200px]">
      <Link href="/works">
        <div className="flex space-x-1 items-center">
          <BackArrow />

          <span>Back</span>
        </div>
      </Link>

      <div className="lg:flex lg:justify-between">
        <div className="space-y-9 lg:space-y-16 mt-4 lg:w-[60%]">
          <h1 className="text-[32px] font-semibold leading-[1.4em] lg:text-[56px]">
            Job Query
          </h1>

          <p className="leading-[1.6em] lg:text-[20px]">
            By providing job seekers with the ability to search, explore, and
            discover suitable job postings based on their individual preferences
            and criteria, the job portal app enables job seekers to take a more
            proactive and informed approach to their job search process.
          </p>

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
            <span className="underline tracking-wide">Live Link</span> &nbsp;{" "}
            <Arrow />
          </Link>
        </div>

        <div className="flex justify-between items-center mt-9 lg:flex-col lg:items-start lg:justify-center lg:space-y-14 lg:w-[30%] lg:mt-0">
          <div className="flex flex-col">
            <h4>Client</h4>
            <b className="lg:text-18px">AirBnB</b>
          </div>

          <div className="flex flex-col">
            <h4>Role</h4>
            <b className="lg:text-18px">Frontend Dev.</b>
          </div>

          <div className="flex flex-col">
            <h4>Year</h4>
            <b className="lg:text-18px">2023</b>
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
