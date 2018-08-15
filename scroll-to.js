$("a[href^='#']").click(function(e) {
    e.preventDefault();
    var position = 0;
    if(($(this)) && $(this).attr("href") && $($(this).attr("href")).offset()){
        position = $($(this).attr("href")).offset().top;
    }

    $("body, html").animate({
        scrollTop: position-150
    } /* speed */ );
});