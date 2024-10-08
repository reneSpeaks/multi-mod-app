// FUNCTIONS RELATED TO: creating and manipulating DOM elements

import { addToLocalStorage, addToLocalSession} from "./storage.js";

export function addItemCard(item) {
    // GET ITEM CARDS SECTION
    const itemCards = document.querySelector('#item-cards');

    // CREATE ITEM CARD
    const card = document.createElement('div');
    card.className = 'item-card flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800';

    const cardImage = document.createElement('img');
    cardImage.className = 'card-img object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg';
    cardImage.src = `${item.image}`;
    cardImage.alt = `${item.title}`;

    const cardDescription = document.createElement('div');
    cardDescription.className = 'card-description flex flex-col justify-between p-4 leading-normal';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white';
    cardTitle.textContent = item.title;

    const cardDescriptionText = document.createElement('p');
    cardDescriptionText.className = 'mb-3 font-normal text-gray-700 dark:text-gray-400';
    cardDescriptionText.textContent = item.description;

    const cardCartButton = document.createElement('button');
    cardCartButton.className = 'py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700';
    cardCartButton.textContent = 'Add to Cart';

    card.appendChild(cardImage);
    card.appendChild(cardDescription);
    cardDescription.appendChild(cardTitle);
    cardDescription.appendChild(cardDescriptionText);
    cardDescription.appendChild(cardCartButton);

    // APPEND CARD TO ITEM CARDS SECTION
    itemCards.appendChild(card);

    // CREATE EVENT LISTENER FOR ADDING TO LOCAL STORAGE/SESSION
    cardCartButton.addEventListener('click', () => addToLocalStorage(item));
}