/**
 * Add class to element based on scroll behavior
 */
(function($) {
  $.fn.scrollClass = function( options ){
    // Default options
    var d = {
      'last': 0,
      'offset': 100,
      'target': $(this),
      'class': 'scrolled',
      'downClass': 'progressing',
      'upClass': 'regressing'
    };



    // Merge Options
    options = $.extend( d, options );



    // Called when the user scrolls
    options.scroll = function(){
      options.current = $(window).scrollTop();

      // Offset from top class
      if( options.current >= options.offset ){
        options.target.addClass( options.class );
      } else {
        options.target.removeClass( options.class );
      }

      // Moving up / down class
      if( options.current >= options.last ){
        options.target.removeClass( options.upClass ).addClass( options.downClass );
      } else {
        options.target.removeClass( options.downClass ).addClass( options.upClass );
      }

      options.last = options.current;
    };



    // Initiate
    options.init = function(){
      // Listen to scroll
      $(window).on('scroll', function(){
        options.scroll();
      });

      // Call on page load
      options.scroll();
    };

    options.init();
  };
}(window.jQuery));