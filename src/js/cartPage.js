import { CartManager } from './CartManager.js';
import { updateCartCount } from './header.js';

function renderCart() {
  const container = document.getElementById('cartItems');
  const summary = document.getElementById('cartSummary');
  const cart = CartManager.getCart();

  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
    summary.textContent = '';
    return;
  }

  cart.forEach((item, index) => {
    container.innerHTML += `
      <div class="flex items-center space-x-4 mb-4 p-4 border rounded">
        <img src="${item.image}" class="w-16 h-16 object-contain" />
        <div class="flex-1">
          <h3>${item.title}</h3>
          <p>$${item.price.toFixed(2)}</p>
        </div>
        <input type="number" min="1" value="${item.quantity}" class="quantity-input" data-index="${index}" />
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;
  });

  updateSummary();
  setupEvents();
}

function updateSummary() {
  const cart = CartManager.getCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById('cartSummary').textContent = `Total: $${total.toFixed(2)}`;
}

function setupEvents() {
  document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', e => {
      const index = +e.target.dataset.index;
      let cart = CartManager.getCart();
      let qty = Math.max(1, +e.target.value);
      cart[index].quantity = qty;
      CartManager.saveCart(cart);
      updateSummary();
      updateCartCount();
    });
  });

  document.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      const index = +e.target.dataset.index;
      let cart = CartManager.getCart();
      cart.splice(index, 1);
      CartManager.saveCart(cart);
      renderCart();
      updateCartCount();
    });
  });
}

document.addEventListener('DOMContentLoaded', renderCart);
