let ig = null;
ig = document.getElementById('mymage');
function init() {
    ig = document.getElementById('mymage');
    ig.style.position = 'relative';
    ig.style.left = '0px';
}
function moveRight() {
    ig.style.left = parseInt(ig.style.left) + 50 + 'px';
}
window.onload = init;