document.addEventListener("DOMContentLoaded", () => {
    const categorySelect = document.getElementById('categorySelect');
    const languageSelect = document.getElementById('languageSelect');
    const bookContainer = document.getElementById('bookContainer');

    function loadBooks(category, language) {
        fetch('../data/libros.json')
            .then(response => response.json())
            .then(data => {
            
                const librosPorIdioma = data[language] || {};
                let libros = [];

                if (category) {
                    libros = librosPorIdioma[category] || [];
                } else {
                    for (const cat in librosPorIdioma) {
                        libros = libros.concat(librosPorIdioma[cat]);
                    }
                }

                bookContainer.innerHTML = '';

                libros.forEach(libro => {
                    const bookElement = document.createElement('div');
                    bookElement.classList.add('book');

                    bookElement.innerHTML = `
                        <img src="${libro.portada || 'https://via.placeholder.com/150'}" alt="${libro.titulo}">
                        <div class="book-info">
                            <h5>${libro.titulo}</h5>
                            <p><em>${libro.autor || 'Autor desconocido'}</em></p>
                            <a href="${libro.url}" target="_blank">Leer</a>
                        </div>
                    `;
                    bookContainer.appendChild(bookElement);
                });
            })
            .catch(error => console.error('Error al cargar los libros:', error));
    }

    categorySelect.addEventListener('change', () => {
        const category = categorySelect.value;
        const language = languageSelect.value;
        loadBooks(category, language);
    });

    languageSelect.addEventListener('change', () => {
        const category = categorySelect.value;
        const language = languageSelect.value;
        loadBooks(category, language);
    });

    loadBooks('', 'es', 'en', 'pt'); 
});
