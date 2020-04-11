$(document).ready(function(){
  $(window).resize(function(){
  $('.grug').css({
   position:'absolute',
   left: ($(window).width()
     - $('.grug').outerWidth())/2,
   top: ($(window).height()
     - $('.grug').outerHeight())/2
  });

 });

 // To initially run the function:
 $(window).resize();

});
