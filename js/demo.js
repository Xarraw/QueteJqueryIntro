$(document).ready(function () {
    var $carrousel = $('#carrousel'),
        $img = $('#carrousel img'),
        indexImg = $img.length - 1,
        i = 0,
        $currentImg = $img.eq(i);
    $img.css('visibility', 'hidden').animate({opacity: 0},500);
    $currentImg.css('visibility', 'visible').animate({opacity: 1},500);
    $('.next').click(function () {
        i++;
        if (i <= indexImg) {
            $img.css('visibility', 'hidden').animate({opacity: 0},500);
            $currentImg = $img.eq(i);
            $currentImg.css('visibility', 'visible').animate({opacity: 1},500);
        }
        else {
            i = indexImg;
        }
    });
    $('.prev').click(function () {

        i--;
        if (i >= 0) {
            $img.css('visibility', 'hidden').animate({opacity: 0},500);
            $currentImg = $img.eq(i);
            $currentImg.css('visibility', 'visible').animate({opacity: 1},500);
        }
        else {
            i = 0;
        }
    });

    function slideImg() {
        setTimeout(function () {
            if (i < indexImg) {
                i++;
            }
            else {
                i = 0;
            }
            $img.css('visibility', 'hidden').animate({opacity: 0},500);
            $currentImg = $img.eq(i);
            $currentImg.css('visibility', 'visible').animate({opacity: 1},500);
            slideImg();
        }, 3000);

    }

    slideImg();
});