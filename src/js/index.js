
// Open & Close Nav Events
const nav = document.querySelector('.kbn-nav');

function openNav() {
    if (closeNav) {
        nav.style.display = 'block';
    }
}

function closeNav() {
    if (openNav) {
        nav.style.display = 'none';
    }
}