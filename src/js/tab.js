
$('.js-tab__list li:first-child').addClass('active');
$('.js-tab__content').hide();
$('.js-tab__content:first').show();

$('.js-tab__list li').click(function(){
  $('.js-tab__list li').removeClass('active');
  $(this).addClass('active');
  $('.js-tab__content').hide();
  
  var activeTab = $(this).find('a').attr('href');
    $(activeTab).slideDown();
    return false;
});