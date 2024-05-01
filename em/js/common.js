$(document).ready(function(){
    
    let scrolling
    function scroll_chk(){ 
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ 
            $('.header').addClass('fixed')
        }else{ 
            $('.header').removeClass('fixed')
        }
    }
    scroll_chk() 
    $(window).scroll(function(){
        scroll_chk()
    })

    let device_status
    let window_w
    function device_chk(){
         window_w = $(window).width()
         if(window_w > 1024){ 
             device_status = 'pc'
         }else{ 
             device_status = 'mobile'
         }
         console.log(device_status)
    }
    device_chk() 
    $(window).resize(function(){
         device_chk() 
    })
 
     $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
         if(device_status == 'pc'){
             $('.header').addClass('menu_over')
             $('.header .gnb ul.depth1 > li').removeClass('on')
             $(this).addClass('on')
         }
     })
     $('.header').on('mouseleave', function(){
         if(device_status == 'pc'){
             $('.header').removeClass('menu_over')
             $('.header .gnb ul.depth1 > li').removeClass('on')
         }
     })
     $('.header .tnb .lang').on('focusin', function(){
         if(device_status == 'pc'){
             $('.header').removeClass('menu_over')
             $('.header .gnb ul.depth1 > li').removeClass('on')
         }
     })
 
     $(".header .gnb ul.depth1 > li > a").on("click", function(e){
         if(device_status == 'mobile'){
             e.preventDefault();		
             $(this).parent().toggleClass('on')
         }
     });
 
     $('.header .gnb .gnb_open').on('click', function(){
         $('.header').addClass('menu_open')
         $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
     })
     $('.header .gnb .gnb_close').on('click', function(){
         $('.header').removeClass('menu_open')
         $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
     })

     const footer_swiper = new Swiper('.footer .swiper', { 
        slidesPerView: 1, 
        spaceBetween: 16, 
        breakpoints: {
            450: {    
                slidesPerView: 2,
                spaceBetween: 16,
            },
            590: {    
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768: {    
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1024: {  
                slidesPerView: 5,
                spaceBetween: 30,
            },
            1320: {   
                slidesPerView: 6,
                spaceBetween: 40,
            },
        },
        loop: true,  
        autoplay: {  
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.footer .button_prev',
            prevEl: '.footer .button_next',
        },
	});

    $('footer .top').on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })
 

})