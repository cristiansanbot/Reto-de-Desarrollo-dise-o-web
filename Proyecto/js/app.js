document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');
    const dropdown = document.querySelector('.dropdown');

    // Alternar menú móvil
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    // Alternar dropdown en móvil
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('open');
        }
    });





    // — Nuevo slider por transform —
    const slidesContainer = document.querySelector('.slides');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const total = document.querySelectorAll('.slide').length;
    let slideIndex = 0;

    function showSlide(idx) {
        slidesContainer.style.transform = `translateX(-${idx * 100}%)`;
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % total;
        showSlide(slideIndex);
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + total) % total;
        showSlide(slideIndex);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-slide cada 5s
    setInterval(nextSlide, 5000);

    // Inicia mostrando la primera
    showSlide(0);

    // Contador de caracteres
    const mensajeField = document.getElementById('mensaje');
    const charCount = document.getElementById('charCount');

    if (mensajeField && charCount) {
        mensajeField.addEventListener('input', () => {
            charCount.textContent = mensajeField.value.length;
        });
    }

    if (mensaje) {
        mensaje.addEventListener('input', () => {
            const len = mensaje.value.length;
            charCount.textContent = `${len}/${mensaje.maxLength}`;
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;

            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');

            document.getElementById('error-nombre').textContent = '';
            document.getElementById('error-email').textContent = '';
            document.getElementById('error-mensaje').textContent = '';

            if (nombre.value.trim() === '') {
                document.getElementById('error-nombre').textContent = 'Ingresa tu nombre';
                valid = false;
            }
            if (email.value.trim() === '') {
                document.getElementById('error-email').textContent = 'Ingresa tu email';
                valid = false;
            } else if (!/\S+@\S+\.\S+/.test(email.value)) {
                document.getElementById('error-email').textContent = 'Email inválido';
                valid = false;
            }
            if (mensaje.value.trim() === '') {
                document.getElementById('error-mensaje').textContent = 'Escribe un mensaje';
                valid = false;
            }

            if (valid) {
                alert('Formulario enviado correctamente');
                form.reset();
                charCount.textContent = `0/${mensaje.maxLength}`;
            }
        });
    }
});