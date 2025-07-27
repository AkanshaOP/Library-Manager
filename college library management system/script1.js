document.addEventListener("DOMContentLoaded", function () {
    // Modals
    const bookModal = document.getElementById("bookModal");
    const loginModal = document.getElementById("loginModal");

    // Buttons
    const addBookBtn = document.getElementById("addBookBtn");
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const cancelBtn = document.getElementById("cancelBtn");
    const cancelLoginBtn = document.getElementById("cancelLoginBtn");
    const closeModalButtons = document.querySelectorAll(".close");
    const borrowButtons = document.querySelectorAll(".borrow-btn");

    // Forms
    const addBookForm = document.getElementById("addBookForm");
    const loginForm = document.getElementById("loginForm");

    // Open Add Book Modal
    addBookBtn.addEventListener("click", function () {
        bookModal.style.display = "block";
    });

    // Open Login Modal
    loginBtn.addEventListener("click", function () {
        loginModal.style.display = "block";
    });

    // Close Modals
    closeModalButtons.forEach(button => {
        button.addEventListener("click", function () {
            bookModal.style.display = "none";
            loginModal.style.display = "none";
        });
    });

    // Cancel Buttons
    cancelBtn.addEventListener("click", function () {
        bookModal.style.display = "none";
    });
    cancelLoginBtn.addEventListener("click", function () {
        loginModal.style.display = "none";
    });

    // Handle Add Book Form Submission
    addBookForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("New book added successfully!");
        bookModal.style.display = "none";
        addBookForm.reset();
    });

    // Handle Login Form Submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login successful!");
        loginModal.style.display = "none";
        loginForm.reset();
    });

    // Borrow/Reserve Button Functionality
    borrowButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (button.textContent === "Borrow") {
                button.textContent = "Reserved";
                button.disabled = true;
                button.previousElementSibling.classList.remove("available");
                button.previousElementSibling.classList.add("unavailable");
                button.previousElementSibling.textContent = "Borrowed";
            }
        });
    });

    // Explore Collection Button Functionality
    exploreBtn.addEventListener("click", function () {
        window.location.href = "#dashboard";
    });

    // Close modals when clicking outside
    window.addEventListener("click", function (event) {
        if (event.target === bookModal) {
            bookModal.style.display = "none";
        }
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Signup button functionality
    const signupBtn = document.getElementById("signupBtn");
    const signupModal = document.createElement("div"); // Creating a signup modal dynamically
    signupModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Sign Up</h3>
                <span class="close">&times;</span>
            </div>
            <form id="signupForm">
                <div class="form-group">
                    <label for="signup-username">Username</label>
                    <input type="text" id="signup-username" name="signup-username" required>
                </div>
                <div class="form-group">
                    <label for="signup-email">Email</label>
                    <input type="email" id="signup-email" name="signup-email" required>
                </div>
                <div class="form-group">
                    <label for="signup-password">Password</label>
                    <input type="password" id="signup-password" name="signup-password" required>
                </div>
                <div class="modal-footer">
                    <button type="button" class="cancel-btn" id="cancelSignupBtn">Cancel</button>
                    <button type="submit" class="submit-btn">Sign Up</button>
                </div>
            </form>
        </div>
    `;
    signupModal.classList.add("modal");
    document.body.appendChild(signupModal);

    signupBtn.addEventListener("click", function () {
        signupModal.style.display = "block";
    });

    document.getElementById("cancelSignupBtn").addEventListener("click", function () {
        signupModal.style.display = "none";
    });

    signupModal.querySelector(".close").addEventListener("click", function () {
        signupModal.style.display = "none";
    });

    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Sign Up Successful!"); // Replace this with backend logic
        signupModal.style.display = "none";
    });

    // Explore Collection Button - Redirect to books.html
    document.querySelector(".cta-button").addEventListener("click", function () {
        window.location.href = "book.html";
    });
});
