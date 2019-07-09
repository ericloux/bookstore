import Book from "./Book.js";

export default function Content(state, books) {
    let returnText = `
    <div class="bookContainer">`
    
    for (let i = 0; i < books.length; i++) {
        returnText += Book(books[i]);
    }

    returnText += `</div>`;
    return returnText;
};