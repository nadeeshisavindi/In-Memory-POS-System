import { getCustomers } from '../model/CustomerModel.js';
import { getItems } from '../model/ItemModel.js';
import { getOrders } from '../model/OrderModel.js';

export function loadDashboard() {
    $('#totalCustomers').text(getCustomers().length);
    $('#totalItems').text(getItems().length);
    $('#totalOrders').text(getOrders().length);
}