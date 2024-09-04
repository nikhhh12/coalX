document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simulate signup
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const coalMine = document.getElementById('coal-mine').value;
        const personalDetails = document.getElementById('personal-details').value;

        if (email && password && coalMine && personalDetails) {
            localStorage.setItem('userLoggedIn', 'true');
            // Redirect to the page user was trying to access
            window.location.href = '/public/index.html'; // or get the redirect URL from query parameters if needed
        }
    });
});
