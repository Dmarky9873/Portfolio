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
    $(window).resize(function () {
        var screenWidth = $(window).width();

        if (screenWidth < 768) {
            $('#image-container').removeClass('image-container')
        } else {
            $('#image-container').addClass('image-container')
        }
    });
});