

// ========================================
// Datos de los cursos
// ========================================
const coursesData = [
    {
        id: 1,
        name: 'Introducción al Crochet',
        level: 'principiante',
        emoji: '🧶',
        price: 'S/ 250',
        duration: '4 semanas',
        sessions: '8 sesiones',
        students: '6 personas',
        certificate: 'Sí',
        description: 'Aprende desde cero todo lo que necesitas para empezar en el mundo del crochet. Perfecto para principiantes absolutos.',
        details: [
            'Duración: 4 semanas (8 sesiones de 2 horas)',
            'Horario: Martes y Jueves 7:00 PM',
            'Grupo máximo: 6 personas',
            'Kit de materiales incluido',
            'Certificado digital al finalizar',
            'Acceso a grabaciones de por vida'
        ],
        curriculum: [   
            'Semana 1: Fundamentos y punto cadena',
            'Semana 2: Punto bajo y medio punto',
            'Semana 3: Punto alto y combinaciones',
            'Semana 4: Tu primer proyecto completo'
        ]
    },
    {
        id: 2,
        name: 'Amigurumis para Principiantes',
        level: 'principiante',
        emoji: '🐻',
        price: 'S/ 280',
        duration: '5 semanas',
        sessions: '10 sesiones',
        students: '6 personas',
        certificate: 'Sí',
        description: 'Crea tus primeros amigurumis adorables. Aprende las técnicas básicas para dar vida a personajes tejidos.',
        details: [
            'Duración: 5 semanas (10 sesiones de 2 horas)',
            'Horario: Lunes y Miércoles 6:00 PM',
            'Grupo máximo: 6 personas',
            'Kit con hilos y relleno incluido',
            'Patrones digitales exclusivos',
            'Certificado digital al finalizar'
        ],
        curriculum: [
            'Semana 1-2: Técnica de anillo mágico y aumentos',
            'Semana 3: Formas básicas (esferas, cilindros)',
            'Semana 4: Ensamblaje y detalles',
            'Semana 5: Proyecto final - Tu primer amigurumi completo'
        ]
    },
    {
        id: 3,
        name: 'Técnicas Intermedias',
        level: 'intermedio',
        emoji: '🌸',
        price: 'S/ 320',
        duration: '6 semanas',
        sessions: '12 sesiones',
        students: '6 personas',
        certificate: 'Sí',
        description: 'Expande tus habilidades con técnicas avanzadas de puntos, cambios de color y proyectos más complejos.',
        details: [
            'Duración: 6 semanas (12 sesiones de 2 horas)',
            'Horario: Martes y Jueves 6:00 PM',
            'Requisito: Conocimientos básicos de crochet',
            'Grupo máximo: 6 personas',
            'Kit de materiales premium incluido',
            'Certificado digital al finalizar'
        ],
        curriculum: [
            'Semana 1-2: Puntos texturizados y relieves',
            'Semana 3: Técnicas de cambio de color',
            'Semana 4: Lectura de patrones complejos',
            'Semana 5-6: Proyecto final de nivel intermedio'
        ]
    },
    {
        id: 4,
        name: 'Prendas de Vestir',
        level: 'intermedio',
        emoji: '👕',
        price: 'S/ 350',
        duration: '8 semanas',
        sessions: '16 sesiones',
        students: '5 personas',
        certificate: 'Sí',
        description: 'Aprende a crear tus propias prendas tejidas: tops, chalecos, sweaters y más.',
        details: [
            'Duración: 8 semanas (16 sesiones de 2 horas)',
            'Horario: Lunes y Viernes 7:00 PM',
            'Requisito: Nivel intermedio de crochet',
            'Grupo máximo: 5 personas',
            'Materiales según proyecto personal',
            'Certificado digital al finalizar'
        ],
        curriculum: [
            'Semana 1-2: Toma de medidas y patrones base',
            'Semana 3-4: Técnica de construcción de prendas',
            'Semana 5-6: Mangas, cuellos y acabados',
            'Semana 7-8: Proyecto final personalizado'
        ]
    },
    {
        id: 5,
        name: 'Masterclass de Amigurumis',
        level: 'avanzado',
        emoji: '🦄',
        price: 'S/ 420',
        duration: '8 semanas',
        sessions: '16 sesiones',
        students: '5 personas',
        certificate: 'Sí',
        description: 'Nivel profesional para crear amigurumis complejos con detalles avanzados y técnicas expertas.',
        details: [
            'Duración: 8 semanas (16 sesiones de 2.5 horas)',
            'Horario: Sábados 10:00 AM',
            'Requisito: Experiencia previa en amigurumis',
            'Grupo máximo: 5 personas',
            'Kit premium con materiales especializados',
            'Certificado profesional al finalizar'
        ],
        curriculum: [
            'Semana 1-2: Técnicas avanzadas de estructuración',
            'Semana 3-4: Personajes con esqueleto interno',
            'Semana 5-6: Detalles realistas y microexpresiones',
            'Semana 7-8: Proyecto profesional complejo'
        ]
    },
    {
        id: 6,
        name: 'Diseño de Patrones',
        level: 'avanzado',
        emoji: '📐',
        price: 'S/ 450',
        duration: '10 semanas',
        sessions: '20 sesiones',
        students: '4 personas',
        certificate: 'Sí',
        description: 'Aprende a crear tus propios patrones desde cero y conviértete en diseñador profesional de crochet.',
        details: [
            'Duración: 10 semanas (20 sesiones de 2.5 horas)',
            'Horario: Miércoles y Viernes 5:00 PM',
            'Requisito: Nivel avanzado de crochet',
            'Grupo máximo: 4 personas',
            'Software de diseño incluido',
            'Certificado profesional de diseñador'
        ],
        curriculum: [
            'Semana 1-3: Fundamentos de diseño y matemáticas del crochet',
            'Semana 4-6: Creación y testeo de patrones',
            'Semana 7-8: Documentación profesional de patrones',
            'Semana 9-10: Portafolio y proyecto final de diseño'
        ]
    }
];

// ========================================
// Renderizar cursos
// ========================================
const coursesGrid = document.getElementById('coursesGrid');

function renderCourses(filter = 'todos') {
    if (!coursesGrid) return;
    
    coursesGrid.innerHTML = '';
    
    const filteredCourses = filter === 'todos' 
        ? coursesData 
        : coursesData.filter(course => course.level === filter);
    
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card fade-in';
        courseCard.setAttribute('data-level', course.level);
        
        courseCard.innerHTML = `
            <div class="course-image">
                <span>${course.emoji}</span>
                <div class="course-badge">${course.level}</div>
            </div>
            <div class="course-info">
                <span class="course-level">${course.level}</span>
                <h3 class="course-name">${course.name}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-details">
                    <div class="course-detail-item">
                        <span>⏱️</span> ${course.duration}
                    </div>
                    <div class="course-detail-item">
                        <span>📅</span> ${course.sessions}
                    </div>
                    <div class="course-detail-item">
                        <span>👥</span> ${course.students}
                    </div>
                    <div class="course-detail-item">
                        <span>🎓</span> ${course.certificate}
                    </div>
                </div>
                <div class="course-price">${course.price}</div>
                <div class="course-actions">
                    <button class="view-course-btn" onclick="openCourseModal(${course.id})">Ver Detalles</button>
                    <button class="enroll-btn" onclick="openEnrollModal('${course.name}')">Inscribirme</button>
                </div>
            </div>
        `;
        
        coursesGrid.appendChild(courseCard);
    });
    
    // Activar animación de fade-in
    setTimeout(() => {
        document.querySelectorAll('.course-card.fade-in').forEach(card => {
            card.classList.add('visible');
        });
    }, 100);
}

// Renderizar cursos al cargar (solo si coursesGrid existe)
if (coursesGrid) {
    renderCourses();
}

// ========================================
// Filtros de nivel
// ========================================
const levelButtons = document.querySelectorAll('.level-btn');

levelButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        levelButtons.forEach(btn => btn.classList.remove('active'));
        
        // Agregar clase active al botón clickeado
        button.classList.add('active');
        
        // Filtrar cursos
        const level = button.getAttribute('data-level');
        renderCourses(level);
    });
});

// ========================================
// Modal de inscripción
// ========================================
const enrollModal = document.getElementById('enrollModal');
const modalCourseName = document.getElementById('modalCourseName');
const enrollForm = document.getElementById('enrollForm');

function openEnrollModal(courseName) {
    if (modalCourseName) modalCourseName.textContent = courseName;
    if (enrollModal) {
        enrollModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeEnrollModal() {
    if (enrollModal) {
        enrollModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// ========================================
// Enviar inscripción por WhatsApp
// ========================================
function sendEnrollmentToWhatsApp(enrollmentData) {
    const phoneNumber = '51941320575'; // Tu número de WhatsApp
    
    let message = ` *NUEVA INSCRIPCIÓN - NayoshF4V Dreams*\n\n`;
    message += ` *Curso:* ${enrollmentData.course}\n\n`;
    message += ` *Datos del Estudiante:*\n`;
    message += `❥ *Nombre:* ${enrollmentData.name}\n`;
    message += `❥ *Email:* ${enrollmentData.email}\n`;
    message += `❥ *Teléfono:* ${enrollmentData.phone}\n`;
    message += `❥ *Ubicación:* ${enrollmentData.location}\n\n`;
    message += ` *Información Adicional:*\n`;
    message += `❥ *Experiencia:* ${enrollmentData.experience}\n`;
    message += `❥ *Horario Preferido:* ${enrollmentData.schedule}\n`;
    message += `❥ *Cómo nos conoció:* ${enrollmentData.howFound}\n\n`;
    
    if (enrollmentData.comments) {
        message += ` *Comentarios:*\n${enrollmentData.comments}\n\n`;
    }
    
    message += ` *Fecha de inscripción:* ${new Date().toLocaleString('es-PE', { 
        dateStyle: 'full', 
        timeStyle: 'short' 
    })}`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Mostrar confirmación de inscripción
function showEnrollmentConfirmation(courseName) {
    const confirmationHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            z-index: 10003;
            text-align: center;
            max-width: 450px;
            animation: scaleIn 0.5s ease;
        ">
            <div style="font-size: 4rem; margin-bottom: 20px;">✅</div>
            <h2 style="color: #B598C8; margin-bottom: 15px; font-family: 'Cormorant Garamond', serif; font-size: 2rem;">¡Inscripción Enviada!</h2>
            <p style="color: #5A4B6B; margin-bottom: 10px; font-size: 1.1rem;">Tu solicitud de inscripción al curso:</p>
            <p style="color: #8B7BA8; margin-bottom: 20px; font-weight: 600; font-size: 1.2rem;">${courseName}</p>
            <p style="color: #5A4B6B; margin-bottom: 20px;">Ha sido enviada correctamente. Te contactaremos pronto por WhatsApp.</p>
            <p style="font-size: 0.9rem; color: #5A4B6B; opacity: 0.7;">Asegúrate de enviar el mensaje en WhatsApp</p>
            <button onclick="this.parentElement.remove(); document.querySelector('.confirmation-overlay').remove();" style="
                margin-top: 20px;
                padding: 15px 40px;
                background: linear-gradient(135deg, #B598C8, #8B7BA8);
                color: white;
                border: none;
                border-radius: 25px;
                cursor: none !important;
                font-weight: 600;
                font-size: 1rem;
                letter-spacing: 1px;
                transition: all 0.3s ease;
            " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 30px rgba(139,123,168,0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">Entendido</button>
        </div>
        <div class="confirmation-overlay" onclick="this.remove(); document.querySelector('[style*=fixed]').remove();" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(90, 75, 107, 0.8);
            backdrop-filter: blur(5px);
            z-index: 10002;
        "></div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', confirmationHTML);
}

// ========================================
// Procesar envío del formulario de inscripción
// ========================================
if (enrollForm) {
    enrollForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Capturar datos del formulario
        const enrollmentData = {
            course: modalCourseName ? modalCourseName.textContent : 'Curso no especificado',
            name: document.querySelector('#enrollForm input[type="text"]').value,
            email: document.querySelector('#enrollForm input[type="email"]').value,
            phone: document.querySelector('#enrollForm input[type="tel"]').value,
            location: document.querySelectorAll('#enrollForm input[type="text"]')[1].value,
            experience: document.querySelectorAll('#enrollForm select')[0].value || 'No especificado',
            schedule: document.querySelectorAll('#enrollForm select')[1].value || 'No especificado',
            howFound: document.querySelectorAll('#enrollForm select')[2].value || 'No especificado',
            comments: document.querySelector('#enrollForm textarea').value || 'Sin comentarios adicionales'
        };
        
        // Enviar a WhatsApp
        sendEnrollmentToWhatsApp(enrollmentData);
        
        // Mostrar confirmación
        showEnrollmentConfirmation(enrollmentData.course);
        
        // Limpiar formulario y cerrar modal
        enrollForm.reset();
        setTimeout(() => {
            closeEnrollModal();
        }, 500);
    });
}



// ========================================
// Modal de detalles del curso
// ========================================
const courseModal = document.getElementById('courseModal');

function openCourseModal(courseId) {
    const course = coursesData.find(c => c.id === courseId);
    
    if (!course) return;
    
    const modalImage = document.getElementById('modalCourseImage');
    const modalTitle = document.getElementById('modalCourseTitle');
    const modalLevel = document.getElementById('modalCourseLevel');
    const modalPrice = document.getElementById('modalCoursePrice');
    const modalDescription = document.getElementById('modalCourseDescription');
    const modalDetails = document.getElementById('modalCourseDetails');
    const modalCurriculum = document.getElementById('modalCourseCurriculum');
    
    if (modalImage) modalImage.innerHTML = `<span>${course.emoji}</span>`;
    if (modalTitle) modalTitle.textContent = course.name;
    if (modalLevel) modalLevel.textContent = course.level.toUpperCase();
    if (modalPrice) modalPrice.textContent = course.price;
    if (modalDescription) modalDescription.textContent = course.description;
    
    // Detalles
    if (modalDetails) {
        const detailsList = course.details.map(detail => `<li>${detail}</li>`).join('');
        modalDetails.innerHTML = `<ul>${detailsList}</ul>`;
    }
    
    // Curriculum
    if (modalCurriculum) {
        const curriculumList = course.curriculum.map(item => `<li>${item}</li>`).join('');
        modalCurriculum.innerHTML = `<ul>${curriculumList}</ul>`;
    }
    
    // Guardar nombre del curso para inscripción
    if (courseModal) {
        courseModal.setAttribute('data-course-name', course.name);
        courseModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeCourseModal() {
    if (courseModal) {
        courseModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function enrollFromModal() {
    if (!courseModal) return;
    
    const courseName = courseModal.getAttribute('data-course-name');
    closeCourseModal();
    setTimeout(() => {
        openEnrollModal(courseName);
    }, 300);
}

// ========================================
// FAQ Accordion
// ========================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Cerrar todos los FAQs
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            // Si no estaba activo, abrirlo
            if (!isActive) {
                item.classList.add('active');
            }
        });
    }
});

// ========================================
// Animación de scroll (fade-in)
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar todos los elementos con clase fade-in
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// ========================================
// Smooth scroll para enlaces internos
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Cerrar modales con tecla ESC
// ========================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeEnrollModal();
        closeCourseModal();
    }
});

// ========================================
// Carrito
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    if (typeof loadCart === 'function') {
        loadCart();
    }
});

// ========================================
// Animación de carga inicial
// ========================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// EXPORTAR DATOS PARA BÚSQUEDA GLOBAL
// ========================================
// Hacer coursesData disponible globalmente
window.coursesData = coursesData;

console.log('✅ clases.js cargado - Datos disponibles:', coursesData.length + ' cursos');