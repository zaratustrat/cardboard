$(document).ready(function () {
 var link = $('.menu-link');
 var link_active = $('.menu-link_active');
 var menu = $('.header');

 link.click(function () {
  link.toggleClass('menu-link_active');
  menu.toggleClass('menu_active');
 });
 link_active.click(function () {
  link.removeClass('menu-link_active');
 });
}); 

$('.slider-for').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slider-nav',
 autoplay: true,
 nextArrow: '<div class="arrow arrow_right"></div>',
 prevArrow: '<div class="arrow arrow_left"></div>',
 responsive: [
  {
   breakpoint: 992,
   settings: {
    arrows: true,
   }
  },
 ]
});

$('.slider-nav').slick({
 slidesToShow: 4,
 slidesToScroll: 1,
 asNavFor: '.slider-for',
 dots: false,
 focusOnSelect: true,
 nextArrow: '<div class="arrow arrow_right"></div>',
 prevArrow: '<div class="arrow arrow_left"></div>',
 responsive: [
  {
   breakpoint: 1200,
   settings: {
    slidesToShow: 4,
    slidesToScroll: 1,
   }
  },
  {
   breakpoint: 1024,
   settings: {
    slidesToShow: 4,
    slidesToScroll: 1
   }
  },
 ]
});

$('.reviews-slider').slick({
 infinite: true,
 // centerMode: true,
 slidesToShow: 3,
 slidesToScroll: 1, 
 nextArrow: '<div class="slick-arrow slick-next"></div>',
 prevArrow: '<div class="slick-arrow slick-prev"></div>',
 responsive: [
  {
   breakpoint: 1200,
   settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
   }
  },
  {
   breakpoint: 992,
   settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
   }
  },
  {
   breakpoint: 768,
   settings: {
    slidesToShow: 1,
    slidesToScroll: 1
   }
  },
  {
   breakpoint: 576,
   settings: {
    slidesToShow: 1,
    slidesToScroll: 1
   }
  }
 ]
}); 

// $(document).ready(function () {
//  $('#button-callback').on('click', function () {
//   $('#modal-callback').toggleClass('modal_visible');
//  });
//  $('.modal-close').on('click', function () {
//   $('#modal-callback').toggleClass('modal_visible');
//  });
// }); 

$(document).ready(function () {
 $('.callback-text').on('click', function () {
  $('#modal-callback').toggleClass('modal_visible');
 });
 $('.modal-close').on('click', function () {
  $('#modal-callback').toggleClass('modal_visible');
 });
}); 

$(document).ready(function(){
 $(".phone").mask("+7 (999) 99-99-999");
})
