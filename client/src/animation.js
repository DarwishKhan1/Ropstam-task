import gsap from "gsap";

export const parentAnimation = (s) => {
  gsap.to(s, {
    y: "100%",
    duration: 1,
    delay: 6,
  });
};

export const video1 = (s) => {
  gsap.fromTo(
    s,
    {
      x: "-100%",
      opacity: 0,
    },
    {
      x: "0%",
      opacity: 1,
      duration: 1,
      delay: 2,
    }
  );
};

export const video2 = (s) => {
  gsap.fromTo(
    s,
    {
      x: "100%",
      opacity: 0,
    },
    {
      x: "0%",
      opacity: 1,
      duration: 1,
      delay: 2,
    }
  );
};

export const animationY = (s) => {
  gsap.fromTo(
    s,
    { y: "-400%", opacity: 0 },
    {
      y: "0%",
      opacity: 1,
      duration: 1,
      ease: "easeIn",
      onComplete: () => {
        outFromScreen(s);
      },
    }
  );
};
export const animation = (s) => {
  gsap.fromTo(
    s,
    { x: "-400%", opacity: 0 },
    {
      x: "0%",
      opacity: 1,
      duration: 1,
      onComplete: () => {
        outFromScreenX(s);
      },
    }
  );
};

const outFromScreen = (selector) => {
  gsap.to(selector, { display: "none" });
};
const outFromScreenX = (selector) => {
  gsap.fromTo(
    selector,
    { x: "0%", opacity: 1 },
    { x: "-400%", opacity: 0, duration: 1 }
  );
};

export const can = (selector) => {
  gsap.fromTo(
    selector,
    { width: "103%", left: "0%" },
    { width: "32px", left: "50%", duration: 1, delay: 2 }
  );
};
