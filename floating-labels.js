(function($) {
    $(document).ready(function() {
        $('.floating').each(function() {
            var inputLabel = $(this).attr('placeholder');
            $('<span class="floating-label">' + inputLabel + '</span>').insertBefore($(this)).hide();
            var fontSize = parseInt($(this).css('font-size'));
            var inputHeight = parseInt($(this).css('padding-top'));
            var labelSize = inputHeight / 1.1;
            var inputPadding = parseFloat($(this).css('padding-left'));
            var inputPosition = $(this).position();
            var labelLeft = inputPosition.left + inputPadding;
            if ($(this).is('textarea')) {
                var labelTop = inputPosition.top * 1.06
            } else {
                var labelTop = inputPosition.top * 1.03;
            }
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
    });
})(jQuery);
