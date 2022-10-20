const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});


const swiper2 = new Swiper(".swiper2", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
    
  // If we need pagination
  // pagination:{
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
autoplay:{
  delay:2000,
}
  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});



const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
    
  // If we need pagination
  // pagination:{
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
// autoplay:{
//   delay:2000,
// }
  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
  slidesPerView:2,
  effect:'coverflow',
  
  
});
const swiper4 = new Swiper(".swiper4", {
  // Optional parameters
  // direction: "vertical",
  loop: true,
    
  // If we need pagination
  // pagination:{
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
// autoplay:{
//   delay:2000,
// }
  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
  slidesPerView:2,
  // effect:'coverflow',

  // effect: 'flip',
  // flipEffect: {
  //   slideShadows: false,
  // },

  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },
  

});

