function downloadFile(filePath, fileName) {
    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();

    link.remove();
}

$(window).on("load", function () {
    $("#navbar").animate({ opacity: 1 }, 1500);
});

$(document).ready(function () {
    var fadeElements = $('.details-container');

    function checkFadeElements() {
        fadeElements.each(function () {
            var element = $(this);
            var elementRect = element[0].getBoundingClientRect();
            if (elementRect.bottom <= 300 || elementRect.top >= $(window).innerHeight() - 300) {
                element.addClass('fade-out').removeClass('fade-in');
            } else {
                element.removeClass('fade-out').addClass('fade-in');
            }
        });
    }

    $(window).scroll(checkFadeElements);
    checkFadeElements();
});

$(document).ready(function () {
    var screenWidth = $(window).width();

    if (screenWidth < 768) {
        $('.img-txt-container_').removeClass('img-txt-container')
        $('.image-container').removeClass('mx-4')
        $('.image-container').addClass('centered-item')
        $('.img-txt-container_').addClass('text-center')
        $('.details-container').removeClass('img-txt-container')
        // $('card-img').addClass()
    } else {
        $('.img-txt-container_').addClass('img-txt-container')
        $('.img-txt-container_').removeClass('text-center')
        $('.image-container').addClass('mx-4')
    }
    $(window).resize(function () {
        var screenWidth = $(window).width();

        if (screenWidth < 768) {
            $('.img-txt-container_').removeClass('img-txt-container')
            $('.image-container').removeClass('mx-4')
            $('.image-container').addClass('centered-item')
            $('.img-txt-container_').addClass('text-center')
            $('.details-container').removeClass('img-txt-container')
            // $('card-img').addClass()
        } else {
            $('.img-txt-container_').addClass('img-txt-container')
            $('.img-txt-container_').removeClass('text-center')
            $('.image-container').addClass('mx-4')
        }
    });
});