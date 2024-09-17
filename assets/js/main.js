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

        // Contact Form Submission
        $('#contact_form').on('submit', function (e) {
            e.preventDefault();
            var $this = $(this);
         
            $('button[type="submit"]', this).attr('disabled', 'disabled').val('Processing...');
            var form_data = $this.serialize();
            var required = 0;
            $(".required", this).each(function () {
                  if ($(this).val() === ''){
                     $(this).addClass('reqError');
                     required += 1;
                  } else{
                     if ($(this).hasClass('reqError'))
                     {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                              required -= 1;
                        }
                     }
                  }
            });
            if (required === 0) {
                  $.ajax({
                     type: 'POST',
                     url: 'ajax/mail.php',
                     data: {form_data: form_data},
                     success: function (data) {
                        $('button[type="submit"]', $this).removeAttr('disabled').val('Message');
         
                        $('.con_message', $this).fadeIn().html('<strong>Congratulations!</strong> Your Question has been submitted.').removeClass('alert-warning').addClass('alert-success');
                        setTimeout(function () {
                              $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
                        }, 5000);
                     }
                  });
            } else {
                  $('button[type="submit"]', $this).removeAttr('disabled').val('Message');
                  $('.con_message', $this).fadeIn().html('<strong>Opps!</strong> Errpr found. Please fix those and re submit.').removeClass('alert-success').addClass('alert-warning');
                  setTimeout(function () {
                     $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
                  }, 5000);
            }
         });
         $(".required").on('keyup', function () {
            $(this).removeClass('reqError');
         });
      
      
         $('.input_field input, .input_field textarea').val("");
         $('.input_field input, .input_field textarea').focusout(function() {
            var text_val = $(this).val();
            if (text_val === "") {
               console.log("empty!");
               $(this).removeClass('has-value');
            } else {
               $(this).addClass('has-value');
            }
        });

    });

    // Section scroll Id
    // $(".st_header_nav .scroll").on("click", function (event) {
        
    //     $("html,body").animate({
    //         scrollTop: $(this.hash).offset().top - 80
    //     });
    // });

    // $(".main_mobile_menu .scroll").on("click", function (event) {
        
    //     $("html,body").animate({
    //         scrollTop: $(this.hash).offset().top - 80
    //     });
    // });


    $('.scroll').on('click', function() {
        
        

        // Get the target section ID from the link's href
        var target = $(this.hash);

        // Scroll to the target section smoothly
        $('html, body').animate({
            scrollTop: $(target).offset().top - 100
        }, 800);
    });

    if (window.location.hash) {
        // Scroll to the target section smoothly after the page has loaded
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top - 100
        }, 800);
    }



})(jQuery);