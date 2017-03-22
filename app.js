// waits til html is all ready
$( document ).ready(function(){
  $('.div1').css('background-color', 'yellow');
});

// waits til css and images are loaded
$( window ).load(function() {
  $('p').css('background-color', 'green');
});
