// Sample product data
const product = {
  id: 1,
  name: 'Fresh Tomatoes',
  description: 'Juicy and fresh tomatoes, perfect for salads and cooking.',
  price: 2.5,
  img: 'https://via.placeholder.com/300?text=Tomatoes',
};

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
    </div>
  `;
}

// Add to Cart Function
function addToCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Check if product is already in the cart
  const existingProduct = cart.find(item => item.id === product.id);
  
  if (existingProduct) {
    existingProduct.quantity += 1;  // Increase quantity if already in cart
  } else {
    cart.push({ ...product, quantity: 1 });  // Add product to cart
  }

  // Save updated cart to localStorage
  localStorage.setItem('cart', JSON.stringify(cart));

  alert('Product added to cart!');
}

// Initialize product details
document.addEventListener('DOMContentLoaded', displayProductDetail);
