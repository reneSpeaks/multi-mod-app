// FUNCTIONS RELATED TO: fetching data from the API

// 'https://fakestoreapi.com/products/1' SINGLE PRODUCT
// 'https://fakestoreapi.com/products?limit=5' LIMIT PRODUCTS TO SPECIFIC NUMBER
// 'https://fakestoreapi.com/products?sort=desc' SORT RESULTS

function getData() {
    const apiPath = 'https://fakestoreapi.com/products';

    fetch(apiPath)
        .then((result) => {
            if (!result.ok) throw new Error('Something went wrong');
            return result.json();
        })
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            console.error(error);
        })
}

