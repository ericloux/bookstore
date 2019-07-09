export default function AddBook(state, books) {
    return `
    <form class="bookAddForm">
        <fieldset>
        <legend> Add a book </legend>
        <p>Title:  <input type="text" name="title" placeholder="Title" id = "bookTitle"></p>
        <p>Author:  <input type="text" name="author" placeholder="Author" id = "bookAuthor"></p>
        <p>Price:  <input type="text" name="price" placeholder="$0.00" id = "bookPrice"></p>
        <p>Selling Points:</br>
        <input type="text" name="selling1" id="sellingPoint1"><br>
        <input type="text" name="selling2" id="sellingPoint2"><br>
        <input type="text" name="selling3" id="sellintPoint3"><br>
        </p>
        <button type="button" id="buttonAddBook">Add Book</button>
        </fieldset>
    </form>`;
};