$('#treads').click(function (event) {
    event.preventDefault();
    $('.second').scrollView();
});

$.fn.scrollView = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
}

// Square boxes
$(function () {
    var options = {
        cellHeight: 80,
        verticalMargin: 10
    };
    $('.grid-stack').gridstack(options);
});
