
export const CartManager = {
  getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  },

  saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  },

  addToCart(product) {
    const cart = this.getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    this.saveCart(cart);
  },

  getCartCount() {
    return this.getCart().reduce((sum, item) => sum + item.quantity, 0);
  }
};
