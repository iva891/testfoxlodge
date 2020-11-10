$(function () {
	$('.js-add').click(function() {
		const $input = $(this).prev().find('.js-counter-input');
		let currentValue = parseInt($input.val());
		$input.attr('value',currentValue + 1);
		$(this).prev().find('.js-counter-text').text(currentValue + 1);
	});

	$('.js-sub').click(function() {
		const $input = $(this).next().find('.js-counter-input');
		let currentValue = parseInt($input.val());
		if (currentValue >= 1) {
			$input.attr('value',currentValue - 1);
			$(this).next().find('.js-counter-text').text(currentValue - 1);
		}
	});
});
