$('.js-select-model').click(function() {
  clearModel();
  selectModel($(this));
  let selectedModel = $(this).find('.js-model-image').html();

  $('.js-full-image').attr('src', './_assets/img/info/' + selectedModel + '.png');
  $('.js-model-name').html(selectedModel);
  output.modelName = selectedModel;
})

$('.js-select-model').hover(function() {
  clearModel();
  selectModel($(this));
})

function selectModel(item) {
  let imgUrl = item.find('.models__image').attr('src').replace('.jpg', 'hover.jpg');
  item.find('.models__name').css({
    'font-weight': 'bold',
    'color': '#007BCD'
  });
  item.find('.models__image').attr('src', imgUrl);
}

function clearModel() {
  $('.js-select-model').each(function(i) {
    if ($(this).find('.models__image').attr('src').indexOf('hover.jpg', 0)) {
      let imgUrlClear = $(this).find('.models__image').attr('src').replace('hover.jpg', '.jpg');
      $(this).find('.models__image').attr('src', imgUrlClear);
      $(this).find('.models__name').css({
        'font-weight': 'normal',
        'color': '#161618'
      });
    }
  })
}
