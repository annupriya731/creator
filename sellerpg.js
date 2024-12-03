// Sample data for products and orders
let products = [
  { id: 1, name: 'Paracetamol', price: '$10', stock: 50 },
  { id: 2, name: 'Aspirin', price: '$12', stock: 30 },
];

let orders = [
  { orderId: 101, product: 'Paracetamol', quantity: 2, customer: 'Alice' },
  { orderId: 102, product: 'Aspirin', quantity: 1, customer: 'Bob' },
];

// Show specific sections dynamically
function showProducts() {
  hideAllSections();
  document.getElementById('products').style.display = 'block';
  displayProducts();
}

function showOrders() {
  hideAllSections();
  document.getElementById('orders').style.display = 'block';
  displayOrders();
}

function showProfile() {
  hideAllSections();
  document.getElementById('profile').style.display = 'block';
}

function hideAllSections() {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => (section.style.display = 'none'));
}

// Display product list dynamically
function displayProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Stock: ${product.stock}</p>
      <button onclick="removeProduct(${product.id})">Remove</button>
    `;
    productList.appendChild(productDiv);
  });
}

// Display orders dynamically
function displayOrders() {
  const orderList = document.getElementById('order-list');
  orderList.innerHTML = '';
  orders.forEach((order) => {
    const orderDiv = document.createElement('div');
    orderDiv.className = 'product';
    orderDiv.innerHTML = `
      <h3>Order #${order.orderId}</h3>
      <p>Product: ${order.product}</p>
      <p>Quantity: ${order.quantity}</p>
      <p>Customer: ${order.customer}</p>
    `;
    orderList.appendChild(orderDiv);
  });
}

// Add a new product dynamically
function addNewProduct() {
  const newProduct = {
    id: products.length + 1,
    name: prompt('Enter product name:'),
    price: `$${prompt('Enter product price:')}`,
    stock: parseInt(prompt('Enter product stock:'), 10),
  };
  products.push(newProduct);
  displayProducts();
}

// Remove a product dynamically
function removeProduct(productId) {
  products = products.filter((product) => product.id !== productId);
  displayProducts();
}

// Mock logout function
function logout() {
  alert('You have been logged out.');
  location.reload(); // Simulate logout by reloading
}

// Initialize the page
document.addEventListener('DOMContentLoaded', showProducts);
