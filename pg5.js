// Mock function to simulate fetching user-specific recommendations
async function fetchPersonalizedRecommendations(userId) {
  try {
    // Simulate fetching recommendations from the backend
    const res = await fetch(`/api/recommendations?user=${userId}`);
    const recommendations = await res.json();
    displayRecommendations(recommendations);
  } catch (error) {
    console.error('Error fetching personalized recommendations:', error);
  }
}

// Function to display recommended products
function displayRecommendations(products) {
  const recommendationsContainer = document.getElementById('recommended-products');
  recommendationsContainer.innerHTML = ''; // Clear previous recommendations

  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <a href="product.html?id=${product._id}">View Details</a>
    `;
    recommendationsContainer.appendChild(productDiv);
  });
}

// Simulating fetching recommendations for a user with ID 123
fetchPersonalizedRecommendations('123');
