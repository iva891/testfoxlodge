$(function () {
	let $popup = $('.js-popup');
	let $popupCloseBtn = $('.js-popup-close');
	let lastOpenedPopup = null;
	let scrollPosition;

	if (location.hash !== '') {
		$(`.js-popup[data-block='${location.hash.substr(1)}']`).addClass('is-show');
		scrollPosition = $(window).scrollTop();
	}

	$('body').on('click','.js-popup-link',function(e){
		e.preventDefault();
		let $this = $(this);
		let target = $this.attr('data-link');
		let href = $this.attr('data-href');
		let videoSrc = $this.attr('data-src');

		openPopup(target, href, videoSrc);

		return false;
	});

	function openPopup(target, href, videoSrc) {
		const $elem = $('.js-popup[data-block="'+target+'"]');
		$popup.removeClass('is-show');
		$elem.addClass('is-show');

		scrollPosition = $(window).scrollTop();

		let video = $elem.find('.js-iframe');
		video.attr('src',videoSrc);

		if (target !== 'media') {
			location.hash = target;
		}

		scrollPosition = $(window).scrollTop();

		if (href) {
      		history.pushState({}, '', href);
			$('.js-popup[data-block="'+target+'"]').find('.js-ajax-wrapper').empty();
			getEventItem(href,$('.js-popup[data-block="'+target+'"]'));
			lastOpenedPopup = 'href';
		}
	}

	window.openPopup = openPopup;

	$popupCloseBtn.on('click',function(){
		let $this = $(this);
		let $popup = $this.closest('.js-popup');

		$popup.removeClass('is-show');
		$popup.find('.js-iframe').attr('src','');
		location.hash = '';
		if (scrollPosition !== "undefined") {
			$(window).scrollTop(scrollPosition);
			scrollPosition = undefined;
		}

		if (lastOpenedPopup === 'href') {
			location.hash = '';
			history.back();
			lastOpenedPopup = null;
		}

	});

	function getEventItem(item,elem) {
		$.ajax({
			url: item,
			type: "GET",
			success: function(data) {
				if ($(data).length !== 0) {
					elem.find('.js-ajax-wrapper').html($(data).hide().fadeIn(1000));
				}
			}
		});
	}

});
