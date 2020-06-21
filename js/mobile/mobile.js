$(document).ready(function(){

    /* SCROLL */
    $('a.to-the-top').click(function(){
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
         } , {
            duration: 500,
            easing: "swing"
         });
         return false;
    })
    /* SCROLL */

    /* BURGER */

    $('#burger-on').click(function(){
        $('.mobile-menu').css('opacity', '1');
        $('.mobile-menu').css('z-index', '20');
    })

    $('#burger-off').click(function(){
        $('.mobile-menu').css('opacity', '0');

        let zIndex = function(){
            $('.mobile-menu').css('z-index', '-1');
        }

        setTimeout(zIndex, 300);
    })

    /* BURGER */
})