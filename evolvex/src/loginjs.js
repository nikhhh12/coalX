document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get input values
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Basic validation (for demonstration purposes)
        if (email && password) {
            // Save user login status in localStorage
            localStorage.setItem('userLoggedIn', 'true');

            // Redirect to calculator page
            window.location.href = 'index.html#calculate';
        } else {
            alert('Please enter both email and password.');
        }
    });
});
