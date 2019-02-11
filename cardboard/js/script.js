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
