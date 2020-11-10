$(function () {
	$('.js-input-mask').each(function () {
		const mask = $(this).data('mask');

		new Inputmask(
			{
				mask: mask,
				placeholder: '_'
			}
			).mask(this);
	});
});
