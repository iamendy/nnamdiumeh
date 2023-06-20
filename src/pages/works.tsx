import Work from "@/components/Work";

const Works = () => {
  return (
    <section className="px-[24px] lg:px-[48px] flex flex-col space-y-9 lg: lg:space-y-16 pt-48 pb-28 lg:pt-[250px] lg:pb-[200px]">
      <h1 className="font-extrabold text-[38px] leading-[1.25em] mb-14">
        Featured <br className="lg:hidden" />
        works
      </h1>

      <div className="space-y-20 lg:space-y-28">
        <Work />

        <Work alt />

        <Work />
      </div>
    </section>
  );
};
export default Works;
