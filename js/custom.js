(function ($) {
    'use strict';

    $(document).on('ready', function () {
        // -----------------------------
        //  Screenshot Slider
        // -----------------------------
        $('.speaker-slider').slick({
            slidesToShow: 3,
            centerMode: true,
            infinite: true,
            autoplay: true,
            arrows:true,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
         });


         
         var form = document.getElementById('sheetdb-form');
         form.addEventListener("submit", e => {
           e.preventDefault();
           fetch(form.action, {
               method : "POST",
               body: new FormData(document.getElementById("sheetdb-form")),
           }).then(
               response => response.json()
           ).then((html) => {
             // you can put any JS code here
             alert('success')
           });
         });
       


        // -----------------------------
        //  Count Down JS
        // -----------------------------
        $('.timer').syotimer({
            year: 2021,
            month: 05,
            day: 26,
            hour: 10,
            minute: 00
        });
        // -----------------------------
        // To Top Init
        // -----------------------------
        $('.to-top').on('click', function() {
          $('html, body').animate({ scrollTop: 0 }, 'slow');
          return false;
        });
        
        // -----------------------------
        // Magnific Popup
        // -----------------------------
        $('.image-popup').magnificPopup({
            type: 'image',
            removalDelay: 160, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function () {
                    // just a hack that adds mfp-anim class to markup
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true,
            fixedContentPos: false,
            fixedBgPos: true

        });
        // -----------------------------
        // Mixitup
        // -----------------------------
        var containerEl = document.querySelector('.gallery-wrapper');
        var mixer;
        if (containerEl) {
            mixer = mixitup(containerEl);
        }
    });

})(jQuery);