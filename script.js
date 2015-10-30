//script.js -- Kilo9

$(document).ready(function() {

  //swaying effect
  function sway() {
    $('div#container').animate({
      top: '+=40px'
    }, 1000, function() {
      $('div#container').animate({
        top: '-=40px'
      }, 1000);
    });
  }

  //raise by amount
  function raise(selector, amount, time) {
    $(selector).animate({
      top: '+=' + amount + 'px'
    }, time);
  }

  //set sway on loop
  var timer = setInterval(sway, 2500);

  //back slider
  $('div#container').hover(function () {
    window.clearInterval(timer);
    $('p#front, div#back').finish();
    $('div#back').animate({
      top: '140px'
    });
  }, function () {
    $('div#back').animate({
      top: '30px'
    })
    timer = setInterval(sway, 2500);
  })
});
