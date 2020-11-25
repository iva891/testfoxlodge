$(function () {

//main slider

// Today slider thumbs
	const speedSlide = 5000;

	let cartThumbs = new Swiper('.js-slider-category', {
	    slidesPerView: 3,
	    spaceBetween: 0,
	    freeMode: true,
	    autoplay: {
			delay: speedSlide
		},
		disableOnInteraction: false,
	    speed: 0,
	    watchSlidesProgress: true
	});

	// Today slider main (Parallax)
	  let cartMainSliderSelector = '.js-main-slider',
	      interleaveOffset = 0.5;

	  //count of today slider
	  let countSliderCart = $('.js-main-slider'),
	      itemSliderToday = $('.cart-slider__slide');

	  let cartMainSliderOptions = {
	    loop: false,
	    effect: 'fade',
	    speed: 0,
	    initialSlide: 0,
	    grabCursor: false,
	    simulateTouch: true,
	    autoplay: {
			delay: speedSlide
		},
		disableOnInteraction: false,
	    watchSlidesProgress: true,
	    thumbs: {
	      swiper: cartThumbs
	    },
	    on: {
	    	init: function(){
	    		let $active = $('.js-slider-category .swiper-slide-thumb-active'),
	      		$activePrev = $active.prevAll();
	      		$('.js-slider-category .swiper-slide').removeClass('swiper-slide-line anim-line')
	      		$activePrev.addClass('swiper-slide-line');
	      		$active.addClass('anim-line')
	    	},
	      // progress: function () {
	      //   const isIE = navigator.appVersion.indexOf('Edge') > -1;
	      //   if (isIE) return;
	      //   var swiper = this;
	      //   for (var i = 0; i < swiper.slides.length; i++) {
	      //     var slideProgress = swiper.slides[i].progress,
	      //       innerOffset = swiper.width * interleaveOffset,
	      //       innerTranslate = slideProgress * innerOffset;
	      //     swiper.slides[i].querySelector('.slider-item__block').style.transform =
	      //       'translate3d(' + innerTranslate + 'px, 0, 0)';
	      //   }
	      // },
	      touchStart: function () {
	        const isIE = navigator.appVersion.indexOf('Edge') > -1;
	        if (isIE) return;
	        var swiper = this;
	        for (var i = 0; i < swiper.slides.length; i++) {
	          swiper.slides[i].style.transition = '';
	        }
	      },
	      slideChangeTransitionStart: function(){
	      	let $active = $('.js-slider-category .swiper-slide-thumb-active'),
	      		$activePrev = $active.prevAll();
	      		$('.js-slider-category .swiper-slide').removeClass('swiper-slide-line anim-line')
	      		$activePrev.addClass('swiper-slide-line');
	      		$active.addClass('anim-line');

	      }
	      // setTransition: function (speed) {
	      //   const isIE = navigator.appVersion.indexOf('Edge') > -1;
	      //   if (isIE) return;
	      //   var swiper = this;
	      //   for (var i = 0; i < swiper.slides.length; i++) {
	      //     swiper.slides[i].style.transition = speed + 'ms';
	      //     swiper.slides[i].querySelector('.slider-item__block').style.transition =
	      //       speed + 'ms';
	      //   }
	      // }
	    }
	  };

	  let todayMainSlider = new Swiper(cartMainSliderSelector, cartMainSliderOptions);

	  $(".slider-category__item").on('click', function(){
		    todayMainSlider.autoplay.start();
		});

//video slider events
	let swiperServices = new Swiper('.js-slider-services', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: false,
		speed: 1200,
		watchSlidesVisibility: true,
		breakpoints: {
			480: {
				slidesPerView: 2
			},
			960: {
				slidesPerView: 3
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


//instagram slider
	let instSwiper = new Swiper('.js-slider-instagarm', {
		slidesPerView: 1,
		spaceBetween: 12,
		loop: false,
		speed: 800,
		watchSlidesVisibility: true,
		simulateTouch: true,
		breakpoints: {
			481: {
				simulateTouch: true,
				spaceBetween: 20
			},
			961: {
				simulateTouch: false,
				spaceBetween: 0
			}
		}
	});

// Restaurants slider
	var swipes = [];
	$('.js-slider-restaurants').each(function(i, obj){
		swipes[i] = new Swiper(obj, {
		effect: 'coverflow',
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		speed: 1200,
		autoHeight: true,
		centeredSlides: true,
		pagination: {
			el: '.swiper-pagination',
		  },
		navigation: {
			nextEl: '.navigation-arrows__item.next',
			prevEl: '.navigation-arrows__item.prev'
		}
		});
	});

// Placement slider
	var swipes2 = [];
	$('.js-slider-placement').each(function(i, obj){
		swipes2[i] = new Swiper(obj, {
		effect: 'coverflow',
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		speed: 1200,
		centeredSlides: true,
		navigation: {
			nextEl: '.navigation-arrows__item.next',
			prevEl: '.navigation-arrows__item.prev'
		},
		pagination: {
			el: '.swiper-pagination',
		  },
		});
	});
	
// Placement types
	$(".types-placement__list").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top-100}, 1500);
		
	});
		


//rest slider
	if ($W.width() > 960) {
			let restSwiper = new Swiper('.js-rest-slider', {
				slidesPerView: 1,
				spaceBetween: 20,
				loop: false,
				speed: 800,
				effect: 'fade',
				simulateTouch: true,
				navigation: {
					nextEl: '.js-next-rest',
					prevEl: '.js-prev-rest',
				},
				breakpoints: {
					961: {
						spaceBetween: 0
					},
				}
			});
	} else {
		let restSwiper = new Swiper('.js-rest-slider', {
			slidesPerView: 1,
			spaceBetween: 20,
			loop: false,
			speed: 800,
			simulateTouch: true,
			navigation: {
				nextEl: '.js-next-rest',
				prevEl: '.js-prev-rest',
			},
			breakpoints: {
				961: {
					spaceBetween: 0
				},
			}
		});
	}

//events slider
	let eventsSwiper = new Swiper('.js-events-slider', {
		effect: 'coverflow',
		slidesPerView: 1,
		spaceBetween: 0,
		loop: false,
		speed: 800,
		simulateTouch: true,
		coverflowEffect: {
	        rotate: 50,
	        stretch: 0,
	        depth: 100,
	        modifier: 1,
	        slideShadows: true,
	      },
		navigation: {
			nextEl: '.js-next-event',
			prevEl: '.js-prev-event',
		},
		breakpoints: {
			481: {
				spaceBetween: 20
			},
			961: {
				spaceBetween: 50
			},
			1211: {
				spaceBetween: 90
			},
		}
	});
});



	