// const textElements = gsap.utils.toArray("#inc01 .b_txt");
// textElements.forEach((text) => {
//   gsap.to(text, {
//     backgroundSize: "100%",
//     ease: "none",
//     scrollTrigger: {
//       trigger: text,
//       start: "center 90%",
//       end: "center 70%",
//       scrub: true,
//     },
//   });
// });

$(document).ready(function () {
  $(".grid-item").hover(
    function () {
      $(this).siblings().css({ filter: "brightness(30%)" });
    },
    function () {
      $(this).siblings().css({ filter: "brightness(100%)" });
    }
  );
});
