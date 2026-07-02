// ============================================================
// 🍛 FOODHUB APP - Complete JavaScript (American + African)
// ============================================================

// ===== MENU DATA =====
const menuItems = [
    // ============================================================
    // 🍔 AMERICAN FAVORITES
    // ============================================================
    { 
        id: 1, 
        name: 'Classic Burger', 
        category: 'american', 
        price: 8.99, 
        emoji: '🍔', 
        description: 'Juicy beef patty with lettuce, tomato, and cheese',
        image: 'https://img.freepik.com/free-photo/tasty-hamburger-with-fresh-vegetables-isolated-white_123827-25822.jpg'
    },
    { 
        id: 2, 
        name: 'Cheese Burger', 
        category: 'american', 
        price: 9.99, 
        emoji: '🧀', 
        description: 'Classic burger with double cheese and special sauce',
        image: 'https://img.freepik.com/free-photo/cheeseburger-with-french-fries_123827-25824.jpg'
    },
    { 
        id: 3, 
        name: 'Bacon Burger', 
        category: 'american', 
        price: 10.99, 
        emoji: '🥓', 
        description: 'With crispy bacon, BBQ sauce, and onion rings',
        image: 'https://img.freepik.com/free-photo/bacon-burger-with-french-fries_123827-25826.jpg'
    },
    { 
        id: 4, 
        name: 'Margherita Pizza', 
        category: 'american', 
        price: 12.99, 
        emoji: '🍕', 
        description: 'Fresh mozzarella, tomato sauce, and basil on thin crust',
        image: 'https://img.freepik.com/free-photo/margherita-pizza-with-tomato-basil_123827-25828.jpg'
    },
    { 
        id: 5, 
        name: 'Pepperoni Pizza', 
        category: 'american', 
        price: 14.99, 
        emoji: '🍕', 
        description: 'Classic pepperoni with extra cheese on crispy crust',
        image: 'https://img.freepik.com/free-photo/pepperoni-pizza-with-cheese_123827-25830.jpg'
    },
    { 
        id: 6, 
        name: 'French Fries', 
        category: 'american', 
        price: 4.99, 
        emoji: '🍟', 
        description: 'Crispy golden fries with special seasoning',
        image: 'https://img.freepik.com/free-photo/fresh-french-fries_123827-25832.jpg'
    },
    { 
        id: 7, 
        name: 'Chicken Wings', 
        category: 'american', 
        price: 11.99, 
        emoji: '🍗', 
        description: 'Spicy buffalo wings with ranch dipping sauce',
        image: 'https://img.freepik.com/free-photo/chicken-wings-with-dipping-sauce_123827-25834.jpg'
    },
    { 
        id: 8, 
        name: 'Chocolate Milkshake', 
        category: 'american', 
        price: 5.99, 
        emoji: '🥤', 
        description: 'Rich and creamy chocolate milkshake with whipped cream',
        image: 'https://img.freepik.com/free-photo/chocolate-milkshake-with-whipped-cream_123827-25836.jpg'
    },

    // ============================================================
    // 🇳🇬 NIGERIAN/AFRICAN FAVORITES
    // ============================================================
    { 
        id: 9, 
        name: 'Jollof Rice with Chicken', 
        category: 'african', 
        price: 12.99, 
        emoji: '🍛', 
        description: 'West Africa\'s signature one-pot rice dish with tomatoes, onions, spices and grilled chicken',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Jollof_rice_with_grilled_chicken.jpg/640px-Jollof_rice_with_grilled_chicken.jpg'
    },
    { 
        id: 10, 
        name: 'Egusi Soup with Pounded Yam', 
        category: 'african', 
        price: 14.99, 
        emoji: '🥣', 
        description: 'Rich melon seed soup with vegetables, assorted meat, and stockfish - served with pounded yam',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Egusi_and_bitter_leaf_soup..jpg/640px-Egusi_and_bitter_leaf_soup..jpg'
    },
    { 
        id: 11, 
        name: 'Semo with Egusi Soup', 
        category: 'african', 
        price: 13.99, 
        emoji: '🍲', 
        description: 'Smooth cassava-based semolina paired with rich egusi soup - a Yoruba delicacy',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Semo_and_Egusi.jpg/640px-Semo_and_Egusi.jpg'
    },
    { 
        id: 12, 
        name: 'Eba with Ogbono Soup', 
        category: 'african', 
        price: 11.99, 
        emoji: '🍲', 
        description: 'Cassava flour swallow served with slimy, flavorful ogbono (wild mango seed) soup',
        image: 'https://img.freepik.com/free-photo/nigerian-egusi-melon-soup-with-garri-eba-lunch_137916-1925.jpg'
    },
    { 
        id: 13, 
        name: 'Ofada Rice with Stew', 
        category: 'african', 
        price: 13.99, 
        emoji: '🍚', 
        description: 'Local unpolished rice served with spicy ofada stew and assorted meat',
        image: 'https://img.freepik.com/free-photo/white-boiled-rice-with-spicy-ofada-stew-nigerian-traditional-meal_137916-1907.jpg'
    },
    { 
        id: 14, 
        name: 'Pepper Soup with Catfish', 
        category: 'african', 
        price: 11.99, 
        emoji: '🐟', 
        description: 'Spicy traditional pepper soup with fresh catfish - perfect for cold days',
        image: 'https://img.freepik.com/free-photo/nigerian-spicy-fish-pepper-soup-bowl_137916-1928.jpg'
    },
    { 
        id: 15, 
        name: 'Amala with Ewedu & Gbegiri', 
        category: 'african', 
        price: 12.99, 
        emoji: '🍲', 
        description: 'Yam flour swallow paired with jute leaf soup and bean puree',
        image: 'https://img.freepik.com/free-photo/nigerian-amala-ewedu-gbegiri-soup_137916-1930.jpg'
    },
    { 
        id: 16, 
        name: 'Fried Rice with Chicken', 
        category: 'african', 
        price: 11.99, 
        emoji: '🍚', 
        description: 'Colorful Nigerian fried rice with mixed vegetables and grilled chicken',
        image: 'https://img.freepik.com/free-photo/nigerian-fried-rice-with-grilled-chicken_137916-1932.jpg'
    },
    { 
        id: 17, 
        name: 'Banga Soup with Starch', 
        category: 'african', 
        price: 12.99, 
        emoji: '🥣', 
        description: 'Rich palm nut soup with assorted meat - a Delta delicacy',
        image: 'https://img.freepik.com/free-photo/nigerian-banga-soup-with-starch_137916-1934.jpg'
    },
    { 
        id: 18, 
        name: 'Moi Moi', 
        category: 'african', 
        price: 6.99, 
        emoji: '🧆', 
        description: 'Steamed bean pudding with fish, eggs, and spices - a Nigerian favorite',
        image: 'https://img.freepik.com/free-photo/nigerian-moi-moi-bean-cake_137916-1936.jpg'
    },
    { 
        id: 19, 
        name: 'Dodo (Fried Plantain)', 
        category: 'african', 
        price: 4.99, 
        emoji: '🍌', 
        description: 'Sweet fried ripe plantains - the perfect side dish for any meal',
        image: 'https://img.freepik.com/free-photo/nigerian-dodo-fried-plantain_137916-1938.jpg'
    },
    { 
        id: 20, 
        name: 'Suya', 
        category: 'african', 
        price: 8.99, 
        emoji: '🥩', 
        description: 'Spicy grilled beef skewers with peanut seasoning - popular street food',
        image: 'https://img.freepik.com/free-photo/nigerian-suya-spicy-grilled-beef_137916-1940.jpg'
    },
    { 
        id: 21, 
        name: 'Pounded Yam & Egusi', 
        category: 'african', 
        price: 15.99, 
        emoji: '🍲', 
        description: 'Smooth pounded yam with rich egusi soup and assorted meat',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Plates_of_Egusi_Soup_with_vegetables_and_wrapped_Pounded_Yam.jpg/640px-Plates_of_Egusi_Soup_with_vegetables_and_wrapped_Pounded_Yam.jpg'
    },
    { 
        id: 22, 
        name: 'Abacha (African Salad)', 
        category: 'african', 
        price: 7.99, 
        emoji: '🥗', 
        description: 'Cassava-based salad with palm oil, garden eggs, and fish',
        image: 'https://img.freepik.com/free-photo/abacha-african-salad-cassava-based-dish-igbo-tribe_137916-1942.jpg'
    },
    { 
        id: 23, 
        name: 'Zobo Drink', 
        category: 'african', 
        price: 3.99, 
        emoji: '🍹', 
        description: 'Refreshing hibiscus flower drink with ginger and pineapple',
        image: 'https://img.freepik.com/free-photo/nigerian-zobo-hibiscus-drink_137916-1944.jpg'
    }
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
            <div class="menu-item-image" style="background: #f8f9fa; display: flex; align-items: center; justify-content: center; overflow: hidden;">
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 180px; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\'font-size:80px;\\'>${item.emoji}</span>'" />
            </div>
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

document.getElementById('checkoutModal').addEventListener('click', function(e) {
    if (e.target === this) closeCheckout();
});

console.log('🍛 FoodHub App loaded successfully!');
console.log(`📦 ${menuItems.length} dishes available (American + African)`);
console.log('💡 Session will clear when tab is closed');