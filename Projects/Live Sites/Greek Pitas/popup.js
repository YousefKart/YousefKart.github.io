document.addEventListener('DOMContentLoaded', function() {
    // Open popup
    document.querySelectorAll('.popup-trigger').forEach(item => {
        item.addEventListener('click', event => {
            let popupMenu = document.getElementById('popup-menu-' + item.id);
            let overlay = document.getElementById('overlay-' + item.id);

            popupMenu.classList.remove('hidden');
            overlay.classList.remove('hidden');

            // Close popup when clicking on the overlay
            overlay.addEventListener('click', event => {
                if (!event.target.closest('.popup')) {
                    popupMenu.classList.add('hidden');
                    overlay.classList.add('hidden');
                }
            });

            // Close popup from close button
            popupMenu.querySelector('.popup-close').addEventListener('click', event => {
                popupMenu.classList.add('hidden');
                overlay.classList.add('hidden');
            });
        });
    });
});
