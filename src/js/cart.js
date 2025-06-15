function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.querySelector('#cartCount');
  if (badge) badge.textContent = count;
}

updateCartCount();
