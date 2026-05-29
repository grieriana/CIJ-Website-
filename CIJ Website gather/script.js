gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  //timeline for chain animations

  scrollTrigger: {
    trigger: ".hero",
    start: "top top",

    end: "+=3000",
    scrub: 1,
    pin: true,
    markers: false,
  },
});

/* Parallax background */

tl.to(
  ".background",

  {
    y: -250,
    scale: 1.1,
    duration: 3,
  },

  0,
);

/* movement for Left image*/

tl.to(
  ".left-image",

  {
    x: -320,
    y:35,
    opacity: 1,
    scale: 0.8,
    rotation: 0,
    duration: 3,
  },

  0.5,
);

/* movement for Right image */

tl.to(
  ".right-image",

  {
    x: 360,
     y:35,
    opacity: 1,
    scale: 0.8,
    rotation: 0,
    duration: 3,
  },

  0.5,
);

/* To make main phone disapear*/

tl.to(
  ".main-phone",

  {
    opacity: 0,
    scale: 1.2,
    y: -100,
    duration: 2,
  },

  1,
);
/* img.jpg grows as you scroll */

tl.to(".screen-image", {

  scale: 2,
  duration: 3

}, 0);
