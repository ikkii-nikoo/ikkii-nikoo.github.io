// Get references to form elements
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up'),
    signinButton = document.getElementById('signin-button'),
    signupButton = document.getElementById('signup-button');

// Get references to input fields and error container
const signinUsername = document.getElementById('signin-username'),
    signinPassword = document.getElementById('signin-password'),
    signupUsername = document.getElementById('signup-username'),
    signupEmail = document.getElementById('signup-email'),
    signupPassword = document.getElementById('signup-password');

// Error overlay and message container
const errorOverlay = document.getElementById('error-overlay');
const errorContainer = document.getElementById('error-container');

// Function to show error message in the center of the screen
// Function to show error message in the center of the screen
function showError(message) {
    errorContainer.textContent = message;
    errorOverlay.style.display = 'flex'; // Show the overlay
}

// Function to hide error message and overlay
function clearError() {
    errorOverlay.style.display = 'none'; // Hide the overlay
}

// Close the error message when the user clicks on the dimmed area
errorOverlay.addEventListener('click', function(e) {
    // Only close the error if the overlay itself (not the message) is clicked
    if (e.target === errorOverlay) {
        clearError();
    }
});

// Sign in button click handler
signinButton.addEventListener('click', function(e) {
    e.preventDefault();

    // Clear previous errors
    clearError();

    // Validate fields
    let valid = true;

    if (signinUsername.value.length < 3) {
        showError('Username should be at least 3 characters long');
        valid = false;
    }

    if (signinPassword.value.length < 6) {
        showError('Password is too short, it should be at least 6 characters');
        valid = false;
    }

    // If valid, show under construction message
    if (valid) {
        showError('The website is still under construction, please check back later!');
    }
});

// Sign up button click handler
signupButton.addEventListener('click', function(e) {
    e.preventDefault();

    // Clear previous errors
    clearError();

    // Validate fields
    let valid = true;

    if (signupUsername.value.length < 3) {
        showError('Username should be at least 3 characters long');
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(signupEmail.value)) {
        showError('Please enter a valid email address');
        valid = false;
    }

    if (signupPassword.value.length < 6) {
        showError('Password is too short, it should be at least 6 characters');
        valid = false;
    }

    // If valid, show under construction message
    if (valid) {
        showError('The website is still under construction, please check back later!');
    }
});

// Toggle between Sign In and Sign Up forms
signUp.addEventListener('click', () => {
    loginIn.classList.remove('block');
    loginUp.classList.remove('none');
    loginIn.classList.add('none');
    loginUp.classList.add('block');
});

signIn.addEventListener('click', () => {
    loginIn.classList.remove('none');
    loginUp.classList.remove('block');
    loginIn.classList.add('block');
    loginUp.classList.add('none');
});
