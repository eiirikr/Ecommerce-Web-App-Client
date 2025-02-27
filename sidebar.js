document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mainContent = document.querySelector('main');

    sidebarToggle.addEventListener('click', function() {
        document.body.classList.toggle('sidebar-open');
    });
});