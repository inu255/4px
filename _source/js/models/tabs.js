$('.js-show-suv').click(function() {
  $('.js-show-suv').addClass('models__button--active');
  $('.js-show-sedan').removeClass('models__button--active');
  $('.js-show-cross').removeClass('models__button--active');



  $('.js-suv-carousel').css('display', 'block');
  $('.js-sedan-carousel').css('display', 'none');
  $('.js-cross-carousel').css('display', 'none');
});

$('.js-show-sedan').click(function() {
  $('.js-show-suv').removeClass('models__button--active');
  $('.js-show-sedan').addClass('models__button--active');
  $('.js-show-cross').removeClass('models__button--active');

  $('.js-suv-carousel').css('display', 'none');
  $('.js-sedan-carousel').css('display', 'block');
  $('.js-cross-carousel').css('display', 'none');
});

$('.js-show-cross').click(function() {
  $('.js-show-suv').removeClass('models__button--active');
  $('.js-show-sedan').removeClass('models__button--active');
  $('.js-show-cross').addClass('models__button--active');

  $('.js-suv-carousel').css('display', 'none');
  $('.js-sedan-carousel').css('display', 'none');
  $('.js-cross-carousel').css('display', 'block');
});
