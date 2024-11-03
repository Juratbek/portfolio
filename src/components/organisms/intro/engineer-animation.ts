import gsap from "gsap";

export function animateEngineerWord() {
  const initialDelay = 1;

  animateFirstE(initialDelay);
  animateFirstN(initialDelay + 0.3);
  animateG(initialDelay + 0.8);
  animateI(initialDelay + 0.2);
  animateSecondN(initialDelay + 0.3);
  animateSecondE(initialDelay + 0.4);
  animateThirdE(initialDelay);
  animateThirdR(initialDelay + 1.5);
}

function animateFirstE(delay: number) {
  const timeline = gsap.timeline();
  const oneDirectionAnimationDuration = 0.45;

  timeline
    .to("#engineer .first-e.below", {
      duration: oneDirectionAnimationDuration,
      transform: "translateY(-5%)",
      ease: "power1.out",
      delay,
    })
    .to("#engineer .first-e.below", {
      duration: oneDirectionAnimationDuration,
      transform: "translateY(101%)",
      ease: "power1.in",
    })
    .to("#engineer .first-e.above", {
      duration: oneDirectionAnimationDuration,
      transform: "translateY(0)",
      ease: "power1.out",
    })
    .to("#engineer .first-e.above", {
      duration: oneDirectionAnimationDuration,
      transform: "translateY(-101%)",
      ease: "power1.in",
    })
    .to("#engineer .first-e.below", {
      duration: oneDirectionAnimationDuration,
      transform: "translateY(0)",
      ease: "power1.out",
    });
}

function animateFirstN(delay: number) {
  const timeline = gsap.timeline();
  const oneDirectionAnimationDuration = 0.45;

  timeline
    .to("#engineer .first-n.below", {
      duration: oneDirectionAnimationDuration,
      transform: "translateY(-5%)",
      ease: "power1.out",
      delay,
    })
    .to("#engineer .first-n.below", {
      duration: oneDirectionAnimationDuration,
      transform: "translateY(101%)",
      ease: "power1.in",
    })
    .to("#engineer .first-n.above", {
      duration: oneDirectionAnimationDuration,
      transform: "translateY(0)",
      ease: "power1.out",
    })
    .to("#engineer .first-n.above", {
      duration: oneDirectionAnimationDuration,
      transform: "translateY(-101%)",
      ease: "power1.in",
    })
    .to("#engineer .first-n.below", {
      duration: oneDirectionAnimationDuration,
      transform: "translateY(0)",
      ease: "power1.out",
    });
}

function animateG(delay: number) {
  gsap.to("#engineer .g", {
    duration: 1,
    delay,
    rotate: 0,
  });
}

function animateI(delay: number) {
  const timeline = gsap.timeline();

  timeline
    .to("#engineer .i", { opacity: 1, delay, duration: 0.1 })
    .to("#engineer .i", {
      duration: 2,
      rotationX: 720,
      ease: "circ",
    });
}

function animateSecondN(delay: number) {
  gsap.to("#engineer .second-n", {
    duration: 1,
    delay,
    rotateY: 360,
    scale: 1,
    ease: "back.out",
  });
}

function animateSecondE(delay: number) {
  gsap.to("#engineer .second-e", {
    duration: 0.5,
    delay,
    translateX: 0,
    ease: "back.out",
  });
}

function animateThirdE(delay: number) {
  gsap.to("#engineer .third-e", {
    duration: 0.6,
    delay,
    rotateY: 0,
  });
}

function animateThirdR(delay: number) {
  gsap.to("#engineer .r", {
    duration: 0.5,
    delay,
    translateY: 0,
    ease: "back.out",
  });
}
