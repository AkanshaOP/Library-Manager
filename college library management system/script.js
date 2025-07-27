
// DOM Elements
const addBookBtn = document.getElementById('addBookBtn');
const bookModal = document.getElementById('bookModal');
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeButtons = document.querySelectorAll('.close');
const cancelBtn = document.getElementById('cancelBtn');
const cancelLoginBtn = document.getElementById('cancelLoginBtn');
const addBookForm = document.getElementById('addBookForm');
const loginForm = document.getElementById('loginForm');
const borrowButtons = document.querySelectorAll('.borrow-btn');

// Book Data
let books = [
    {
        id: 1,
        title: "Data Structures & Algorithms",
        author: "John Smith",
        category: "Computer Science",
        status: "Available"
    },
    {
        id: 2,
        title: "Introduction to Physics",
        author: "Robert Johnson",
        category: "Physics",
        status: "Available"
    },
    {
        id: 3,
        title: "Organic Chemistry",
        author: "Emily Davis",
        category: "Chemistry",
        status: "Borrowed"
    },
    {
        id: 4,
        title: "The Art of Literature",
        author: "Michael Wilson",
        category: "Literature",
        status: "Available"
    },
    {
        id: 5,
        title: "Modern Economics",
        author: "Sarah Brown",
        category: "Economics",
        status: "Available"
    },
    {
        id: 6,
        title: "Introduction to Psychology",
        author: "David Miller",
        category: "Psychology",
        status: "Borrowed"
    }
];

// Open Book Modal
addBookBtn.addEventListener('click', () => {
    bookModal.style.display = 'block';
});

// Open Login Modal
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Close Modals when clicking the X
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        bookModal.style.display = 'none';
        loginModal.style.display = 'none';
    });
});

// Close Modals when clicking cancel
cancelBtn.addEventListener('click', () => {
    bookModal.style.display = 'none';
});

cancelLoginBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close Modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === bookModal) {
        bookModal.style.display = 'none';
    }
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Handle Add Book Form Submission
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newBook = {
        id: books.length + 1,
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        category: document.getElementById('category').value,
        status: "Available"
    };
    
    books.push(newBook);
    
    // Create new book card
    const bookGrid = document.querySelector('.book-grid');
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
        <div class="book-image">
            <img src="/api/placeholder/200/250" alt="Book Cover">
        </div>
        <div class="book-details">
            <h4>${newBook.title}</h4>
            <p>Author: ${newBook.author}</p>
            <p>Category: ${newBook.category}</p>
            <div class="book-status">
                <span class="status-badge">Available</span>
                <button class="borrow-btn">Borrow</button>
            </div>
        </div>
    `;
    
    // Add event listener to the new borrow button
    const newBorrowBtn = bookCard.querySelector('.borrow-btn');
    newBorrowBtn.addEventListener('click', handleBorrow);
    
    bookGrid.appendChild(bookCard);
    
    // Reset form and close modal
    addBookForm.reset();
    bookModal.style.display = 'none';
    
    showNotification('Book added successfully!');
});

// Handle Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate login process
    const username = document.getElementById('username').value;
    
    // Reset form and close modal
    loginForm.reset();
    loginModal.style.display = 'none';
    
    // Update UI to show logged in state
    document.querySelector('.nav-buttons').innerHTML = `
        <button id="accountBtn">My Account (${username})</button>
        <button id="logoutBtn">Logout</button>
    `;
    
    showNotification('Logged in successfully!');
    
    // Add event listeners to new buttons
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
});

// Handle borrow button clicks
borrowButtons.forEach(button => {
    button.addEventListener('click', handleBorrow);
});

function handleBorrow(e) {
    const bookCard = e.target.closest('.book-card');
    const title = bookCard.querySelector('h4').textContent;
    const statusBadge = bookCard.querySelector('.status-badge');
    
    if (statusBadge.classList.contains('unavailable')) {
        // Book is already borrowed, handle reservation
        showNotification(`)
    }
