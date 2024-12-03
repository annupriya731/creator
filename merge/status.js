// Sample data for customer orders
const orders = [
  { orderId: 101, product: 'Paracetamol', quantity: 2, status: 'Shipped', deliveryDate: '2024-12-05' },
  { orderId: 102, product: 'Ibuprofen', quantity: 1, status: 'Delivered', deliveryDate: '2024-12-02' },
  { orderId: 103, product: 'Aspirin', quantity: 3, status: 'Pending', deliveryDate: '2024-12-10' },
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
