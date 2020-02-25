$(document).ready(function() {

  $(function() {
    let input = $('textarea');
    let display = $('.counter'); 
    let limit = 10;
    let count = 0;
    
    count = input.val().length;
    let remaining = limit - count;
    update(remaining);
  
    input.keyup(function(e) {
      count = $(this).val().length;
      remaining = limit - count;
  
      update(remaining);
    });
  
    function update(count) {
      if (count < 0) {
        display.css('color', 'red');
      }
        display.html(count);

    }
  
  });
});