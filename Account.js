document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const forms = document.querySelectorAll('.form');

    // Tab switching functionality
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and forms
            tabBtns.forEach(b => b.classList.remove('active'));
            forms.forEach(f => f.classList.remove('active'));

            // Add active class to clicked button and corresponding form
            btn.classList.add('active');
            document.querySelector(`#${btn.dataset.tab}Form`).classList.add('active');
        });
    });

    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your login logic here
        alert('Login functionality will be implemented');
    });

    // Sign up form submission
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your signup logic here
        alert('Sign up functionality will be implemented');
    });
});