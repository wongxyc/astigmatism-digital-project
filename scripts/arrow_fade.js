
var view_height = screen.height

$(window).scroll(function ()
{
    // change arrow opacity by based on number of pixels from top
    // arrow only fully fades once 90% of the entire screen has been scrolled
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / (view_height * 0.9));
});