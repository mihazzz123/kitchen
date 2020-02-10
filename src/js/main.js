$(document).ready(function() {

  $('.header-nav.mobile').animate({'height' : 'hide'},0);
  $('.header-nav__button').on('click', function() {
    $('.header-nav.mobile').animate({'height' : 'hide'},300);
    $(this).toggleClass('header-nav__button_active');
    if($(this).hasClass('header-nav__button_active')){
      $('.header-nav.mobile').animate({'height' : 'show'},300);
    }
  });

  $('#slider').slick({
    slidesToScroll: 1,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: '<i class="slider-arrow__left slider-arrow fas fa-chevron-left"></i>',
    nextArrow: '<i class="slider-arrow__right slider-arrow fas fa-chevron-right"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 650,
        settings: {
          centerMode: true,
          centerPadding: '130px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 560,
        settings: {
          centerMode: true,
          centerPadding: '90px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 490,
        settings: {
          centerMode: false,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });



});