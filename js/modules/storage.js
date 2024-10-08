// FUNCTIONS RELATED TO: localStorage operations

export function addToLocalStorage(item) {
    const dataInLocalStorage = JSON.parse(localStorage.getItem('itemCart')) || [];
    localStorage.setItem('itemCart', JSON.stringify([...dataInLocalStorage, item]));
}