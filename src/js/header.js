

function renderHeader() {
  const headerHTML = `
    <!-- Top Bar -->
    <div class="w-full bg-gradient-to-r from-blue-800 via-purple-700 to-red-600 py-2 flex items-center justify-center px-4">
      <span class="text-white text-sm font-medium">30% discount on all products special for June!</span>
    </div>

    <!-- Header -->
    <header class="sticky top-0 z-50 bg-white backdrop-blur-sm shadow border-b border-gray-200">
      <nav class="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <a href="/index.html"><img src="/src/assets/taplogo.png" alt="logo" class="w-8 h-8 object-cover rounded-lg"></a>
          <h1 class="text-xl font-bold text-gray-900">ElectroBay</h1>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-6">
          <a href="/index.html" class="text-gray-700 hover:text-blue-600 font-medium">Home</a>
          <a href="/src/pages/product.html" class="text-gray-700 hover:text-blue-600 font-medium">Products</a>
          <a href="/src/pages/about.html" class="text-gray-700 hover:text-blue-600 font-medium">About</a>
          <a href="/src/pages/contact.html" class="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
        </div>

        <!-- Right Side -->
        <div class="flex items-center space-x-4">
             <!-- Search Bar -->
            <div class="hidden lg:block relative">
              <input
                type="text"
                placeholder="Search products..."
                class="w-64 px-4 py-2 rounded-full bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          <!-- Cart -->
          <a href="/src/cardPage.html" class="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
            <span class="absolute -top-1 -right-1 w-4 h-4 text-xs bg-red-500 text-white rounded-full flex items-center justify-center" id="cartCount">0</span>
          </a>

          <!-- User -->
          <a href="/login" class="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </a>

          <!-- Mobile Toggle -->
          <button id="mobile-toggle" class="md:hidden p-2 bg-gray-100 hover:bg-gray-200 rounded-full">
            <svg class="w-5 h-5 mb-1 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2zm0 6h14a1 1 0 010 2H3a1 1 0 010-2z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden px-4 pb-4">
        <a href="/index.html" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">Home</a>
        <a href="/src/pages/product.html" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">Products</a>
        <a href="/src/pages/about.html" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">About</a>
        <a href="/src/pages/contact.html" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">Contact</a>
      </div>
    </header>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
}

function setupHeaderEvents() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');

  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

// Use the functions
renderHeader();
setupHeaderEvents();
