
$('.tab-profile__list li:first-child').addClass('active');
$('.tab-profile__content').hide();
$('.tab-profile__content:first').show();

$('.tab-profile__list li').click(function(){
  $('.tab-profile__list li').removeClass('active');
  $(this).addClass('active');
  $('.tab-profile__content').hide();
  
  var activeTab = $(this).find('a').attr('href');
    $(activeTab).slideDown();
    return false;
});