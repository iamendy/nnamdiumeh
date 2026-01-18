const Slider = () => {
  return (
    <section className="flex flex-col space-y-9 lg:space-y-16 py-20 lg:pt-[150px] lg:pb-[200px]">
      <div className="relative h-24 w-full flex justify-center items-center overflow-hidden z-10">
        <div className="absolute whitespace-nowrap flex top-0 left-0 w-full h-full items-center">
          {/* First set - will scroll left */}
          <div className="likes flex animate-scroll space-x-8 lg:space-x-28">
            <span className="lg:text-[26px]">Laravel</span>
            <span className="lg:text-[26px]">NextJs</span>
            <span className="lg:text-[26px]">Hiking</span>
            <span className="lg:text-[26px]">Typescript</span>
            <span className="lg:text-[26px]">NodeJs</span>
            <span className="lg:text-[26px]">Gaming</span>
            <span className="lg:text-[26px]">TailwindCSS</span>
            <span className="lg:text-[26px]">Solidity</span>
            <span className="lg:text-[26px]">Technical Writing</span>
            <span className="lg:text-[26px]">Swimming</span>
          </div>

          {/* Second set - duplicates for seamless loop */}
          <div
            className="likes flex animate-scroll space-x-8 lg:space-x-28"
            aria-hidden="true"
          >
            <span className="lg:text-[26px]">Laravel</span>
            <span className="lg:text-[26px]">NextJs</span>
            <span className="lg:text-[26px]">Hiking</span>
            <span className="lg:text-[26px]">Typescript</span>
            <span className="lg:text-[26px]">NodeJs</span>
            <span className="lg:text-[26px]">Gaming</span>
            <span className="lg:text-[26px]">TailwindCSS</span>
            <span className="lg:text-[26px]">Solidity</span>
            <span className="lg:text-[26px]">Technical Writing</span>
            <span className="lg:text-[26px]">Swimming</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
