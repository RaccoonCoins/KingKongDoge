$(document).ready(function () {
    $(function(){
        var pageScroll = 100;
         $(window).scroll(function() {
           var scroll = getCurrentScroll();
             if ( scroll >= pageScroll ) {
                  $('header').addClass('sticky-header');
                }
                else {
                   $('header').removeClass('sticky-header');
               }
         });
       function getCurrentScroll() {
           return window.pageYOffset || document.documentElement.scrollTop;
           }
       });
    // Toggle Mobile Menu
    $(function () {
        $(".navbar-toggler").on("click", function (a) {
            $("#navbar-right").toggleClass("open");
            a.stopPropagation()
        });
        $(document).on("click", function (a) {
            if ($(a.target).is("#navbar-right") === false) {
                $("#navbar-right").removeClass("open");
            }
        });
    });
    // add class on nav link
    $(".nav-link").click(function () {
        if (!$(this).hasClass('active')) {
            $(".nav-link.active").removeClass("active");
            $(this).addClass("active");
        }
    });
    // Loader JS
    $('.loader-wrapper').fadeOut("slow");
});