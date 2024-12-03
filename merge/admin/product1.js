// Sample product data
const product = {
  id: 1,
  name: 'ONE PIECE',
  description: 'AUTHENTICITY.',
  price: 10,
  img: 'https://plus.unsplash.com/premium_photo-1675107358280-5c82ea9e169f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

// Sample recommendations data
const recommendations = [
  { id: 2, name: 'GOWN', img: 'https://plus.unsplash.com/premium_photo-1675107358090-8f8eedfae804?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D' },
  { id: 3, name: 'DUPATTA', img: 'https://plus.unsplash.com/premium_photo-1675107360237-22fa96b9995b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8' },
 ];

// Sample review data
let reviews = [
  { rating: 5, comment: 'Excellent product!' },
  { rating: 4, comment: 'Works well but delivery was late.' },
];

// Function to display product details
function displayProductDetail() {
  const productDetailContainer = document.getElementById('product-detail');
  productDetailContainer.innerHTML = `
    <div>
      <img src="${product.img}" alt="${product.name}">
    </div>
    <div class="product-info">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart()">Add to Cart</button>
    </div>
  `;
}

// Add to Cart Function
function addToCart() {
  alert('Product added to cart!');
}

// Function to fetch user location and initialize map
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      document.getElementById('location-status').innerText = `Latitude: ${lat}, Longitude: ${lng}`;
      initMap(lat, lng);
    }, () => {
      document.getElementById('location-status').innerText = 'Unable to retrieve location.';
    });
  } else {
    document.getElementById('location-status').innerText = 'Geolocation not supported.';
  }
}

// Initialize Google Map
function initMap(lat, lng) {
  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat, lng },
    zoom: 15,
  });
  new google.maps.Marker({ position: { lat, lng }, map, title: 'Your Location' });
}

// Function to display delivery info
function displayDeliveryInfo() {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3); // Delivery in 3 days
  document.getElementById('delivery-date').innerText = deliveryDate.toDateString();
}

// Display Reviews
function displayReviews() {
  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = reviews.map(review => `
    <div class="review-item">
      <h4>${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</h4>
      <p>${review.comment}</p>
    </div>
  `).join('');
}

// Submit Review
document.getElementById('review-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const rating = document.getElementById('rating').value;
  const comment = document.getElementById('review').value.trim();
  if (comment) {
    reviews.push({ rating: parseInt(rating), comment });
    displayReviews();
    document.getElementById('review-form').reset();
  } else {
    alert('Please enter a comment.');
  }
});

// Display Recommendations
function displayRecommendations() {
  const recommendationList = document.getElementById('recommendation-list');
  recommendationList.innerHTML = recommendations.map(product => `
    <div class="recommendation-item">
      <img src="${product.img}" alt="${product.name}">
      <h4>${product.name}</h4>
    </div>
  `).join('');
}

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  displayProductDetail();
  getUserLocation();
  displayDeliveryInfo();
  displayReviews();
  displayRecommendations();
});
