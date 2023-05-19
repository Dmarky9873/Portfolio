function downloadFile(filePath, fileName) {
    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();

    link.remove();
}

$(window).on("load", function () {
    $("#navbar").animate({ opacity: 1 }, 2500);
});