export default function Book(book) {
    let returnText = `
    <div class="book">
        <h2>${book.title}</h4>
        <h3>By ${book.author}</h3>
        <ul>`

    for (let i = 0; i < book.sellingPoints.length; i++) {
        returnText += `<li>${book.sellingPoints[i]}</li>`
    }

    returnText += `
        </ul>
        <p>${book.price}</p>
    </div>`;

    return returnText;
};