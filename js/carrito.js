// cart.js - Sistema completo de carrito con checkout integrado

let cart = [];
let checkoutStep = 'cart'; // 'cart' o 'checkout'

// ============= GESTIÓN DEL CARRITO =============

// Guardar carrito en localStorage
function saveCart() {
    localStorage.setItem('amiCrochetCart', JSON.stringify(cart));
}

// Cargar carrito desde localStorage
function loadCart() {
    const saved = localStorage.getItem('amiCrochetCart');
    if (saved) {
        cart = JSON.parse(saved);
        renderCart();
    }
}

// Renderizar carrito
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.querySelector('.cart-footer');
    const cartCount = document.querySelector('.cart-count');
    
    if (!cartItems || !cartFooter || !cartCount) return;
    
    // Mostrar vista según el paso
    if (checkoutStep === 'checkout') {
        renderCheckoutView();
        return;
    }
    
    // Vista del carrito normal
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        cartFooter.innerHTML = `
            <div class="cart-total">
                <span>Total:</span>
                <span>S/0.00</span>
            </div>
        `;
        cartCount.textContent = '0';
        return;
    }
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">S/${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
        </div>
    `).join('');
    
    cartFooter.innerHTML = `
        <div class="cart-total">
            <span>Total:</span>
            <span>S/${totalPrice.toFixed(2)}</span>
        </div>
        <button class="checkout-btn" onclick="goToCheckout()">
            Proceder al Pago
        </button>
    `;
}

// Agregar al carrito (versión genérica)
function addToCartGeneric(product, quantity = 1) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart();
    renderCart();
    showNotification(`✓ ${product.name} agregado al carrito`);
}

// Remover del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

// Actualizar cantidad
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
        }
    }
}

// Toggle carrito
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        const isActive = cartSidebar.classList.toggle('active');
        // Si se cierra, volver a vista de carrito
        if (!isActive) {
            checkoutStep = 'cart';
        }
    }
}

// Vaciar carrito
function clearCart() {
    cart = [];
    saveCart();
    renderCart();
    showNotification('Carrito vaciado');
}

// ============= PROCESO DE CHECKOUT =============

// Ir a checkout
function goToCheckout() {
    if (cart.length === 0) {
        showNotification('⚠️ Tu carrito está vacío');
        return;
    }
    checkoutStep = 'checkout';
    renderCheckoutView();
}

// Volver al carrito
function backToCart() {
    checkoutStep = 'cart';
    renderCart();
}

// Renderizar vista de checkout
function renderCheckoutView() {
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.querySelector('.cart-footer');
    const cartHeader = document.querySelector('.cart-header h3');
    
    if (!cartItems || !cartFooter) return;
    
    // Cambiar título
    if (cartHeader) {
        cartHeader.textContent = 'Finalizar Compra';
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal >= 100 ? 0 : 15;
    const total = subtotal + shipping;
    
    cartItems.innerHTML = `
        <button class="back-to-cart" onclick="backToCart()">
            ← Volver al carrito
        </button>
        
        <div class="checkout-form">
            <h4>Datos de Envío</h4>
            <form id="checkoutForm" onsubmit="processOrder(event)">
                <div class="form-group-small">
                    <label>Nombre Completo *</label>
                    <input type="text" id="checkoutName" required>
                </div>
                
                <div class="form-group-small">
                    <label>Email *</label>
                    <input type="email" id="checkoutEmail" required>
                </div>
                
                <div class="form-group-small">
                    <label>Teléfono/WhatsApp *</label>
                    <input type="tel" id="checkoutPhone" required>
                </div>
                
                <div class="form-group-small">
                    <label>Dirección *</label>
                    <input type="text" id="checkoutAddress" placeholder="Calle, número" required>
                </div>
                
                <div class="form-group-small">
                    <label>Distrito *</label>
                    <input type="text" id="checkoutDistrict" required>
                </div>
                
                <div class="form-group-small">
                    <label>Ciudad *</label>
                    <input type="text" id="checkoutCity" value="Lima" required>
                </div>
                
                <h4 style="margin-top: 20px;">Método de Pago</h4>
                
                <div class="payment-methods-compact">
                    <label class="payment-option-compact">
                        <input type="radio" name="payment" value="yape" checked>
                        <span>📱 Yape/Plin</span>
                    </label>
                    
                    <label class="payment-option-compact">
                        <input type="radio" name="payment" value="transfer">
                        <span>🏦 Transferencia</span>
                    </label>
                    
                    <label class="payment-option-compact">
                        <input type="radio" name="payment" value="cash">
                        <span>💵 Contra Entrega</span>
                    </label>
                </div>
                
                <div class="checkout-summary-compact">
                    <h4>Resumen</h4>
                    ${cart.map(item => `
                        <div class="summary-item">
                            <span>${item.name} x${item.quantity}</span>
                            <span>S/${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    `).join('')}
                    
                    <div class="summary-totals">
                        <div class="summary-row">
                            <span>Subtotal:</span>
                            <span>S/${subtotal.toFixed(2)}</span>
                        </div>
                        <div class="summary-row">
                            <span>Envío:</span>
                            <span style="color: ${shipping === 0 ? 'var(--accent)' : 'inherit'}">
                                ${shipping === 0 ? 'GRATIS' : 'S/' + shipping.toFixed(2)}
                            </span>
                        </div>
                        ${shipping > 0 ? '<small class="shipping-note">✨ Envío gratis en compras mayores a S/100</small>' : ''}
                        <div class="summary-row total-row">
                            <strong>Total:</strong>
                            <strong>S/${total.toFixed(2)}</strong>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `;
    
    cartFooter.innerHTML = `
        <button type="submit" form="checkoutForm" class="checkout-btn">
            Confirmar Pedido
        </button>
        <p class="security-note">🔒 Compra segura</p>
    `;
    
    // Restaurar título al cerrar
    const closecart = document.querySelector('.close-cart');
    if (closecart) {
        closecart.onclick = function() {
            checkoutStep = 'cart';
            if (cartHeader) cartHeader.textContent = 'Carrito';
            toggleCart();
        };
    }
}

// Procesar orden
function processOrder(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const formData = {
        name: document.getElementById('checkoutName').value,
        email: document.getElementById('checkoutEmail').value,
        phone: document.getElementById('checkoutPhone').value,
        address: document.getElementById('checkoutAddress').value,
        city: document.getElementById('checkoutCity').value,
        district: document.getElementById('checkoutDistrict').value,
        paymentMethod: document.querySelector('input[name="payment"]:checked').value,
        items: cart,
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    };
    
    // Validar formulario
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
        showNotification('⚠️ Por favor completa todos los campos');
        return;
    }
    
    // Simular procesamiento
    showNotification('⏳ Procesando pedido...');
    
    setTimeout(() => {
        // Enviar por WhatsApp
        sendOrderToWhatsApp(formData);
        
        // Mostrar confirmación
        showOrderConfirmation(formData);
        
        // Limpiar carrito
        clearCart();
        
        // Volver a vista de carrito
        checkoutStep = 'cart';
        
        // Cerrar carrito
        toggleCart();
    }, 1500);
}

// Enviar pedido por WhatsApp
function sendOrderToWhatsApp(orderData) {
    const phoneNumber = '51941320575'; // REEMPLAZA con tu número de WhatsApp
    
    let message = ` *NUEVO PEDIDO - NayoshF4V Dreams*\n\n`;
    message += ` ❥*Cliente:* ${orderData.name}\n`;
    message += ` ❥*Email:* ${orderData.email}\n`;
    message += ` ❥*Teléfono:* ${orderData.phone}\n\n`;
    message += ` ❥*Dirección de Envío:*\n`;
    message += `${orderData.address}\n`;
    message += `${orderData.district}, ${orderData.city}\n\n`;
    message += ` ❥*Productos:*\n`;
    
    orderData.items.forEach(item => {
        message += `• ${item.name} x${item.quantity} - S/${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    const subtotal = orderData.total;
    const shipping = subtotal >= 100 ? 0 : 15;
    const total = subtotal + shipping;
    
    message += `\n❥ *Subtotal:* S/${subtotal.toFixed(2)}\n`;
    message += `❥ *Envío:* ${shipping === 0 ? 'GRATIS' : 'S/' + shipping.toFixed(2)}\n`;
    message += `❥ *TOTAL:* S/${total.toFixed(2)}\n\n`;
    message += `❥ *Método de pago:* ${orderData.paymentMethod === 'transfer' ? 'Transferencia' : orderData.paymentMethod === 'yape' ? 'Yape/Plin' : 'Contra entrega'}`;
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Mostrar confirmación de orden
function showOrderConfirmation(orderData) {
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
            z-index: 10001;
            text-align: center;
            max-width: 400px;
            animation: scaleIn 0.5s ease;
        ">
            <div style="font-size: 4rem; margin-bottom: 20px;">✅</div>
            <h2 style="color: var(--accent); margin-bottom: 15px; font-family: 'Cormorant Garamond', serif;">¡Pedido Confirmado!</h2>
            <p style="color: var(--text); margin-bottom: 10px;">Tu pedido ha sido enviado correctamente.</p>
            <p style="color: var(--text); margin-bottom: 20px;">Nos pondremos en contacto contigo pronto.</p>
            <p style="font-size: 0.9rem; color: var(--text); opacity: 0.7;">Número de orden: #${Date.now().toString().slice(-6)}</p>
            <button onclick="this.parentElement.remove()" style="
                margin-top: 20px;
                padding: 12px 30px;
                background: var(--accent);
                color: white;
                border: none;
                border-radius: 25px;
                cursor: pointer;
                font-weight: 600;
            ">Cerrar</button>
        </div>
        <div onclick="this.remove()" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 10000;
        "></div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', confirmationHTML);
}

// ============= UTILIDADES =============

// Notificaciones
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10002;
        animation: slideInRight 0.5s ease;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Calcular total del carrito
function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Obtener cantidad de items
function getCartItemCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// ============= INICIALIZACIÓN =============

// Cargar carrito al iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});