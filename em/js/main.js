$(document).ready(function(){

    let window_w
    let biz_swiper = undefined

    const visual_swiper = new Swiper('.visual .swiper', { 

        effect: "fade",

        autoplay: { 
            delay: 5000,
            disableOnInteraction: true,
        },

        loop: true, 

        pagination: { 
        el: '.visual .pagination', 
        clickable: true,  
	},

    });

    function initSwiper(){
        biz_swiper = new Swiper('.biz .swiper', { 
            slidesPerView: "auto", 
            spaceBetween: 16, 
            breakpoints: {
                1320: {  
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                },
            },
            loop: true,  
            autoplay: {  
                delay: 2500,
                disableOnInteraction: true, 
            },
            
        });
    }
    initSwiper()

    function resize_chk(){
        window_w = $(window).width()
        if(window_w <= 768){
            biz_swiper.destroy();
            biz_swiper = undefined
        }else{
            if(biz_swiper == undefined){
                initSwiper()
            }
        }
    }

    resize_chk()
    $(window).resize(function(){
        resize_chk()
    })

    const news_swiper = new Swiper('.news .swiper', {
        slidesPerView: "auto",
        spaceBetween: 12, 
        breakpoints: {
            768: {  
                spaceBetween: 16, 
            },
            1024: {  
                spaceBetween: 22,
            },
            1320: {  
                spaceBetween: 28,
            },
        },
    });

})