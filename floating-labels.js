(function($) {
  $(document).ready(function() {
    $('.floating').each(function() {
      var fontSize = parseInt($(this).css('font-size'));
      var inputLabel = $(this).attr('placeholder');
      $('<span class="floating-label">' + inputLabel + '</span>').insertBefore($(this)).hide();
      var inputHeight = parseInt($(this).css('padding-top'));
      var labelSize = inputHeight / 1.1;
      var inputPadding = parseFloat($(this).css('padding-left'));
      var inputTop = $(this).position();
      var inputLeft = $(this).offset(); // fix for Chrome
      var labelLeft = inputLeft.left + inputPadding;
      var labelTop = inputTop.top + (fontSize / 1.05);
      $(this).prev('.floating-label').css({
        'font-size': labelSize + 'px',
        'left': labelLeft + 'px',
        'top': labelTop + 'px'
      });    
    });
    $('.floating').on('keyup', function() {
      if ($(this).val()) {
        $(this).prev('.floating-label').show();
      } else {
        $(this).prev('.floating-label').hide();
      }
    });
    $(window).resize(function(){
      $('.floating').each(function() {
        var fontSize = parseInt($(this).css('font-size'));
        var inputTop = $(this).position();
        var inputLeft = $(this).offset(); // fix for Chrome
        var inputPadding = parseFloat($(this).css('padding-left'));
        var labelLeft = inputLeft.left + inputPadding;
        var labelTop = inputTop.top + (fontSize / 1.05);
        $(this).prev('.floating-label').css({     
          'left': labelLeft + 'px',
          'top': labelTop + 'px'
        });
      });
    });
  });
})(jQuery);
