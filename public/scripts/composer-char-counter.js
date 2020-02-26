$(document).ready(() => {

  // let limit = 140;
  // $('textarea').keyup(function() {
  //   count = $(this).val().length;
  //   let remaining = limit - count;
  //   update(remaining);
  // });

  
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
      $('.counter').html(count).css('color', 'red');
    } else {
      $('.counter').html(count).css('color', '#545149');
    }
  }

});