$(document).ready(function () {

    $('.sl-2').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    adaptiveHeight: true
                }
            }
        ]
    });

    $('.sl-2').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $(".uniq-class").removeClass('active');
        $(".uniq-class").eq(nextSlide).addClass('active')
    });

    $('.uniq-class').click(function () {
        $(".uniq-class").removeClass('active');
        $(this).addClass('active');

        if ($(this).index()) {
            $('.sl-2').slick('slickGoTo', $(this).index() + 1);
        } else {
            $('.sl-2').slick('slickGoTo', $(this).index());
        }

    });


    $('.slider-advisors').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });







    var size = 50;
    var newsContent = $('#what_we_offer .offer');
    newsContent.each(function () {
        var newsTextBlock = $(this).find('p.txt');
        var newsText = newsTextBlock.text();
        if (newsText.length > size) {
            newsTextBlock.attr('data-full', newsTextBlock.text());
            newsTextBlock.text(newsText.substr(0, size));
        }
    });


    var cp_tl = $('#checkpoints .cp_timeline li:nth-child(2) p').html();
    if (cp_tl.length > 93) {
        $('#checkpoints .cp_timeline li:nth-child(2) p').html(cp_tl.substr(0, 93));
    }

    $('#what_we_offer .offer .txt').click(function () {

        if (!$(this).hasClass('opened')) {
            $(this).text($(this).attr('data-full'));
            $(this).addClass('opened');
        } else {
            if ($(this).text().length > size) {
                $(this).text($(this).text().substr(0, size));
            }
            $(this).removeClass('opened');
        }
    });
    $('#checkpoints .cp_timeline li:nth-child(2) p').click(function () {
        if (!$(this).hasClass('opened')) {
            $(this).html(cp_tl);
            $(this).addClass('opened');
        } else {
            if (cp_tl.length > 93) {
                $(this).html(cp_tl.substr(0, 93));
            }
            $(this).removeClass('opened');
        }
    });



    //=======================




    var glabal_flag_for_counter = true;
    var win = $(window);
    var scrFunc = function () {
        var t = win.scrollTop(),
            e = win.height();
        $("[data-anim], .outher-counters").each(function (n, i) {
            var r = $(i).offset().top,
                s = t + .9 * e;
            s > r ? $(i).attr("data-anim", "true") : true;




            if ($(".outher-counters").attr('data-anim') == 'true' && glabal_flag_for_counter) {
                glabal_flag_for_counter = false;
                var easy_pie_chart = {};
                $('.circular-pie').each(function () {
                    var text_span = $(this).children('span');
                    $(this).easyPieChart($.extend(true, {}, easy_pie_chart, {
                        size: 500,
                        animate: 2000,

                        lineCap: 'square',
                        barColor: '#75be7a',
                        lineWidth: 32,
                        trackColor: '#fff',
                        scaleColor: false,
                        onStep: function (value) {
                            text_span.text('$' + (Math.ceil(value) * 600));

                        }
                    }));
                });

                var easy_pie_chart_2 = {};
                $('.circular-pie_2').each(function () {
                    var text_span = $(this).children('span');
                    $(this).easyPieChart($.extend(true, {}, easy_pie_chart_2, {
                        size: 150,
                        animate: 2000,

                        lineCap: 'square',
                        barColor: '#75be7a',
                        lineWidth: 14,
                        trackColor: '#fff',
                        scaleColor: false,
                        onStep: function (value) {
                            text_span.text('$' + ((Math.ceil(value) * 600) + 200));

                        }
                    }));
                });
                var easy_pie_chart_3 = {};
                $('.circular-pie_3').each(function () {
                    var text_span = $(this).children('span');
                    $(this).easyPieChart($.extend(true, {}, easy_pie_chart_3, {
                        size: 150,
                        animate: 2000,
                        lineCap: 'square',
                        barColor: '#75be7a',
                        lineWidth: 14,
                        trackColor: '#fff',
                        scaleColor: false,
                        onStep: function (value) {
                            text_span.text('$' + ((Math.ceil(value) * 600) + 400));

                        }
                    }));
                });

                var easy_pie_chart_4 = {};
                $('.circular-pie_4').each(function () {
                    var text_span = $(this).children('span');
                    $(this).easyPieChart($.extend(true, {}, easy_pie_chart_3, {
                        size: 150,
                        animate: 2000,
                        lineCap: 'square',
                        barColor: '#75be7a',
                        lineWidth: 14,
                        trackColor: '#fff',
                        scaleColor: false,
                        onStep: function (value) {
                            text_span.text('$' + ((Math.ceil(value) * 600)));

                        }
                    }));
                });

            }
        })
    }
    scrFunc();


    $(window).scroll(function () {
        scrFunc();
    });

    var flag_change = true;
    $('.flag-vr').click(function () {
        if (flag_change) {
            $(".dropdown-wrch").slideDown(0);
            flag_change = false;
        } else {
            $(".dropdown-wrch").slideUp(0);
            flag_change = true;
        }

    });

});
