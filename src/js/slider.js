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

// Restaurants slider and placements
	let swipes = [];
	$('.js-slider__rest-place').each(function(i, obj){
		swipes[i] = new Swiper(obj, {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		speed: 1200,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
		  },
		navigation: {
			nextEl: '.js-rest-next',
			prevEl: '.js-rest-prev'
		}
		});
	});

	
// Placement types
	$(".js-types__list a").on("click", function (event) {
		event.preventDefault();
		let id  = $(this).attr('href'),
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
		slidesPerView: 1,
		spaceBetween: 20,
		loop: false,
		speed: 800,
		simulateTouch: true,
		navigation: {
			nextEl: '.js-next-event',
			prevEl: '.js-prev-event',
		},
		breakpoints: {
			481: {
				spaceBetween: 30
			},
			961: {
				spaceBetween: 40
			},
			1211: {
				spaceBetween: 60
			},
		}
	});

// Parallax slider
	let gallerySelector = '.js-gallery-slider';
	let	interleaveOffsetGallery = 0.5;

	let galleryOptions = {
	  loop: false,
	  speed: 1500,
	  initialSlide: 0,
	  autoplay:{
		delay: 4000
	  },
	  grabCursor: false,
	  simulateTouch:false,
	  watchSlidesProgress: true,
	  navigation: {
		nextEl: '.js-next-gallery',
		prevEl: '.js-prev-gallery',
	  },
	  breakpoints: {
		700: {
		  simulateTouch: true 
		}
	  },
	  on: {
		progress: function(){
		  let swiper = this;
		  for (let i = 0; i < swiper.slides.length; i++) {
			let slideProgress = swiper.slides[i].progress,
				innerOffset = swiper.width * interleaveOffsetGallery,
				innerTranslate = slideProgress * innerOffset;
				swiper.slides[i].querySelector(".js-gallery-slide").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
		  }
		},
		touchStart: function() {
		  let swiper = this;
		  for (let i = 0; i < swiper.slides.length; i++) {
			swiper.slides[i].style.transition = "";
		  }
		},
		setTransition: function(speed) {
		  let swiper = this;
		  for (let i = 0; i < swiper.slides.length; i++) {
			swiper.slides[i].style.transition = speed + "ms";
			swiper.slides[i].querySelector(".js-gallery-slide").style.transition =
			  speed + "ms";
		  }
		}
	  }
	};
	let gallerySlider = new Swiper(gallerySelector, galleryOptions);


//relax slider
	let relaxSwiper = new Swiper('.js-slider-relax', {
		slidesPerView: 1,
		spaceBetween: 14,
		loop: false,
		speed: 800,
		simulateTouch: true,
		navigation: {
			nextEl: '.js-next-relax',
			prevEl: '.js-prev-relax',
		},
		breakpoints: {
			481: {
				spaceBetween: 30
			},
			961: {
				spaceBetween: 40,
				slidesPerView: 2
			},
			1211: {
				spaceBetween: 58,
				slidesPerView: 2
			},
		}
	});



});

// News slider
let swiperNews = new Swiper('.js-slider-news', {
    slidesPerView: 1,
    spaceBetween: 50,
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
            slidesPerView: 3
        }
    }
});

$('.js-prev-news').on('click', function(){
    swiperNews.slidePrev(800);
});

$('.js-next-news').on('click', function(){
    swiperNews.slideNext(800);
});



