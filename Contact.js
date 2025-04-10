document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Here you would typically send this data to your server
        // For now, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        
        // Clear the form
        contactForm.reset();
    });
});