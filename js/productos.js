const productsData = [
    {
        id: 1,
        name: 'Burro Tierno',
        category: 'animales',
        image: 'img/burro.jpg',
        price: 45,
        description: 'Adorable burrito tejido con hilos premium de al. Perfecto para regalar o decorar cualquier espacio.',
        features: [
            'Tejido 100% a mano',
            'Algodón orgánico premium',
            'Relleno hipoalergénico',
            'Altura: 25cm',
            'Lavable a mano'
        ],
        badge: 'Popular'
    },
    {
        id: 2,
        name: 'Ave Fenix',
        category: 'animales',
        price: 42,
        image:'img/fenix.jpg',
        description: 'Suave avecita con detalles bordados a mano y alas largas. Ideal para bebés y niños pequeños.',
        features: [
            'Detalles bordados a mano',
            'Hilos suaves y seguros',
            'Ojos bordados (sin piezas pequeñas)',
            'Altura: 22cm',
            'Certificado para niños'
        ]
    },
    {
        id: 3,
        name: 'Unicornio Mágico',
        category: 'fantasía',
        price: 52,
        image:'img/Unicornio.jpg',
        description: 'Unicornio encantador con cuerno brillante y colores pastel. Una pieza especial y única que todos adorarán.',
        features: [
            'Cuerno con hilo metálico',
            'Colores pastel personalizables',
            'Melena suave y sedosa',
            'Altura: 28cm',
            'Edición especial'
        ],
        badge: 'Nuevo'
    },
    {
        id: 4,
        name: 'Pulpo Feliz',
        category: 'marinos',
        price: 38,
        image:'img/pulpo.jpg',
        description: 'Simpático pulpo con 8 tentáculos suaves y expresión adorable. Perfecto como compañero de juegos.',
        features: [
            '8 tentáculos móviles',
            'Colores vibrantes',
            'Base con peso para estabilidad',
            'Altura: 20cm',
            'Ideal para decoración'
        ]
    },
    {
        id: 5,
        name: 'Zorrito Astuto',
        category: 'animales',
        price: 48,
        image:'img/zorro.jpg',
        description: 'Zorro elegante con colores naturales y cola esponjosa. Un diseño sofisticado y encantador.',
        features: [
            'Cola extra esponjosa',
            'Colores naturales tierra',
            'Postura sentada estable',
            'Altura: 24cm',
            'Detalles realistas'
        ]
    },
    {
        id: 6,
        name: 'Panda Mimoso',
        category: 'animales',
        price: 50,
        image:'img/panda.jpg',
        description: 'Panda tierno con detalles precisos en blanco y negro. Una verdadera obra de arte tejida con amor.',
        features: [
            'Diseño realista',
            'Contraste blanco y negro',
            'Relleno extra suave',
            'Altura: 26cm',
            'Hecho con dedicación'
        ],
        badge: 'Popular'
    },
    {
        id: 7,
        name: 'Ballena Azul',
        category: 'marinos',
        price: 55,
        image: 'img/ballena.jpg',
        description: 'Majestuosa ballena azul con aletas detalladas. Perfecta para amantes del océano.',
        features: [
            'Diseño anatómico',
            'Tonos azules degradados',
            'Aletas móviles',
            'Longitud: 35cm',
            'Inspirada en la naturaleza'
        ]
    },
    {
        id: 8,
        name: 'Gatito Kawaii',
        category: 'animales',
        price: 40,
        image:'img/gato.jpg',
        description: 'Adorable gatito con estilo kawaii japonés. Sus ojitos te robarán el corazón.',
        features: [
            'Estilo kawaii auténtico',
            'Expresión dulce',
            'Colores pasteles',
            'Altura: 18cm',
            'Super tierno'
        ],
        badge: 'Nuevo'
    },
    {
        id: 9,
        name: 'Dragón Místico',
        category: 'fantasía',
        price: 65,
        image:'img/dragoncito.jpg',
        description: 'Dragón fantástico con alas extensibles y escamas texturizadas. Una pieza de colección única.',
        features: [
            'Alas con alambre moldeable',
            'Escamas texturizadas',
            'Colores degradados',
            'Altura: 30cm',
            'Pieza de colección'
        ],
        badge: 'Exclusivo'
    },
    {
        id: 10,
        name: 'Pingüino Elegante',
        category: 'animales',
        price: 43,
        image:'img/pinguino.jpg',
        description: 'Pingüino con esmoquin natural en blanco y negro. Elegante y adorable a la vez.',
        features: [
            'Postura erguida',
            'Pico y patas en color',
            'Diseño simétrico',
            'Altura: 23cm',
            'Acabado profesional'
        ]
    },
    {
        id: 11,
        name: 'Hada del Bosque',
        category: 'fantasía',
        price: 58,
        image:'img/hada.jpg',
        description: 'Hermosa hada con vestido floral y alas delicadas. Mágica y encantadora.',
        features: [
            'Vestido con flores tejidas',
            'Alas transparentes',
            'Cabello largo y sedoso',
            'Altura: 27cm',
            'Totalmente personalizable'
        ]
    },
    {
        id: 12,
        name: 'Tortuga Marina',
        category: 'marinos',
        price: 46,
        image:'img/tortuga.jpg',
        description: 'Tortuga marina con caparazón detallado en relieve. Símbolo de longevidad y sabiduría.',
        features: [
            'Caparazón en relieve',
            'Tonos verdes naturales',
            'Aletas suaves',
            'Longitud: 25cm',
            'Diseño sereno'
        ]
    },
    {
        id: 13,
        name: 'Koala Dormilón',
        category: 'animales',
        price: 47,
        image:'img/koala.jpg',
        description: 'Tierno koala en posición de descanso. Perfecto para decoración de habitaciones.',
        features: [
            'Postura relajada',
            'Textura suave tipo peluche',
            'Orejas esponjosas',
            'Altura: 21cm',
            'Transmite paz'
        ]
    },
    {
        id: 14,
        name: 'Sirena Encantada',
        category: 'fantasía',
        price: 62,
        image:'img/sirena.jpg',
        description: 'Bella sirena con cola de escamas brillantes y cabello largo. Una creación mágica del mar.',
        features: [
            'Cola con escamas brillantes',
            'Cabello extra largo',
            'Top con conchas',
            'Altura: 32cm',
            'Totalmente articulada'
        ],
        badge: 'Exclusivo'
    },
    {
        id: 15,
        name: 'Búho Sabio',
        category: 'animales',
        price: 44,
        image:'img/buho.jpg',
        description: 'Búho con grandes ojos expresivos y plumaje detallado. Símbolo de sabiduría.',
        features: [
            'Ojos grandes bordados',
            'Plumaje texturizado',
            'Base estable',
            'Altura: 20cm',
            'Colores tierra'
        ]
    },
    {
        id: 16,
        name: 'Personalizacion Propia',
        category: 'personalizados',
        price: 75,
        image:'img/persona.jpeg',
        description: 'Conviertete en un mini amigurumi. Elige colores, tamaño y características. ¡Hazlo único!',
        features: [
            'Diseño 100% personalizado',
            'Consulta incluida',
            'Colores a elección',
            'Tamaño variable',
            'Proceso colaborativo'
        ],
        badge: 'Especial'
    },
    {
        id: 17,
        name: 'Spiderman personalizado',
        category: 'personalizados',
        price: 80,
        image:'img/spiderman.jpeg',
        description: 'Ideal para regalo o decoracion, conviertete en un mini spiderman amigurumi.',
        features: [
            'Diseño 100% personalizado',
            'Consulta incluida',
            'Colores a elección',
            'Tamaño variable',
            'Proceso colaborativo'
        ],
    },
    {
        id: 18,
        name: 'Harry Potter personalizado',
        category: 'personalizados',
        price: 85,
        image:'img/harry_potter.jpg',
        description: 'Ingresa al mundo magico. Diseña tu propio amigurumi con tematica de harry potter',
        features: [
            'Diseño 100% personalizado',
            'Consulta incluida',
            'Colores a elección',
            'Tamaño variable',
            'Proceso colaborativo'
        ],
        
    },
    {
        id: 19,
        name: 'Deportista Personalizado',
        category: 'personalizados',
        price: 85,
        image:'img/futbol.jpg',
        description: 'Convierte a tu deposrtista favorito en amigurumi. Ideal para regalo o decoracion.',
        features: [
            'Diseño 100% personalizado',
            'Consulta incluida',
            'Colores a elección',
            'Tamaño variable',
            'Proceso colaborativo'
        ],
    },
    {
        id: 20,
        name: 'Mascota Personalizado',
        category: 'personalizados',
        price: 96,
        image:'img/mascota personalizada.jpg',
        description: 'Convierte a tu mascota en un adorable amigurumi. Ideal para decoracion.',
        features: [
            'Diseño 100% personalizado',
            'Consulta incluida',
            'Colores a elección',
            'Tamaño variable',
            'Proceso colaborativo'
        ],
    }
];



// Inicializar página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(productsData);
    loadCart();
    initializeFilters();
});

// Renderizar productos
function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    
    // ⚠️ VALIDAR que grid existe
    if (!grid) return;
    
    grid.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-category', product.category);
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image || ''}" alt="${product.name}" class="product-img">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">S/${product.price.toFixed(2)}</p>
                <p class="product-description">${product.description.substring(0, 80)}...</p>
                <div class="product-actions">
                    <button class="view-btn" onclick="openProductModal(${product.id})">Ver Detalles</button>
                    <button class="add-cart-btn" onclick="addToCart(${product.id})">🛒 Agregar</button>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// ========================================
// Y AL FINAL DEL ARCHIVO productos.js
// ========================================

// Exportar datos globalmente para búsqueda
window.productsData = productsData;

// Solo renderizar si estamos en la página de productos
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productsGrid');
    if (grid && typeof productsData !== 'undefined') {
        renderProducts(productsData);
        loadCart();
        initializeFilters();
    }
});

console.log('✅ productos.js cargado - Datos disponibles:', productsData.length + ' productos');

// Filtros
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover active de todos
            filterButtons.forEach(b => b.classList.remove('active'));
            // Agregar active al clickeado
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            filterProducts(category);
        });
    });
}

function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        if (category === 'todos' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Ordenar productos
function sortProducts() {
    const sortValue = document.getElementById('sortSelect').value;
    let sortedProducts = [...productsData];
    
    switch(sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            sortedProducts = productsData;
    }
    
    renderProducts(sortedProducts);
}

// Modal de producto
function openProductModal(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('modalImage').innerHTML = `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 15px;">`;
    document.getElementById('modalName').textContent = product.name;
    document.getElementById('modalCategory').textContent = product.category;
    document.getElementById('modalPrice').textContent = `S/${product.price.toFixed(2)}`;
    document.getElementById('modalDescription').textContent = product.description;
    
    const featuresHTML = `
        <h4>Características:</h4>
        <ul>
            ${product.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
    `;
    document.getElementById('modalFeatures').innerHTML = featuresHTML;
    
    document.getElementById('quantityInput').value = 1;
    document.getElementById('productModal').classList.add('active');
    document.getElementById('productModal').setAttribute('data-product-id', productId);
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
}

function increaseQuantity() {
    const input = document.getElementById('quantityInput');
    if (input.value < 10) {
        input.value = parseInt(input.value) + 1;
    }
}

function decreaseQuantity() {
    const input = document.getElementById('quantityInput');
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function addToCartFromModal() {
    const productId = parseInt(document.getElementById('productModal').getAttribute('data-product-id'));
    const quantity = parseInt(document.getElementById('quantityInput').value);
    
    addToCart(productId, quantity);
    closeProductModal();
}

// Carrito
function addToCart(productId, quantity = 1) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    addToCartGeneric(product, quantity);
}


// Cerrar modales con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeSearch();
        closeProductModal();
    }
});



// Scroll suave
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


// Animación de carga inicial
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 1s ease';
                document.body.style.opacity = '1';
            }, 100);
        });