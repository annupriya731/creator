document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { id: 1, name: 'Product A', category: 'Clothes', price: 50 },
    { id: 2, name: 'Product B', category: 'Grocery', price: 10 },
    { id: 3, name: 'Product C', category: 'Clothes', price: 30 },
    { id: 4, name: 'Product D', category: 'Medicine', price: 15 },
    { id: 5, name: 'Product E', category: 'Grocery', price: 25 },
  ];

  const viewedProducts = getViewedProducts();
  const lastViewedCategory = viewedProducts.length > 0 
    ? viewedProducts[viewedProducts.length - 1].category 
    : null;

  const recommendations = products.filter(
    product => product.category === lastViewedCategory
  );

  displayRecommendations(recommendations);
});

// Function to display recommendations
function displayRecommendations(products) {
  const container = document.getElementById('recommendations-list');
  container.innerHTML = '';

  if (products.length === 0) {
    container.innerHTML = '<p>No recommendations available. Start browsing!</p>';
    return;
  }

  products.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <a href="#" onclick="viewProduct(${product.id})">View Details</a>
    `;
    container.appendChild(div);
  });
}

// Simulate viewing a product and storing it in Local Storage
function viewProduct(productId) {
  const products = [
    { id: 1, name: 'Product A', category: 'Clothes', price: 50 },
    { id: 2, name: 'Product B', category: 'Grocery', price: 10 },
    { id: 3, name: 'Product C', category: 'Clothes', price: 30 },
    { id: 4, name: 'Product D', category: 'Medicine', price: 15 },
    { id: 5, name: 'Product E', category: 'Grocery', price: 25 },
  ];

  const product = products.find(p => p.id === productId);
  if (!product) return;

  const viewedProducts = getViewedProducts();
  viewedProducts.push(product);
  localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts));
  alert(`Viewed ${product.name}`);
}

// Get viewed products from Local Storage
function getViewedProducts() {
  const viewedProducts = localStorage.getItem('viewedProducts');
  return viewedProducts ? JSON.parse(viewedProducts) : [];
}
