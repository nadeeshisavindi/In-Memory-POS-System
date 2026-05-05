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

// save
$('#order_save_btn').on('click', () => {

    let qty = +$('#order_qty').val();
    let price = +$('#order_price').val();

    addOrder(
        $('#order_id').val(),
        $('#order_customer_id').val(),
        $('#order_item_id').val(),
        qty,
        qty * price
    );

    loadOrderTbl();
});


