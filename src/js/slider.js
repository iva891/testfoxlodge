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
// Restaurants slider
	let swiperRestaurants = new Swiper('.js-slider-restaurants-01', {
		slidesPerView: 1,
		loop: false,
		speed: 800,
		watchSlidesVisibility: true,
		observer: true, 
		observeParents: true,
		pagination: {
			el: '.swiper-pagination',
			type: "bullets",

		},
	});
	let swiperRestaurants02 = new Swiper('.js-slider-restaurants-02', {
		slidesPerView: 1,
		loop: false,
		speed: 800,
		watchSlidesVisibility: true,
		observer: true, 
		observeParents: true,
		pagination: {
			el: '.swiper-pagination',
			type: "bullets",

		},
	});
	let swiperRestaurants03 = new Swiper('.js-slider-restaurants-03', {
		slidesPerView: 1,
		loop: false,
		speed: 800,
		watchSlidesVisibility: true,
		observer: true, 
		observeParents: true,
		pagination: {
			el: '.swiper-pagination',
			type: "bullets",

		},
	});
	$('.navigation-arrows__item.prev').on('click', function(){
		swiperRestaurants.slidePrev(800);  
	});

	$('.navigation-arrows__item.next').on('click', function(){
		swiperRestaurants.slideNext(800);  
	});

	// Placement slider
	let swiperPlacement01 = new Swiper('.js-slider-placement-01', {
		slidesPerView: 1,
		loop: false,
		speed: 800,
		watchSlidesVisibility: true,
		observer: true, 
		observeParents: true,
		pagination: {
			el: '.swiper-pagination',
			type: "bullets",

		},
	});
	$('.navigation-arrows__item.prev').on('click', function(){
		swiperPlacement01.slidePrev(800);  
	});

	$('.navigation-arrows__item.next').on('click', function(){
		swiperPlacement01.slideNext(800);  
	});




});