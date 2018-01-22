$(document).ready(function () {

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
    
    
});
