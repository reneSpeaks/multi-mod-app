// FUNCTIONS RELATED TO: fetching data from the API

// 'https://fakestoreapi.com/products/1' SINGLE PRODUCT
// 'https://fakestoreapi.com/products?limit=5' LIMIT PRODUCTS TO SPECIFIC NUMBER
// 'https://fakestoreapi.com/products?sort=desc' SORT RESULTS

export class Item {
    constructor(title, description, image) {
        // this.id = id;
        this.title = title;
        // this.price = price;
        this.description = description;
        this.image = image;
    }
}

export const getItem = async (productID) => {
    const result = await fetch('https://fakestoreapi.com/products/' + productID);
    if (!result.ok) throw new Error('Something went wrong');
    const data = await result.json();
    return new Item(data.title, data.description, data.image);
}