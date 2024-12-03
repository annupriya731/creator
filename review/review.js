// Sample reviews data (in a real application, you would fetch this from a backend)
let reviews = [
  { rating: 5, comment: 'Excellent product! Will buy again.' },
  { rating: 4, comment: 'Good quality, but could be improved.' },
  { rating: 3, comment: 'Average product, nothing special.' },
];

// Function to display reviews
function displayReviews() {
  const reviewListContainer = document.getElementById('review-list');
  reviewListContainer.innerHTML = '';
  
  reviews.forEach(review => {
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review-item';
    reviewDiv.innerHTML = `
      <h4>${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</h4>
      <p>${review.comment}</p>
    `;
    reviewListContainer.appendChild(reviewDiv);
  });
}

// Handle review submission
document.getElementById('review-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const rating = document.getElementById('rating').value;
  const comment = document.getElementById('comment').value;

  if (comment.trim() === '') {
    alert('Please enter a comment.');
    return;
  }

  // Add the new review to the list (in a real app, this would be saved to a database)
  reviews.push({ rating: parseInt(rating), comment: comment });
  
  // Display updated reviews
  displayReviews();

  // Reset the form
  document.getElementById('review-form').reset();
});

// Initialize review display
displayReviews();
