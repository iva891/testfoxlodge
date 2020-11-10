$(function () {
	const $input = $('.js-input');

	$input.focus(function(){
		$(this).parent('.form-field').addClass('form-field--focused');
		$(this).parent('.form-field').removeClass('form-field--error');
	});

	$input.blur(function(){
		if ($(this).val() === ''){
			$(this).parent('.form-field').removeClass('form-field--focused');
		}
	});

	// Set focused class if have value
	function setInputFocused() {
		$input.each(function () {
			if ($(this).val() === ''){
				$(this).parent('.form-field').removeClass('form-field--focused');
			} else {
				$(this).parent('.form-field').addClass('form-field--focused');
			}
		});
	}

	setInputFocused();
});
