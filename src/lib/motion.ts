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

export const fadeSlideUp = {
  hidden: { y: 10, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.4 },
  }),
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

export const slideMenu = {
  hidden: {
    translateX: "-100%",

    transition: {
      duration: 0.3,
    },
  },
  visible: {
    translateX: "0%",
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
      stiffness: 100,
    },
  },
};

export const subMenu = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
