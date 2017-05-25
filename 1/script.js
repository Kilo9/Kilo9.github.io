$(function() {
  function createBlock() {
    $('body').append("<div class='draggable' style='background-color: #" + randColor() + ";'></div>");
    $('h1').draggable({ containment: 'body', scroll: false });
    $('.draggable').draggable({
      stop: function() {
        down($(this), parseInt($(this).css('top')));
      },
      start: function() {

      },
      containment: 'body', scroll: false
    });
  }
  function down($el, y) {
    $el.css('top', (y + 50) + 'px');
    if (parseInt($el.css('bottom')) > 0) {
      setTimeout(function () { down($el, y + 50) }, 100);
    } else {
      $el.css('bottom', '0px');
      $el.css('top', 'inherit');
    }
  }
  function randColor() {
    return Math.floor(Math.random()*16777215).toString(16);
  }
  setInterval(createBlock, 1000);
});
