import { order_db } from '../db/db.js';

export const getAllOrderDetails = () => {
    return order_db.map(o => ({
        orderId: o.id,
        date: o.date,
        custId: o.customerId,
        items: [{ name: o.itemId, qty: o.qty, total: o.total }],
        total: o.total
    }));
};

export const getOrderById = (id) => {
    const o = order_db.find(o => o.id == id);
    if (!o) return null;
    return {
        orderId: o.id,
        date: o.date,
        custId: o.customerId,
        items: [{ name: o.itemId, qty: o.qty, total: o.total }],
        total: o.total
    };
};