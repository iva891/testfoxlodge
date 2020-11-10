$(function () {
	const $select = $('.js-select');
	const $selectInput = $('.js-select-input');
	const $selectFilter = $('.js-select-filter');

	$select.select2({
		dropdownAutoWidth : true,
		containerCssClass: 'select',
		dropdownCssClass: 'no-input'
	});

	$selectInput.select2({
		dropdownAutoWidth : true,
		containerCssClass: 'select',
		dropdownCssClass: 'input',
		tags: true
	});

	$selectFilter.select2({
		containerCssClass: 'filter',
		dropdownCssClass: 'no-input filter-dropdown'
	});

	// declaring for global visibility
	window.$select = $select;
	window.$selectInput = $selectInput;
	window.$selectFilter = $selectFilter;
});
