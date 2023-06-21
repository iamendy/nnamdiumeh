interface Blog {
  title: string;
  brief: string;
  slug: string;
  coverImage: string;
  dateAdded: string;
}

export const blogs: Blog[] = [
  {
    title: "Build and Deploy a Piggy Bank dApp on Celo",
    brief:
      "In this tutorial, you will learn how to build a Piggy bank smart contract and deploy it to the Celo Blockchain. Celo is optimized for speed and mobility with a focus on inclusive finance...",
    slug: "build-and-deploy-a-piggy-bank-dapp-on-celo",
    coverImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1683714316989/75b2892e-f03c-4064-9b9d-c1211937ba09.jpeg",
    dateAdded: "2023-05-17T11:44:45.254Z",
  },
  {
    title: "How to Build a CRUD App with NextJS and Prisma",
    brief:
      'By the end of the tutorial, we will have created a "WishList App" that enables users to save their favorite links for items they wish to buy in the future...',
    slug: "how-to-build-a-crud-app-with-nextjs-and-prisma",
    coverImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1681797083637/f2a7e9d0-762d-4b44-b703-82a349f155df.jpeg",
    dateAdded: "2023-04-18T06:19:28.099Z",
  },

  {
    title: "Solidity like ABC",
    brief:
      "Solidity is the most popular programming language used in writing smart contracts for the blockchain. For a first-timer, Solidity sounds like a complex programming language only those...",
    slug: "solidity-like-abc",
    coverImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1656491677683/PVST98OLq.png",
    dateAdded: "2022-06-29T10:42:38.758Z",
  },
];

export default blogs;
