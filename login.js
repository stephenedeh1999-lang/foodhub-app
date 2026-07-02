// ============================================================
// 🔐 LOGIN PAGE - JavaScript (Separate File)
// ============================================================

// ===== USERS DATABASE (LocalStorage) =====
function getUsers() {
    const users = localStorage.getItem('foodhub_users');
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem('foodhub_users', JSON.stringify(users));
}

// ===== INITIALIZE WITH DEMO USER =====
function initializeUsers() {
    const users = getUsers();
    if (users.length === 0) {
        users.push({
            id: 1,
            name: 'Demo User',
            email: 'demo@foodhub.com',
            password: 'password123',
            created: new Date().toISOString()
        });
        saveUsers(users);
    }
}
initializeUsers();

// ===== TOGGLE PASSWORD VISIBILITY =====
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleBtn.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleBtn.textContent = '👁️';
    }
}

// ===== HANDLE LOGIN =====
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    const loginBtn = document.getElementById('loginBtn');

    errorMessage.classList.remove('show');
    successMessage.classList.remove('show');

    if (!email || !password) {
        errorMessage.textContent = '❌ Please fill in all fields';
        errorMessage.classList.add('show');
        return;
    }

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        errorMessage.textContent = '❌ Invalid email or password';
        errorMessage.classList.add('show');
        const form = document.getElementById('loginForm');
        form.style.animation = 'shake 0.5s ease';
        setTimeout(() => form.style.animation = '', 500);
        return;
    }

    successMessage.textContent = `✅ Welcome back, ${user.name}! Redirecting...`;
    successMessage.classList.add('show');

    localStorage.setItem('foodhub_session', JSON.stringify({
        userId: user.id,
        userName: user.name,
        userEmail: user.email,
        loggedIn: true,
        timestamp: new Date().toISOString()
    }));

    loginBtn.disabled = true;
    loginBtn.textContent = '⏳ Redirecting...';

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

// ===== CHECK IF ALREADY LOGGED IN =====
window.addEventListener('DOMContentLoaded', function() {
    const session = localStorage.getItem('foodhub_session');
    if (session) {
        try {
            const data = JSON.parse(session);
            if (data.loggedIn) {
                window.location.href = 'index.html';
            }
        } catch (e) {
            localStorage.removeItem('foodhub_session');
        }
    }
});