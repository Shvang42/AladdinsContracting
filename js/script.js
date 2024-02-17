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

  const moveSliderItem = (instant = false) => {
    if (instant) {
      // Temporarily hide the slider for the instant move
      sliderContainer.style.opacity = '0';
      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
  
      // Use setTimeout to fade the slider back in
      setTimeout(() => {
        sliderContainer.style.transition = 'opacity 0.5s ease'; // Apply a fade transition
        sliderContainer.style.opacity = '1'; // Fade the slider back in
  
        // Reset the transition to include both opacity and transform for subsequent slides
        setTimeout(() => {
          sliderContainer.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        }, 500); // Ensure this matches the opacity transition time
      }, 50); // Small delay to ensure the transform is applied instantly
    } else {
      // Standard sliding transition
      sliderContainer.style.opacity = '1'; // Ensure full opacity in case it was faded out
      sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
    }
  };
  
  sliderNextBtn.addEventListener("click", () => {
    if (currentSlidePos >= sliderContainer.childElementCount - 1) {
      currentSlidePos = 0; // Reset to the first slide
      moveSliderItem(true); // Move with a fade-in effect
    } else {
      currentSlidePos += 1;
      moveSliderItem();
    }
  });
  
  sliderPrevBtn.addEventListener("click", () => {
    if (currentSlidePos <= 0) {
      currentSlidePos = sliderContainer.childElementCount - 1; // Move to the last slide
      moveSliderItem(true); // Move with a fade-in effect
    } else {
      currentSlidePos -= 1;
      moveSliderItem();
    }
  });
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