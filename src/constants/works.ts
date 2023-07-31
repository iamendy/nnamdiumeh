import { Work } from "./interface/work.interface";

export const works: Work[] = [
  {
    title: "SUVe",
    description: [
      "SUVe is the winning dApp solution for the Open Source Africa Fest 2023 Hackathon in partnership with Axelar. It is a multichain verification system that utilizes blockchain technology to verify authenticity of Vaccines.",
      "Over 10,000 people die daily from complications due to counterfeit vaccines. SUVe helps verify vaccines, across any blockchain.",
      "Suve works by implementing a 2-way General Message Passing to enable communication between Enrollment Service on the source blockchain and Verifification service on other blockchains, to verify the autheticity of vaccines.",
    ],

    thumbnail: "/img/suve.jpg",
    tags: ["blockchain", "NextJs", "TailwindCSS"],
    links: [
      {
        name: "Live Link",
        link: "https://suve.vercel.app",
      },
      {
        name: "GitHub Link",
        link: "https://github.com/iamendy/suve",
      },
    ],
    client: "OSCAFest X Axelar",
    role: "Hacker",
    year: "2023",
  },
];

export default works;
