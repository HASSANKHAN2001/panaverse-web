export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0,
    },
  },
};

export const slideIn = (
  direction: string,
  type: any,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      delay: 0.5,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

export const fadeIn = (
  direction: string,
  type: any,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const planetVariants = (direction: string) => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.5,
      delay: 1,
    },
  },
});

export const picVariants = (direction: string) => ({
  hidden: {
    x: direction === "left" ? "-100%" : "100%",
    rotate: 120,
  },
  show: {
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const zoomIn = (delay: number, duration: number) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      delay,
      duration,
      ease: "easeInOut",
    },
  },
});

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 0.5,
    },
  },
};
export const zoom = (delay: any, duration: any) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    stiffness: 220,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
});
export const zoom1 = (delay: any, duration: any) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    viewport: { once: false, amount: 0.25 },
    scale: 1,
    stiffness: 220,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
});
export const zoom2 = (delay: any, duration: any) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    viewport: { once: false, amount: 0.25 },
    scale: 1,
    stiffness: 220,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
});
export const zoom3 = (delay: any, duration: any) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    viewport: { once: false, amount: 0.25 },
    scale: 1,
    stiffness: 220,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1.5,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
});
export const zoom4 = (delay: any, duration: any) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    viewport: { once: false, amount: 0.25 },
    scale: 1,
    stiffness: 220,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 2,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
});
