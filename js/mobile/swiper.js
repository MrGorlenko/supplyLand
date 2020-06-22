$(document).ready(function(){

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        initialSlide: 0,
        slidesPerView: 2.5,
        spaceBetween: 12
        
      })

    let arr = [$('.swiper__button_1'), $('.swiper__button_2'), $('.swiper__button_3'), $('.swiper__button_4'), $('.swiper__button_5')];

    arr[1].click(function(){
        arr[0].removeClass('swiper__button_active')
        arr[1].addClass('swiper__button_active')
        arr[2].removeClass('swiper__button_active')
        arr[3].removeClass('swiper__button_active')
        arr[4].removeClass('swiper__button_active')
    })

    arr[0].click(function(){
        arr[1].removeClass('swiper__button_active')
        arr[0].addClass('swiper__button_active')
        arr[2].removeClass('swiper__button_active')
        arr[3].removeClass('swiper__button_active')
        arr[4].removeClass('swiper__button_active')
    })

    arr[2].click(function(){
        arr[0].removeClass('swiper__button_active')
        arr[2].addClass('swiper__button_active')
        arr[1].removeClass('swiper__button_active')
        arr[3].removeClass('swiper__button_active')
        arr[4].removeClass('swiper__button_active')
    })

    arr[3].click(function(){
        arr[1].removeClass('swiper__button_active')
        arr[3].addClass('swiper__button_active')
        arr[2].removeClass('swiper__button_active')
        arr[0].removeClass('swiper__button_active')
        arr[4].removeClass('swiper__button_active')
    })

    arr[4].click(function(){
        arr[1].removeClass('swiper__button_active')
        arr[4].addClass('swiper__button_active')
        arr[2].removeClass('swiper__button_active')
        arr[3].removeClass('swiper__button_active')
        arr[0].removeClass('swiper__button_active')
    })


    // $(`.swiper__button_3`).click(function(){

    //     $(this).addClass('swiper__button_active');
    //     $('.swiper__button_1').removeClass('swiper__button_active');

    // })

})