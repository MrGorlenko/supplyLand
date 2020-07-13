$(document).ready(function(){
  var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
})