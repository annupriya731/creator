// Sample data for products, orders, and users
let products = [
  { id: 1, name: 'Paracetamol', price: '$10', stock: 50 },
  { id: 2, name: 'Aspirin', price: '$12', stock: 30 },
];

let orders = [
  { id: 101, product: 'Paracetamol', quantity: 2, status: 'Shipped' },
  { id: 102, product: 'Aspirin', quantity: 1, status: 'Pending' },
];

let users = [
  { id: 1, name: 'John Doe', role: 'Customer' },
  { id: 2, name: 'Jane Smith', role: 'Seller' },
];

// Show specific section
function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('hidden-section');
    section.classList.remove('active-section');
  });
  document.getElementById(sectionId).classList.remove('hidden-section');
  document.getElementById(sectionId).classList.add('active-section');
}

// Product Management
function displayProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
  products.forEach(product => {
    productList.innerHTML += `
      <div class="product">
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>Stock: ${product.stock}</p>
        <button onclick="removeProduct(${product.id})">Remove</button>
      </div>
    `;
  });
}

function addNewProduct() {
  const name = prompt('Enter product name:');
  const price = `$${prompt('Enter product price:')}`;
  const stock = parseInt(prompt('Enter product stock:'), 10);
  products.push({ id: products.length + 1, name, price, stock });
  displayProducts();
}

function removeProduct(productId) {
  products = products.filter(product => product.id !== productId);
  displayProducts();
}

// Display Orders
function displayOrders() {
  const orderList = document.getElementById('order-list');
  orderList.innerHTML = '';
  orders.forEach(order => {
    orderList.innerHTML += `
      <div class="order">
        <h3>Order ID: ${order.id}</h3>
        <p>Product: ${order.product}</p>
        <p>Quantity: ${order.quantity}</p>
        <p>Status: ${order.status}</p>
      </div>
    `;
  });
}

// Display Users
function displayUsers() {
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';
  users.forEach(user => {
    userList.innerHTML += `
      <div class="user">
        <h3>${user.name}</h3>
        <p>Role: ${user.role}</p>
      </div>
    `;
  });
}

// Mock Logout
function logout() {
  alert('Logged out');
  location.reload();
}

// Initialize Admin Panel
document.addEventListener('DOMContentLoaded', () => {
  showSection('dashboard');
  displayProducts();
  displayOrders();
  displayUsers();
});
