let sliderInterval = setInterval(function() {
  $('#slider img:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#slider');
}, 2000);
  
$('#stop-button').on('click',function() {
  clearInterval(sliderInterval);
  $(this).text('Start');
});
  
$('#stop-button').on('click',function() {
  if ($(this).text() === 'Start') {
    sliderInterval = setInterval(function() {
       $('#slider img:first').fadeOut(500).next().fadeIn(500).end().appendTo('#slider');
      }, 10000);
        $(this).text('Stop');
      }
});

  
