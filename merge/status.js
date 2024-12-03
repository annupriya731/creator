// Sample data for customer orders
const orders = [
  
  { orderId: 101, product: 'dress', quantity: 2, status: 'Shipped', deliveryDate: '2024-12-05' },
  { orderId: 102, product: 'shirt', quantity: 1, status: 'Delivered', deliveryDate: '2024-12-02' },
  { orderId: 103, product: 'Aspirin', quantity: 3, status: 'Pending', deliveryDate: '2024-12-10' },
  
  { orderId: 104, product: 'cabbage', quantity: 2, status: 'Shipped', deliveryDate: '2024-12-05' },
  { orderId: 105, product: 'Ibuprofen', quantity: 1, status: 'Delivered', deliveryDate: '2024-12-02' },
  { orderId: 106, product: 'googles', quantity: 3, status: 'Pending', deliveryDate: '2024-12-10' },
  
  { orderId: 107, product: 'apple', quantity: 2, status: 'Shipped', deliveryDate: '2024-12-05' },
  { orderId: 108, product: 'jeans', quantity: 1, status: 'Delivered', deliveryDate: '2024-12-02' },
  { orderId: 109, product: 'shoes', quantity: 31, status: 'Pending', deliveryDate: '2027-12-10' },
  { orderId: 110, product: 'jackets', quantity: 22, status: 'Shipped', deliveryDate: '2029-12-05' },
  { orderId: 111, product: 'hand bag', quantity: 11, status: 'Delivered', deliveryDate: '2024-12-02' },
  { orderId: 112, product: 'belt', quantity: 3, status: 'Pending', deliveryDate: '2054-12-10' },
];

// Function to display order statuses dynamically
function displayOrderStatus() {
  const orderStatusContainer = document.getElementById('order-status');
  orderStatusContainer.innerHTML = ''; // Clear previous content

  orders.forEach(order => {
    const orderDiv = document.createElement('div');
    orderDiv.className = 'order';
    orderDiv.innerHTML = `
      <h3>Order ID: ${order.orderId}</h3>
      <p>Product: ${order.product}</p>
      <p>Quantity: ${order.quantity}</p>
      <p>Status: <span class="status ${order.status.toLowerCase()}">${order.status}</span></p>
      <p>Estimated Delivery: ${order.deliveryDate}</p>
    `;
    orderStatusContainer.appendChild(orderDiv);
  });
}

// Mock logout function
function logout() {
  alert('You have been logged out.');
  location.reload();
}

// Initialize status page
document.addEventListener('DOMContentLoaded', displayOrderStatus);
