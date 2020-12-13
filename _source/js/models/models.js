$( document ).ready(function() {
  let suv = $('.js-suv-carousel').owlCarousel({
      margin: 20,
      dragEndSpeed: true,
      dots: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          }
      }
  })


  let sedan = $('.js-sedan-carousel').owlCarousel({
      margin: 20,
      dots: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          }
      }
  })

  let cross = $('.js-cross-carousel').owlCarousel({
      margin: 20,
      dots: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          }
      }
  })

  $('.js-show-suv').click(function() {
    $('.js-show-suv').css('color', '#161618');
    $('.js-show-sedan').css('color', '#8A8A8B');
    $('.js-show-cross').css('color', '#8A8A8B');

    $('.js-suv-carousel').css('display', 'block');
    $('.js-sedan-carousel').css('display', 'none');
    $('.js-cross-carousel').css('display', 'none');
  });

  $('.js-show-sedan').click(function() {
    $('.js-show-suv').css('color', '#8A8A8B');
    $('.js-show-sedan').css('color', '#161618');
    $('.js-show-cross').css('color', '#8A8A8B');

    $('.js-suv-carousel').css('display', 'none');
    $('.js-sedan-carousel').css('display', 'block');
    $('.js-cross-carousel').css('display', 'none');
  });

  $('.js-show-cross').click(function() {
    $('.js-show-suv').css('color', '#8A8A8B');
    $('.js-show-sedan').css('color', '#8A8A8B');
    $('.js-show-cross').css('color', '#161618');

    $('.js-suv-carousel').css('display', 'none');
    $('.js-sedan-carousel').css('display', 'none');
    $('.js-cross-carousel').css('display', 'block');
  });



  $('.js-select-model').click(function() {
    clearModel();
    selectModel($(this));
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


});
