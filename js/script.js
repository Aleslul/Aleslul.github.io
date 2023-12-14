document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById('scrollButton');

    scrollButton.addEventListener('click', function() {
        var contentHeight = document.getElementById('content').offsetHeight;

        var scrollDistance = 80;

        window.scrollTo({
            top: contentHeight - scrollDistance,
            behavior: 'smooth' 
        });
    });
});
