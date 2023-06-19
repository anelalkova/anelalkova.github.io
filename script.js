function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('DOMContentLoaded', function() {
    var isFirstPage = window.location.pathname === '/';
    var backButton = document.querySelector('.back-to-top');

    if (!isFirstPage) {
        backButton.style.display = 'inline';
    }
});
