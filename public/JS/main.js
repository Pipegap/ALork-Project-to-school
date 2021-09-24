const items = document.querySelectorAll('.Navigation_item__3R6Fq');

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function (ev) {
        ev.preventDefault();
    });
};