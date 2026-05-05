
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
