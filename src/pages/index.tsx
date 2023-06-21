import Blogs from "@/components/home/Blogs";
import Works from "@/components/home/Works";
import Slides from "@/components/home/Slides";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <Slides />

      <Works />

      <Blogs />
    </>
  );
}
