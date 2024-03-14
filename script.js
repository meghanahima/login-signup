// User registration function
function registerUser() {
    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;

    // Simulate storing user information securely
    const user = { username: regUsername, password: hashPassword(regPassword) };
    localStorage.setItem(regUsername, JSON.stringify(user));

    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('registrationSuccess').style.display = 'block';
}

// Redirect to login page after registration
function redirectToLogin() {
    window.location.href = 'login.html';
}

// User login function
function loginUser() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Check if user exists
    if (localStorage.getItem(loginUsername)) {
        const storedUser = JSON.parse(localStorage.getItem(loginUsername));

        // Check if entered password matches stored hashed password
        if (hashPassword(loginPassword) === storedUser.password) {
            alert('Login successful!');
        } else {
            alert('Incorrect password. Please try again.');
        }
    } else {
        alert('User not found. Please register.');
    }
}

// Hashing function (Note: In a real-world scenario, use a proper hashing library)
function hashPassword(password) {
    return password; // For simplicity, using plain text as a "hashed" password
}
