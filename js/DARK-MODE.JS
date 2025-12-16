// 🌙 SISTEMA DE MODO OSCURO PARA NAYOSHF4V DREAMS
// Script completo para toggle de tema claro/oscuro

// Función para cambiar entre modo claro y oscuro
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Cambiar el tema
    html.setAttribute('data-theme', newTheme);
    
    // Guardar la preferencia en localStorage
    localStorage.setItem('theme', newTheme);
    
    // Animación del botón
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg) scale(1)';
        }, 300);
    }
    
    // Log para desarrollo (puedes eliminarlo en producción)
    console.log(`Tema cambiado a: ${newTheme}`);
}

// Cargar tema guardado al iniciar
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Log para desarrollo
    console.log(`Tema cargado: ${savedTheme}`);
}

// Detectar preferencia del sistema operativo
function detectSystemTheme() {
    // Solo detectar si no hay preferencia guardada
    if (!localStorage.getItem('theme')) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            console.log('Tema del sistema detectado: oscuro');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            console.log('Tema del sistema detectado: claro');
        }
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Cargar tema guardado o detectar preferencia del sistema
    loadTheme();
    
    // Detectar preferencia del sistema si no hay tema guardado
    detectSystemTheme();
    
    // Añadir efecto visual al botón cuando esté listo
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.style.transition = 'all 0.3s ease';
        console.log('Botón de modo oscuro inicializado correctamente');
    }
});

// Escuchar cambios en la preferencia del sistema (opcional pero recomendado)
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        // Solo cambiar automáticamente si el usuario no ha guardado una preferencia
        if (!localStorage.getItem('theme')) {
            const newTheme = event.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            console.log(`Preferencia del sistema cambió a: ${newTheme}`);
        }
    });
}

// Atajo de teclado opcional (Ctrl/Cmd + D para cambiar tema)
document.addEventListener('keydown', (e) => {
    // Detectar Ctrl+D (Windows/Linux) o Cmd+D (Mac)
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault(); // Evitar que se añada marcador
        toggleTheme();
        console.log('Tema cambiado con atajo de teclado');
    }
});

// Función para obtener el tema actual (útil para otros scripts)
function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
}

// Función para forzar un tema específico
function setTheme(theme) {
    if (theme === 'dark' || theme === 'light') {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        console.log(`Tema forzado a: ${theme}`);
    } else {
        console.error('Tema inválido. Usa "dark" o "light"');
    }
}

// Exportar funciones para uso global (opcional)
window.themeManager = {
    toggle: toggleTheme,
    getCurrent: getCurrentTheme,
    set: setTheme
};

console.log('🌙 Sistema de modo oscuro cargado correctamente');