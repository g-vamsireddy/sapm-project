document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const dashboardContainer = document.getElementById('dashboard-container');
    const loginContainer = document.getElementById('login-container');

    // Login functionality
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === "vamsi@gmail.com" && password === "1234") {
            loginContainer.classList.add('d-none');
            dashboardContainer.classList.remove('d-none');
        } else {
            alert("Invalid credentials! Please try again.");
        }
    });
});
