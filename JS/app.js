document.addEventListener('DOMContentLoaded', () => {
    // JavaScript para manejar el menú hamburguesa
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarColor04');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('collapse'); // Alterna la clase 'collapse' en el menú
    });
});
