
// Animaciones de scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Si es una estadística, animar el número
            if (entry.target.classList.contains('stat-card')) {
                const numberElement = entry.target.querySelector('.stat-number');
                const target = parseInt(numberElement.getAttribute('data-target'));
                animateNumber(numberElement, target);
            }
        }
    });
}, observerOptions);

// Observar todos los elementos con fade-in
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Animar números de estadísticas
function animateNumber(element, target) {
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Smooth scroll para enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto parallax en hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 700);
    }
});

// Hover effect en botones
const buttons = document.querySelectorAll('.cta-button, .mv-card, .value-card, .team-card, .testimonial-card');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        follower.style.transform = 'translate(-50%, -50%) scale(2)';
    });
    
    button.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        follower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Animación de carga inicial
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Efecto de rotación en imagen de historia
const storyImage = document.querySelector('.image-placeholder');
if (storyImage) {
    let rotationAngle = 0;
    
    document.addEventListener('mousemove', (e) => {
        const rect = storyImage.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 300) {
            rotationAngle = (deltaX / 50);
            storyImage.style.transform = `scale(1.05) rotate(${rotationAngle}deg)`;
        } else {
            storyImage.style.transform = 'scale(1) rotate(0deg)';
        }
    });
}

// Animación de timeline al hacer scroll
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 200);
        }
    });
}, {
    threshold: 0.2
});

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// Efecto de cards de equipo
const teamCards = document.querySelectorAll('.team-card');
teamCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Efecto de testimoniales
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Contador de estadísticas con efectos visuales
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const number = card.querySelector('.stat-number');
        number.style.transform = 'scale(1.2)';
        number.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        const number = card.querySelector('.stat-number');
        number.style.transform = 'scale(1)';
    });
});

// Efecto de valores con delay escalonado
const valueCards = document.querySelectorAll('.value-card');
valueCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Animación de CTA buttons
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.innerHTML = `<span>${button.textContent}</span>`;
});

// Efecto de partículas en hover de secciones especiales
const mvCards = document.querySelectorAll('.mv-card');
mvCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console log estilizado
console.log('%c¡Gracias por visitar AmiCrochet! 💜🧶', 
    'font-size: 20px; font-weight: bold; color: #B598C8; text-shadow: 2px 2px 4px rgba(139, 123, 168, 0.3);');
console.log('%cSi tienes alguna pregunta, ¡contáctanos!', 
    'font-size: 14px; color: #8B7BA8;');


// Carrito
document.addEventListener('DOMContentLoaded', () => {
    loadCart(); // Carga el carrito
    // ... resto de tu código de inicio
});


// Búsqueda
function openSearch() {
            document.getElementById('searchModal').classList.add('active');
            document.getElementById('searchInput').focus();
        }

        function closeSearch() {
            document.getElementById('searchModal').classList.remove('active');
            document.getElementById('searchInput').value = '';
            document.getElementById('searchResults').innerHTML = '';
        }

        function searchProducts() {
            const input = document.getElementById('searchInput').value.toLowerCase();
            const resultsDiv = document.getElementById('searchResults');
            
            if (input.length < 2) {
                resultsDiv.innerHTML = '';
                return;
            }
            
            const products = [
                'Osito Miel', 'Conejito Dulce', 'Unicornio Mágico', 
                'Pulpo Feliz', 'Zorrito Astuto', 'Panda Mimoso',
                'Curso Principiantes', 'Curso Intermedio', 'Masterclass Amigurumis'
            ];
            
            const results = products.filter(p => p.toLowerCase().includes(input));
            
            if (results.length > 0) {
                resultsDiv.innerHTML = '<h3 style="margin-bottom: 15px; font-family: Cormorant Garamond;">Resultados:</h3>' + 
                    results.map(r => `<div style="padding: 10px; background: var(--light); margin: 5px 0; border-radius: 10px;">✨ ${r}</div>`).join('');
            } else {
                resultsDiv.innerHTML = '<p>No se encontraron resultados 😔</p>';
            }
        }