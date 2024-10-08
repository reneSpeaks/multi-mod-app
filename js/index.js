import { getData } from "./modules/network.js";

window.onload = () => {
    const reload = document.getElementById('reload');

    reload.addEventListener('click', () => {
        sessionStorage.clear();
        localStorage.clear();
    });

    getData();
}