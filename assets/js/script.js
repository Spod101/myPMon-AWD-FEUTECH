// Get all the cards
const cards = document.querySelectorAll('.card');

// Get the "View Details" button
const viewDetailsButton = document.querySelector('.view-details-button');

// Add a click event listener to the "View Details" button
viewDetailsButton.addEventListener('click', () => {
    // Loop through each card and hide it
    cards.forEach(card => {
        card.style.display = 'none';
    });
});