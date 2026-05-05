
import { order_db } from '../db/db.js';

class Order {
    constructor(id, customerId, itemId, qty, total){
        this.id = id;
        this.customerId = customerId;
        this.itemId = itemId;
        this.qty = qty;
        this.total = total;
    }
}

const addOrder = (id,cid,iid,qty,total) =>
    order_db.push(new Order(id,cid,iid,qty,total));

const getOrders = () => order_db;

export { addOrder, getOrders };


