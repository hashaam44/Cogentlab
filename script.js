function toggleMenu() {
    const button = document.getElementById('toggleButton');
    const menu = document.getElementById('menu');
    if (button.classList.contains('bar')) {
        button.classList.remove('bar');
        button.classList.add('arrow');
        menu.classList.add('open');
    } else {
        button.classList.remove('arrow');
        button.classList.add('bar');
        menu.classList.remove('open');
    }
}
