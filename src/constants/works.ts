import { Work } from "./interface/work.interface";

export const works: Work[] = [
  {
    title: "SUVe",
    description: [
      "SUVe is the winning dApp solution for the Open Source Africa Fest 2023 Hackathon in partnership with Axelar. It is a multichain verification system that utilizes blockchain technology to verify authenticity of Vaccines.",
      "Over 10,000 people die daily from complications due to counterfeit vaccines. SUVe helps verify vaccines, across any blockchain.",
      "Suve works by implementing a 2-way General Message Passing to enable communication between Enrollment Service on the source blockchain and Verification service on other blockchains, to verify the autheticity of vaccines.",
    ],
    ext: {
      text: "View Announcement Tweet",
      link: "https://twitter.com/oscafest/status/1682013392364613640",
    },
    thumbnail: "/img/suve.jpg",
    tags: ["NextJs", "TailwindCSS", "Solidity"],
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
  {
    title: "TipX",
    description: [
      "TipX is one of the winning dApp solution for the Web3Africa 2023 Hackathon in partnership with Bunzz. With GoTipMe, you can receive tips from your audience directly and securely, using the power of blockchain technology.",
    ],
    ext: {
      text: "View Announcement Tweet",
      link: "https://twitter.com/web3afrika/status/1651980108637298689",
    },
    thumbnail: "/img/tipx.jpg",
    tags: ["NextJs", "TailwindCSS", "Solidity"],
    links: [
      {
        name: "Live Link",
        link: "https://tipx.vercel.app",
      },
      {
        name: "GitHub Link",
        link: "https://github.com/iamendy/tipXFrontend",
      },
    ],
    client: "Web3Africa X Bunzz",
    role: "Hacker",
    year: "2023",
  },
  {
    title: "Chainwise",
    description: [
      "Chainwise claimed second position at the Decentralized Intelligence summit held in August at the Civic Center Lagos. Chainwise is an influencer reputation system for web3.",
      "Chainwise is a fullstack dApp solution that connects businesses with web3 influencers and communitites while eliminating bad actors.",
    ],
    ext: {
      text: "View Announcement Tweet",
      link: "https://twitter.com/techFiesta_hack/status/1697487958138318949/photo/2",
    },

    thumbnail: "/img/chainwise.jpg",
    tags: ["NextJs", "Prisma", "PostgreSQL"],
    links: [
      {
        name: "Live Link",
        link: "https://chainwise.vercel.app",
      },
      {
        name: "GitHub",
        link: "https://github.com/iamendy/chainwise",
      },
      {
        name: "Live Demo",
        link: "https://www.loom.com/share/cfcd06012c2d488fb1b97115dcf2b290",
      },
    ],
    client: "CELO X Bunzz",
    role: "Hacker",
    year: "2023",
  },
  {
    title: "Piggie",
    description: [
      "Piggie Bank is a decentralized application that helps users save on the blockchain. With Piggie, users can lock their tokens for a certain amount of time to avoid impulse spending.",
      "It is deployed on Celo network and also features a $PKT faucet.",
    ],
    ext: {
      text: "Read article here",
      link: "https://nnamdi.hashnode.dev/build-and-deploy-a-piggy-bank-dapp-on-celo",
    },
    thumbnail: "/img/piggie.jpg",
    tags: ["NextJs", "TailwindCSS", "Solidity"],
    links: [
      {
        name: "Live Link",
        link: "https://piggie.vercel.app",
      },
      {
        name: "GitHub Link",
        link: "https://github.com/iamendy/piggie",
      },
    ],
    client: "Blog Article",
    role: "Writer",
    year: "2023",
  },
];

export default works;
