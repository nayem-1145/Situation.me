(function ($) {
    'use strict';
    $(document).ready(function () {
        // sticky Header 
        $(window).on("scroll", function () {
            var scrollPosition = $(this).scrollTop();

            if (scrollPosition > 250) {
                $(".st_header_section").addClass("st_header_sticky");
            } else {
                $(".st_header_section").removeClass("st_header_sticky");
            }
        })
        // Popup Nav 
        $('.menu_btn').on('click', function (e) {
            e.preventDefault();
            $('.popup_menubar_sec').toggleClass('active');
        });
        $('.popup_menubar_overlay, #popup_nav_Closer').on('click', function () {
            $('.popup_menubar_sec').removeClass('active');
            $("body").removeClass("menu__open");
        });

        // Wow Js
        new WOW({
            animateClass: 'animate__animated'
        }).init();


        // Scroll to Top 
        let scroll_top = document.getElementById("scroll_top");
        if (scroll_top) {
            window.onscroll = function () {
                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    scroll_top.style.display = "block";
                    scroll_top.style.transform = "scale(1)";
                } else {
                    scroll_top.style.display = "none";
                }
            };
            scroll_top.addEventListener('click', function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            });
        }


    });

})(jQuery);