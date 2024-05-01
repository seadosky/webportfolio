$(document).ready(function(){

    const swiper = new Swiper('.swiper', { 
        direction: "vertical",

        slidesPerView: 1,
        mousewheel: true,
        on: {
            slideChange: function(){
                if(this.realIndex == 0){
                    $('header').hide()
                }else if(this.realIndex == 1){
                    $('header').show()
                    $('header .link span').removeClass('on')
                    $('header .link .gcj').addClass('on')
                }else if(this.realIndex == 2){
                    $('header .link span').removeClass('on')
                    $('header .link .em').addClass('on')
                }else if(this.realIndex == 3){
                    $('header .link span').removeClass('on')
                    $('header .link .monx').addClass('on')
                }else if(this.realIndex == 4){
                    $('header .link span').removeClass('on')
                    $('header .link .knue2').addClass('on')
                } else if(this.realIndex == 5){
                    $('header .link span').removeClass('on')                   
                }
            }
        }
    });

    $('header .link .gcj').on('click', function(){
        swiper.slideTo(1, 500)
    });
    $('header .link .em').on('click', function(){
        swiper.slideTo(2, 500)
    });
    $('header .link .monx').on('click', function(){
        swiper.slideTo(3, 500)
    });
    $('header .link .knue2').on('click', function(){
        swiper.slideTo(4, 500)
    });

})