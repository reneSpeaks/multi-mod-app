// FUNCTIONS RELATED TO: fetching data from the API

// 'https://fakestoreapi.com/products/1' SINGLE PRODUCT
// 'https://fakestoreapi.com/products?limit=5' LIMIT PRODUCTS TO SPECIFIC NUMBER
// 'https://fakestoreapi.com/products?sort=desc' SORT RESULTS

import { addItemCard } from './ui.js';

export class Item {
    constructor(id, title, price, description, image) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
    }
}

export function getData() {
    const apiPath = 'https://fakestoreapi.com/products?limit=4';

    fetch(apiPath)
        .then((result) => {
            if (!result.ok) throw new Error('Something went wrong');
            return result.json();
        })
        .then((data) => {
            for (const item of data) {
                const newItem = new Item(item.id, item.title, item.price, item.description, item.image);
                addItemCard(newItem);
            }
        })
        .catch((error) => {
            console.error(error);
        })
}