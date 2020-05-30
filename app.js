const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const nav = document.querySelector("nav");
const feature = document.querySelector(".feature");
const card = document.querySelector(".card");

const tl = new TimelineMax();

tl.fromTo(slider, 1.5, { x: "0%" }, { x: "0%", ease: Power2.easeinout })
  .fromTo(slider, 1.5, { x: "0%" }, { x: "-100%", ease: Power2.easeinout })
  .fromTo(nav, 1.5, { y: "-100%" }, { y: "-0%", ease: Power2.easeinout })
  .fromTo(
    feature,
    1.5,
    { x: "100%" },
    { x: "0%", ease: Power2.easeinout },
    "-=1.5"
  );

var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
  triggerElement: ".feature2",
  triggerHook: 0.5, // show, when scrolled 10% into view
  duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 0, // move trigger to center of element
})
  .setClassToggle(".feature2", "visible") // add class to reveal
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({
  triggerElement: ".feature3",
  triggerHook: 0.5, // show, when scrolled 10% into view
  duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 00, // move trigger to center of element
})
  .setClassToggle(".feature3", "visible") // add class to reveal
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
new ScrollMagic.Scene({
  triggerElement: ".feature4",
  triggerHook: 0.5, // show, when scrolled 10% into view
  duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
  offset: 00, // move trigger to center of element
})
  .setClassToggle(".feature4", "visible") // add class to reveal
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
