$('.js-show-popup').click(function() {
  $('.js-create-mask').mask("+7 (999) 999-99-99");

  $('.js-popup').css('display', 'block');
  $('body').css('overflow-y', 'hidden');

  let popupHeight = $('.js-calc-margin').eq(0).innerHeight();
  $('.js-calc-margin').css('top', ($(window).innerHeight() - popupHeight) / 2);
})

$(window).resize(function() {
  let popupHeight = $('.js-calc-margin').eq(0).innerHeight();
  $('.js-calc-margin').css('top', ($(window).innerHeight() - popupHeight) / 2);
})

$('.js-close-popup').click(function() {
  $('.js-popup').css('display', 'none');
  $('body').css('overflow-y', 'scroll');

})

$('.js-form').submit(function(evt) {
  evt.preventDefault();
  let telInput = $('.js-create-mask');
  if ($('.js-checkbox').data('checked')) {
    if (telInput.val().length === 18) {
      output.phone = telInput.val();
      $('.js-calc-margin').eq(0).css('display', 'none');
      $('.js-calc-margin').eq(1).css('display', 'block');
      let closeTimeout = setTimeout(function() {
        $('.js-popup').css('display', 'none');
        $('body').css('overflow-y', 'scroll');
      }, 4000)
    } else {
      telInput.css('border', '1px solid #EB5757');
      let timeout = setTimeout(function() {
        telInput.removeAttr('style');
      }, 2000)
    }
  }

})

$('.js-checkbox').click(function() {
  $(this).attr('data-checked', function(index, attr) {
    return attr == 'true' ? 'false' : 'true';
  })
})



let output = {
  modelName: 'XC60',
  plan: 'leasing'
};
