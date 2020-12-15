$('.js-change-plan').change(function(){
    if ($(this).is(':checked')) {
      $('.js-select-credit').toggleClass('switch__label--active');
      $('.js-select-leasing').toggleClass('switch__label--active');
      output.plan = 'leasing';
    } else {
      $('.js-select-credit').toggleClass('switch__label--active');
      $('.js-select-leasing').toggleClass('switch__label--active');
      output.plan = 'credit';
    }
});
