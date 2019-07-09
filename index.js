import AddBook from "./components/AddBook.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
// import * as states from "./store";

const home = {
    title: "Welcome to bookstore"
};

const root=document.querySelector("#root");

let book = JSON.parse(localStorage.getItem('books')); // 

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
            localStorage.setItem('books', JSON.stringify(book));
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
    
        render(state,book);
    });
    localStorage.setItem('books', JSON.stringify(book));
};


render(home, book);