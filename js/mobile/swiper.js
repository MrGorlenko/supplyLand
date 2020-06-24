$(document).ready(function(){

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        initialSlide: 0,
        slidesPerView: 2.5,
        spaceBetween: 12
        
      }),
      mySwiper2 = new Swiper ('.swiper-container-2', {
          direction: 'horizontal',
          loop: false,
          initialSlide: 0,
          slidesPerView: 1,
      });

      mySwiper4 = new Swiper ('.swiper-container-4', {
        direction: 'horizontal',
        loop: false,
        initialSlide: 0,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next-2',
            prevEl: '.swiper-button-prev-2',
          }
    });

      // var galleryThumbs = new Swiper('.gallery-thumbs', {
      //   spaceBetween: 10,
      //   slidesPerView: 4,
      //   freeMode: true,
      //   watchSlidesVisibility: true,
      //   watchSlidesProgress: true
      // });
      // var galleryTop = new Swiper('.gallery-top', {
      //   spaceBetween: 20,
      //   slidesPerView: 1,
      //   navigation: {
      //     nextEl: '.swiper-button-next-1',
      //     prevEl: '.swiper-button-prev-1',
      //   },
      //   thumbs: {
      //     swiper: galleryThumbs
      //   }
      // });

      var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });
      var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next-1',
          prevEl: '.swiper-button-prev-1',
        },
        // thumbs: {
        //   swiper: galleryThumbs
        // }
      });

    //   mySwiper3 = new Swiper ('.swiper-container-3', {
    //     direction: 'horizontal',
    //     loop: false,
    //     initialSlide: 0,
    //     slidesPerView: 1, 
    //     // navigation: {
    //     //     nextEl: '.swiper-button-next',
    //     //     prevEl: '.swiper-button-prev',
    //     //   },
    // })

    let arr = [$('.swiper__button_1'), $('.swiper__button_2'), $('.swiper__button_3'), $('.swiper__button_4'), $('.swiper__button_5')],

    aboutConent = [$('.about-content-1'), $('.about-content-2'), $('.about-content-3'), $('.about-content-4'), $('.about-content-5')];


    arr[1].click(function(){
        arr[0].removeClass('swiper__button_active')
        arr[1].addClass('swiper__button_active')
        arr[2].removeClass('swiper__button_active')
        arr[3].removeClass('swiper__button_active')
        arr[4].removeClass('swiper__button_active')

        aboutConent[1].removeClass('about-content_none');
        aboutConent[0].addClass('about-content_none');
        aboutConent[2].addClass('about-content_none');
        aboutConent[3].addClass('about-content_none');
        aboutConent[4].addClass('about-content_none');
    })

    arr[0].click(function(){
        arr[1].removeClass('swiper__button_active')
        arr[0].addClass('swiper__button_active')
        arr[2].removeClass('swiper__button_active')
        arr[3].removeClass('swiper__button_active')
        arr[4].removeClass('swiper__button_active')

        aboutConent[0].removeClass('about-content_none');
        aboutConent[1].addClass('about-content_none');
        aboutConent[2].addClass('about-content_none');
        aboutConent[3].addClass('about-content_none');
        aboutConent[4].addClass('about-content_none');
    })

    arr[2].click(function(){
        arr[0].removeClass('swiper__button_active')
        arr[2].addClass('swiper__button_active')
        arr[1].removeClass('swiper__button_active')
        arr[3].removeClass('swiper__button_active')
        arr[4].removeClass('swiper__button_active')

        aboutConent[2].removeClass('about-content_none');
        aboutConent[1].addClass('about-content_none');
        aboutConent[0].addClass('about-content_none');
        aboutConent[3].addClass('about-content_none');
        aboutConent[4].addClass('about-content_none');
    })

    arr[3].click(function(){
        arr[1].removeClass('swiper__button_active')
        arr[3].addClass('swiper__button_active')
        arr[2].removeClass('swiper__button_active')
        arr[0].removeClass('swiper__button_active')
        arr[4].removeClass('swiper__button_active')

        aboutConent[3].removeClass('about-content_none');
        aboutConent[1].addClass('about-content_none');
        aboutConent[2].addClass('about-content_none');
        aboutConent[0].addClass('about-content_none');
        aboutConent[4].addClass('about-content_none');
    })

    arr[4].click(function(){
        arr[1].removeClass('swiper__button_active')
        arr[4].addClass('swiper__button_active')
        arr[2].removeClass('swiper__button_active')
        arr[3].removeClass('swiper__button_active')
        arr[0].removeClass('swiper__button_active')

        aboutConent[4].removeClass('about-content_none');
        aboutConent[1].addClass('about-content_none');
        aboutConent[2].addClass('about-content_none');
        aboutConent[3].addClass('about-content_none');
        aboutConent[0].addClass('about-content_none');
    })




})