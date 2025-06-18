const products = [
  {
    id: 1,
    title: "VILINICE Wireless Noise",
    description:
      "Experience immersive sound with VILINICE Wireless Noise Cancelling Headphones. Featuring Bluetooth connectivity, over-ear comfort, and a built-in microphone for clear calls. Ideal for travel, work, and music lovers.",
    category: "Headphone",
    price: 59.99,
    rating: { rate: 4.5, count: 120 },
    image:
      "https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_b994b99c-835f-42fc-8094-9f6be0f9273b.be59955399cdbd1c25011d4a4251ba9b.jpeg",
  },
  {
    id: 2,
    title: "Asus ROG Zephyrus",
    description:
      "Unleash elite gaming with the Asus ROG Zephyrus laptop. Powered by AMD Ryzen 9 and RTX 4060, it boasts a 14” 3K OLED display, 32GB RAM, and 1TB SSD for smooth, high-performance computing.",
    category: "Laptop",
    price: 539.69,
    rating: { rate: 4.7, count: 340 },
    image:
      "https://hanoicomputercdn.com/media/product/88377_laptop_asus_gaming_rog_zephyrus_ga403uv_qs202w_r9_8945hs_32gb_ram_1tb_ssd_14_3k_oled_rtx4060_8gb_win11_xam_chuot_tui.jpg",
  },
  {
    id: 3,
    title: "Kieslect Ks mini",
    description:
      "The Kieslect Ks Mini is a compact smartwatch with fitness tracking, heart rate monitoring, and long battery life. Sleek and lightweight, it’s perfect for staying connected and healthy on the go.",
    category: "SmartWatch",
    price: 59.99,
    rating: { rate: 4.8, count: 95 },
    image:
      "https://app-area.riointernational.com.bd/productImages/1719258755Ky3Lb.jpg",
  },
  {
    id: 4,
    title: "iPhone 16 Pro Max",
    description:
      "Discover the power of iPhone 16 Pro Max with the A18 Pro chip, advanced camera control, and 4K Dolby Vision video. Built with durable titanium for a premium, futuristic experience.",
    category: "Phone",
    price: 959.99,
    rating: { rate: 4.7, count: 760 },
    image:
      "https://alephksa.com/cdn/shop/files/iPhone_16_Pro_Max_Natural_Titanium_PDP_Image_Position_1__en-ME_a46d3e5e-dad7-4584-9581-342342e640bc.jpg?v=1727250184",
  },
  {
    id: 5,
    title: "Samsung Galaxy Tap A9",
    description:
      "Samsung Galaxy Tab A9 offers a sleek design, 8.7” display, and long-lasting battery life. Great for browsing, streaming, and productivity, all in a budget-friendly package.",
    category: "Tablet",
    price: 39.99,
    rating: { rate: 3.9, count: 80 },
    image:
      "https://phonesstorekenya.com/wp-content/uploads/2023/10/Samsung-Galaxy-Tab-A9-with-cover1.jpg",
  },
  {
    id: 6,
    title: "TrontSmart",
    description:
      "Bring the party anywhere with the Tronsmart Halo 200 Speaker. Featuring deep bass, karaoke mic input, and powerful sound output, it's perfect for both indoor and outdoor entertainment.",
    category: "Speaker",
    price: 89.99,
    rating: { rate: 4.6, count: 310 },
    image:
      "https://www.tronsmart.com/4442-home_default/tronsmart-halo-200-karaoke-party-speaker.jpg",
  },
  {
    id: 7,
    title: "Lenovo m10",
    description:
      "The Lenovo M10 tablet delivers reliable performance for everyday tasks. With a 10.1” display, quad-core processor, and dual speakers, it's perfect for learning, streaming, and browsing.",
    category: "Tablet",
    price: 59.99,
    rating: { rate: 4.0, count: 300 },
    image:
      "https://point.com.ec/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpoint_pweb%2Fweb2023%2FIMAGENES%2520WEB%2FTABL00019.jpg&w=3840&q=75",
  },
  {
    id: 8,
    title: "Huawei Watch Fit3",
    description:
      "Stay fit in style with the Huawei Watch Fit 3. Lightweight design, AMOLED display, fitness and sleep tracking, and long battery life make it your perfect daily fitness partner.",
    category: "SmartWatch",
    price: 129.99,
    rating: { rate: 3.2, count: 240 },
    image:
      "https://metapod.com/cdn/shop/files/HuaweiWatchFit3SmartWatch_Green_1.jpg?v=1719461063&width=1500",
  },
  {
    id: 9,
    title: "Beat Solo 4",
    description:
      "Beats Solo 4 delivers premium sound with punchy bass, active noise cancellation, and a sleek over-ear design. Perfect for music lovers who want comfort and style.",
    category: "Headphone",
    price: 265.99,
    rating: { rate: 4.8, count: 95 },
    image:
      "https://oprahdailyprod.vtexassets.com/unsafe/1440x0/center/middle/filters:quality(85)/https%3A%2F%2Foprahdailyprod.vtexassets.com%2Farquivos%2Fids%2F912220%2Fimage_1.jpg%3Fv%3D638792136156100000",
  },
  {
    id: 10,
    title: "Samsung Galaxy S25 Ultra",
    description:
      "Meet the future with Samsung Galaxy S25 Ultra. Featuring a stunning camera, 120Hz display, and a blazing fast processor, it's built for those who demand more from their smartphone.",
    category: "Phone",
    price: 939.99,
    rating: { rate: 4.5, count: 420 },
    image:
      "https://www.phoneprice.co.ke/wp-content/uploads/2025/01/Samsung-Galaxy-S25-Ultra-a1.jpg",
  },
  {
    id: 11,
    title: "BlueStream BTDJ822",
    description:
      "Powerful Bluetooth party speaker with dynamic bass, LED light show, and multiple connectivity options for an immersive music experience.",
    category: "Speaker",
    price: 389.99,
    rating: { rate: 3.9, count: 80 },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDM9w66aPHYxzvhxAHkiAG2d4KyvDwmi-t4w&s",
  },
  {
    id: 12,
    title: "ZenBook 14 OLED",
    description:
      "Slim and powerful laptop with a vibrant 2.8K OLED display, Intel Core i7 processor, and long battery life. Ideal for productivity and entertainment.",
    category: "Laptop",
    price: 999.99,
    rating: { rate: 4.6, count: 510 },
    image:
      "https://id.store.asus.com/media/catalog/product/z/e/zenbook_14_oled_ux3405ma_product_photo_3b_ponder_blue_05.jpg",
  },
  {
    id: 13,
    title: "Kieslect L11 Pro",
    description:
      "Stylish smartwatch with heart rate monitoring, fitness tracking, and customizable watch faces. Perfect for daily health and lifestyle management.",
    category: "SmartWatch",
    price: 89.99,
    rating: { rate: 4.2, count: 240 },
    image:
      "https://rasanasa.com/public/uploads/all/ZatzePcvDHu6KroFaAWPuApxufnKGv2x4ybodLf5.jpg",
  },
  {
    id: 14,
    title: "Sony WH-1000XM5",
    description:
      "Industry-leading noise-canceling headphones with crystal-clear sound, adaptive sound control, and up to 30 hours of battery life.",
    category: "Headphone",
    price: 265.99,
    rating: { rate: 4.8, count: 95 },
    image:
      "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691056487173-headphon2.jpg",
  },
  {
    id: 15,
    title: "iPhone 11",
    description:
      "Classic Apple smartphone with A13 Bionic chip, dual-camera system, and a 6.1-inch Liquid Retina display. A great balance of performance and value.",
    category: "Phone",
    price: 239.49,
    rating: { rate: 4.5, count: 420 },
    image:
      "https://i5.walmartimages.com/seo/Restored-iPhone-11-Unlocked-CDMA-GSM-128GB-Purple-Refurbished_70c68bf9-8932-4a08-a4f9-04dbae2eab10.2b46a044e2bd1c9bde25c3562960246c.jpeg",
  },
  {
    id: 16,
    title: "JBL PartyBox 310",
    description:
      "Portable party speaker with 240W of powerful sound, dazzling lights, and a rechargeable battery for non-stop music wherever you go.",
    category: "Speaker",
    price: 39.99,
    rating: { rate: 3.9, count: 80 },
    image:
      "https://www.courts.com/media/catalog/product/2/0/2070bb_01_jbl_jblpb310am_jbl_speaker_partybox_310.jpg",
  },
  {
    id: 17,
    title: "Wireless Headphones",
    description:
      "Comfortable over-ear wireless headphones with deep bass, built-in microphone, and long-lasting battery for all-day listening.",
    category: "Headphone",
    price: 199.99,
    rating: { rate: 4.5, count: 120 },
    image:
      "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg",
  },
  {
    id: 18,
    title: "Lenovo ThinkPad T14",
    description:
      "Business-grade laptop with AMD Ryzen processor, robust security features, and legendary ThinkPad reliability for professionals on the go.",
    category: "Laptop",
    price: 289.99,
    rating: { rate: 3.5, count: 140 },
    image:
      "https://lastbestprice.com/wp-content/uploads/2024/06/ThinkPad-T14-Gen5.png",
  },
  {
    id: 19,
    title: "Kieslect Kr",
    description:
      "Elegant round smartwatch with Bluetooth calling, fitness tracking, and AMOLED display. Combines style and functionality for everyday use.",
    category: "SmartWatch",
    price: 59.99,
    rating: { rate: 4.8, count: 95 },
    image:
      "https://www.kieslect.com/wp-content/uploads/2024/01/kieslect-kr-4-1.jpg",
  },  {
    id: 20,
    title: "MacBook Pro M3",
    description:
      "Apple’s most powerful laptop with M3 chip, stunning Liquid Retina XDR display, and up to 22 hours of battery life for creative professionals.",
    category: "Laptop",
    price: 989.99,
    rating: { rate: 4.5, count: 940 },
    image: "https://www.ione.com.kh/wp-content/uploads/2023/11/1-2.jpg",
  },

  {
    id: 21,
    title: "iPhone 15",
    description:
      "Apple’s powerful smartphone with Dynamic Island, enhanced camera system, A16 Bionic chip, and durable design in beautiful color options.",
    category: "Phone",
    price: 959.99,
    rating: { rate: 4.7, count: 760 },
    image:
      "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN_67590992-2712-461b-b8f6-1c7da8892499.jpg",
  },
  {
    id: 22,
    title: "HUAWEI MatePad Pro",
    description:
      "Sleek and lightweight tablet with a 120Hz display, Snapdragon processor, and multi-window support. Great for productivity and creativity.",
    category: "Tablet",
    price: 229.99,
    rating: { rate: 3.9, count: 80 },
    image:
      "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/plp-x/tablets-v5/product-shelf-and-pop-up/view-all/all-matepad-11-5-s.jpg",
  },
  {
    id: 23,
    title: "SoundCore Us",
    description:
      "Premium wireless speaker with 360° sound, waterproof design, and deep bass. Ideal for both indoor and outdoor music lovers.",
    category: "Speaker",
    price: 216.99,
    rating: { rate: 4.2, count: 100 },
    image:
      "https://cdn.shopify.com/s/files/1/0516/3761/6830/files/A3138011_TD_01_US_V1_fb494107-00e4-4da2-ad64-4ce94963217a.jpg",
  },
  {
    id: 24,
    title: "Samsung S23 Ultra",
    description:
      "Flagship Samsung phone with an incredible 200MP camera, S Pen support, and Snapdragon 8 Gen 2 for ultra performance and creativity.",
    category: "Phone",
    price: 59.99,
    rating: { rate: 4.0, count: 300 },
    image:
      "https://smartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com/Global_version_SM_S918_Galaxy_S23_Ultra_Front_Green_0dfd4cd343.jpg",
  },
  {
    id: 25,
    title: "Apple Watch Ultra 2",
    description:
      "Rugged smartwatch built for adventurers, with advanced fitness tracking, dive features, and a stunning Always-On Retina display.",
    category: "SmartWatch",
    price: 89.99,
    rating: { rate: 4.2, count: 240 },
    image:
      "https://istore.co.na/cdn/shop/files/Apple_Watch_Ultra_2_LTE_49mm_Titanium_Blue_Alpine_Loop_PDP_Image_Position-1__WWEN_2048x.jpg",
  },
  {
    id: 26,
    title: "Beat HeadPhone",
    description:
      "Stylish over-ear headphones by Beats with spatial audio, noise cancellation, and bold design. Built for immersive music experiences.",
    category: "Headphone",
    price: 165.99,
    rating: { rate: 4.8, count: 95 },
    image:
      "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/plp/plp-studiopro-sandstone.jpg.large.2x.jpg",
  },

   {
    id: 27,
    title: "iPhone 16 Pro",
    description:
      "Next-gen Apple smartphone with titanium build, advanced triple camera system, A18 chip, and on-device AI features for a seamless experience.",
    category: "Phone",
    price: 659.99,
    rating: { rate: 4.7, count: 760 },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQbRSovU7j24flAPsLJPTU5J7dkbT6O3mkPNH_B_cJSbBUC5mOndd4_CjuQrGQ4G_pzV8",
  },
];

let filtered = [...products];

const cardLayout = document.getElementById("cardLayout");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const categorySelect = document.getElementById("categorySelect");
const priceRange = document.getElementById("priceRange");
const minPriceLabel = document.getElementById("minPriceLabel");
const maxPriceLabel = document.getElementById("maxPriceLabel");
const filterBtn = document.getElementById("filterBtn");

let maxPrice = +priceRange.value;

// Render stars based on rating
function renderStars(rate) {
  const full = Math.floor(rate);
  const half = rate % 1 >= 0.5;
  let stars = "";
  for (let i = 0; i < full; i++) {
    stars += `<svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>`;
  }
  if (half) {
    stars += `<svg class="w-4 h-4 text-yellow-400" viewBox="0 0 20 20"><defs><linearGradient id="half"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>`;
  }
  return stars;
}

// Render cards
function renderCards(data) {
  cardLayout.innerHTML = data.length
    ? data
        .map(
          (product) => `
    <a href="../detailProduct.html?id=${product.id}" onclick="storeProduct(${
            product.id
          })" class="block group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div class="aspect-square overflow-hidden bg-white relative">
        <img
          src="${product.image}"
          alt="${product.title}"
          class="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute top-4 left-4">
          <span class="inline-block px-3 py-1.5 text-xs font-medium bg-white/90 backdrop-blur-sm text-primary-600 rounded-full shadow-sm">
            ${product.category}
          </span>
        </div>
      </div>
      <div class="p-6">
        <h2 class="text-gray-900 font-bold mb-3 line-clamp-2 group-hover:text-primary-500 transition-colors">
          ${product.title}
        </h2>
        <div class="flex items-center mb-4">
          <div class="flex items-center">
            ${renderStars(product.rating.rate)}
            <span class="ml-2 text-sm text-gray-600">(${
              product.rating.count
            })</span>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-2xl font-bold text-primary-600">
            $${product.price}
          </span>
         <button
  class="add-to-cart-btn px-3 py-2 rounded-lg bg-orange-500 hover:bg-primary-500 text-white shadow-md flex items-center justify-center transition-all duration-300 transform hover:scale-110"
  data-id="${product.id}"
  data-title="${product.title}"
  data-price="${product.price}"
  data-image="${product.image}">
 Add To Cart
</button>

        </div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  `
        )
        .join("")
    : `
      <div class="col-span-full text-center py-16">
        <div class="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-50  rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-16 h-16 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-900  mb-3">No products found</h3>
        <p class="text-gray-600  mb-6 max-w-md mx-auto">
          We couldn't find any products matching your criteria. Try adjusting your search or filter settings.
        </p>
        <button
          id="clear-filters"
          class="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-400 text-white rounded-xl hover:from-primary-600 hover:to-primary-500 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Clear Filters
        </button>
      </div>
    `;
}



function applyFilters() {
  const query = searchInput.value.toLowerCase();
  const sort = sortSelect.value;
  const category = categorySelect.value;
  const maxPrice = +priceRange.value;

  let filtered = products.filter((p) => {
    return (
      p.title.toLowerCase().includes(query) &&
      (category === "all" || p.category === category) &&
      p.price <= maxPrice
    );
  });

  switch (sort) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating.rate - a.rating.rate);
      break;
    case "popularity":
      filtered.sort((a, b) => b.rating.count - a.rating.count);
      break;
  }

  renderCards(filtered);
  document.getElementById(
    "resultsCount"
  ).textContent = `Showing ${filtered.length} of ${products.length} results`;
}

priceRange.addEventListener("input", () => {
  maxPrice = +priceRange.value;
  maxPriceLabel.textContent = maxPrice;
  applyFilters();
});

// Populate category dropdown
function populateCategories() {
  const categories = ["all", ...new Set(products.map((p) => p.category))];
  categorySelect.innerHTML = categories
    .map(
      (cat) =>
        `<option value="${cat}">${
          cat === "all" ? "All Categories" : cat
        }</option>`
    )
    .join("");
}

// Event Listeners
searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);
categorySelect.addEventListener("change", applyFilters);
priceRange.addEventListener("input", () => {
  maxPrice = +priceRange.value;
  maxPriceLabel.textContent = maxPrice;
});
filterBtn.addEventListener("click", applyFilters);

// Initial setup
populateCategories();
renderCards(filtered);
