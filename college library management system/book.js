document.addEventListener("DOMContentLoaded", function () {
    const books = [
        { title: "Data Structures & Algorithms", author: "John Smith", img: "book1.jpg", available: true },
        { title: "Introduction to Physics", author: "Robert Johnson", img: "book2.jpg", available: true },
        { title: "Organic Chemistry", author: "Emily Davis", img: "book3.jpg", available: false },
        { title: "The Art of Literature", author: "Michael Wilson", img: "book4.jpg", available: true },
        { title: "Modern Economics", author: "Sarah Brown", img: "book5.jpg", available: true },
        { title: "Introduction to Psychology", author: "David Miller", img: "book6.jpg", available: false }
    ];

    const bookContainer = document.querySelector(".book-container");

    function displayBooks(bookList) {
        bookContainer.innerHTML = ""; // Clear previous results
        bookList.forEach(book => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");

            bookCard.innerHTML = `
                <img src="${book.img}" alt="${book.title}">
                <h4>${book.title}</h4>
                <p>Author: ${book.author}</p>
                <button class="borrow-btn" ${book.available ? "" : "disabled"}>${book.available ? "Borrow" : "Borrowed"}</button>
            `;

            bookContainer.appendChild(bookCard);
        });
    }

    // Initial book display
    displayBooks(books);

    // Search Functionality
    document.getElementById("searchBtn").addEventListener("click", function () {
        const query = document.getElementById("searchBar").value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks);
    });

    document.getElementById("searchBar").addEventListener("input", function () {
        const query = document.getElementById("searchBar").value.toLowerCase();
        const filteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(query) || 
            book.author.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks);
    });
});
