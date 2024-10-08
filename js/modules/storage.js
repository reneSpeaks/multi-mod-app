// FUNCTIONS RELATED TO: localStorage operations

export function addToLocalStorage(item) {
    const dataInLocalStorage = JSON.parse(localStorage.getItem('itemCart')) || [];
    localStorage.setItem('itemCart', JSON.stringify([...dataInLocalStorage, item]));
}

export function addToLocalSession(item) {
    const dataInLocalSession = JSON.parse(sessionStorage.getItem('itemSession')) || [];
    sessionStorage.setItem('itemSession', JSON.stringify([...dataInLocalSession, item]));
}