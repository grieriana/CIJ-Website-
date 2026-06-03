gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector(".last-video");

document.body.style.overflow = "hidden";

video.play();
gsap.set(".last-video", { xPercent: -50, yPercent: -50 });

video.addEventListener("ended", () => {
  document.body.style.overflow = "";

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=11000",
      scrub: 1,
      pin: true,
      markers: false,
    },
  });

  tl.to(".background", { y: -250, scale: 1.9, duration: 3 }, 0);
  tl.to(
    ".left-image",
    { x: "-40vw", y: "-25vh", scale: 1.0, duration: 3 },
    0.5,
  );
  tl.to(
    ".right-image",
    { x: "-40vw", y: "-25vh", scale: 1.0, duration: 3 },
    0.5,
  );
  const videoX = window.innerWidth * -0.37; //centering video dimensions
  const videoY = window.innerHeight * -0.34;

  tl.to(".last-video", { x: videoX, y: videoY, scale: 1.0, duration: 3 }, 0.5);

  setTimeout(() => {
    const gridImgs = Array.from(document.querySelectorAll(".grid-img"));
    console.log("Grid images found:", gridImgs.length);

    // Start all grid images stacked on the video's final landing position
    const videoX = window.innerWidth * -0.37; //centering grid dimentions
    const videoY = window.innerHeight * -0.34;
    gsap.set(gridImgs, {
      xPercent: -50,
      yPercent: -50,
      x: videoX,
      y: videoY,
      opacity: 0,
    });

    const cols = 7;
    const cellW = 160;

    const cellH = 200;

    gridImgs.forEach((img, i) => {
      const cellIndex = i + 1; // shift by 1 so grid starts at cell [0,1]
      const col = cellIndex % cols;
      const row = Math.floor(cellIndex / cols);

      // Start at 3.5 — after video finishes moving (0.5 start + 3 duration)
      tl.to(
        img,
        {
          x: videoX + col * cellW,
          y: videoY + row * cellH,
          opacity: 1,
          duration: 1.5,
        },
        3.5 + i * 0.08,
      );
    });
    ScrollTrigger.refresh();
  }, 100);
});
