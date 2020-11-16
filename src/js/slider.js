$(function () {

//video slider events
	let swiperServices = new Swiper('.js-slider-services', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: false,
		speed: 800,
		watchSlidesVisibility: true,
		breakpoints: {
			650: {
				slidesPerView: 2
			},
			1300: {
				slidesPerView: 4
			}
		}
	});


	$('.js-prev-services').on('click', function(){
		swiperServices.slidePrev(800);  
	});

	$('.js-next-services').on('click', function(){
		swiperServices.slideNext(800);  
	});


});