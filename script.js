/*
inspiration
https://cz.pinterest.com/pin/830703093792161391/
*/
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5
  },
  keyboard: {
    enabled: true
  },
 
  spaceBetween: 30,
  loop: true,
  slidesPerView: 1.15, // Set the same number of slides per view for all screen sizes
  breakpoints: {
    640: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 3
    }
  }
});

swiper.slideTo(1, false, false);



