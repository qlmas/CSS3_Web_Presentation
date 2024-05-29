document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', function (event) {
        navbar.classList.toggle('open');
        event.stopPropagation(); // Prevent the event from bubbling up to the document
    });

    document.addEventListener('click', function (event) {
        if (navbar.classList.contains('open') && !navbar.contains(event.target)) {
            navbar.classList.remove('open');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    // Proverite da li postoji sačuvani mod u localStorage i primenite ga
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        body.classList.add(savedMode);
        updateToggleIcon(savedMode);
    }

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        let mode = 'light-mode';
        if (body.classList.contains('dark-mode')) {
            mode = 'dark-mode';
        }
        localStorage.setItem('mode', mode); // Sačuvajte trenutni mod u localStorage
        updateToggleIcon(mode);
    });

    function updateToggleIcon(mode) {
        const icon = modeToggle.querySelector('i');
        if (mode === 'dark-mode') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
});

document.getElementById('show-fixed').addEventListener('click', function() {
    document.getElementById('fixed-item').style.display = 'block';
});

