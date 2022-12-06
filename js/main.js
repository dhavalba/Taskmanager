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
        scrollSpeed: 200,
        offset : 0,
        scrollbars: false,
        updateHash: false,
        afterResize: function() {
          if ($(window).width() <= 770) {
            $('.branding-logos ul li').removeClass('scrollable-section');
            $('html').removeClass('scrollable-section');
            $.scrollify.destroy();
            $.scrollify.disable()
          }else {
            $.scrollify.enable()
          }
        },
      });
      // $.scrollify.disable()
      
});
