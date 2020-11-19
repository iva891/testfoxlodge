$(function () {


//mini header
	let $header = $('.header');
	function fixedHeader(){
		if($W.scrollTop() > 50 ){
			$header.addClass("fixed");
		}
		else {
			$header.removeClass("fixed");
		}
	}
	fixedHeader();
	$W.scroll(function() {
		fixedHeader();
	});

//open-close menu 

	let $openMenu = $('.js-open-menu'),
		$menu = $('.js-menu');

	$openMenu.on('click', function(){
		$header.toggleClass('active-menu');
		$menu.slideToggle();
	})	

//mobile categories 
	let $category = $('.js-mobile-menu__title');

	$category.on('click', function(){
		let $this = $(this),
			$unit = $this.closest('.js-mobile-menu');

		$this.toggleClass('active');
		$unit.find('.js-mobile-menu__list').slideToggle();

	})
});