//script.js -- Kilo9

$(document).ready(function() {

  /*
  //swaying effect
  function sway() {
    $('p#front, div#back').animate({
      top: '+=40px'
    }, 1000, function() {
      $('p#front, div#back').animate({
        top: '-=40px'
      }, 1000);
    });
  }

  function raise(selector, amount, time) {
    $(selector).animate({
      top: '+=' + amount + 'px'
    }, time);
  }

  setInterval(sway, 2000);
  */
  
  

  //back slider
  $('p#front').hover(function () {
    $('p#front, div#back').finish();
    $('div#back').animate({
      top: '140px'
    });
  }, function () {
    $('div#back').animate({
      top: '30px'
    })
  })
});
