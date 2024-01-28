// Popup menu functionality

document.addEventListener('DOMContentLoaded', function() {
    // Open popup
    document.querySelectorAll('.popup-trigger').forEach(item => {
        item.addEventListener('click', event => {
            document.getElementById('popup-menu').classList.remove('hidden');
            document.getElementById('overlay').classList.remove('hidden');
        });
    });

    // Close popup
    document.getElementById('overlay').addEventListener('click', event => {
        if (!event.target.closest('.popup')) {
            document.getElementById('popup-menu').classList.add('hidden');
            document.getElementById('overlay').classList.add('hidden');
        }
    });

    // Close popup from close button
    document.getElementById('popup-menu-close').addEventListener('click', event => {
        document.getElementById('popup-menu').classList.add('hidden');
        document.getElementById('overlay').classList.add('hidden');
    });
});
