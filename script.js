const translations = {
    es: {
        title: "Tutoriales de TikTok VSCode",
        searchPlaceholder: "Buscar tutorial...",
        tutorial1: "Tutorial 1",
        tutorial2: "Tutorial 2",
        tutorial3: "Tutorial 3",
        tutorial4: "Tutorial 4",
        tutorial5: "Tutorial 5",
        tutorial6: "Tutorial 6",
        content1: "Buscador Funcional html, css y javascript",
        content2: "Contenido del Tutorial 2",
        content3: "Contenido del Tutorial 3",
        content4: "Contenido del Tutorial 4",
        content5: "Contenido del Tutorial 5",
        content6: "Contenido del Tutorial 6"
    },
    en: {
        title: "TikTok VSCode Tutorials",
        searchPlaceholder: "Search tutorial...",
        tutorial1: "Tutorial 1",
        tutorial2: "Tutorial 2",
        tutorial3: "Tutorial 3",
        tutorial4: "Tutorial 4",
        tutorial5: "Tutorial 5",
        tutorial6: "Tutorial 6",
        content1: "Functional Shearch html, css and javascript",
        content2: "Content of Tutorial 2",
        content3: "Content of Tutorial 3",
        content4: "Content of Tutorial 4",
        content5: "Content of Tutorial 5",
        content6: "Content of Tutorial 6"
    }
};

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    const icon = document.getElementById('theme-toggle').querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

document.getElementById('language-toggle').addEventListener('click', () => {
    const currentLang = document.body.getAttribute('data-lang') || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';
    document.body.setAttribute('data-lang', newLang);
    translatePage(newLang);
});

function translatePage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    const search = document.getElementById('search');
    search.placeholder = translations[lang].searchPlaceholder;
    document.getElementById('title').textContent = translations[lang].title;
}

document.getElementById('search').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('section').forEach(section => {
        const title = section.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('light');
    translatePage('es');
});






document.getElementById('descargarBtn').addEventListener('click', function() {
    // Crear un enlace temporal para descargar el archivo
    const enlace = document.createElement('a');
    enlace.href = './archivos/pruebas.rar'; // Reemplaza con la ruta a tu archivo .rar
    enlace.download = 'web-tutorial.rar'; // Nombre del archivo que se descargará

    // Simula un clic en el enlace para iniciar la descarga
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
});
