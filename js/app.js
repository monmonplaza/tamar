$(document).ready(function() {
  $(".testimonial-slider").slick({
    arrows: true,
    dots: true,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>'
  });

  $(".slider-activities").responsiveSlides({
    auto: true,
    speed: 1500,
    pause: true
  });

  $(".slider-swiss").responsiveSlides({
    auto: true,
    speed: 1500,
    pause: true
  });

  $(".slider-accomodation").responsiveSlides({
    auto: true,
    speed: 1500,
    pause: true
  });

  const toggleMenu = document.querySelector(".toggle-menu");
  const mainMenu = document.querySelector(".main-menu");
  const closeMenu = document.querySelector("#close-menu ");
  toggleMenu.addEventListener("click", () => {
    mainMenu.classList.add("open-nav");
  });

  closeMenu.addEventListener("click", () => {
    mainMenu.classList.remove("open-nav");
  });
});
