// ============================================================
// 🍔 FOODHUB APP - Complete JavaScript
// ============================================================

// ===== MENU DATA =====
const menuItems = [
    // Burgers
    { id: 1, name: 'Classic Burger', category: 'burgers', price: 8.99, emoji: '🍔', description: 'Juicy beef patty with lettuce, tomato, and cheese' },
    { id: 2, name: 'Cheese Burger', category: 'burgers', price: 9.99, emoji: '🧀', description: 'Classic burger with double cheese' },
    { id: 3, name: 'Bacon Burger', category: 'burgers', price: 10.99, emoji: '🥓', description: 'With crispy bacon and BBQ sauce' },
    // Pizza
    { id: 4, name: 'Margherita Pizza', category: 'pizza', price: 12.99, emoji: '🍕', description: 'Fresh mozzarella, tomato sauce, and basil' },
    { id: 5, name: 'Pepperoni Pizza', category: 'pizza', price: 14.99, emoji: '🍕', description: 'Classic pepperoni with extra cheese' },
    { id: 6, name: 'Veggie Pizza', category: 'pizza', price: 13.99, emoji: '🍕', description: 'Bell peppers, mushrooms, olives, and onions' },
    // Sushi
    { id: 7, name: 'California Roll', category: 'sushi', price: 15.99, emoji: '🍣', description: 'Crab, avocado, and cucumber roll' },
    { id: 8, name: 'Spicy Tuna Roll', category: 'sushi', price: 16.99, emoji: '🍣', description: 'Tuna with spicy mayo and crunch' },
    { id: 9, name: 'Salmon Nigiri', category: 'sushi', price: 14.99, emoji: '🍣', description: 'Fresh salmon over seasoned rice' },
    // Drinks
    { id: 10, name: 'Fresh Lemonade', category: 'drinks', price: 3.99, emoji: '🍋', description: 'Freshly squeezed lemonade' },
    { id: 11, name: 'Iced Coffee', category: 'drinks', price: 4.99, emoji: '☕', description: 'Chilled coffee with milk' },
    { id: 12, name: 'Fruit Smoothie', category: 'drinks', price: 5.99, emoji: '🥤', description: 'Mixed berry smoothie' }
];

// ===== STATE =====
let cart = [];
let currentCategory = 'all';

// ===== DOM REFS =====
const menuGrid = document.getElementById('menuGrid');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');

// ============================================================
// 👤 USER AUTHENTICATION
// ============================================================

function checkAuth() {
    const session = sessionStorage.getItem('foodhub_session');
    if (!session) {
        window.location.href = 'login.html';
        return;
    }
    try {
        const data = JSON.parse(session);
        if (!data.loggedIn) {
            window.location.href = 'login.html';
            return;
        }
        // Update greeting
        const greeting = document.getElementById('userGreeting');
        if (greeting) {
            greeting.textContent = `👤 Welcome, ${data.userName || 'User'}!`;
        }
    } catch (e) {
        window.location.href = 'login.html';
    }
}

function handleLogout() {
    sessionStorage.removeItem('foodhub_session');
    showToast('👋 Logged out successfully!');
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 500);
}

// ============================================================
// 🍽️ MENU FUNCTIONS
// ============================================================

function renderMenu(category = 'all') {
    const filteredItems = category === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === category);

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No items in this category</p>';
        return;
    }

    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item">
            <div class="menu-item-image">${item.emoji}</div>
            <div class="menu-item-info">
                <h3>${item.name}</h3>
                <p class="description">${item.description}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                    <span class="price">$${item.price.toFixed(2)}</span>
                    <button class="add-btn" onclick="addToCart(${item.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== CATEGORY TABS =====
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.dataset.category;
        renderMenu(currentCategory);
    });
});

// ============================================================
// 🛒 CART FUNCTIONS
// ============================================================

function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    const existing = cart.find(i => i.id === itemId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();
    showToast(`✅ Added ${item.name} to cart!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(itemId);
        return;
    }

    updateCartUI();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getItemCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function updateCartUI() {
    const count = getItemCount();
    cartCount.textContent = count;

    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="empty-cart">🛒 Your cart is empty. Start ordering!</p>`;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.emoji} ${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <div class="cart-item-actions">
                    <button onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span style="min-width: 20px; text-align: center;">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
                </div>
            </div>
        `).join('');
    }

    cartTotal.textContent = `$${getCartTotal().toFixed(2)}`;
}

function toggleCart() {
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('show');
}

// ============================================================
// 📝 CHECKOUT FUNCTIONS
// ============================================================

function checkout() {
    if (cart.length === 0) {
        showToast('⚠️ Your cart is empty!');
        return;
    }

    toggleCart();
    document.getElementById('checkoutModal').classList.add('show');

    const summaryContainer = document.getElementById('orderSummaryItems');
    summaryContainer.innerHTML = cart.map(item => `
        <div class="order-summary-item">
            <span>${item.emoji} ${item.name} × ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');

    document.getElementById('orderTotal').textContent = `$${getCartTotal().toFixed(2)}`;
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('show');
}

function placeOrder(event) {
    event.preventDefault();
    const form = document.getElementById('checkoutForm');
    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const address = form.querySelector('input[type="text"]:last-of-type').value;

    const order = {
        id: Date.now(),
        items: [...cart],
        total: getCartTotal(),
        customer: { name, phone, address },
        timestamp: new Date().toLocaleString()
    };

    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));

    cart = [];
    updateCartUI();
    closeCheckout();
    showToast(`✅ Order placed successfully! Thank you, ${name}!`);
    form.reset();
}

// ============================================================
// 🔔 TOAST NOTIFICATION
// ============================================================

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================================
// 🚀 INITIALIZE
// ============================================================

document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    renderMenu();
    updateCartUI();
});

// ===== CLOSE MODAL ON OVERLAY CLICK =====
document.getElementById('checkoutModal').addEventListener('click', function(e) {
    if (e.target === this) closeCheckout();
});

console.log('🍔 FoodHub App loaded successfully!');
console.log(`📦 ${menuItems.length} items available`);
console.log('💡 Session will clear when tab is closed');