const usePhotoSlider = () => {
  new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 4000,
    },

    pagination: {
      el: ".swiper-pagination",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
};
usePhotoSlider();
