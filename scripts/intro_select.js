var slideIndex = 0;
showSlides();

function showSlides()
{
    var i;
    var slides = $('.slide');
    let dots = $('.dot');

    // hide all slides
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slideIndex++; // increment slideindex

    // reset slide index once it reaches the end
    if (slideIndex > slides.length)
    {
        slideIndex = 1
    }

    // remove active class from all dots
    $('.dot').removeClass("active")
    // unhide the selected slide
    slides[slideIndex - 1].style.display = "block";
    // change selected dot to active
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}