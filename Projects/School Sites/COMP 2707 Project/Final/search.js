document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function() {

        const searchValue = searchInput.value.trim().toLowerCase();
        const tutorialItems = document.querySelectorAll('main > section#tutorial-section > ul > li');

        tutorialItems.forEach(function(item) {
            const isVisible = item.textContent.toLowerCase().includes(searchValue);
            item.style.display = isVisible ? '' : 'none';
        });
    });
});
