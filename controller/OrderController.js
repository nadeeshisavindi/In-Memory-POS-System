import { addOrder, getOrders } from '../model/OrderModel.js';

export const loadOrderTbl = () => {
    $('#order_tbody').empty();

    getOrders().forEach(o => {
        $('#order_tbody').append(`
            <tr>
                <td>${o.id}</td>
                <td>${o.customerId}</td>
                <td>${o.itemId}</td>
                <td>${o.qty}</td>
                <td>${o.total}</td>
            </tr>
        `);
    });
};

$('#order_save_btn').on('click', () => {

    const id    = $('#order_id').val().trim();
    const cid   = $('#order_customer_id').val().trim();
    const iid   = $('#order_item_id').val().trim();
    const qty   = +$('#order_qty').val();
    const price = +$('#order_price').val();

    if (!id || !cid || !iid || qty <= 0 || price <= 0) {
        Swal.fire({ icon: 'warning', title: 'Please fill all fields correctly.' });
        return;
    }

    const total = qty * price;

    addOrder(id, cid, iid, qty, total);
    loadOrderTbl();
    clearOrderForm();

    // ✅ Swal එක click handler ඇතුලේ තියෙන්න ඕනේ
    Swal.fire({
        icon: 'success',
        title: '✅ Order Placed!',
        html: `
            <div style="text-align:left; font-size:14px; line-height:2;">
                <b>Order ID:</b> ${id}<br>
                <b>Customer ID:</b> ${cid}<br>
                <b>Item ID:</b> ${iid}<br>
                <b>Quantity:</b> ${qty}<br>
                <b>Unit Price:</b> Rs ${price.toFixed(2)}<br>
                <hr>
                <b style="font-size:16px;">Total: Rs ${total.toFixed(2)}</b>
            </div>
        `,
        confirmButtonText: 'OK',
        confirmButtonColor: '#8b4513'
    });
});

$('#order_reset_btn').on('click', () => {
    clearOrderForm();
});

function clearOrderForm() {
    $('#order_id').val("");
    $('#order_customer_id').val("");
    $('#order_item_id').val("");
    $('#order_qty').val("");
    $('#order_price').val("");
}

loadOrderTbl();