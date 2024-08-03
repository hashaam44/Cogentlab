function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var menuIcon = document.querySelector('.menu-icon');
    sidebar.classList.toggle('show');
    menuIcon.classList.toggle('rotate');
}
