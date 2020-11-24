$(function () {

//main slider

// Today slider thumbs
	  var cartThumbs = new Swiper('.js-slider-category', {
	    slidesPerView: 3,
	    spaceBetween: 5,
	    freeMode: true,
	    speed: 1000,
	    watchSlidesProgress: true
	  });

	// Today slider main (Parallax)
	  var cartMainSliderSelector = '.js-main-slider',
	      interleaveOffset = 0.5;

	  //count of today slider
	  var countSliderCart = $('.js-main-slider'),
	      itemSliderToday = $('.cart-slider__slide');

	  var cartMainSliderOptions = {
	    loop: false,
	    speed: 1000,
	    initialSlide: 0,
	    grabCursor: false,
	    simulateTouch: true,
	    autoplay: {
			delay: 5000
		},
	    watchSlidesProgress: true,
	    thumbs: {
	      swiper: cartThumbs
	    },
	    pagination: {
	        el: '.swiper-pagination',
	        type: 'progressbar',
	    },
	    on: {
	      progress: function () {
	        const isIE = navigator.appVersion.indexOf('Edge') > -1;
	        if (isIE) return;
	        var swiper = this;
	        for (var i = 0; i < swiper.slides.length; i++) {
	          var slideProgress = swiper.slides[i].progress,
	            innerOffset = swiper.width * interleaveOffset,
	            innerTranslate = slideProgress * innerOffset;
	          swiper.slides[i].querySelector('.slider-item__block').style.transform =
	            'translate3d(' + innerTranslate + 'px, 0, 0)';
	        }
	      },
	      touchStart: function () {
	        const isIE = navigator.appVersion.indexOf('Edge') > -1;
	        if (isIE) return;
	        var swiper = this;
	        for (var i = 0; i < swiper.slides.length; i++) {
	          swiper.slides[i].style.transition = '';
	        }
	      },
	      setTransition: function (speed) {
	        const isIE = navigator.appVersion.indexOf('Edge') > -1;
	        if (isIE) return;
	        var swiper = this;
	        for (var i = 0; i < swiper.slides.length; i++) {
	          swiper.slides[i].style.transition = speed + 'ms';
	          swiper.slides[i].querySelector('.slider-item__block').style.transition =
	            speed + 'ms';
	        }
	      }
	    }
	  };

	  var todayMainSlider = new Swiper(cartMainSliderSelector, cartMainSliderOptions);


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
		},
		navigation: {
			nextEl: '.navigation-arrows__item.next',
			prevEl: '.navigation-arrows__item.prev',
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
		navigation: {
			nextEl: '.navigation-arrows__item.next',
			prevEl: '.navigation-arrows__item.prev',
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
		navigation: {
			nextEl: '.navigation-arrows__item.next',
			prevEl: '.navigation-arrows__item.prev',
		  },
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
		navigation: {
			nextEl: '.navigation-arrows__item.next',
			prevEl: '.navigation-arrows__item.prev',
		  },
	});
	// $('.navigation-arrows__item.prev').on('click', function(){
	// 	swiperPlacement01.slidePrev(800);  
	// });

	// $('.navigation-arrows__item.next').on('click', function(){
	// 	swiperPlacement01.slideNext(800);  
	// });

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
				spaceBetween: 12
			},
			961: {
				simulateTouch: false,
				spaceBetween: 0
			}
		}
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
	let restSwiper = new Swiper('.js-events-slider', {
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