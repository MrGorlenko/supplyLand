$(document).ready(function(){
  var mySwiper = new Swiper('.swiper-container-1', {
    speed: 400,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination-1',
      type: 'bullets',
      clickable: true
    }
  });

  var mySwiper1 = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination-2',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper = new Swiper('.swiper-container-3', {
    speed: 400,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination-3',
      type: 'bullets',
      clickable: true
    }
  });

  var mySwiper = new Swiper('.swiper-container-4', {
    speed: 400,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination-4',
      type: 'bullets',
      clickable: true
    }
  });
  

})