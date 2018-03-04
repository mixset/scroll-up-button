$(document).ready(function() {

 // Show scrollToTop button or not
 $(window).scroll(function() {
  if($(this).scrollTop() > 200) {
   $('.scrollup').fadeIn();
  } 
  else
  {
   $('.scrollup').fadeOut();
  }
 });

 // Fluent scrolling to top
 $('.scrollup').click(function() {
  $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });	 
 
});