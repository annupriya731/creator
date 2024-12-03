// Sample cart data
let cart = [
  { id: 1, name: 'Paracetamol', price: 10, quantity: 2, img: 'https://via.placeholder.com/100?text=Paracetamol' },
  { id: 2, name: 'Ibuprofen', price: 12, quantity: 1, img: 'https://via.placeholder.com/100?text=Ibuprofen' },
];

// Function to display cart items
function displayCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = ''; // Clear previous items
  let total = 0;

  cart.forEach(item => {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.className = 'cart-item';
    cartItemDiv.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="cart-item-details">
        <h3>${item.name}</h3>
        <p>Price: $${item.price}</p>
        <label for="quantity-${item.id}">Quantity:</label>
        <input type="number" id="quantity-${item.id}" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
      </div>
      <button onclick="removeItem(${item.id})">Remove</button>
    `;
    cartItemsContainer.appendChild(cartItemDiv);
    total += item.price * item.quantity;
  });

  document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
}

// Function to update item quantity
function updateQuantity(itemId, newQuantity) {
  const item = cart.find(item => item.id === itemId);
  if (item) {
    item.quantity = parseInt(newQuantity, 10);
    displayCartItems();
  }
}

// Function to remove an item from the cart
function removeItem(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  displayCartItems();
}

// Function to handle checkout
function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  alert('Proceeding to checkout...');
  // Clear cart after checkout
  cart = [];
  displayCartItems();
}

// Initialize cart display
document.addEventListener('DOMContentLoaded', displayCartItems);
