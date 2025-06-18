let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add to cart (from index.html)
function addToCart(product) {
  const existing = cart.find(p => p.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push(product);
  }
  saveCart();
  showToast(`${product.name} added to cart!`);
}

// Update cart count
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll("#cart-count").forEach(el => el.textContent = count);
}

// Show toast notification
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;

  // Reset any previous state
  toast.classList.remove("opacity-0", "pointer-events-none");
  toast.classList.add("opacity-100");

  void toast.offsetWidth;

  // Hide it after 2 seconds
  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0", "pointer-events-none");
  }, 1500);
}


// Render cart items (on shopping.html)
function renderCartItems() {
  const cartList = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");

  cartList.innerHTML = "";

  if (cart.length === 0) {
    emptyCart.classList.remove("hidden");
    calculateSummary();
    return;
  } else {
    emptyCart.classList.add("hidden");
  }

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "flex gap-4 items-center";
    li.innerHTML = `
      <img src="${item.image}" class="w-40 h-40 rounded object-cover" />
      <div class="flex-1">
        <h2 class="font-bold mb-2 text-2xl">${item.name}</h2>
        <p class="text-[20px] font-medium">$${item.price.toFixed(2)}</p>
        <div class="flex mt-2 items-center gap-2">
          <button onclick="changeQuantity(${index}, -1)" class="px-2 py-1 border rounded">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${index}, 1)" class="px-2 py-1 border rounded">+</button>
          <button onclick="removeItem(${index})" class="ml-4 text-red-600 hover:text-red-800" title="Remove">
            <svg xmlns="http://www.w3.org/2000/svg" fill="red" x="0px" y="0px" width="34" height="34" viewBox="0 0 64 64">
<path d="M 30 2 C 29 2 28.101563 2.5 27.5 3.300781 L 24.5 8 L 13 8 C 11.300781 8 10 9.300781 10 11 L 10 17 C 10 18.699219 11.300781 20 13 20 L 13.097656 20 L 16.597656 53.5 C 16.898438 56.101563 19 58 21.597656 58 L 46.402344 58 C 49 58 51.101563 56.101563 51.402344 53.5 L 54.902344 20 L 55 20 C 56.699219 20 58 18.699219 58 17 L 58 11 C 58 9.300781 56.699219 8 55 8 L 43.5 8 L 40.402344 3.300781 C 39.902344 2.5 38.902344 2 37.902344 2 Z M 30.097656 4 L 38 4 C 38.300781 4 38.601563 4.199219 38.800781 4.398438 L 41.097656 8 L 26.902344 8 L 29.199219 4.398438 C 29.398438 4.199219 29.699219 4 30.097656 4 Z M 13 10 L 55 10 C 55.601563 10 56 10.398438 56 11 L 56 17 C 56 17.601563 55.601563 18 55 18 L 13 18 C 12.398438 18 12 17.601563 12 17 L 12 11 C 12 10.398438 12.398438 10 13 10 Z M 16 12 C 15.398438 12 15 12.398438 15 13 L 15 15 C 15 15.601563 15.398438 16 16 16 C 16.601563 16 17 15.601563 17 15 L 17 13 C 17 12.398438 16.601563 12 16 12 Z M 21 12 C 20.398438 12 20 12.398438 20 13 L 20 15 C 20 15.601563 20.398438 16 21 16 C 21.601563 16 22 15.601563 22 15 L 22 13 C 22 12.398438 21.601563 12 21 12 Z M 26 12 C 25.398438 12 25 12.398438 25 13 L 25 15 C 25 15.601563 25.398438 16 26 16 C 26.601563 16 27 15.601563 27 15 L 27 13 C 27 12.398438 26.601563 12 26 12 Z M 31 12 C 30.398438 12 30 12.398438 30 13 L 30 15 C 30 15.601563 30.398438 16 31 16 C 31.601563 16 32 15.601563 32 15 L 32 13 C 32 12.398438 31.601563 12 31 12 Z M 37 12 C 36.398438 12 36 12.398438 36 13 L 36 15 C 36 15.601563 36.398438 16 37 16 C 37.601563 16 38 15.601563 38 15 L 38 13 C 38 12.398438 37.601563 12 37 12 Z M 42 12 C 41.398438 12 41 12.398438 41 13 L 41 15 C 41 15.601563 41.398438 16 42 16 C 42.601563 16 43 15.601563 43 15 L 43 13 C 43 12.398438 42.601563 12 42 12 Z M 47 12 C 46.398438 12 46 12.398438 46 13 L 46 15 C 46 15.601563 46.398438 16 47 16 C 47.601563 16 48 15.601563 48 15 L 48 13 C 48 12.398438 47.601563 12 47 12 Z M 52 12 C 51.398438 12 51 12.398438 51 13 L 51 15 C 51 15.601563 51.398438 16 52 16 C 52.601563 16 53 15.601563 53 15 L 53 13 C 53 12.398438 52.601563 12 52 12 Z M 15.097656 20 L 52.902344 20 L 49.402344 53.300781 C 49.199219 54.800781 48 56 46.402344 56 L 21.597656 56 C 20.097656 56 18.800781 54.800781 18.597656 53.300781 Z M 34 25 C 33.398438 25 33 25.398438 33 26 L 33 46 C 33 46.601563 33.398438 47 34 47 C 34.601563 47 35 46.601563 35 46 L 35 26 C 35 25.398438 34.601563 25 34 25 Z M 25 25.097656 C 24.398438 25.097656 24 25.597656 24.097656 26.097656 L 25.097656 46.097656 C 25 46.597656 25.5 47 26 47 C 26.601563 47 27 46.5 27 46 L 26 26 C 26 25.398438 25.5 25 25 25.097656 Z M 43.097656 25.097656 C 42.5 25.097656 42.097656 25.5 42.097656 26 L 41.097656 46 C 41 46.5 41.398438 47 42 47 C 42.601563 47 43 46.597656 43 46.097656 L 44 26.097656 C 44 25.5 43.597656 25.097656 43.097656 25.097656 Z M 23 52 C 22.398438 52 22 52.398438 22 53 C 22 53.601563 22.398438 54 23 54 L 37 54 C 37.601563 54 38 53.601563 38 53 C 38 52.398438 37.601563 52 37 52 Z M 41 52 C 40.398438 52 40 52.398438 40 53 C 40 53.601563 40.398438 54 41 54 L 45 54 C 45.601563 54 46 53.601563 46 53 C 46 52.398438 45.601563 52 45 52 Z"></path>
</svg>
          </button>
        </div>
      </div>
    `;
    cartList.appendChild(li);
  });

  calculateSummary();
}

// Quantity control
function changeQuantity(index, delta) {
  if (cart[index].quantity + delta >= 1) {
    cart[index].quantity += delta;
    saveCart();
    renderCartItems();
    updateCartCount();
  }
}

// Remove item
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCartItems();
  updateCartCount();
}
function clearCart() {
  cart = [];
  saveCart();
  renderCartItems();
  updateCartCount();
}

function calculateSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const delivery = cart.length > 0 ? 15 : 0; // No delivery if cart is empty
  const total = subtotal - discount + delivery;

if (document.getElementById("subtotal")) {
  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2) || "0.00"}`;
  document.getElementById("discount").textContent = `-$${discount.toFixed(2) || "0.00"}`;
  document.getElementById("delivery-fee").textContent = `$${delivery}`;
  document.getElementById("total").textContent = `$${total.toFixed(2) || "0.00"}`;
}

}


// Checkout Modal
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCartItems();

  const closeBtn = document.getElementById("close-modal");
  const modal = document.getElementById("qr-modal");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  }

  if (checkoutBtn && modal) {
    checkoutBtn.addEventListener("click", () => modal.classList.remove("hidden"));
  }
});
