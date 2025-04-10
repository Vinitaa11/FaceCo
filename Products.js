document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and product cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Show/hide products based on filter
            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add animation
            button.textContent = 'Added to Cart!';
            button.style.backgroundColor = '#45a049';
            
            // Reset button after 2 seconds
            setTimeout(() => {
                button.textContent = 'Add to Cart';
                button.style.backgroundColor = '#4CAF50';
            }, 2000);
        });
    });
});