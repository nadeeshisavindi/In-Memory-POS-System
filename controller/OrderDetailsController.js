import { getAllOrderDetails, getOrderById } from "../model/OrderDetailsModel.js";

export function initOrderDetails() {
    loadOrderHistory();
}

function loadOrderHistory() {
    const tbody = document.getElementById("orderHistoryBody");
    const noData = document.getElementById("no-orders-msg");

    tbody.innerHTML = "";

    const orders = getAllOrderDetails();

    if (!orders || orders.length === 0) {
        noData.classList.remove("d-none");
        return;
    }

    noData.classList.add("d-none");

    let rows = "";

    orders.forEach(o => {
        rows += `
            <tr onclick="viewOrder('${o.orderId}')" style="cursor:pointer">
                <td>${o.orderId}</td>
                <td>${o.date}</td>
                <td>${o.custId}</td>
                <td><span class="badge bg-primary">${o.items.length}</span></td>
                <td class="fw-bold text-success">Rs ${o.total}</td>
                <td><span class="badge bg-success">Completed</span></td>
            </tr>
        `;
    });

    tbody.innerHTML = rows;
}

window.viewOrder = function(orderId) {
    const order = getOrderById(orderId);
    if (!order) return;

    let itemList = "";
    order.items.forEach(i => {
        itemList += `• ${i.name} (x${i.qty}) = Rs ${i.total}\n`;
    });

    Swal.fire({
        title: `Order #${order.orderId}`,
        html: `
            <div class="text-start">
                <p><strong>Date:</strong> ${order.date}</p>
                <p><strong>Customer ID:</strong> ${order.custId}</p>
                <hr>
                <p><strong>Items:</strong></p>
                <pre>${itemList}</pre>
                <hr>
                <p><strong>Total:</strong> Rs ${order.total}</p>
            </div>
        `,
        icon: 'info'
    });
};