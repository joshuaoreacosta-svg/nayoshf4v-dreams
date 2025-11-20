// ============= BUSQUEDA.JS - Sistema de búsqueda GLOBAL (SIN ERRORES) =============

// Base de datos global - se llena automáticamente
let globalSearchData = [];

// Función para registrar datos de productos
function registerProductsData() {
    if (typeof window.productsData !== 'undefined' && Array.isArray(window.productsData)) {
        const products = window.productsData.map(p => ({
            id: p.id,
            name: p.name,
            category: p.category || 'Sin categoría',
            image: p.image || 'img/default.jpg',
            price: p.price || 0,
            description: p.description || '',
            features: p.features || [],
            badge: p.badge || '',
            type: 'producto',
            emoji: '🧸',
            page: 'productos.html'
        }));
        
        globalSearchData = globalSearchData.concat(products);
        console.log('✅ Productos registrados para búsqueda:', products.length);
        return products.length;
    }
    return 0;
}

// Función para registrar datos de clases
function registerCoursesData() {
    if (typeof window.coursesData !== 'undefined' && Array.isArray(window.coursesData)) {
        const courses = window.coursesData.map(c => ({
            id: c.id,
            name: c.name,
            category: c.level || 'Sin nivel',
            image: c.emoji || '📚',
            price: parseFloat(c.price.replace(/[^\d.]/g, '')) || 0,
            description: c.description || '',
            features: c.details || [],
            badge: c.level || '',
            type: 'clase',
            emoji: c.emoji || '📚',
            page: 'clases.html'
        }));
        
        globalSearchData = globalSearchData.concat(courses);
        console.log('✅ Clases registradas para búsqueda:', courses.length);
        return courses.length;
    }
    return 0;
}

// Función para abrir el modal de búsqueda
function openSearch() {
    const modal = document.getElementById('searchModal');
    const input = document.getElementById('searchInput');
    
    if (modal && input) {
        modal.classList.add('active');
        setTimeout(() => {
            input.focus();
        }, 100);
    }
}

// Función para cerrar el modal de búsqueda
function closeSearch() {
    const modal = document.getElementById('searchModal');
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');
    
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            if (input) input.value = '';
            if (results) results.innerHTML = '';
        }, 300);
    }
}

// Función principal de búsqueda GLOBAL
function searchProducts() {
    const input = document.getElementById('searchInput');
    const resultsDiv = document.getElementById('searchResults');
    
    if (!input || !resultsDiv) return;
    
    const searchTerm = input.value.toLowerCase().trim();
    
    // Si el input tiene menos de 2 caracteres, limpiar resultados
    if (searchTerm.length < 2) {
        resultsDiv.innerHTML = '';
        return;
    }
    
    // Actualizar datos globales cada vez que se busca
    globalSearchData = [];
    registerProductsData();
    registerCoursesData();
    
    console.log('🔍 Total de items en búsqueda:', globalSearchData.length);
    
    // Buscar en TODOS los datos
    const results = globalSearchData.filter(item => {
        const nameMatch = item.name && item.name.toLowerCase().includes(searchTerm);
        const categoryMatch = item.category && item.category.toLowerCase().includes(searchTerm);
        const descriptionMatch = item.description && item.description.toLowerCase().includes(searchTerm);
        const priceMatch = item.price && item.price.toString().includes(searchTerm);
        
        // Buscar en características
        const featuresMatch = item.features && Array.isArray(item.features) && 
            item.features.some(feature => feature.toLowerCase().includes(searchTerm));
        
        return nameMatch || categoryMatch || descriptionMatch || featuresMatch || priceMatch;
    });
    
    // Separar por tipo para mostrar ordenado
    const productos = results.filter(r => r.type === 'producto');
    const clases = results.filter(r => r.type === 'clase');
    
    // Mostrar resultados
    if (results.length > 0) {
        let html = `
            <h3 style="margin: 20px 0 15px 0; font-family: 'Cormorant Garamond', serif; color: var(--dark); font-size: 1.3rem;">
                ${results.length} ${results.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
            </h3>
        `;
        
        // Mostrar productos primero
        if (productos.length > 0) {
            html += `
                <h4 style="margin: 15px 0 10px 0; font-family: 'Cormorant Garamond', serif; color: var(--accent); font-size: 1.1rem;">
                    🧸 Productos (${productos.length})
                </h4>
            `;
            html += productos.map(item => createSearchResultHTML(item, searchTerm)).join('');
        }
        
        // Luego mostrar clases
        if (clases.length > 0) {
            html += `
                <h4 style="margin: 15px 0 10px 0; font-family: 'Cormorant Garamond', serif; color: var(--accent); font-size: 1.1rem;">
                    📚 Clases (${clases.length})
                </h4>
            `;
            html += clases.map(item => createSearchResultHTML(item, searchTerm)).join('');
        }
        
        resultsDiv.innerHTML = html;
    } else {
        resultsDiv.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
                <p style="font-size: 3rem; margin-bottom: 10px;">😔</p>
                <p style="color: var(--text); font-size: 1.1rem; margin-bottom: 5px;">
                    No se encontraron resultados para "<strong>${searchTerm}</strong>"
                </p>
                <p style="color: var(--accent); font-size: 0.9rem;">
                    Intenta buscar: "amigurumi", "unicornio", "curso", "principiante"...
                </p>
            </div>
        `;
    }
}

// Crear HTML para cada resultado
function createSearchResultHTML(item, searchTerm) {
    const highlightedName = highlightText(item.name, searchTerm);
    
    // Determinar el tipo de badge y su color
    let typeBadge = '';
    let badgeStyle = '';
    
    if (item.type === 'clase') {
        typeBadge = '📚 Clase';
        badgeStyle = 'background: #9b59b6;';
    } else {
        typeBadge = '🧸 Producto';
        badgeStyle = 'background: var(--accent);';
    }
    
    // Mostrar imagen o emoji
    let imageHTML = '';
    if (item.image && (item.image.includes('.jpg') || item.image.includes('.png') || item.image.includes('.jpeg'))) {
        imageHTML = `<img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 10px; flex-shrink: 0;">`;
    } else {
        imageHTML = `<div style="width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, var(--primary), var(--secondary)); border-radius: 10px; font-size: 2rem; flex-shrink: 0;">${item.image || item.emoji}</div>`;
    }
    
    return `
        <div class="search-result-item" onclick="handleResultClick(${item.id}, '${item.type}', '${item.page}')">
            <div class="search-result-inner" style="display: flex; align-items: center; gap: 15px; padding: 15px; background: var(--light); border-radius: 15px; margin-bottom: 10px; transition: all 0.3s ease; cursor: pointer;">
                ${imageHTML}
                <div style="flex: 1;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 5px; flex-wrap: wrap;">
                        <strong style="color: var(--dark); font-size: 1.1rem;">${highlightedName}</strong>
                        <span style="${badgeStyle} color: white; padding: 3px 10px; border-radius: 12px; font-size: 0.7rem; font-weight: 600;">
                            ${typeBadge}
                        </span>
                        ${item.badge ? `<span style="background: var(--dark); color: white; padding: 3px 10px; border-radius: 12px; font-size: 0.7rem; font-weight: 600;">${item.badge}</span>` : ''}
                    </div>
                    <p style="color: var(--accent); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">
                        ${item.category}
                    </p>
                    <p style="color: var(--text); font-size: 0.9rem; margin-bottom: 5px;">
                        ${item.description ? item.description.substring(0, 80) + '...' : 'Sin descripción'}
                    </p>
                    <p style="color: var(--accent); font-weight: 600; font-size: 1.1rem;">
                        S/${item.price.toFixed(2)}
                    </p>
                </div>
                <div style="color: var(--accent); font-size: 1.5rem;">›</div>
            </div>
        </div>
    `;
}

// Manejar clic en resultado
function handleResultClick(itemId, itemType, itemPage) {
    closeSearch();
    
    setTimeout(() => {
        const currentPage = window.location.pathname.split('/').pop();
        
        if (itemType === 'producto') {
            // Si estamos en productos.html, abrir modal
            if (currentPage === 'productos.html' && typeof openProductModal === 'function') {
                openProductModal(itemId);
            } else {
                // Si no, redirigir a productos.html
                window.location.href = `productos.html?open=${itemId}`;
            }
        } else if (itemType === 'clase') {
            // Si estamos en clases.html, abrir modal
            if (currentPage === 'clases.html' && typeof openCourseModal === 'function') {
                openCourseModal(itemId);
            } else {
                // Si no, redirigir a clases.html
                window.location.href = `clases.html?open=${itemId}`;
            }
        }
    }, 300);
}

// Resaltar término de búsqueda
function highlightText(text, term) {
    if (!text || !term) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark style="background: var(--accent); color: white; padding: 2px 5px; border-radius: 3px;">$1</mark>');
}

// ============= INICIALIZACIÓN =============

// Registrar datos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Esperar un momento para que los otros scripts carguen
    setTimeout(() => {
        const productCount = registerProductsData();
        const courseCount = registerCoursesData();
        const total = productCount + courseCount;
        
        console.log('📊 Total de items en búsqueda:', total);
        
        if (total === 0) {
            console.warn('⚠️ No se encontraron datos para búsqueda. Verifica que productos.js y clases.js estén cargados ANTES de busqueda.js');
        }
    }, 100);
    
    // Cerrar haciendo clic fuera del modal
    const searchModal = document.getElementById('searchModal');
    if (searchModal) {
        searchModal.addEventListener('click', (e) => {
            if (e.target.id === 'searchModal') {
                closeSearch();
            }
        });
    }
    
    // Agregar efectos hover a resultados
    const searchResults = document.getElementById('searchResults');
    if (searchResults) {
        searchResults.addEventListener('mouseover', (e) => {
            const inner = e.target.closest('.search-result-inner');
            if (inner) {
                inner.style.background = 'white';
                inner.style.transform = 'translateX(5px)';
                inner.style.boxShadow = '0 5px 20px rgba(139, 123, 168, 0.15)';
            }
        });
        
        searchResults.addEventListener('mouseout', (e) => {
            const inner = e.target.closest('.search-result-inner');
            if (inner) {
                inner.style.background = 'var(--light)';
                inner.style.transform = 'translateX(0)';
                inner.style.boxShadow = 'none';
            }
        });
    }
    
    // Abrir modal automáticamente si viene de búsqueda
    const urlParams = new URLSearchParams(window.location.search);
    const openId = urlParams.get('open');
    
    if (openId) {
        setTimeout(() => {
            const currentPage = window.location.pathname.split('/').pop();
            
            if (currentPage === 'productos.html' && typeof openProductModal === 'function') {
                openProductModal(parseInt(openId));
            } else if (currentPage === 'clases.html' && typeof openCourseModal === 'function') {
                openCourseModal(parseInt(openId));
            }
        }, 500);
    }
});

// Cursor personalizado
        const cursor = document.getElementById('cursor');
        const follower = document.getElementById('cursor-follower');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                follower.style.left = e.clientX + 'px';
                follower.style.top = e.clientY + 'px';
            }, 100);
        });

// ============= EVENT LISTENERS =============

// Cerrar con tecla ESC y buscar con Enter
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSearch();
    }
    
    // Buscar con Enter
    const searchModal = document.getElementById('searchModal');
    if (e.key === 'Enter' && searchModal && searchModal.classList.contains('active')) {
        searchProducts();
    }
});

console.log('✅ busqueda.js cargado - Búsqueda global activa');
