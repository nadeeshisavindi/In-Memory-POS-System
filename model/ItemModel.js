

import { item_db } from '../db/db.js';

class Item {
    #id; #name; #price; #qty;

    constructor(id, name, price, qty) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#qty = qty;
    }

    get id() { return this.#id; }
    get name() { return this.#name; }
    get price() { return this.#price; }
    get qty() { return this.#qty; }

    set name(v) { this.#name = v; }
    set price(v) { this.#price = v; }
    set qty(v) { this.#qty = v; }
}

// rud
const addItem = (id,name,price,qty) =>
    item_db.push(new Item(id,name,price,qty));

const updateItem = (id,name,price,qty) => {
    let i = item_db.find(x => x.id == id);
    if(i){
        i.name=name; i.price=price; i.qty=qty;
    }
};


