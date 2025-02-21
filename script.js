const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const body = document.body;

// Open the mobile menu
menuOpenButton.addEventListener("click", () => {
    body.classList.add("show-mobile-menu");
});

// Close the mobile menu
menuCloseButton.addEventListener("click", () => {
    body.classList.remove("show-mobile-menu");
});


const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets : true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });