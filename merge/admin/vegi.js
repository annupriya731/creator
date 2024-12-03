// Sample product data
const product = {
  id: 1,
  name: 'Fresh Tomatoes',
  description: 'Juicy and fresh tomatoes, perfect for salads and cooking.',
  price: 2.5,
  img: 'https://media.istockphoto.com/id/171579643/photo/tomato-greenhouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=W6IUz6wWm5UGe6Y-RfqSsF4ICif6We8ZTFGwtmfkHsg=',
};

// Sample recommendations data
const recommendations = [
  { id: 2, name: 'Fresh Carrots', img: 'https://plus.unsplash.com/premium_photo-1724250160975-6c789dbfdc9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnYXRibGV8ZW58MHx8MHx8fDA%3D' },
  { id: 3, name: 'Green Peas', img: 'https://media.istockphoto.com/id/1326102912/photo/various-organic-vegetables-on-a-dark-textured-surface-taken-from-above.webp?a=1&b=1&s=612x612&w=0&k=20&c=aDJWKIXPPYPzXx4KAAMI-9ruJ-wcm0x5kdrw1YUBpAg=' },
  { id: 4, name: 'Broccoli', img: 'https://media.istockphoto.com/id/493687446/photo/fresh-garden-vegetablesin-vintage-metal-basket.webp?a=1&b=1&s=612x612&w=0&k=20&c=KTZvqsVHOvo-OsVB7-llCD_wcEu-0Y6vc7kU-9g9tKI= ' },
];

// Sample review data
let reviews = [
  { rating: 5, comment: 'The tomatoes were so fresh and tasty!' },
  { rating: 4, comment: 'Good quality, but delivery was a bit late.' },
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
      <p>Price: $${product.price} per lb</p>
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
      getLocationName(lat, lng);
      initMap(lat, lng);
    }, () => {
      document.getElementById('location-status').innerText = 'Unable to retrieve location.';
    });
  } else {
    document.getElementById('location-status').innerText = 'Geolocation not supported.';
  }
}

// Function to get location name using Reverse Geocoding
function getLocationName(lat, lng) {
  const geocoder = new google.maps.Geocoder();
  const latlng = { lat, lng };

  geocoder.geocode({ location: latlng }, (results, status) => {
    if (status === 'OK' && results[0]) {
      document.getElementById('location-status').innerText = `Location: ${results[0].formatted_address}`;
    } else {
      document.getElementById('location-status').innerText = 'Location not found.';
    }
  });
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
