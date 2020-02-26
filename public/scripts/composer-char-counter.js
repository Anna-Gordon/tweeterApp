$(document).ready(() => {
  
  let limit = 10;
  
  let count = $('textarea').val().length;
  let remaining = limit - count;
  update(remaining);

  $('textarea').keyup(function(event) {
    count = $(this).val().length;
    remaining = limit - count;

    update(remaining);
  });

  function update(count) {
    if (count < 0) {
      $('.counter').html(count).addClass('counter-error');
    } else if (count >= 0) {
      $('.counter').html(count).removeClass('counter-error');
    }
  }

});