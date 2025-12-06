// Menu Data
let menuItems = JSON.parse(localStorage.getItem('menuItems')) || [
    // Burgers
    { id: 1, name: "Paneer Makhani Burger", price: 159, category: "burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Butter Chicken Burger", price: 149, category: "burgers", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=60" },
    { id: 3, name: "Crispy Veg Delight", price: 99, category: "burgers", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=60" },
    { id: 4, name: "Ultimate Fried Chicken Burger", price: 149, category: "burgers", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=60" },
    { id: 5, name: "Classic Veg Burger", price: 85, category: "burgers", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=60" },
    { id: 6, name: "Classic Chicken Burger", price: 109, category: "burgers", image: "https://images.unsplash.com/photo-1615297928064-24977384d0f5?auto=format&fit=crop&w=500&q=60" },
    { id: 7, name: "Chicken Tikka Burger", price: 129, category: "burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60" },
    { id: 8, name: "Korean Hot & Spicy Burger", price: 155, category: "burgers", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=60" },

    // Pizza
    { id: 11, name: "Garden Fresh Pizza", price: 249, category: "pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=60" },
    { id: 12, name: "Corn & Paneer Cheese Pizza", price: 265, category: "pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=60" },
    { id: 13, name: "Chicken Fun Blast Pizza", price: 279, category: "pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=60" },
    { id: 14, name: "Double Desi Delight Pizza", price: 289, category: "pizza", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=500&q=60" },

    // Fried Chicken
    { id: 21, name: "Classic Fried Chicken (2pcs)", price: 179, category: "chicken", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=60" },
    { id: 22, name: "Fiery Fried Chicken (2pcs)", price: 189, category: "chicken", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=500&q=60" },
    { id: 23, name: "Chicken Drumstick (2pcs)", price: 175, category: "chicken", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=60" },
    { id: 24, name: "Chicken Popcorn", price: 115, category: "chicken", image: "https://images.unsplash.com/photo-1569691899455-88464f6d3ab1?auto=format&fit=crop&w=500&q=60" },
    { id: 25, name: "Chicken Nuggets (7pcs)", price: 105, category: "chicken", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=60" },
    { id: 26, name: "Boneless Strips Bucket (12pcs)", price: 405, category: "chicken", image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=60" },

    // Wraps & Sandwiches
    { id: 31, name: "Super Veggie Wrap", price: 85, category: "wraps", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=60" },
    { id: 32, name: "Crispy Chicken Wrap", price: 129, category: "wraps", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=500&q=60" },
    { id: 33, name: "Grilled Veg & Cheese Sandwich", price: 79, category: "wraps", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=60" },
    { id: 34, name: "Crispy Chicken Sandwich", price: 129, category: "wraps", image: "https://images.unsplash.com/photo-1554433607-66b5efe9d304?auto=format&fit=crop&w=500&q=60" },

    // Sides
    { id: 41, name: "French Fries (S)", price: 69, category: "sides", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=500&q=60" },
    { id: 42, name: "Peri Peri Fries (L)", price: 119, category: "sides", image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=500&q=60" },
    { id: 43, name: "Cheese Corn Nuggets", price: 89, category: "sides", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=500&q=60" },
    { id: 44, name: "Garlic Bread", price: 69, category: "sides", image: "https://images.unsplash.com/photo-1573140401552-3fb464bf29c3?auto=format&fit=crop&w=500&q=60" },

    // Drinks
    { id: 51, name: "Mint Mojito", price: 79, category: "drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=60" },
    { id: 52, name: "Blue Curacao", price: 79, category: "drinks", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=60" },
    { id: 53, name: "Vanilla Frappe", price: 85, category: "drinks", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=60" },
    { id: 54, name: "Chocolate Frappe", price: 89, category: "drinks", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=60" },
    { id: 55, name: "Oreo Cookie Frappe", price: 119, category: "drinks", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=500&q=60" },

    // Desserts
    { id: 61, name: "Hot Choco Lava Cake", price: 85, category: "desserts", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476d?auto=format&fit=crop&w=500&q=60" },
    { id: 62, name: "Brownie with Ice Cream", price: 119, category: "desserts", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=500&q=60" },

    // Combos
    { id: 71, name: "ME Chicken Burger Duo", price: 399, category: "combos", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=500&q=60" },
    { id: 72, name: "Roller Double (Wraps)", price: 349, category: "combos", image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=500&q=60" },
    { id: 73, name: "Pizza Veg Combo", price: 399, category: "combos", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=60" },
    { id: 74, name: "Family Burger Feast", price: 999, category: "combos", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=60" },
];

// State
let cart = [];
let currentCategory = 'all';
let taxConfig = JSON.parse(localStorage.getItem('taxConfig')) || { sgst: 2.5, cgst: 2.5 };
let additionalCharges = JSON.parse(localStorage.getItem('additionalCharges')) || [];
let completedOrders = JSON.parse(localStorage.getItem('completedOrders')) || [];
let billSettings = JSON.parse(localStorage.getItem('billSettings')) || {
    name: 'Meat & Eat',
    address: '123 Food Street, Flavor Town',
    phone: '+91 1234567890',
    gst: '',
    customerCare: '',
    footer: 'Thank you for dining with us!'
};
let adminPassword = localStorage.getItem('adminPassword') || 'admi';
let currentTheme = localStorage.getItem('theme') || 'dark'; // Theme State
let settingsUnlocked = false; // Flag to track unlock status
let recoveryConfig = JSON.parse(localStorage.getItem('recoveryConfig')) || {
    question: 'Enter Recovery Code (Default: 1234)',
    answer: '1234'
};
let appLoginCreds = JSON.parse(localStorage.getItem('appLoginCreds')) || {
    username: 'admin',
    password: 'admin'
};

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const menuSortSelect = document.getElementById('menu-sort');
const menuMinPriceInput = document.getElementById('menu-min-price');
const menuMaxPriceInput = document.getElementById('menu-max-price');
const cartItemsContainer = document.getElementById('cart-items');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');
const currentOrderIdEl = document.getElementById('current-order-id-display'); // Select Order ID element using ID
const categoryTabs = document.querySelectorAll('.tab');
const printBtn = document.getElementById('print-btn');
const ebillBtn = document.getElementById('ebill-btn');
const customerModal = document.getElementById('customer-modal');
const modalTitle = document.getElementById('modal-title');
const closeModalBtn = document.querySelector('.close-modal');
const confirmCustomerBtn = document.getElementById('confirm-customer-details');
const customerNameInput = document.getElementById('customer-name');
const customerPhoneInput = document.getElementById('customer-phone');
const paymentMethodInput = document.getElementById('payment-method');
const discountTypeInput = document.getElementById('discount-type');
const discountValueInput = document.getElementById('discount-value');

// Order Details Modal Elements
const orderDetailsModal = document.getElementById('order-details-modal');
const closeModalDetailsBtns = document.querySelectorAll('.close-modal-details');
const deleteOrderBtn = document.getElementById('delete-order-btn');
const editOrderBtn = document.getElementById('edit-order-btn');
const saveOrderBtn = document.getElementById('save-order-btn');

// Security Elements
const currentPasswordInput = document.getElementById('current-password');
const newPasswordInput = document.getElementById('new-password');
const changePasswordBtn = document.getElementById('change-password-btn');
const forgotPasswordBtn = document.getElementById('forgot-password-btn');
const saveRecoveryBtn = document.getElementById('save-recovery-btn');

const addItemBtn = document.getElementById('add-item-btn');
const manageItemsList = document.getElementById('manage-items-list');

// Home / Table Elements
const addTableBtn = document.getElementById('add-table-btn');
const tablesGrid = document.getElementById('tables-grid');

// Internal State
let currentAction = null; // 'print' or 'ebill'
let currentViewingOrder = null; // For delete action in modal
let currentOrderId = '';
let activeView = 'menu'; // 'menu', 'orders', 'settings', 'home'
let tables = JSON.parse(localStorage.getItem('tables')) || [];
let currentTable = null; // Track selected table for order
let currentTableFilter = 'all'; // 'all', 'available', 'occupied'

const globalSearchInput = document.getElementById('global-search-input');

// Login Elements
const loginView = document.getElementById('login-view');
const appContainer = document.querySelector('.app-container');
const loginForm = document.getElementById('login-form');
const loginErrorPromise = document.getElementById('login-error'); // renaming to avoid conflict if any

// Login Logic
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        const errorMsg = document.getElementById('login-error');

        if (username === appLoginCreds.username && password === appLoginCreds.password) {
            // Success
            localStorage.setItem('isLoggedIn', 'true');
            loginView.style.display = 'none';
            appContainer.classList.remove('hidden');
        } else {
            // Failure
            errorMsg.style.display = 'block';
            // Shake effect
            const card = document.querySelector('.login-card');
            card.style.transform = 'translateX(10px)';
            setTimeout(() => card.style.transform = 'translateX(-10px)', 100);
            setTimeout(() => card.style.transform = 'translate(0)', 200);
        }
    });
}

// Helper to generate ID
function generateOrderId() {
    return '#ORD-' + Date.now().toString().slice(-6);
}

// Initialize
function init() {
    // Generate initial Order ID
    currentOrderId = generateOrderId();
    if (currentOrderIdEl) currentOrderIdEl.textContent = currentOrderId;

    // Check Login persistence
    if (localStorage.getItem('isLoggedIn') === 'true') {
        const loginView = document.getElementById('login-view');
        const appContainer = document.querySelector('.app-container');
        if (loginView) loginView.style.display = 'none';
        if (appContainer) appContainer.classList.remove('hidden');
    }

    renderMenu();
    applyTheme(currentTheme); // Apply saved theme
    renderSettingsMenuList();
    renderChargesList();
    loadTaxSettings();
    loadBillSettings();
    loadRecoverySettings();
    setupEventListeners();
    setupDragAndDrop();
    renderOrdersHistory();

    // Set default date filters to today
    const today = new Date().toISOString().split('T')[0];
    const startDateInput = document.getElementById('filter-date-start');
    const endDateInput = document.getElementById('filter-date-end');
    if (startDateInput && endDateInput) {
        startDateInput.value = today;
        endDateInput.value = today;
    }

    if (activeView === 'home') renderTables();
}

// Render Menu
function renderMenu(searchQuery = '') {
    menuGrid.innerHTML = '';
    let filteredItems = currentCategory === 'all'
        ? menuItems
        : menuItems.filter(item => item.category === currentCategory);

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredItems = filteredItems.filter(item => item.name.toLowerCase().includes(query));
    }

    // Filter by Price Range
    if (menuMinPriceInput && menuMinPriceInput.value) {
        filteredItems = filteredItems.filter(item => item.price >= parseFloat(menuMinPriceInput.value));
    }
    if (menuMaxPriceInput && menuMaxPriceInput.value) {
        filteredItems = filteredItems.filter(item => item.price <= parseFloat(menuMaxPriceInput.value));
    }

    // Sort Items
    if (menuSortSelect) {
        const sortValue = menuSortSelect.value;
        if (sortValue === 'low-to-high') {
            filteredItems.sort((a, b) => a.price - b.price);
        } else if (sortValue === 'high-to-low') {
            filteredItems.sort((a, b) => b.price - a.price);
        }
    }

    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `<div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">
            <p>No items found</p>
        </div>`;
        return;
    }

    filteredItems.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'menu-item';

        // Stock Validation
        const inStock = item.inStock !== false; // Default true if undefined
        if (!inStock) itemEl.style.opacity = '0.6';

        itemEl.innerHTML = `
            <div style="position: relative;">
                <img src="${item.image}" alt="${item.name}">
                <button class="stock-toggle-btn" data-id="${item.id}" 
                    style="position: absolute; top: 5px; right: 5px; background: ${inStock ? '#28a745' : '#dc3545'}; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 0.7rem; cursor: pointer; z-index: 10;">
                    ${inStock ? 'In Stock' : 'Out of Stock'}
                </button>
            </div>
            <div class="menu-details">
                <h3>${item.name}</h3>
                <div class="price">₹${item.price}</div>
                ${!inStock ? '<p style="color: red; font-size: 0.8rem; margin-top:5px;">Out of Stock</p>' : ''}
            </div>
        `;

        // Only allow adding to cart if in stock (Mock click handler logic)
        // Since original code added listener to whole card, we must adjust logic to prevent add if clicked on stock button or if out of stock
        itemEl.addEventListener('click', (e) => {
            if (e.target.classList.contains('stock-toggle-btn')) return; // Let button handler work
            if (!inStock) return alert('This item is currently out of stock.');
            addToCart(item);
        });

        // Add Stock Toggle Listener explicitly here to avoid delegating issues
        const stockBtn = itemEl.querySelector('.stock-toggle-btn');
        if (stockBtn) {
            stockBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleStock(item.id);
            });
        }

        menuGrid.appendChild(itemEl);
    });
}

// Add to Cart
function addToCart(item) {
    // Check Stock
    const masterItem = menuItems.find(i => i.id === item.id);
    const maxStock = (masterItem && masterItem.stockQty !== undefined) ? masterItem.stockQty : Infinity;

    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    const currentQty = existingItem ? existingItem.qty : 0;

    if (currentQty + 1 > maxStock) {
        return alert(`Cannot add more. Only ${maxStock} left in stock.`);
    }

    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    renderCart();
}

// Render Cart
function renderCart() {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <span class="material-icons-round">shopping_cart</span>
                <p>No items in cart</p>
            </div>
        `;
        updateTotals();
        return;
    }

    cart.forEach(item => {
        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
            <div class="item-info">
                <h4>${item.name}</h4>
                <div class="item-price">₹${item.price} x ${item.qty}</div>
            </div>
            <div class="item-controls">
                <button class="qty-btn minus" data-id="${item.id}">-</button>
                <span>${item.qty}</span>
                <button class="qty-btn plus" data-id="${item.id}">+</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemEl);
    });

    // Add event listeners to new buttons
    document.querySelectorAll('.qty-btn.plus').forEach(btn => {
        btn.addEventListener('click', (e) => updateQty(parseInt(e.target.dataset.id), 1));
    });
    document.querySelectorAll('.qty-btn.minus').forEach(btn => {
        btn.addEventListener('click', (e) => updateQty(parseInt(e.target.dataset.id), -1));
    });

    updateTotals();
}

// Update Quantity
function updateQty(id, change) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex > -1) {
        // Check Stock Limit if adding
        if (change > 0) {
            const masterItem = menuItems.find(i => i.id === id);
            const maxStock = (masterItem && masterItem.stockQty !== undefined) ? masterItem.stockQty : Infinity;
            if (cart[itemIndex].qty + change > maxStock) {
                return alert(`Cannot add more. Only ${maxStock} left in stock.`);
            }
        }

        cart[itemIndex].qty += change;
        if (cart[itemIndex].qty <= 0) {
            cart.splice(itemIndex, 1);
        }
        renderCart();
    }
}

// Update Totals
function updateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    // Tax Calculation
    const sgst = subtotal * (taxConfig.sgst / 100);
    const cgst = subtotal * (taxConfig.cgst / 100);

    // Charges Calculation
    let chargesTotal = 0;
    let chargesHtml = '';

    additionalCharges.forEach(charge => {
        let chargeAmount = 0;
        if (charge.type === 'fixed') {
            chargeAmount = parseFloat(charge.value);
        } else {
            chargeAmount = subtotal * (parseFloat(charge.value) / 100);
        }
        chargesTotal += chargeAmount;

        chargesHtml += `
            <div class="row">
                <span>${charge.name} (${charge.type === 'percent' ? charge.value + '%' : 'Fixed'})</span>
                <span>₹${chargeAmount.toFixed(2)}</span>
            </div>
        `;
    });

    const total = subtotal + sgst + cgst + chargesTotal;

    subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    totalEl.textContent = `₹${total.toFixed(2)}`;

    // Inject dynamic rows
    const taxChargesContainer = document.getElementById('tax-charges-container');
    if (taxChargesContainer) {
        taxChargesContainer.innerHTML = `
            <div class="row">
                <span>SGST (${taxConfig.sgst}%)</span>
                <span>₹${sgst.toFixed(2)}</span>
            </div>
            <div class="row">
                <span>CGST (${taxConfig.cgst}%)</span>
                <span>₹${cgst.toFixed(2)}</span>
            </div>
            ${chargesHtml}
        `;
    }

    return { subtotal, sgst, cgst, chargesTotal, total };
}

// Event Listeners
function setupEventListeners() {
    // Navigation
    const navItems = {
        'nav-home': { view: 'home-view', name: 'home' },
        'nav-menu': { view: 'menu-view', name: 'menu' },
        'nav-orders': { view: 'orders-view', name: 'orders' },
        'nav-reports': { view: 'reports-view', name: 'reports' },
        'nav-settings': { view: 'settings-view', name: 'settings' }
    };

    Object.keys(navItems).forEach(navId => {
        const navEl = document.getElementById(navId);
        if (!navEl) return;
        navEl.addEventListener('click', (e) => {
            e.preventDefault();

            const { view, name } = navItems[navId];

            // Security Check for Settings
            if (name === 'settings' && !settingsUnlocked) {
                const input = prompt("Enter Admin Password to access Settings:");
                if (input === adminPassword) {
                    settingsUnlocked = true; // Unlock for this session
                    updateLockIconState(); // Update UI
                } else {
                    alert("Incorrect Password access denied!");
                    return; // Stop navigation
                }
            }

            // Update Nav State
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            navEl.classList.add('active');

            // Update View State
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            document.getElementById(view).classList.remove('hidden');

            // Update Active View State
            activeView = name;

            // Reset Search
            if (globalSearchInput) {
                globalSearchInput.value = '';
                if (name === 'menu') globalSearchInput.placeholder = 'Search menu items...';
                if (name === 'orders') globalSearchInput.placeholder = 'Search Order ID, Name or Phone...';
                if (name === 'settings') globalSearchInput.placeholder = 'Search items to manage...';
                if (name === 'home') globalSearchInput.placeholder = 'Search Tables...';
                if (name === 'reports') globalSearchInput.placeholder = 'Search...';
            }

            // Refresh specific views
            if (name === 'orders') {
                renderOrdersHistory();
            } else if (name === 'menu') {
                renderMenu();
            } else if (name === 'settings') {
                renderSettingsMenuList();
            } else if (name === 'home') {
                renderTables();
            } else if (name === 'reports') {
                if (typeof initReports === 'function') initReports();
            }
        });
    });


    // Global Search Listener
    if (globalSearchInput) {
        globalSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (activeView === 'menu') {
                renderMenu(query);
            } else if (activeView === 'orders') {
                renderOrdersHistory(query);
            } else if (activeView === 'settings') {
                renderSettingsMenuList(query);
            }
        });
    }

    // Category Tabs
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = tab.dataset.category;
            renderMenu();
        });
    });

    // OPEN CUSTOMER MODAL (PRINT)
    printBtn.addEventListener('click', () => {
        if (cart.length === 0) return alert('Cart is empty!');
        currentAction = 'print';
        modalTitle.textContent = 'Customer Details (For Bill)';
        confirmCustomerBtn.textContent = 'Print Bill';
        customerNameInput.value = '';
        customerPhoneInput.value = '';
        paymentMethodInput.value = 'Cash'; // Default
        customerModal.classList.add('active');
    });

    // OPEN CUSTOMER MODAL (E-BILL)
    ebillBtn.addEventListener('click', () => {
        if (cart.length === 0) return alert('Cart is empty!');
        currentAction = 'ebill';
        modalTitle.textContent = 'Send E-Bill';
        confirmCustomerBtn.textContent = 'Send Receipt';
        customerNameInput.value = '';
        customerPhoneInput.value = '';
        paymentMethodInput.value = 'Online UPI'; // Default suggestion for e-bill
        customerModal.classList.add('active');
    });

    // OPEN CUSTOMER MODAL (SEND TO LIST)
    const sendToListBtn = document.getElementById('send-to-list-btn');
    if (sendToListBtn) {
        sendToListBtn.addEventListener('click', () => {
            if (cart.length === 0) return alert('Cart is empty!');
            currentAction = 'save_list';
            modalTitle.textContent = 'Send to Order List';
            confirmCustomerBtn.textContent = 'Save Order';
            customerNameInput.value = '';
            customerPhoneInput.value = '';
            paymentMethodInput.value = 'Cash';
            customerModal.classList.add('active');
        });
    }

    closeModalBtn.addEventListener('click', () => {
        customerModal.classList.remove('active');
    });

    closeModalDetailsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            orderDetailsModal.classList.remove('active');
            currentViewingOrder = null;
            if (typeof toggleOrderEditMode === 'function') toggleOrderEditMode(false);
        });
    });

    // CONFIRM CUSTOMER DETAILS
    confirmCustomerBtn.addEventListener('click', () => {
        const name = customerNameInput.value.trim() || 'Guest';
        const phone = customerPhoneInput.value.trim();
        const payment = paymentMethodInput.value;
        const discountType = discountTypeInput ? discountTypeInput.value : 'fixed';
        const discountValue = discountValueInput ? (parseFloat(discountValueInput.value) || 0) : 0;

        if (currentAction === 'ebill' && !phone) {
            return alert('Phone number is required for E-Bill');
        }

        // Calculate Discount
        const totals = updateTotals(); // Get current raw totals
        let discountAmount = 0;
        if (discountType === 'percent') {
            discountAmount = (totals.total * discountValue) / 100;
        } else {
            discountAmount = discountValue;
        }

        // Ensure discount doesn't exceed total
        discountAmount = Math.min(discountAmount, totals.total);

        const finalDetails = {
            name,
            phone,
            paymentMethod: payment,
            discount: {
                type: discountType,
                value: discountValue,
                amount: discountAmount
            },
            finalTotal: totals.total - discountAmount
        };

        if (currentAction === 'print') {
            const orderId = prepareReceipt(finalDetails);
            window.print();
            saveOrderAsCompleted(orderId, finalDetails);
        } else if (currentAction === 'ebill') {
            if (!phone) {
                alert('Please enter a phone number to send E-Bill.');
                return;
            }

            // Construct WhatsApp Message
            let message = `*Order Receipt - Meat & Eat*\n`;
            message += `Order ID: ${currentOrderId}\n`;
            message += `Date: ${new Date().toLocaleString()}\n`;
            message += `Customer: ${name}\n\n`;
            message += `*Items:*\n`;

            cart.forEach(item => {
                message += `- ${item.name} x${item.qty}: ₹${(item.price * item.qty).toFixed(2)}\n`;
            });

            message += `\n*Total: ₹${finalDetails.finalTotal.toFixed(2)}*\n`;
            message += `Thank you for dining with us!`;

            const encodedMessage = encodeURIComponent(message);

            // Sanitize phone: Remove all non-numeric characters (including +)
            let cleanPhone = phone.replace(/\D/g, '');

            // Default to India (91) if user entered a 10-digit number
            if (cleanPhone.length === 10) {
                cleanPhone = '91' + cleanPhone;
            }

            const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

            window.open(whatsappUrl, '_blank');
            saveOrderAsCompleted(currentOrderId, finalDetails);

        } else if (currentAction === 'save_list') {
            // Just Save to Order List
            finalDetails.status = 'Pending'; // Mark as Pending/New
            saveOrderAsCompleted(currentOrderId, finalDetails);
            alert('Order sent to Order List!');
        }

        customerModal.classList.remove('active');
        // Clear logic if needed
        if (discountValueInput) discountValueInput.value = '';
    });

    // DELETE ORDER BUTTON (IN MODAL)
    if (deleteOrderBtn) {
        deleteOrderBtn.addEventListener('click', () => {
            if (currentViewingOrder) {
                deleteOrder(currentViewingOrder.id);
                orderDetailsModal.classList.remove('active');
                currentViewingOrder = null;
            }
        });
    }

    if (editOrderBtn) {
        editOrderBtn.addEventListener('click', () => {
            if (typeof toggleOrderEditMode === 'function') toggleOrderEditMode(true);
        });
    }

    if (saveOrderBtn) {
        saveOrderBtn.addEventListener('click', () => {
            if (typeof saveOrderEdits === 'function') saveOrderEdits();
        });
    }

    // Add Item Button
    if (addItemBtn) {
        addItemBtn.addEventListener('click', addMenuItem);
    }

    // Lock/Unlock Settings UI Logic
    const lockSettingsBtn = document.getElementById('lock-settings-btn');
    if (lockSettingsBtn) {
        lockSettingsBtn.addEventListener('click', () => {
            if (settingsUnlocked) {
                // Lock it
                settingsUnlocked = false;
                updateLockIconState();
                alert('Settings are now locked.');
            } else {
                // Unlock check
                const input = prompt("Enter Admin Password to Unlock Settings:");
                if (input === adminPassword) {
                    settingsUnlocked = true;
                    updateLockIconState();
                } else {
                    alert("Incorrect Password!");
                }
            }
        });
    }

    // Tax & Charges Settings
    const saveTaxBtn = document.getElementById('save-tax-btn');
    if (saveTaxBtn) {
        saveTaxBtn.addEventListener('click', saveTaxConfig);
    }

    // Bill Settings
    const saveBillBtn = document.getElementById('save-bill-settings-btn');
    if (saveBillBtn) {
        saveBillBtn.addEventListener('click', saveBillSettings);
    }

    const addChargeBtn = document.getElementById('add-charge-btn');
    if (addChargeBtn) {
        addChargeBtn.addEventListener('click', addCharge);
    }

    // Order History Actions
    const downloadReportBtn = document.getElementById('download-report-btn');
    if (downloadReportBtn) {
        downloadReportBtn.addEventListener('click', downloadReport);
    }

    // Security Listeners
    if (changePasswordBtn) {
        changePasswordBtn.addEventListener('click', changePassword);
    }
    if (forgotPasswordBtn) {
        forgotPasswordBtn.addEventListener('click', handleForgotPassword);
    }
    if (saveRecoveryBtn) {
        saveRecoveryBtn.addEventListener('click', saveRecoverySettings);
    }

    // Save App Login Credentials
    const saveLoginCredsBtn = document.getElementById('save-login-creds-btn');
    if (saveLoginCredsBtn) {
        saveLoginCredsBtn.addEventListener('click', () => {
            const newUsername = document.getElementById('new-login-username').value.trim();
            const newPassword = document.getElementById('new-login-password').value.trim();

            if (!newUsername || !newPassword) {
                return alert('Please enter both username and password.');
            }

            appLoginCreds = {
                username: newUsername,
                password: newPassword
            };
            localStorage.setItem('appLoginCreds', JSON.stringify(appLoginCreds));
            alert('App Login Credentials Updated Successfully!');

            // Clear fields
            document.getElementById('new-login-username').value = '';
            document.getElementById('new-login-password').value = '';
        });
    }

    // Auto-filter on Date Change
    const startDateInput = document.getElementById('filter-date-start');
    const endDateInput = document.getElementById('filter-date-end');
    if (startDateInput) startDateInput.addEventListener('change', () => renderOrdersHistory(globalSearchInput.value));
    if (endDateInput) endDateInput.addEventListener('change', () => renderOrdersHistory(globalSearchInput.value));

    // Modal Action Buttons (Reprint/Resend)
    const reprintBtn = document.getElementById('reprint-order-btn');
    if (reprintBtn) {
        reprintBtn.addEventListener('click', () => {
            if (currentViewingOrder) {
                prepareReceipt(currentViewingOrder);
                window.print();
            }
        });
    }

    // Theme Select Listener
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) {
        themeSelect.value = currentTheme;
        themeSelect.addEventListener('change', (e) => {
            const newTheme = e.target.value;
            applyTheme(newTheme);
        });
    }

    const resendEbillBtn = document.getElementById('resend-ebill-btn');
    if (resendEbillBtn) {
        resendEbillBtn.addEventListener('click', () => {
            if (currentViewingOrder) {
                const name = currentViewingOrder.customer ? currentViewingOrder.customer.name : 'Guest';
                const phone = currentViewingOrder.customer ? currentViewingOrder.customer.phone : '';

                if (!phone) return alert('No phone number associated with this order.');

                // Construct WhatsApp Message
                let message = `*Order Receipt - Meat & Eat*\n`;
                message += `Order ID: ${currentViewingOrder.id}\n`;
                message += `Date: ${new Date(currentViewingOrder.date).toLocaleString()}\n`;
                message += `Customer: ${name}\n\n`;
                message += `*Items:*\n`;
                currentViewingOrder.items.forEach(item => {
                    message += `- ${item.name} x${item.qty || item.quantity}: ₹${(item.price * (item.qty || item.quantity)).toFixed(2)}\n`;
                });
                message += `\n*Total: ₹${currentViewingOrder.total.toFixed(2)}*\n`;
                message += `Thank you for dining with us!`;

                const encodedMessage = encodeURIComponent(message);

                let cleanPhone = phone.replace(/\D/g, '');
                if (cleanPhone.length === 10) {
                    cleanPhone = '91' + cleanPhone;
                }

                const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

                window.open(whatsappUrl, '_blank');
            }
        });
    }

    // Menu Sort & Filter Listeners
    if (menuSortSelect) {
        menuSortSelect.addEventListener('change', () => {
            renderMenu(globalSearchInput ? globalSearchInput.value : '');
        });
    }
    if (menuMinPriceInput) {
        menuMinPriceInput.addEventListener('input', () => {
            renderMenu(globalSearchInput ? globalSearchInput.value : '');
        });
    }
    if (menuMaxPriceInput) {
        menuMaxPriceInput.addEventListener('input', () => {
            renderMenu(globalSearchInput ? globalSearchInput.value : '');
        });
    }



    // Table Actions
    if (addTableBtn) {
        addTableBtn.addEventListener('click', addNewTable);
    }

    const resetTablesBtn = document.getElementById('reset-tables-btn');
    if (resetTablesBtn) {
        resetTablesBtn.addEventListener('click', resetAllTables);
    }

    // Table Filter Listeners (delegated or direct)
    ['all', 'available', 'occupied'].forEach(filter => {
        const btn = document.getElementById(`filter-table-${filter}`);
        if (btn) {
            btn.addEventListener('click', () => filterTables(filter));
        }
    });
}

// Prepare Receipt HTML
// Prepare Receipt HTML
function prepareReceipt(details) {
    // Handle overload (legacy support)
    let name, phone, payment, discount, finalTotal, orderItems, orderIdStr;

    if (details && (details.name || details.id || details.items)) {
        name = details.name || (details.customer ? details.customer.name : '');
        phone = details.phone || (details.customer ? details.customer.phone : '');
        payment = details.paymentMethod || details.payment;
        discount = details.discount;
        finalTotal = details.finalTotal || details.total;
        orderItems = details.items || cart; // Use passed items or cart
        orderIdStr = details.id || currentOrderId;
    } else {
        name = arguments[0];
        phone = arguments[1];
        payment = arguments[2];
        orderItems = cart;
        orderIdStr = currentOrderId;
    }

    const receiptItems = document.getElementById('receipt-items');
    const receiptSubtotal = document.getElementById('receipt-subtotal');
    const receiptTotal = document.getElementById('receipt-total');
    const receiptDate = document.getElementById('receipt-date');
    const receiptOrderId = document.getElementById('receipt-order-id');
    const receiptTaxChargesContainer = document.getElementById('receipt-tax-charges-container');
    const receiptCustomerName = document.getElementById('receipt-customer-name');
    const receiptCustomerPhone = document.getElementById('receipt-customer-phone');
    const receiptPaymentMethod = document.getElementById('receipt-payment-method');

    // Render Items
    receiptItems.innerHTML = '';
    orderItems.forEach(item => {
        const row = document.createElement('tr');
        const qty = item.qty || item.quantity;
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${qty}</td>
            <td>${(item.price * qty).toFixed(2)}</td>
        `;
        receiptItems.appendChild(row);
    });

    // Calculate Totals (if not passed, calculate from items)
    // NOTE: This recalculates based on CURRENT tax settings. 
    // Ideally, old orders should store their tax snapshop. 
    // For simplicity, we recalculate or fallback.

    // Helper to calc total for specific items
    const calcSpecificTotals = (items) => {
        const sub = items.reduce((sum, i) => sum + (i.price * (i.qty || i.quantity)), 0);
        const sgstAmt = sub * (taxConfig.sgst / 100);
        const cgstAmt = sub * (taxConfig.cgst / 100);
        let chgTotal = 0;
        additionalCharges.forEach(c => {
            if (c.type === 'fixed') chgTotal += parseFloat(c.value);
            else chgTotal += sub * (parseFloat(c.value) / 100);
        });
        return { subtotal: sub, sgst: sgstAmt, cgst: cgstAmt, total: sub + sgstAmt + cgstAmt + chgTotal };
    };

    const totals = orderItems === cart ? updateTotals() : calcSpecificTotals(orderItems);

    receiptSubtotal.textContent = totals.subtotal.toFixed(2);
    // Display Final Total (discounted) if available, else standard total
    receiptTotal.textContent = (finalTotal !== undefined ? finalTotal : totals.total).toFixed(2);

    // Charges HTML for receipt
    let chargesHtml = '';
    additionalCharges.forEach(charge => {
        let chargeAmount = 0;
        if (charge.type === 'fixed') {
            chargeAmount = parseFloat(charge.value);
        } else {
            chargeAmount = totals.subtotal * (parseFloat(charge.value) / 100);
        }
        chargesHtml += `
            <div class="row"><span>${charge.name}:</span> <span>${chargeAmount.toFixed(2)}</span></div>
        `;
    });

    if (receiptTaxChargesContainer) {
        let discountHtml = '';
        if (discount && discount.amount > 0) {
            discountHtml = `<div class="row" style="color:red"><span>Discount:</span> <span>-${discount.amount.toFixed(2)}</span></div>`;
        }

        receiptTaxChargesContainer.innerHTML = `
            <div class="row"><span>SGST (${taxConfig.sgst}%):</span> <span>${totals.sgst.toFixed(2)}</span></div>
            <div class="row"><span>CGST (${taxConfig.cgst}%):</span> <span>${totals.cgst.toFixed(2)}</span></div>
            ${chargesHtml}
            ${discountHtml}
        `;
    }

    const date = new Date().toLocaleString();

    receiptDate.textContent = date;
    receiptOrderId.textContent = orderIdStr;

    if (receiptCustomerName) receiptCustomerName.textContent = name || 'N/A';
    if (receiptCustomerPhone) receiptCustomerPhone.textContent = phone || 'N/A';
    if (receiptPaymentMethod) receiptPaymentMethod.textContent = payment || 'Cash';

    // Update Header Info dynamically
    const headerTitle = document.querySelector('.receipt-header h2');
    const headerAddress = document.querySelector('.receipt-header p:nth-of-type(1)');
    const headerPhone = document.querySelector('.receipt-header p:nth-of-type(2)');

    if (headerTitle) headerTitle.textContent = billSettings.name;

    // Construct Address Line (Address + GST)
    let addrText = billSettings.address;
    if (billSettings.gst) addrText += ` | GST: ${billSettings.gst}`;
    if (headerAddress) headerAddress.textContent = addrText;

    // Construct Phone Line (Phone + CC)
    let phoneText = `Tel: ${billSettings.phone}`;
    if (billSettings.customerCare) phoneText += ` | CC: ${billSettings.customerCare}`;
    if (headerPhone) headerPhone.textContent = phoneText;

    // Footer
    const footerText = document.querySelector('.receipt-footer p');
    if (footerText) footerText.textContent = billSettings.footer;

    return orderIdStr;
}


// Save Order
function saveOrderAsCompleted(orderId, details) {
    const totals = updateTotals();

    // Handle older call signature just in case
    let name, phone, payment, discount, finalTotal;
    if (typeof details === 'string') {
        name = arguments[1];
        phone = arguments[2];
        payment = arguments[3];
        finalTotal = totals.total;
    } else {
        name = details.name;
        phone = details.phone;
        payment = details.paymentMethod;
        discount = details.discount;
        finalTotal = details.finalTotal || totals.total;
    }

    const order = {
        id: orderId,
        date: new Date().toISOString(),
        items: [...cart],
        subtotal: totals.subtotal,
        tax: totals.sgst + totals.cgst,
        charges: totals.chargesTotal,
        discount: discount, // Store discount object
        total: finalTotal, // Store discounted total
        customer: {
            name: name,
            phone: phone
        },
        paymentMethod: payment || 'Cash',
        status: (details && details.status) ? details.status : (currentTable ? 'Payable' : 'Completed'), // Use passed status or default
        tableId: currentTable ? currentTable.id : null
    };

    // If Table Order, update Table Status
    if (currentTable) {
        const tableIndex = tables.findIndex(t => t.id === currentTable.id);
        if (tableIndex > -1) {
            tables[tableIndex].status = 'occupied';
            localStorage.setItem('tables', JSON.stringify(tables));
        }
        currentTable = null; // Reset
    }

    // Deduct Stock
    let stockUpdated = false;
    cart.forEach(cartItem => {
        const menuIndex = menuItems.findIndex(i => i.id === cartItem.id);
        if (menuIndex > -1 && menuItems[menuIndex].stockQty !== undefined) {
            menuItems[menuIndex].stockQty = Math.max(0, menuItems[menuIndex].stockQty - cartItem.qty);

            // Auto Update InStock Status if 0
            if (menuItems[menuIndex].stockQty === 0) {
                menuItems[menuIndex].inStock = false;
            }
            stockUpdated = true;
        }
    });

    if (stockUpdated) {
        localStorage.setItem('menuItems', JSON.stringify(menuItems));
        // Refresh Menu if active
        if (activeView === 'menu') renderMenu(globalSearchInput ? globalSearchInput.value : '');
        // Also refresh settings list if checking there
        renderSettingsMenuList();
    }

    completedOrders.unshift(order); // Add to beginning
    localStorage.setItem('completedOrders', JSON.stringify(completedOrders));

    // Clear Cart
    cart = [];
    renderCart();

    // Generate NEW Order ID for next order
    currentOrderId = generateOrderId();
    if (currentOrderIdEl) currentOrderIdEl.textContent = currentOrderId;

    // Update Orders View
    renderOrdersHistory();
}

// Delete Order
function deleteOrder(id) {
    const input = prompt('Enter Admin Password to delete this order:');
    if (input === null) return; // Cancelled

    if (input !== adminPassword) {
        return alert('Incorrect Password! Access Denied.');
    }

    if (confirm('Are you sure you want to permanently delete this order?')) {
        completedOrders = completedOrders.filter(order => order.id !== id);
        localStorage.setItem('completedOrders', JSON.stringify(completedOrders));
        renderOrdersHistory();
        alert('Order deleted successfully.');
    }
}

// Password Management
function changePassword() {
    const current = currentPasswordInput.value;
    const newPass = newPasswordInput.value;

    if (!current || !newPass) {
        return alert('Please fill in both fields.');
    }

    if (current !== adminPassword) {
        return alert('Current password is incorrect.');
    }

    adminPassword = newPass;
    localStorage.setItem('adminPassword', adminPassword);
    alert('Password changed successfully!');

    // Clear inputs
    currentPasswordInput.value = '';
    newPasswordInput.value = '';
}

function handleForgotPassword() {
    const answer = prompt(recoveryConfig.question);
    if (answer === null) return;

    if (answer.trim().toLowerCase() === recoveryConfig.answer.toLowerCase()) {
        adminPassword = 'admi';
        localStorage.setItem('adminPassword', adminPassword);
        alert('Password has been reset to default: "admi"');
    } else {
        alert('Incorrect Answer.');
    }
}

function loadRecoverySettings() {
    const qInput = document.getElementById('recovery-question');
    const aInput = document.getElementById('recovery-answer');
    if (qInput && aInput) {
        qInput.value = recoveryConfig.question;
        aInput.value = recoveryConfig.answer;
    }
}

function saveRecoverySettings() {
    const question = document.getElementById('recovery-question').value;
    const answer = document.getElementById('recovery-answer').value;

    if (!question || !answer) {
        return alert('Please fill in both fields.');
    }

    recoveryConfig = { question, answer };
    localStorage.setItem('recoveryConfig', JSON.stringify(recoveryConfig));
    alert('Recovery settings saved successfully!');
}

// View Order Details
function viewOrderDetails(order) {
    currentViewingOrder = order; // Set current for delete/edit actions

    // Reset Edit Mode
    if (typeof toggleOrderEditMode === 'function') toggleOrderEditMode(false);

    document.getElementById('view-order-id').textContent = order.id;

    const dateObj = new Date(order.date);
    document.getElementById('view-order-date').textContent = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString();

    document.getElementById('view-customer-name').textContent = order.customer ? order.customer.name : 'N/A';
    document.getElementById('view-customer-phone').textContent = order.customer ? order.customer.phone : 'N/A';
    document.getElementById('view-payment-method').textContent = order.paymentMethod || order.payment || 'Cash';

    // Status
    const statusEl = document.getElementById('view-order-status');
    if (statusEl) {
        statusEl.textContent = order.status || 'Completed';
        statusEl.className = `status ${order.status ? order.status.toLowerCase() : 'completed'}`;
    }

    // Items
    const tbody = document.getElementById('view-order-items');
    tbody.innerHTML = '';
    order.items.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${item.name}</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">x${item.quantity || item.qty}</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee; text-align: right;">₹${(item.price * (item.quantity || item.qty)).toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById('view-order-subtotal').textContent = '₹' + order.subtotal.toFixed(2);
    document.getElementById('view-order-tax').textContent = '₹' + order.tax.toFixed(2);
    document.getElementById('view-order-charges').textContent = '₹' + (order.charges || 0).toFixed(2);

    // Discount
    const discountEl = document.getElementById('view-order-discount');
    if (discountEl) {
        if (order.discount && order.discount.amount > 0) {
            discountEl.textContent = '-₹' + order.discount.amount.toFixed(2);
            discountEl.parentElement.style.display = 'flex';
        } else {
            discountEl.parentElement.style.display = 'none';
        }
    }

    document.getElementById('view-order-total').textContent = '₹' + order.total.toFixed(2);

    orderDetailsModal.classList.add('active');
}

// Render Orders History
function renderOrdersHistory(searchQuery = '') {
    const list = document.getElementById('orders-history-list');
    const startDateInput = document.getElementById('filter-date-start');
    const endDateInput = document.getElementById('filter-date-end');

    if (!list) return;

    let filteredOrders = completedOrders;

    // Apply Date Filter
    if (startDateInput && endDateInput && startDateInput.value && endDateInput.value) {
        const start = new Date(startDateInput.value);
        start.setHours(0, 0, 0, 0);
        const end = new Date(endDateInput.value);
        end.setHours(23, 59, 59, 999);

        filteredOrders = filteredOrders.filter(order => {
            const orderDate = new Date(order.date);
            return orderDate >= start && orderDate <= end;
        });
    }

    // Apply Search Filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredOrders = filteredOrders.filter(order => {
            // Create a clean ID for searching that removes common prefixes
            // This allows searching by just the number (e.g. "923967") without matching "ORD"
            const cleanId = order.id.toLowerCase().replace('#ord-', '').replace('#order-', '').replace('#', '');

            return cleanId.includes(query) ||
                (order.customer && order.customer.name && order.customer.name.toLowerCase().includes(query)) ||
                (order.customer && order.customer.phone && order.customer.phone.includes(query));
        });
    }

    // Update Stats
    const totalRevenue = filteredOrders.reduce((sum, order) => sum + order.total, 0);
    const avgOrder = filteredOrders.length > 0 ? totalRevenue / filteredOrders.length : 0;

    document.getElementById('stats-total-orders').textContent = filteredOrders.length;
    document.getElementById('stats-total-revenue').textContent = '₹' + totalRevenue.toFixed(2);
    document.getElementById('stats-avg-order').textContent = '₹' + avgOrder.toFixed(2);

    // Render List
    list.innerHTML = '';

    if (filteredOrders.length === 0) {
        list.innerHTML = `
            <div class="empty-state" style="text-align: center; padding: 40px; color: #888;">
                <span class="material-icons-round" style="font-size: 48px; margin-bottom: 10px;">receipt</span>
                <p>No orders found</p>
            </div>
        `;
        return;
    }

    filteredOrders.forEach(order => {
        const dateObj = new Date(order.date);
        const dateStr = dateObj.toLocaleDateString() + ', ' + dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const customerName = order.customer ? order.customer.name : 'Guest';

        const card = document.createElement('div');
        card.className = 'order-card';
        // Add specific border color for statuses? 
        // For now just status tag coloring.

        card.innerHTML = `
            <div class="order-header">
                <h3>${order.id}</h3>
                <span class="status ${order.status ? order.status.toLowerCase() : 'completed'}">${order.status || 'Completed'}</span>
            </div>
            <div class="order-summary">
                <p>${customerName}</p>
                <p class="date">${dateStr}</p>
            </div>
             <div class="order-total" style="margin-top: 10px; font-weight: bold; font-size: 1.1rem; margin-bottom: 10px;">
                Total: ₹${order.total.toFixed(2)}
            </div>
            <div class="order-actions" style="display: flex; gap: 10px; margin-top: 10px;">
                <button class="btn-secondary view-details-row-btn" style="flex: 1; padding: 8px; border-radius: 8px; font-size: 0.9rem;">
                    View Details
                </button>
                <button class="btn-danger delete-row-btn" style="flex: 0 0 auto; padding: 8px; border-radius: 8px;">
                    <span class="material-icons-round" style="font-size: 1.2rem;">delete</span>
                </button>
            </div>
        `;

        // Attach Listeners
        card.querySelector('.view-details-row-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            viewOrderDetails(order);
        });

        card.querySelector('.delete-row-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            deleteOrder(order.id);
        });

        list.appendChild(card);
    });
}

// Download Report
function downloadReport() {
    const startDateInput = document.getElementById('filter-date-start');
    const endDateInput = document.getElementById('filter-date-end');

    let filteredOrders = completedOrders;

    if (startDateInput && endDateInput && startDateInput.value && endDateInput.value) {
        const start = new Date(startDateInput.value);
        start.setHours(0, 0, 0, 0);
        const end = new Date(endDateInput.value);
        end.setHours(23, 59, 59, 999);

        filteredOrders = completedOrders.filter(order => {
            const orderDate = new Date(order.date);
            return orderDate >= start && orderDate <= end;
        });
    }

    if (filteredOrders.length === 0) return alert('No orders to export');

    // CSV Header
    let csv = 'Order ID,Date,Time,Items,Subtotal,Tax,Charges,Total\n';

    filteredOrders.forEach(order => {
        const dateObj = new Date(order.date);
        const date = dateObj.toLocaleDateString();
        const time = dateObj.toLocaleTimeString();
        const itemsStr = order.items.map(i => `${i.name} (${i.qty})`).join('; ');

        // Escape quotes
        const safeItems = `"${itemsStr.replace(/"/g, '""')}"`;

        csv += `${order.id},${date},${time},${safeItems},${order.subtotal.toFixed(2)},${order.tax.toFixed(2)},${order.charges.toFixed(2)},${order.total.toFixed(2)}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'sales_report.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Menu Management Functions
function saveMenu() {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
}

function addMenuItem() {
    const name = document.getElementById('new-item-name').value;
    const price = parseFloat(document.getElementById('new-item-price').value);
    const category = document.getElementById('new-item-category').value;
    const image = document.getElementById('new-item-image').value;
    const stockQtyInput = document.getElementById('new-item-stock');
    const stockQty = stockQtyInput ? parseInt(stockQtyInput.value) : 0;

    // Auto-determine status based on qty
    const inStock = stockQty > 0;

    if (!name || isNaN(price) || !category || !image) {
        alert('Please fill in all fields (Image is required)');
        return;
    }

    if (currentEditingItemId !== null) {
        // Update existing item
        const index = menuItems.findIndex(i => i.id === currentEditingItemId);
        if (index > -1) {
            menuItems[index] = { ...menuItems[index], name, price, category, image, stockQty, inStock };
            alert('Item updated successfully!');
        }
    } else {
        // Add new item
        const newItem = {
            id: Date.now(),
            name,
            price,
            category,
            image,
            stockQty,
            inStock
        };
        menuItems.push(newItem);
        alert('Item added successfully!');
    }

    saveMenu();
    resetMenuForm();
    renderSettingsMenuList(globalSearchInput ? globalSearchInput.value : '');
    renderMenu();
}

function editMenuItem(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    currentEditingItemId = id;

    document.getElementById('new-item-name').value = item.name;
    document.getElementById('new-item-price').value = item.price;
    document.getElementById('new-item-category').value = item.category;
    document.getElementById('new-item-image').value = item.image;

    const stockQtyInput = document.getElementById('new-item-stock');
    if (stockQtyInput) stockQtyInput.value = (item.stockQty !== undefined) ? item.stockQty : (item.inStock ? 10 : 0);

    // Show Image Thumb
    const thumb = document.getElementById('drop-zone-thumb');
    if (thumb) thumb.style.backgroundImage = `url('${item.image}')`;
    const prompt = document.querySelector('.drop-zone__prompt');
    if (prompt) prompt.style.display = 'none';

    // Update UI State
    document.getElementById('add-item-btn-text').textContent = 'Update Item';
    document.getElementById('cancel-edit-item-btn').classList.remove('hidden');
    document.querySelector('.add-item-form h4').textContent = 'Edit Item';

    // Scroll to form
    document.querySelector('.add-item-form').scrollIntoView({ behavior: 'smooth' });
}

function resetMenuForm() {
    currentEditingItemId = null;
    document.getElementById('new-item-name').value = '';
    document.getElementById('new-item-price').value = '';
    document.getElementById('new-item-category').value = 'burgers';
    document.getElementById('new-item-image').value = '';

    const stockQtyInput = document.getElementById('new-item-stock');
    if (stockQtyInput) stockQtyInput.value = '100';

    document.getElementById('drop-zone-thumb').style.backgroundImage = 'none';
    const prompt = document.querySelector('.drop-zone__prompt');
    if (prompt) prompt.style.display = 'block';

    document.getElementById('add-item-btn-text').textContent = 'Add Item';
    document.getElementById('cancel-edit-item-btn').classList.add('hidden');
    document.querySelector('.add-item-form h4').textContent = 'Add New Item';
}


/* Old Function Tail Removed */
// function addMenuItem_Tail_Ignored() {


function deleteMenuItem(id) {
    if (confirm('Are you sure you want to delete this item?')) {
        menuItems = menuItems.filter(item => item.id !== id);
        saveMenu();
        renderMenu();
        renderSettingsMenuList();
    }
}

function renderSettingsMenuList(searchQuery = '') {
    manageItemsList.innerHTML = '';

    let filteredItems = menuItems;
    if (searchQuery) {
        filteredItems = menuItems.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (filteredItems.length === 0) {
        manageItemsList.innerHTML = `<p style="padding: 10px; color: #888; text-align: center;">No items match your search.</p>`;
        return;
    }

    filteredItems.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'manage-item';
        // Add basic styling inline for simplicity, or add to CSS
        itemEl.style.display = 'flex';
        itemEl.style.justifyContent = 'space-between';
        itemEl.style.alignItems = 'center';
        itemEl.style.padding = '10px';
        itemEl.style.borderBottom = '1px solid #eee';

        itemEl.innerHTML = `
            <span>${item.name} (₹${item.price}) - ${item.stockQty > 0 ? item.stockQty + ' in Stock' : 'Out of Stock'}</span>
            <div style="display: flex; gap: 5px;">
                <button class="btn-secondary" style="padding: 5px 10px; border-radius: 4px; cursor: pointer;" onclick="editMenuItem(${item.id})">
                    <span class="material-icons-round" style="font-size: 18px;">edit</span>
                </button>
                <button class="btn-danger" style="background: #ff4d4d; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;" onclick="deleteMenuItem(${item.id})">
                    <span class="material-icons-round" style="font-size: 18px;">delete</span>
                </button>
            </div>
        `;
        manageItemsList.appendChild(itemEl);
    });
}

// Tax & Charges Management
function loadTaxSettings() {
    const sgstInput = document.getElementById('sgst-rate');
    const cgstInput = document.getElementById('cgst-rate');
    if (sgstInput && cgstInput) {
        sgstInput.value = taxConfig.sgst;
        cgstInput.value = taxConfig.cgst;
    }
}

function saveTaxConfig() {
    const sgst = parseFloat(document.getElementById('sgst-rate').value);
    const cgst = parseFloat(document.getElementById('cgst-rate').value);

    if (isNaN(sgst) || isNaN(cgst)) {
        alert('Please enter valid tax rates');
        return;
    }

    taxConfig = { sgst, cgst };
    localStorage.setItem('taxConfig', JSON.stringify(taxConfig));
    updateTotals(); // Recalculate if items in cart
    alert('Tax rates saved successfully!');
}

function updateLockIconState() {
    const icon = document.getElementById('lock-icon');
    if (!icon) return;

    if (settingsUnlocked) {
        icon.textContent = 'lock_open';
        icon.style.color = '#dc3545'; // Red to indicate "Click to Lock"
        icon.parentElement.title = "Click to Lock Settings";
    } else {
        icon.textContent = 'lock';
        icon.style.color = '#28a745'; // Green to indicate "Click to Unlock"
        icon.parentElement.title = "Click to Unlock Settings";
    }
}

function addCharge() {
    const name = document.getElementById('new-charge-name').value;
    const type = document.getElementById('new-charge-type').value;
    const value = parseFloat(document.getElementById('new-charge-value').value);

    if (!name || isNaN(value)) {
        alert('Please fill in all fields correctly');
        return;
    }

    const newCharge = {
        id: Date.now(),
        name,
        type,
        value
    };

    additionalCharges.push(newCharge);
    saveCharges();
    renderChargesList();
    updateTotals(); // Recalculate

    // Clear form
    document.getElementById('new-charge-name').value = '';
    document.getElementById('new-charge-value').value = '';

    alert('Charge added successfully!');
}

function deleteCharge(id) {
    if (confirm('Are you sure you want to delete this charge?')) {
        additionalCharges = additionalCharges.filter(charge => charge.id !== id);
        saveCharges();
        renderChargesList();
        updateTotals();
    }
}

function saveCharges() {
    localStorage.setItem('additionalCharges', JSON.stringify(additionalCharges));
}

function renderChargesList() {
    const list = document.getElementById('manage-charges-list');
    if (!list) return;

    list.innerHTML = '';
    additionalCharges.forEach(charge => {
        const itemEl = document.createElement('div');
        itemEl.className = 'manage-item';
        itemEl.style.display = 'flex';
        itemEl.style.justifyContent = 'space-between';
        itemEl.style.alignItems = 'center';
        itemEl.style.padding = '10px';
        itemEl.style.borderBottom = '1px solid #eee';

        itemEl.innerHTML = `
            <span>${charge.name} (${charge.type === 'percent' ? charge.value + '%' : '₹' + charge.value})</span>
            <button class="btn-danger" style="background: #ff4d4d; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;" onclick="deleteCharge(${charge.id})">
                <span class="material-icons-round" style="font-size: 18px;">delete</span>
            </button>
        `;
        list.appendChild(itemEl);
    });
}

// Drag and Drop Logic
function setupDragAndDrop() {
    const dropZoneElement = document.getElementById('drop-zone');
    const inputElement = document.getElementById('new-item-image-file');

    if (!dropZoneElement || !inputElement) return;

    dropZoneElement.addEventListener('click', () => {
        inputElement.click();
    });

    inputElement.addEventListener('change', (e) => {
        if (inputElement.files.length) {
            updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
    });

    dropZoneElement.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZoneElement.classList.add('drop-zone--over');
    });

    ['dragleave', 'dragend'].forEach(type => {
        dropZoneElement.addEventListener(type, (e) => {
            dropZoneElement.classList.remove('drop-zone--over');
        });
    });

    dropZoneElement.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZoneElement.classList.remove('drop-zone--over');

        if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }
    });
}

function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector('.drop-zone__thumb');

    // First time - remove the prompt
    if (dropZoneElement.querySelector('.drop-zone__prompt')) {
        dropZoneElement.querySelector('.drop-zone__prompt').style.display = 'none';
    }

    // Label
    if (file) {
        thumbnailElement.style.display = 'block';
        thumbnailElement.dataset.label = file.name;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
            // Store base64 in hidden input
            document.getElementById('new-item-image').value = reader.result;
        };
    } else {
        thumbnailElement.style.display = 'none';
        thumbnailElement.style.backgroundImage = null;
        if (dropZoneElement.querySelector('.drop-zone__prompt')) {
            dropZoneElement.querySelector('.drop-zone__prompt').style.display = 'block';
        }
    }
}

// Table Management Functions
function renderTables() {
    tablesGrid.innerHTML = '';

    // Init default tables if none
    if (!localStorage.getItem('tables') || tables.length === 0) {
        tables = [
            { id: 1, name: 'Table 1', status: 'available' },
            { id: 2, name: 'Table 2', status: 'available' },
            { id: 3, name: 'Table 3', status: 'available' },
            { id: 4, name: 'Table 4', status: 'available' }
        ];
        localStorage.setItem('tables', JSON.stringify(tables));
    }

    // Check Filter State and Update Filter Tabs UI
    document.querySelectorAll('.table-filters .tab').forEach(t => t.classList.remove('active'));
    const activeFilterBtn = document.getElementById(`filter-table-${currentTableFilter}`);
    if (activeFilterBtn) activeFilterBtn.classList.add('active');

    // Filter Tables
    let filteredTables = tables;
    if (currentTableFilter !== 'all') {
        filteredTables = tables.filter(t => t.status === currentTableFilter);
    }

    // Update Stats
    const total = tables.length;
    const occupied = tables.filter(t => t.status === 'occupied').length;
    const available = total - occupied;

    const statTotalEl = document.getElementById('table-stat-total');
    const statOccupiedEl = document.getElementById('table-stat-occupied');
    const statAvailableEl = document.getElementById('table-stat-available');

    if (statTotalEl) statTotalEl.textContent = total;
    if (statOccupiedEl) statOccupiedEl.textContent = occupied;
    if (statAvailableEl) statAvailableEl.textContent = available;

    if (filteredTables.length === 0) {
        tablesGrid.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center;">No ${currentTableFilter} tables found.</p>`;
        return;
    }

    filteredTables.forEach(table => {
        const tableCard = document.createElement('div');
        tableCard.className = 'stat-card'; // Reuse card style
        tableCard.style.cursor = 'pointer';
        tableCard.style.position = 'relative';
        tableCard.style.border = table.status === 'occupied' ? '2px solid var(--primary-color)' : '1px solid var(--border-color)';
        tableCard.style.transition = 'transform 0.2s';

        // Status Color and Icon
        const isOccupied = table.status === 'occupied';
        const statusColor = isOccupied ? 'var(--primary-color)' : '#28a745';

        tableCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                 <span class="material-icons-round" style="color: ${statusColor}; font-size: 32px; background: ${isOccupied ? '#fff0f0' : '#f0fff4'}; padding: 8px; border-radius: 50%;">table_restaurant</span>
                 <div class="table-card-actions" style="display: flex; gap: 5px;">
                     <button class="icon-btn rename-table-btn" title="Rename" style="background: none; border: none; cursor: pointer; color: #999; padding: 4px;">
                        <span class="material-icons-round" style="font-size: 20px;">edit</span>
                     </button>
                     <button class="icon-btn delete-table-btn" title="Delete" style="background: none; border: none; cursor: pointer; color: #ff6b6b; padding: 4px;">
                        <span class="material-icons-round" style="font-size: 20px;">delete_outline</span>
                     </button>
                 </div>
            </div>
            <h4 style="margin: 0; font-size: 1.2rem; font-weight: 600;">${table.name}</h4>
            <p style="font-size: 0.9rem; margin-top: 5px; color: ${isOccupied ? 'var(--primary-color)' : '#28a745'}; font-weight: 500;">
                ${isOccupied ? 'Occupied' : 'Available'}
            </p>
            ${isOccupied ? '<button class="btn-secondary clear-table-btn" style="margin-top:15px; width:100%; font-size:0.85rem; border: 1px solid var(--primary-color); color: var(--primary-color); background: white;">Clear Table</button>' : ''}
        `;

        // Card Click - Select Table
        tableCard.addEventListener('click', (e) => {
            // Prevent if clicking buttons
            if (e.target.closest('.rename-table-btn') ||
                e.target.closest('.delete-table-btn') ||
                e.target.closest('.clear-table-btn')) return;

            if (isOccupied) {
                alert('Table is currently occupied. Clear it to start a new order.');
                return;
            }

            currentTable = table;
            alert(`Selected ${table.name}. Redirecting to Menu...`);

            // Switch to Menu
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            document.getElementById('nav-menu').classList.add('active');

            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            document.getElementById('menu-view').classList.remove('hidden');
            activeView = 'menu';
        });

        // Listeners
        const renameBtn = tableCard.querySelector('.rename-table-btn');
        renameBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            renameTable(table.id);
        });

        const deleteBtn = tableCard.querySelector('.delete-table-btn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteTable(table.id);
        });

        if (isOccupied) {
            const clearBtn = tableCard.querySelector('.clear-table-btn');
            clearBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm(`Mark ${table.name} as Available?`)) {
                    table.status = 'available';
                    localStorage.setItem('tables', JSON.stringify(tables));
                    renderTables();
                }
            });
        }

        tablesGrid.appendChild(tableCard);
    });
}

function addNewTable() {
    const newId = Date.now(); // Better unique ID
    const number = tables.length + 1;
    tables.push({ id: newId, name: `Table ${number}`, status: 'available' });
    saveTables();
    renderTables();
}

function deleteTable(id) {
    if (confirm('Are you sure you want to delete this table?')) {
        tables = tables.filter(t => t.id !== id);
        saveTables();
        renderTables();
    }
}

function renameTable(id) {
    const table = tables.find(t => t.id === id);
    if (!table) return;

    const newName = prompt("Enter new name for the table:", table.name);
    if (newName && newName.trim() !== "") {
        table.name = newName.trim();
        saveTables();
        renderTables();
    }
}

function filterTables(filter) {
    currentTableFilter = filter;
    renderTables();
}

function resetAllTables() {
    if (confirm('Are you sure you want to reset ALL tables to "Available"? This will clear all current table sessions.')) {
        tables = tables.map(t => ({ ...t, status: 'available' }));
        saveTables();
        renderTables();
    }
}

function saveTables() {
    localStorage.setItem('tables', JSON.stringify(tables));
}

function toggleStock(itemId) {
    const itemIndex = menuItems.findIndex(i => i.id === itemId);
    if (itemIndex > -1) {
        // Toggle validation logic
        const currentStock = menuItems[itemIndex].inStock !== false;
        menuItems[itemIndex].inStock = !currentStock;

        // Re-render
        renderMenu(globalSearchInput.value);
    }
}

// Edit Order Functions
function toggleOrderEditMode(isEdit) {
    const viewEls = ['view-customer-name', 'view-customer-phone', 'view-payment-method', 'view-order-status'];
    const editEls = ['edit-customer-name', 'edit-customer-phone', 'edit-payment-method', 'edit-order-status'];

    if (isEdit) {
        // Populate inputs
        document.getElementById('edit-customer-name').value = document.getElementById('view-customer-name').textContent;
        document.getElementById('edit-customer-phone').value = document.getElementById('view-customer-phone').textContent;
        document.getElementById('edit-payment-method').value = document.getElementById('view-payment-method').textContent;

        // Status is trickier if it's not textContent exact match, but usually it is.
        // Or get from currentViewingOrder object
        if (currentViewingOrder) {
            document.getElementById('edit-order-status').value = currentViewingOrder.status || 'Completed';
        }

        // Hide View, Show Inputs
        viewEls.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
        editEls.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.remove('hidden');
        });

        if (editOrderBtn) editOrderBtn.classList.add('hidden');
        if (saveOrderBtn) saveOrderBtn.classList.remove('hidden');
    } else {
        // Show View, Hide Inputs
        viewEls.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'block';
        });
        editEls.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.classList.add('hidden');
        });

        if (editOrderBtn) editOrderBtn.classList.remove('hidden');
        if (saveOrderBtn) saveOrderBtn.classList.add('hidden');
    }
}

function saveOrderEdits() {
    if (!currentViewingOrder) return;

    const newName = document.getElementById('edit-customer-name').value;
    const newPhone = document.getElementById('edit-customer-phone').value;
    const newPayment = document.getElementById('edit-payment-method').value;
    const newStatus = document.getElementById('edit-order-status').value;

    // Update Order Object
    if (!currentViewingOrder.customer) currentViewingOrder.customer = {};
    currentViewingOrder.customer.name = newName;
    currentViewingOrder.customer.phone = newPhone;
    currentViewingOrder.paymentMethod = newPayment;
    currentViewingOrder.status = newStatus;

    // Update in Array
    const index = completedOrders.findIndex(o => o.id === currentViewingOrder.id);
    if (index !== -1) {
        completedOrders[index] = currentViewingOrder;
        localStorage.setItem('completedOrders', JSON.stringify(completedOrders));
    }

    // Update UI
    toggleOrderEditMode(false);
    viewOrderDetails(currentViewingOrder); // Refresh modal view
    renderOrdersHistory(); // Refresh list background
}

// Bill Settings Functions
function loadBillSettings() {
    if (document.getElementById('bill-rest-name')) document.getElementById('bill-rest-name').value = billSettings.name || '';
    if (document.getElementById('bill-rest-name-font')) document.getElementById('bill-rest-name-font').value = billSettings.font || 'Outfit';
    if (document.getElementById('bill-rest-name-color')) document.getElementById('bill-rest-name-color').value = billSettings.fontColor || '#ffffff'; // Load Color
    if (document.getElementById('bill-rest-address')) document.getElementById('bill-rest-address').value = billSettings.address || '';
    if (document.getElementById('bill-rest-phone')) document.getElementById('bill-rest-phone').value = billSettings.phone || '';
    if (document.getElementById('bill-rest-gst')) document.getElementById('bill-rest-gst').value = billSettings.gst || '';
    if (document.getElementById('bill-rest-cc')) document.getElementById('bill-rest-cc').value = billSettings.customerCare || '';
    if (document.getElementById('bill-footer-msg')) document.getElementById('bill-footer-msg').value = billSettings.footer || '';

    // Load Paper Size
    if (document.getElementById('bill-paper-size')) {
        document.getElementById('bill-paper-size').value = billSettings.paperSize || '80mm';
    }

    // Load Logo
    if (document.getElementById('bill-rest-logo-data')) {
        document.getElementById('bill-rest-logo-data').value = billSettings.logo || '';
    }

    // Update UI Labels immediately
    updateAppHeaderName(billSettings.name, billSettings.font, billSettings.fontColor);
    updateAppLogo(billSettings.logo);
    applyPaperSize(billSettings.paperSize);
}

function saveBillSettings() {
    billSettings = {
        name: document.getElementById('bill-rest-name').value,
        font: document.getElementById('bill-rest-name-font').value,
        fontColor: document.getElementById('bill-rest-name-color').value, // Save Color
        address: document.getElementById('bill-rest-address').value,
        phone: document.getElementById('bill-rest-phone').value,
        gst: document.getElementById('bill-rest-gst').value,
        customerCare: document.getElementById('bill-rest-cc').value,
        footer: document.getElementById('bill-footer-msg').value,
        logo: document.getElementById('bill-rest-logo-data').value,
        paperSize: document.getElementById('bill-paper-size').value // Save Paper Size
    };

    localStorage.setItem('billSettings', JSON.stringify(billSettings));

    // Update UI Labels immediately
    updateAppHeaderName(billSettings.name, billSettings.font, billSettings.fontColor);
    updateAppLogo(billSettings.logo);
    applyPaperSize(billSettings.paperSize);

    alert('Restaurant configuration saved successfully!');
}

function applyPaperSize(size) {
    if (size === '58mm') {
        document.body.classList.add('paper-58mm');
    } else {
        document.body.classList.remove('paper-58mm');
    }
}

function updateAppHeaderName(name, font, color) {
    if (!name) return;
    const fontFamily = font || 'Outfit, sans-serif';
    const fontColor = color || '#ffffff';

    // Update Sidebar Logo
    const sidebarLogo = document.querySelector('.sidebar .logo h1');
    if (sidebarLogo) {
        sidebarLogo.textContent = name;
        sidebarLogo.style.fontFamily = fontFamily;
        sidebarLogo.style.color = fontColor; // Apply Color

        // Check for decorative/script fonts to increase size
        const decorativeFonts = [
            'Amatic SC', 'Bebas Neue', 'Caveat', 'Dancing Script', 'Lobster',
            'Pacifico', 'Satisfy', 'Abril Fatface', 'Acme', 'Anton',
            'Architects Daughter', 'Comfortaa', 'Cookie', 'Courgette',
            'Fredoka One', 'Gloria Hallelujah', 'Great Vibes', 'Indie Flower',
            'Monoton', 'Parisienne', 'Passion One', 'Patrick Hand',
            'Press Start 2P', 'Righteous', 'Russo One', 'Sacramento',
            'Shadows Into Light', 'Teko', 'Yellowtail'
        ];

        if (decorativeFonts.includes(font)) {
            // Specific tweaks
            if (font === 'Amatic SC') {
                sidebarLogo.style.fontSize = '2.2rem';
            } else if (font === 'Press Start 2P') {
                sidebarLogo.style.fontSize = '0.8rem'; // Retro font is wide
            } else {
                sidebarLogo.style.fontSize = '1.6rem';
            }
            sidebarLogo.style.fontWeight = '400';
        } else {
            sidebarLogo.style.fontSize = '1.2rem';
            sidebarLogo.style.fontWeight = '700';
        }
    }

    // Update Login Logo
    const loginLogo = document.querySelector('.login-card .logo h1');
    if (loginLogo) {
        loginLogo.textContent = name;
        loginLogo.style.fontFamily = fontFamily;
        loginLogo.style.color = fontColor; // Apply Color

        const decorativeFonts = [
            'Amatic SC', 'Bebas Neue', 'Caveat', 'Dancing Script', 'Lobster',
            'Pacifico', 'Satisfy', 'Abril Fatface', 'Acme', 'Anton',
            'Architects Daughter', 'Comfortaa', 'Cookie', 'Courgette',
            'Fredoka One', 'Gloria Hallelujah', 'Great Vibes', 'Indie Flower',
            'Monoton', 'Parisienne', 'Passion One', 'Patrick Hand',
            'Press Start 2P', 'Righteous', 'Russo One', 'Sacramento',
            'Shadows Into Light', 'Teko', 'Yellowtail'
        ];

        if (decorativeFonts.includes(font)) {
            if (font === 'Amatic SC') {
                loginLogo.style.fontSize = '3.5rem';
            } else if (font === 'Press Start 2P') {
                loginLogo.style.fontSize = '1.2rem';
            } else {
                loginLogo.style.fontSize = '2.8rem';
            }
            loginLogo.style.fontWeight = '400';
        } else {
            loginLogo.style.fontSize = '2rem';
            loginLogo.style.fontWeight = '700';
        }
    }

    // Update Title Tag
    document.title = name + " POS";
}
// Live Preview for Font Select & Color
const fontSelect = document.getElementById('bill-rest-name-font');
const colorSelect = document.getElementById('bill-rest-name-color');

if (fontSelect) {
    fontSelect.addEventListener('change', (e) => {
        e.target.style.fontFamily = e.target.value;
    });
}

function updateAppLogo(logoData) {
    const sidebarImg = document.getElementById('sidebar-logo-img');
    const sidebarIcon = document.getElementById('sidebar-logo-icon');
    const loginImg = document.getElementById('login-logo-img');
    const loginIcon = document.getElementById('login-logo-icon');

    if (logoData && logoData.trim() !== '') {
        // Show Image, Hide Icon
        if (sidebarImg) { sidebarImg.src = logoData; sidebarImg.style.display = 'block'; }
        if (sidebarIcon) sidebarIcon.style.display = 'none';

        if (loginImg) { loginImg.src = logoData; loginImg.style.display = 'block'; }
        if (loginIcon) loginIcon.style.display = 'none';
    } else {
        // Show Icon, Hide Image
        if (sidebarImg) sidebarImg.style.display = 'none';
        if (sidebarIcon) sidebarIcon.style.display = 'block';

        if (loginImg) loginImg.style.display = 'none';
        if (loginIcon) loginIcon.style.display = 'block';
    }
}

// Logo Upload Logic
const logoUploadInput = document.getElementById('bill-rest-logo-upload');
const logoHiddenInput = document.getElementById('bill-rest-logo-data');
const clearLogoBtn = document.getElementById('clear-logo-btn');

if (logoUploadInput && logoHiddenInput) {
    logoUploadInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 500 * 1024) { // 500KB limit warning
                alert("Warning: Large image files may slow down the app. Please use small logos.");
            }
            const reader = new FileReader();
            reader.onload = (element) => {
                logoHiddenInput.value = element.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
}

if (clearLogoBtn && logoHiddenInput) {
    clearLogoBtn.addEventListener('click', () => {
        logoHiddenInput.value = '';
        if (logoUploadInput) logoUploadInput.value = ''; // Reset file input
        alert("Logo reset. Click 'Save Bill Settings' to apply.");
    });
}

// Update User Display Logic
function updateUserDisplay() {
    const nameEl = document.getElementById('current-user-name');
    const avatarEl = document.getElementById('current-user-avatar');

    if (nameEl) {
        // Capitalize first letter
        const username = appLoginCreds.username;
        const displayName = username.charAt(0).toUpperCase() + username.slice(1);
        nameEl.textContent = displayName;

        if (avatarEl) {
            avatarEl.textContent = displayName.charAt(0);
        }
    }
}

// Start App
init();
updateUserDisplay(); // Initial call

// Additional Listeners
const cancelEditItemBtn = document.getElementById('cancel-edit-item-btn');
if (cancelEditItemBtn) {
    cancelEditItemBtn.addEventListener('click', resetMenuForm);
}

const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            // Lock Settings
            settingsUnlocked = false;
            updateLockIconState();
            localStorage.removeItem('isLoggedIn');

            // Hide App, Show Login
            document.querySelector('.app-container').classList.add('hidden');
            const loginView = document.getElementById('login-view');
            if (loginView) {
                loginView.style.display = 'flex'; // Restore flex display

                // Reset Fields
                document.getElementById('login-username').value = '';
                document.getElementById('login-password').value = '';
                document.getElementById('login-error').style.display = 'none';
            }
        }
    });
}

// Update display when credentials change
const saveLoginCredsBtn = document.getElementById('save-login-creds-btn');
// Redefining execution to hook into existing button if needed, 
// but cleaner to just have one listener. 
// Since previous listener is anonymous, we can't easily remove it.
// Instead, let's just piggyback or rely on this block running after.
// Note: Effectively, this listener will run IN ADDITION to the previous one
// if we re-add it. Logic below handles updates.

// Ideally, we integrate this into the update logic, 
// but since I can't easily edit the middle of the 'init' or large blocks without context,
// I'll attach a secondary listener which is safe.
if (saveLoginCredsBtn) {
    saveLoginCredsBtn.addEventListener('click', () => {
        // Wait a tick for the main listener to update localStorage
        setTimeout(updateUserDisplay, 100);
    });
}

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }

    currentTheme = theme;
    localStorage.setItem('theme', theme);
}
