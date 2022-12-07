// $(function() {
//   $.scrollify({
//     section : ".scrollable-section",
//     easing: "easeOutExpo",
//     scrollSpeed: 200,
//     offset : 0,
//     scrollbars: false,
//     updateHash: false,
//   });
// });
$( document ).ready(function() {
    $.scrollify({
        section : ".scrollable-section",
        easing: "easeOutExpo",
        scrollSpeed: 100,
        offset : 0,
        scrollbars: false,
        updateHash: false,
        touchScroll: false,
      });
      var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 769) {
          $('section').removeClass('scrollable-section');
          $('#for-scroll').removeClass('scrollable-section');
         
          $.scrollify.disable()
        } else if (ww > 769) {
          $('section').addClass('scrollable-section');
          $('#for-scroll').addClass('scrollable-section');
        };
      };
      $(window).resize(function(){
        alterClass();
      });
      alterClass();
});
