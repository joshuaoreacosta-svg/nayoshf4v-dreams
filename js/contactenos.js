// ========================================
// CONTACTENOS.JS - VERSIÓN FINAL LIMPIA
// ========================================

// Enviar mensaje de contacto por WhatsApp
function sendContactToWhatsApp(contactData) {
    const phoneNumber = '51941320575';
    
    let message = `*MENSAJE DE CONTACTO - NayoshF4V Dreams*\n\n`;
    message += `❥ *Nombre:* ${contactData.name}\n`;
    message += `❥ *Email:* ${contactData.email}\n`;
    
    if (contactData.phone) {
        message += `❥ *Teléfono:* ${contactData.phone}\n`;
    }
    
    if (contactData.subject) {
        message += `❥ *Asunto:* ${contactData.subject}\n`;
    }
    
    message += `\n❥ *Mensaje:*\n${contactData.message}`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    
    // Manejo del formulario
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const contactData = {
                name: this.querySelector('input[placeholder="Tu nombre"]').value,
                email: this.querySelector('input[placeholder="tu@email.com"]').value,
                phone: this.querySelector('input[placeholder="+51 999 999 999"]').value,
                subject: this.querySelector('select').value,
                message: this.querySelector('textarea').value
            };
            
            // Mostrar mensaje de éxito
            const successMessage = document.getElementById('successMessage');
            if (successMessage) {
                successMessage.classList.add('show');
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 4000);
            }
            
            // Enviar a WhatsApp
            sendContactToWhatsApp(contactData);
            
            // Limpiar formulario
            this.reset();
        });
    }
    
    // Animaciones de scroll
    const contactObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, contactObserverOptions);

    document.querySelectorAll('.info-item, .form-group').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        contactObserver.observe(el);
    });
    
    // Cargar carrito
    if (typeof loadCart === 'function') {
        loadCart();
    }
});

// Efecto parallax en hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < 600) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 500);
    }
});

// Animación de carga inicial
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('✅ contactenos.js cargado');