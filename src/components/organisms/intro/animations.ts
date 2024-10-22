import gsap from "gsap";

export function animateFirstWord() {
  animateS();
  animateO(1);
  animateF(0.5);
  animateT(1);
  animateW(1.7);
  animateA(1.3);
  animateR(0.5);
  animateE(0.8);
}

function animateS() {
  const sAnimationDuration = 0.5;

  gsap.to(".s", {
    duration: sAnimationDuration / 2,
    rotationX: 180,
    ease: "none",
    transformOrigin: "bottom",
  });
  gsap.to(".s", {
    duration: sAnimationDuration / 2,
    delay: sAnimationDuration / 2,
    rotationX: 0,
    ease: "none",
    transformOrigin: "bottom",
  });

  return sAnimationDuration;
}

function animateO(delay: number) {
  gsap.to(".o", {
    duration: 0.5,
    rotationY: 720,
    delay,
    ease: "circ",
  });
}

function animateF(delay: number) {
  gsap.to(".f", {
    duration: 0.5,
    left: 0,
    delay,
    ease: "circ",
  });
}

function animateT(delay: number) {
  gsap.to(".t", {
    scale: 1,
    duration: 1,
    delay: delay,
    ease: "elastic",
  });
}

function animateW(delay: number) {
  gsap.to(".w", {
    duration: 0.5,
    rotateX: 720,
    delay,
    ease: "circ",
  });
}

function animateA(delay: number) {
  gsap.to(".a", {
    duration: 0.5,
    rotate: 0,
    delay,
  });
}

function animateR(delay: number) {
  gsap.to(".r", {
    duration: 0.5,
    bottom: 0,
    delay,
  });
}

function animateE(delay: number) {
  gsap.to(".e", {
    duration: 0.7,
    left: 0,
    delay,
  });
}
