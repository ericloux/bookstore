import AddBook from "./components/AddBook.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
// import * as states from "./store";

const home = {
    title: "Welcome to bookstore"
};

const root=document.querySelector("#root");

let book = new Array()

book.push({
    "id": 1,
    "title": "A Real Book",
    "author": "A. Realauthor",
    "price": "$24.99",
    "sellingPoints": [
        "Is an actual book",
        "You can read and reflect on it",
        "Such inside text"
    ]
});

book.push({
    "id": 2,
    "title": "Principles of Being Awesome",
    "author": "Eric Loux",
    "price": "$44.99",
    "sellingPoints": [
        "Learn awesome",
        "Written by the master"
    ]
});

function render(state, books) {
    root.innerHTML = `
        ${Header(state)}
        ${Content(state, books)}
        ${AddBook(state)}
        ${Footer(state)}
    `
    document.querySelectorAll('nav li > a')
        .forEach((link) => link.addEventListener('click', (event) => {
            event.preventDefault();
            console.log("event.target.textContent", event.target.textContent);
            render(states[event.target.textContent]);
        })
    );

    document.getElementById("buttonAddBook").addEventListener("click", function() {
        let title = document.getElementById('bookTitle').value;
        let author = document.getElementById('bookAuthor').value;
        let price = document.getElementById('bookPrice').value;
        let sellingPoint1 = document.getElementById('sellingPoint1').value;
        let sellingPoint2 = document.getElementById('sellingPoint2').value;
        let sellingPoint3 = document.getElementById('sellintPoint3').value;
    
        let newBook =  {
            id: book.length,
            title: title,
            author: author,
            price: price,
            sellingPoints: new Array()
        };
    
        let spIndex = 0;
    
        if (sellingPoint1 != "") {
            newBook.sellingPoints[spIndex] = sellingPoint1;
            spIndex++;
        }
    
        if (sellingPoint2 != "") {
            newBook.sellingPoints[spIndex] = sellingPoint2;
            spIndex++;
        }
    
        if (sellingPoint3 != "") {
            newBook.sellingPoints[spIndex] = sellingPoint3;
            spIndex++;
        }
    
        book.push(newBook);
    
        console.log(book)
    
        render(state,book);
    });
};


render(home, book);