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
                    arrows:false,
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
   
    $('.sl-2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".uniq-class").removeClass('active');
        $(".uniq-class").eq(nextSlide).addClass('active')
    });
    
    $('.uniq-class').click(function(){
        $(".uniq-class").removeClass('active');
        $(this).addClass('active');
        
        if($(this).index()){
            $('.sl-2').slick('slickGoTo',$(this).index()+1);
        }
        else{
            $('.sl-2').slick('slickGoTo',$(this).index());
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
    var newsContent= $('#what_we_offer .offer');
    newsContent.each(function() {
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

    $('#what_we_offer .offer .txt').click(function() {
        if (!$(this).hasClass('opened')) {
            $(this).text($(this).attr('data-full'));
            $(this).addClass('opened');
        }
        else {
            if ($(this).text().length > size) {
                $(this).text($(this).text().substr(0, size));
            }
            $(this).removeClass('opened');
        }
    });
    $('#checkpoints .cp_timeline li:nth-child(2) p').click(function() {
        if (!$(this).hasClass('opened')) {
            $(this).html(cp_tl);
            $(this).addClass('opened');
        }
        else {
            if (cp_tl.length > 93) {
                $(this).html(cp_tl.substr(0, 93));
            }
            $(this).removeClass('opened');
        }
    });

    
    
});
