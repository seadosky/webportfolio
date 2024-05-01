$(document).ready(function(){
    const myFullpage = new fullpage('#fullpage', { 

		navigation: true,
		navigationPosition: 'left', 
		anchors: ['Main', 'page2', 'page3', 'page4'],
		navigationTooltips: ['Main', '공간소개', '이용안내', '갤러리'], 
		showActiveTooltip: true, 

		autoScrolling:true, 
		scrollHorizontally: true,

		verticalCentered: true,
		
		scrollOverflow: false, 

		afterLoad: function(origin, destination, direction, trigger){
			if(destination.index == 0){
				
			}
		},

		responsiveWidth: 768 
	});

	$('.quick .top').on('click', function(){
		fullpage_api.moveTo('Main',0)
	})

	const gallery_swiper = new Swiper('.gallery .swiper', { 
		slidesPerView: 4, 
		spaceBetween: 35, 
		centeredSlides: true, 
		loop: true,  
		autoplay: {  
			delay: 2500,
			disableOnInteraction: true,
		},
	});


})