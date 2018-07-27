jQuery("a[href^='#']").click(function(e) {
    e.preventDefault();
    var position = 0;
    if((jQuery(this)) && jQuery(this).attr("href") && jQuery(jQuery(this).attr("href")).offset()){
        position = jQuery(jQuery(this).attr("href")).offset().top;
    }

    jQuery("body, html").animate({
        scrollTop: position-150
    } /* speed */ );
});