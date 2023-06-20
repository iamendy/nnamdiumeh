export const hero = {
  hidden: {
    y: 30,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.3,
      duration: 1,
      type: "ease",
      staggerChildren: 0.5,
    },
  },
};

export const slideUpHero = {
  hidden: {
    y: 20,
  },
  visible: (custom: number) => ({
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: custom * 0.3,
      type: "ease",
    },
  }),
};

export const slideUp = {
  hidden: {
    y: 20,
    opacity: [0, 0, 0, 0],
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: [0, 0.4, 0.8, 1],
    transition: {
      delay: custom * 0.1,
      duration: 0.3,
      type: "ease",
    },
  }),
};

export const opacity = {
  hidden: {
    opacity: [0, 0, 0, 0],
  },
  visible: (custom: number) => ({
    opacity: [0, 0.4, 0.8, 1],
    transition: {
      delay: custom * 0.1,
    },
  }),
};
