$(document).ready(function(){

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

    const exh_swiper = new Swiper('.exh .swiper', { 

	autoplay: {  
		delay: 3500,
		disableOnInteraction: true,
	},

	loop: true,  

	navigation: {  
		nextEl: '.exh .button_next',  
		prevEl: '.exh .button_prev',  
	},

});

const arts_swiper = new Swiper('.arts .swiper', { 

	autoplay: { 
		delay: 5000,
		disableOnInteraction: true,
	},


	slidesPerView: 1, 
	spaceBetween: 12, 
	breakpoints: {
		400: {    
			slidesPerView: 2,
			spaceBetween: 12,
		},
		640: {   
			slidesPerView: 3,
			spaceBetween: 20,
		},
		768: {   
			slidesPerView: 3,
			spaceBetween: 22,
		},
		1024: {   
			slidesPerView: 3,
			spaceBetween: 28,
		},
		1280: {   
			slidesPerView: 4,
			spaceBetween: 28,
		},
		1600: {  
		slidesPerView: 5,
		spaceBetween: 28,
	},
	},

	loop: true,  

	navigation: {  
		nextEl: '.arts .button_next', 
		prevEl: '.arts .button_prev',  
	},
});

$('.gal .notice > ul > li ').on('click', function(){
	$('.gal .notice > ul > li ').removeClass('active')
	$(this).addClass('active')
})

const gal_swiper = new Swiper('.gal .collect .swiper', { 

	effect: "fade",

	loop: true,  

	navigation: {  
		nextEl: '.gal .collect .button_next',  
		prevEl: '.gal .collect .button_prev',  
	},

});

})