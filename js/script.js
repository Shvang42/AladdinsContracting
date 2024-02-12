/**
 * 
 * script.js
 * 
 * navbar + hamburger logic
 * 
 * ***/


'use strict';

/**
 * Add event listener on multiple elements
 */
const addEventOnElements = (elements, eventType, callback) => {
  elements.forEach(element => {
    element.addEventListener(eventType, callback);
  });
};

/**
 * NAVBAR TOGGLE FOR MOBILE
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER
 * Active header when window scrolls down to 100px
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  header.classList.toggle("active", window.scrollY > 100);
});

/**
 * SLIDER
 */
document.querySelectorAll("[data-slider]").forEach(currentSlider => {
  const sliderContainer = currentSlider.querySelector("[data-slider-container]");
  const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
  const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

  let currentSlidePos = 0;

  const moveSliderItem = () => {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  };

  sliderNextBtn.addEventListener("click", () => {
    currentSlidePos = currentSlidePos >= sliderContainer.childElementCount - 1 ? 0 : currentSlidePos + 1;
    moveSliderItem();
  });

  sliderPrevBtn.addEventListener("click", () => {
    currentSlidePos = currentSlidePos <= 0 ? sliderContainer.childElementCount - 1 : currentSlidePos - 1;
    moveSliderItem();
  });

  if (sliderContainer.childElementCount <= 1) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
  }
});

/**
 * ACCORDION
 */
let lastActiveAccordion = null;

document.querySelectorAll("[data-accordion]").forEach(currentAccordion => {
  const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

  accordionBtn.addEventListener("click", () => {
    if (lastActiveAccordion && lastActiveAccordion !== currentAccordion) {
      lastActiveAccordion.classList.remove("expanded");
    }
    currentAccordion.classList.toggle("expanded");
    lastActiveAccordion = currentAccordion;
  });
});