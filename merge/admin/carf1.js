// Function to display cart items
function displayCartItems() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceContainer = document.getElementById('total-price');
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    let totalPrice = 0;
    cartItemsContainer.innerHTML = cart.map(item => {
      totalPrice += item.price * item.quantity;
      return `
        <div class="cart-item">
          <img src="${item.img}" alt="${item.name}">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>Price: $${item.price} each</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      `;
    }).join('');
    
    totalPriceContainer.textContent = totalPrice.toFixed(2);
  }
}

// Checkout Function (for now just a placeholder)
function checkout() {
  alert('Proceeding to checkout...');
  // In a real application, this would lead to a checkout page or handle payment.
}

// Initialize cart items display
document.addEventListener('DOMContentLoaded', displayCartItems);
