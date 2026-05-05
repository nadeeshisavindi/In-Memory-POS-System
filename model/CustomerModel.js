import { customer_db } from '../db/db.js';

class Customer {
    #id;
    #name;
    #phone;
    #address;

    constructor(id, name, phone, address) {
        this.#id = id;
        this.#name = name;
        this.#phone = phone;
        this.#address = address;
    }

    get id() { return this.#id; }
    get name() { return this.#name; }
    get phone() { return this.#phone; }
    get address() { return this.#address; }

    set name(v) { this.#name = v; }
    set phone(v) { this.#phone = v; }
    set address(v) { this.#address = v; }
}

// CRUD
const addCustomer = (id, name, phone, address) =>
    customer_db.push(new Customer(id, name, phone, address));

const updateCustomer = (id, name, phone, address) => {
    let obj = customer_db.find(c => c.id == id);
    if (obj) {
        obj.name = name;
        obj.phone = phone;
        obj.address = address;
    }
};

const deleteCustomer = (id) => {
    let index = customer_db.findIndex(c => c.id == id);
    if (index !== -1) customer_db.splice(index, 1);
};

const getCustomers = () => customer_db;
const getCustomerById = (id) => customer_db.find(c => c.id == id);
const getCustomerByIndex = (i) => customer_db[i];

export {
    addCustomer, updateCustomer, deleteCustomer,
    getCustomers, getCustomerById, getCustomerByIndex
};