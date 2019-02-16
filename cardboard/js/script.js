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

$('.slider').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slider__item'
});
$('.slider__item').slick({
 slidesToShow: 3,
 slidesToScroll: 1,
 asNavFor: '.slider',
 dots: true,
 centerMode: true,
 focusOnSelect: true,
 nextArrow: '<div class="arrow arrow_right"></div>',
 prevArrow: '<div class="arrow arrow_left"></div>',
 responsive: [
  {
   breakpoint: 1200,
   settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
   }
  },
  {
   breakpoint: 1024,
   settings: {
    slidesToShow: 2,
    slidesToScroll: 1
   }
  },
  {
   breakpoint: 768,
   settings: {
    slidesToShow: 1,
    slidesToScroll: 1
   }
  }
 ]
});
