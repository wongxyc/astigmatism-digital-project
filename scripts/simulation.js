slider_1 = $('#slider-1')[0]
slider_2 = $('#slider-2')[0]
slider_3 = $('#slider-3')[0]
slider_4 = $('#slider-4')[0]

// changes the size of a html image (by id) based on a given value
function change_img_size(val, img_id)
{
    $(img_id).css('width', val)
}

//updates the position of the slider button (by id) based on the slider position
function update_slider_button_pos(pos, button_id)
{
    $(button_id).css('left', `calc(${pos} - 16px`)
}

slider_1.oninput = function (e)
{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    change_img_size(`${sliderPos}%`, '#foreground-1')
    update_slider_button_pos(`${sliderPos}%`, '#slider-button-1')
}

slider_2.oninput = function (e)
{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    change_img_size(`${sliderPos}%`, '#foreground-2')
    update_slider_button_pos(`${sliderPos}%`, '#slider-button-2')
}

slider_3.oninput = function (e)
{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    change_img_size(`${sliderPos}%`, '#foreground-3')
    update_slider_button_pos(`${sliderPos}%`, '#slider-button-3')
}


slider_4.oninput = function (e)
{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    change_img_size(`${sliderPos}%`, '#foreground-4')
    update_slider_button_pos(`${sliderPos}%`, '#slider-button-4')
}


