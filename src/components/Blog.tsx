import Clock from "./icons/Clock";

const Blog = () => {
  return (
    <div className=" bg-white/10 p-5 rounded-md">
      <div className="">
        <img src="/img/job-alert.webp" alt="job-alert" />
      </div>

      <div className={`flex flex-col justify-between my-3 space-y-2 lg`}>
        <h3 className="lg:text-lg">
          Build and Deploy a Piggy Bank dApp on Celo
        </h3>

        <div className="flex justify-between items-center w-full">
          <p className="">12 March, 2023</p>
          <p className="flex items-center space-x-1">
            <Clock />
            <span>6 mins</span>
          </p>
        </div>
      </div>

      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aspernatur
        distinctio excepturi veritatis eum alias!...
      </p>
    </div>
  );
};
export default Blog;
