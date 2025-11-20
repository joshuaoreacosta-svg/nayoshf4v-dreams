// Carrito
document.addEventListener('DOMContentLoaded', () => {
    loadCart(); // Carga el carrito
    // ... resto de tu código de inicio
});

        // Header scroll effect
        const header = document.querySelector('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        

        // Smooth scroll
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

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Hover effect en botones
        const buttons = document.querySelectorAll('.cta-button, .buy-button, .enroll-button');
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

        // Efecto parallax en hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-content');
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
                hero.style.opacity = 1 - (scrolled / 700);
            }
        });

        // Interacción con cards de productos
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) rotateY(5deg)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) rotateY(0)';
            });
        });

        

        // Click en botones de inscripción
        document.querySelectorAll('.enroll-button').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const card = this.closest('.class-card');
                const className = card.querySelector('.class-title').textContent;
                
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
                
                const message = document.createElement('div');
                message.textContent = `✓ Pre-inscripción a ${className} registrada`;
                message.style.cssText = `
                    position: fixed;
                    top: 100px;
                    right: 30px;
                    background: linear-gradient(135deg, var(--accent), var(--dark));
                    color: white;
                    padding: 20px 30px;
                    border-radius: 15px;
                    box-shadow: 0 10px 30px rgba(139, 123, 168, 0.3);
                    z-index: 10000;
                    animation: slideInRight 0.5s ease;
                    font-weight: 600;
                `;
                document.body.appendChild(message);
                
                setTimeout(() => {
                    message.style.animation = 'slideOutRight 0.5s ease';
                    setTimeout(() => message.remove(), 500);
                }, 3000);
            });
        });

        // Animaciones CSS adicionales
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Efecto en galería
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05) rotate(2deg)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
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