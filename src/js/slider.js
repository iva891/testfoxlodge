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



// Restaurants slider and placements
	var swipes = [];
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
			nextEl: '.navigation-arrows__item.next',
			prevEl: '.navigation-arrows__item.prev'
		}
		});
	});

	
// Placement types
	$(".js-types__list").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top-100}, 1500);
		
	});
});



	