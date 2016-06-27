jQuery(function ($) {
    'use strict',
            //#main-slider
            $(function () {
                $('#main-slider.carousel').carousel({
                    interval: 8000
                });
            });
    // accordian
    $('.accordion-toggle').on('click', function () {
        $(this).closest('.panel-group').children().each(function () {
            $(this).find('>.panel-heading').removeClass('active');
        });

        $(this).closest('.panel-heading').toggleClass('active');
    });

    //Initiat WOW JS
    new WOW().init();

    // portfolio filter
    $(window).load(function () {
        'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $portfolio_selectors.on('click', function () {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({filter: selector});
            return false;
        });
    });

    // Contact form
    var form = $('#main-contact-form');
    form.submit(function (event) {
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            url: $(this).attr('action'),
            beforeSend: function () {
                form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
            }
        }).done(function (data) {
            form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
        });
    });


    //goto top
    $('.gototop').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 500);
    });

    //Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });
    
    
    
    /* dang tin */
    
    
    $(document).on('change', '.post_tp', function () {
        var parent = $(this).val();
        //get_quan_huyen(parent);
    });
    $("#media").click(function () {
    });
    $.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $('.gia,.dien-tich,.chieudai,.chieurong').autoNumeric("init", {
        aSep: ' ',
        aDec: ',',
        pSign: 's',
        mDec: 0
    });
    $("#form-dang-tin").validate({
        errorPlacement: function (error, element) {
            element.parents(".parent").find(".error-place").addClass("text-danger");
            error.appendTo(element.parents(".parent").find(".error-place"));
        },
        submitHandler: function (form) {
            $('.gia,.dien-tich,.chieudai,.chieurong').each(function () {
                var value = $(this).autoNumeric('get');
                $(this).val(value);
            });
            form.submit();
            return false;

        }
    });
    
    
    /* ENd dang tin */
    
    
    
});