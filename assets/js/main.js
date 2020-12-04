(function() {
  $(function() {
    $(window).load(function() {
      var styles;
      $("#top, #mid-divide").height($(window).height());
      styles = {
        "padding-top": $(window).height() / 4,
        "padding-bottom": $(window).height() / 4
      };
      return $("#about, #testimonials").css(styles);
    });
    return $('a.scroll-to').click(function() {
      var $anchor;
      $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 2000, 'easeInOutExpo');
      return event.preventDefault();
    });
  });

}).call(this);
