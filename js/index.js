import { getItem } from "./modules/network.js";
import { addItemCard } from "./modules/ui.js";

 window.onload = async () => {
    const reload = document.getElementById('reload');

    reload.addEventListener('click', () => {
        sessionStorage.clear();
        localStorage.clear();
    });

    for(let index = 1; index <= 4; index++) {
        try {
            const newItem = await getItem(index);
            addItemCard(newItem);
        } catch (error) {
            console.error(error);
        }
    }
}

