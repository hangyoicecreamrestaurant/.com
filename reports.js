
// --- Analytics & Reports Logic ---

let salesTrendChartInstance = null;
let categoryChartInstance = null;

let reportsInitialized = false;

function initReports() {
    if (!reportsInitialized) {
        setupReportEventListeners();
        reportsInitialized = true;
    }
    // Update reports regardless, to refresh data
    const periodSelect = document.getElementById('report-period-select');
    const currentPeriod = periodSelect ? periodSelect.value : 'today';
    updateReports(currentPeriod);
}

function setupReportEventListeners() {
    const periodSelect = document.getElementById('report-period-select');
    const refreshBtn = document.getElementById('refresh-reports-btn');

    if (periodSelect) {
        periodSelect.addEventListener('change', (e) => {
            updateReports(e.target.value);
        });
    }

    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            const period = document.getElementById('report-period-select').value;
            updateReports(period);
        });
    }
}

function filterOrdersByPeriod(period) {
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();

    return completedOrders.filter(order => {
        const orderDate = new Date(order.timestamp || order.date).getTime(); // Handle both legacy date formats if any

        if (period === 'today') {
            return orderDate >= todayStart;
        } else if (period === 'week') {
            const weekStart = todayStart - (7 * 24 * 60 * 60 * 1000);
            return orderDate >= weekStart;
        } else if (period === 'month') {
            const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
            return orderDate >= monthStart;
        } else {
            return true; // All time
        }
    });
}

function updateReports(period) {
    const filteredOrders = filterOrdersByPeriod(period);

    // 1. Calculate KPIs
    const totalRevenue = filteredOrders.reduce((sum, order) => sum + (parseFloat(order.finalTotal) || 0), 0);
    const totalOrders = filteredOrders.length;
    const avgOrderVal = totalOrders > 0 ? (totalRevenue / totalOrders) : 0;

    // Determine Most Popular Item
    const itemCounts = {};
    const itemRevenue = {};

    filteredOrders.forEach(order => {
        order.items.forEach(item => {
            const key = item.name;
            itemCounts[key] = (itemCounts[key] || 0) + item.qty;
            itemRevenue[key] = (itemRevenue[key] || 0) + (item.price * item.qty);
        });
    });

    let topItem = '-';
    let maxCount = 0;
    for (const [name, count] of Object.entries(itemCounts)) {
        if (count > maxCount) {
            maxCount = count;
            topItem = name;
        }
    }

    // 2. Update UI KPI Cards
    document.getElementById('rep-total-revenue').innerText = '₹' + totalRevenue.toFixed(2);
    document.getElementById('rep-total-orders').innerText = totalOrders;
    document.getElementById('rep-avg-order').innerText = '₹' + avgOrderVal.toFixed(2);
    document.getElementById('rep-top-item').innerText = topItem;

    // 3. Update Charts
    updateSalesTrendChart(filteredOrders, period);
    updateCategoryChart(filteredOrders);

    // 4. Update Detailed Tables
    updateTopSellingTable(itemCounts, itemRevenue);
    updateInventoryHealthTable();
}

function updateSalesTrendChart(orders, period) {
    const ctx = document.getElementById('salesTrendChart').getContext('2d');

    // Group Data
    const groupedData = {};
    orders.forEach(order => {
        const date = new Date(order.timestamp || order.date);
        let key;

        if (period === 'today') {
            // Hourly: "10 AM", "11 AM"
            let hour = date.getHours();
            const ampm = hour >= 12 ? 'PM' : 'AM';
            hour = hour % 12;
            hour = hour ? hour : 12;
            key = `${hour} ${ampm}`;
        } else {
            // Daily: "DD MMM"
            // const month = date.toLocaleString('default', { month: 'short' });
            // key = `${date.getDate()} ${month}`;
            key = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
        }

        groupedData[key] = (groupedData[key] || 0) + (parseFloat(order.finalTotal) || 0);
    });

    // Sort Keys (Chronological sort is tricky with strings, simplified approach here)
    // For robust sorting, we'd grouped by timestamp first. 
    // Assuming UI display order is roughly sufficient for now or keys are mostly sequential.
    // For 'today', we naturally want 9 AM, 10 AM... 

    const labels = Object.keys(groupedData);
    const dataPoints = Object.values(groupedData);

    const data = {
        labels: labels,
        datasets: [{
            label: 'Revenue (₹)',
            data: dataPoints,
            fill: true,
            borderColor: '#ff6b6b',
            backgroundColor: 'rgba(255, 107, 107, 0.2)',
            tension: 0.4
        }]
    };

    if (salesTrendChartInstance) {
        salesTrendChartInstance.destroy();
    }

    salesTrendChartInstance = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#3d3d3d' } },
                x: { grid: { display: false } }
            },
            color: '#ffffff'
        }
    });
}

function updateCategoryChart(orders) {
    const ctx = document.getElementById('categoryChart').getContext('2d');

    const categoryStats = {};
    orders.forEach(order => {
        order.items.forEach(item => {
            const cat = item.category || 'Other';
            categoryStats[cat] = (categoryStats[cat] || 0) + (item.price * item.qty);
        });
    });

    const labels = Object.keys(categoryStats).map(c => c.charAt(0).toUpperCase() + c.slice(1));
    const dataValues = Object.values(categoryStats);

    const data = {
        labels: labels,
        datasets: [{
            label: 'Sales by Category',
            data: dataValues,
            backgroundColor: [
                '#ff6b6b',
                '#4ecdc4',
                '#ffe66d',
                '#ff9f43',
                '#a29bfe'
            ],
            hoverOffset: 4
        }]
    };

    if (categoryChartInstance) {
        categoryChartInstance.destroy();
    }

    categoryChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'bottom', labels: { color: '#fff' } }
            },
            cutout: '60%'
        }
    });
}

function updateTopSellingTable(itemCounts, itemRevenue) {
    const tbody = document.getElementById('top-items-tbody');
    tbody.innerHTML = '';

    // Convert to array and sort by revenue
    const sortedItems = Object.keys(itemCounts).map(name => ({
        name: name,
        qty: itemCounts[name],
        revenue: itemRevenue[name]
    })).sort((a, b) => b.revenue - a.revenue).slice(0, 10); // Top 10

    sortedItems.forEach(item => {
        const row = document.createElement('tr');
        row.style.borderBottom = '1px solid var(--border-color)';
        row.innerHTML = `
            <td style="padding: 12px; color: var(--text-main);">${item.name}</td>
            <td style="padding: 12px; color: var(--text-muted);">${item.qty}</td>
            <td style="padding: 12px; font-weight: bold; color: var(--success-color);">₹${item.revenue.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}

function updateInventoryHealthTable() {
    const tbody = document.getElementById('inventory-health-tbody');
    tbody.innerHTML = '';

    // Filter low stock items (e.g., < 20)
    const lowStockItems = menuItems.filter(item => (item.stock || 0) < 20).sort((a, b) => (a.stock || 0) - (b.stock || 0));

    if (lowStockItems.length === 0) {
        tbody.innerHTML = '<tr><td colspan="3" style="padding:15px; text-align:center; color: var(--text-muted);">All stocks are healthy!</td></tr>';
        return;
    }

    lowStockItems.forEach(item => {
        const stock = parseInt(item.stock || 0);
        let statusColor = '#f1c40f'; // Warning
        let statusText = 'Low';

        if (stock === 0) {
            statusColor = '#ff4757';
            statusText = 'Out of Stock';
        }

        const row = document.createElement('tr');
        row.style.borderBottom = '1px solid var(--border-color)';
        row.innerHTML = `
            <td style="padding: 12px; color: var(--text-main);">${item.name}</td>
            <td style="padding: 12px; font-weight: bold;">${stock}</td>
            <td style="padding: 12px;">
                <span style="background: ${statusColor}20; color: ${statusColor}; padding: 4px 8px; border-radius: 4px; font-size: 0.85em;">
                    ${statusText}
                </span>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Ensure initReports is exposed or called appropriately
