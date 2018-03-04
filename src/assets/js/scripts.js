$(document).ready(function() {

    (function($) {
        var SCROLL_HEIGHT = 200,
            SCROLL_SPEED = 600;

        // Display scrollup buson based on height
        $(window).scroll(function() {
            var scrollup = $('.scrollup');

            if($(this).scrollTop() > SCROLL_HEIGHT) {
                scrollup.fadeIn();
            } else {
                scrollup.fadeOut();
            }
        });

        // Fluent scrolling to top
        $('.scrollup').click(function() {
            $('html').animate({ scrollTop: 0 }, SCROLL_SPEED);
            return false;
        });
    })($);

});