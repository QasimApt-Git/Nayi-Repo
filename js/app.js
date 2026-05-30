/* =============================================
   COSY AIRCONDITIONERS — app.js
   All interactive features
   ============================================= */

// ---- Product Data (for compare feature) ----

const products = [
  {
    id: "samsung-windfree",
    name: "WindFree Elite",
    brand: "Samsung",
    image: "Image/Sumsung/Sumsung-product1.png",
    detailsPage: "docs/samsung-windfree-elite.html",

    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "Smart AI",

    wifi: "Yes",
    filter: "HEPA + Deodorizer",
    warranty: "5 Years",

    price: "PKR 145,000",
    noise: "19 dB",
    cooling: "5,200 W",

    description:
      "WindFree™ technology with 23,000 micro air holes. Zero direct wind. Maximum comfort."
  },



  
  {
    id: "samsung-classic",
    name: "Wind-Free Classic",
    brand: "Samsung",
    image: "Image/Sumsung/Sumsung-product2.png",
    detailsPage: "docs/samsung-classic.html",

    capacity: "1 Ton",
    star: "3-Star",
    tech: "Wi-Fi",

    wifi: "Yes",
    filter: "Anti-Bacterial",
    warranty: "3 Years",

    price: "PKR 100,000",
    noise: "22 dB",
    cooling: "3,500 W",

    description:
      "Budget-friendly Samsung quality with essential smart features and Wi-Fi control."
  },

  {
    id: "lg-dual",
    name: "Dual Inverter Pro",
    brand: "LG",
    image: "Image/LG/Lg-product.png",
    detailsPage: "docs/lg-dual-inverter-pro.html",

    capacity: "2 Ton",
    star: "5-Star",
    tech: "Dual Inverter",

    wifi: "Yes",
    filter: "Anti-Virus + HD",
    warranty: "10 Years",

    price: "PKR 178,000",
    noise: "21 dB",
    cooling: "6,700 W",

    description:
      "LG's Dual Inverter compressor saves up to 70% energy."
  },

  {
    id: "daikin-streamer",
    name: "Streamer X-Series",
    brand: "Daikin",
    image: "Image/Daikin/Daikin-2.5KW-670x350.png",
    detailsPage: "docs/daikin-streamer.html",

    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "Purifier",

    wifi: "Yes",
    filter: "Streamer Purifier",
    warranty: "5 Years",

    price: "PKR 195,000",
    noise: "20 dB",
    cooling: "5,200 W",

    description:
      "Daikin Streamer technology deactivates 99.9% viruses and bacteria while cooling."
  },

  {
    id: "whirlpool-magicool",
    name: "Magicool Pro",
    brand: "Whirlpool",
    image: "Image/Whirlpool/fff.png",
    detailsPage: "docs/whirlpool-magicool.html",

    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "Auto-Dry",

    wifi: "Yes",
    filter: "Auto-Dry + Purifier",
    warranty: "5 Years",

    price: "PKR 125,000",
    noise: "24 dB",
    cooling: "5,100 W",

    description:
      "6th Sense technology auto-adjusts cooling and saves power intelligently."
  },

  {
    id: "haier-cleancool",
    name: "CleanCool Ultra",
    brand: "Haier",
    image: "Image/haier/fsqfddqd.png",
    detailsPage: "docs/haier-cleancool.html",

    capacity: "1 Ton",
    star: "3-Star",
    tech: "Eco Mode",

    wifi: "No",
    filter: "Self-Cleaning Filter",
    warranty: "3 Years",

    price: "PKR 75,000",
    noise: "26 dB",
    cooling: "3,400 W",

    description:
      "Self-cleaning filter with eco-mode. Affordable excellence for small rooms."
  },

  {
    id: "gree-fairy",
    name: "Fairy Series",
    brand: "Gree",
    image: "Image/Gree/download.png",
    detailsPage: "docs/gree-fairy.html",

    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "Heat+Cool",

    wifi: "No",
    filter: "Dust Filter",
    warranty: "3 Years",

    price: "PKR 85,000",
    noise: "25 dB",
    cooling: "5,000 W",

    description:
      "Heat and cool in one unit. Best value for money with turbo cooling mode."
  }
];



function displayProducts() {
  const productGrid = document.getElementById("productGrid");

  if (!productGrid) return;

  productGrid.innerHTML = "";

  


  products.forEach(product => {

    productGrid.innerHTML += `

      <div class="col-md-6 col-lg-4 product-item" data-brand="${product.brand.toLowerCase()}">

        <div class="product-card">

          <div class="product-brand-tag">
            ${product.brand}
          </div>

          <div class="product-visual">

            <img src="${product.image}" class="card-img" alt="${product.name}">

            <div class="product-glow"></div>

          </div>

          <div class="product-info">

            <h5>${product.name}</h5>

            <p class="product-specs">
              <i class="bi bi-snow2"></i> ${product.capacity}
              &nbsp;
              <i class="bi bi-lightning"></i> ${product.star}
              &nbsp;
              <i class="bi bi-cpu"></i> ${product.tech}
            </p>

            <p class="product-desc">
              ${product.description}
            </p>

            <div class="d-flex justify-content-between align-items-center mt-3">

              <span class="product-price">
                ${product.price}
              </span>

              <a href="${product.detailsPage}"
                 class="btn btn-sm btn-glow-sm"
                 target="_blank">

                Details
                <i class="bi bi-file-text"></i>

              </a>

            </div>

            <div class="d-flex justify-content-between align-items-center mt-3 gap-3">

             <button
  class="btn btn-info w-100"
  onclick="addToCart('${product.id}')">

  Add to Cart

</button>

              <button
                class="btn btn-dark w-100"
                onclick="buyNow()">

                Buy Now

              </button>

            </div>

          </div>

        </div>

      </div>
    `;
  });
}

if (document.getElementById("productGrid")) {
  displayProducts();
}



// ---- Compare Fields Labels ----
const compareFields = [
  { key: "brand", label: "Brand" },
  { key: "capacity", label: "Capacity" },
  { key: "star", label: "Energy Rating" },
  { key: "tech", label: "Technology" },
  { key: "wifi", label: "Wi-Fi Control" },
  { key: "filter", label: "Air Filter" },
  { key: "cooling", label: "Cooling Power" },
  { key: "noise", label: "Noise Level" },
  { key: "warranty", label: "Warranty" },
  { key: "price", label: "Price" }
];

// =====================
// 1. BRAND FILTER
// =====================
function initBrandFilter() {
  const btns = document.querySelectorAll('#brandFilters .btn-brand');
  const productItems = document.querySelectorAll('.product-item');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const brand = btn.getAttribute('data-brand');

      // Filter products
      let visibleCount = 0;
      productItems.forEach(item => {
        const itemBrand = item.getAttribute('data-brand');
        if (brand === 'all' || itemBrand === brand) {
          item.classList.remove('hidden');
          visibleCount++;
        } else {
          item.classList.add('hidden');
        }
      });

      // Show "no products" if none visible
      const noMsg = document.getElementById('noProducts');
      if (noMsg) noMsg.classList.toggle('d-none', visibleCount > 0);
    });
  });

  // Brand logo cards also filter
  document.querySelectorAll('.brand-card-wrap').forEach(card => {
    card.addEventListener('click', () => {
      const brand = card.getAttribute('data-brand');
      // Activate the filter button
      btns.forEach(b => {
        if (b.getAttribute('data-brand') === brand) b.click();
      });
      // Scroll to products
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// =====================
// 2. COMPARE FUNCTION
// =====================
function compareProducts() {
  const keyA = document.getElementById('compareA').value;
  const keyB = document.getElementById('compareB').value;

  if (!keyA || !keyB) {
    alert('Please select two products to compare!');
    return;
  }
  if (keyA === keyB) {
    alert('Please select two different products!');
    return;
  }

  const pA = products.find(p => p.id === keyA);
const pB = products.find(p => p.id === keyB);

  document.getElementById('colA').textContent = pA.name;
  document.getElementById('colB').textContent = pB.name;

  const tbody = document.getElementById('compareBody');
  tbody.innerHTML = '';

  compareFields.forEach(f => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${f.label}</td>
      <td>${pA[f.key]}</td>
      <td>${pB[f.key]}</td>
    `;
    tbody.appendChild(tr);
  });

  const resultDiv = document.getElementById('compareResult');
  resultDiv.classList.remove('d-none');
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// =====================
// 3. CONTACT FORM
// =====================
function sendMsg() {
  const success = document.getElementById('msgSuccess');
  if (success) {
    success.classList.remove('d-none');
    setTimeout(() => success.classList.add('d-none'), 5000);
  }
}

// =====================
// 4. NAVBAR SCROLL EFFECT
// =====================
function initNavbarScroll() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(2,4,8,0.98)';
    } else {
      nav.style.background = 'rgba(2,4,8,0.9)';
    }
  });
}

// =====================
// 5. AC TEMP ANIMATION
// =====================
function initTempAnimation() {
  const tempEl = document.getElementById('heroTemp');
  if (!tempEl) return;
  const temps = ['16°C', '18°C', '20°C', '22°C', '24°C', '22°C', '20°C', '18°C'];
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % temps.length;
    tempEl.style.opacity = '0';
    setTimeout(() => {
      tempEl.textContent = temps[idx];
      tempEl.style.opacity = '1';
    }, 300);
    tempEl.style.transition = 'opacity .3s';
  }, 2000);
}

// =====================
// 6. SCROLL REVEAL (simple)
// =====================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .brand-logo-card, .contact-info-card, .contact-form-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
}

// =====================
// INIT ALL
// =====================
document.addEventListener('DOMContentLoaded', () => {
  initBrandFilter();
  initNavbarScroll();
  initTempAnimation();
  initScrollReveal();
});


let cart = [];
let total = 0;

try {
  cart = JSON.parse(localStorage.getItem('userCart')) || [];
  total = parseInt(localStorage.getItem('cartTotal')) || 0;
} catch (e) {
  console.error("Local storage error:", e);
  cart = [];
  total = 0;
}

// 1. ADD TO CART
function addToCart(productId) {
    const productData = products.find(p => p.id === productId);
    if (!productData) return;

    let numericPrice = productData.price;
    if (typeof numericPrice === 'string') {
        // Sirf numbers nikalna, chahe PKR ho ya $
        numericPrice = parseInt(numericPrice.replace(/[^\d]/g, '')) || 0;
    }
    
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ 
            id: productId, 
            name: productData.name, 
            price: numericPrice, 
            quantity: 1 
        });
    }
    
    total += numericPrice;
    updateStorage();
    renderCart();
}
// 2. SAVE DATA
function updateStorage() {
  localStorage.setItem('userCart', JSON.stringify(cart));
  localStorage.setItem('cartTotal', total.toString());
}

// 3. RENDER UI (Navbar + Table)

function renderCart() {
    const countEl = document.getElementById("cart-count");
    const totalNavEl = document.getElementById("total");
    const tableBody = document.getElementById('cart-table-body');
    const pageTotal = document.getElementById('cart-page-total');
    const emptyMsg = document.getElementById('empty-msg');
    const cartContent = document.getElementById('cart-content');

    // Navbar update
    const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    if (countEl) countEl.innerText = totalItems;
    if (totalNavEl) totalNavEl.innerText = total.toLocaleString();

    // Agar Cart page par nahi hain toh yahin ruk jayein
    if (!tableBody) return;

    if (cart.length === 0) {
        if(cartContent) cartContent.classList.add('d-none');
        if(emptyMsg) emptyMsg.classList.remove('d-none');
    } else {
        if(cartContent) cartContent.classList.remove('d-none');
        if(emptyMsg) emptyMsg.classList.add('d-none');

        tableBody.innerHTML = cart.map((item, index) => `
            <tr>
                <td>${item.name}</td>
                <td>PKR ${item.price.toLocaleString()}</td>
                <td>${item.quantity}</td>
                <td><button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button></td>
            </tr>
        `).join('');

        if (pageTotal) pageTotal.innerText = total.toLocaleString();
    }
}

// 4. REMOVE ITEM
function removeItem(index) {
  const item = cart[index];
  if (item.quantity > 1) {
    // Agar 1 se zyada hain to sirf quantity kam karein
    item.quantity -= 1;
    total -= item.price;
  } else {
    // Agar aakhri piece hai to row hi khatam kar dein
    total -= item.price;
    cart.splice(index, 1);
  }
  updateStorage();
  renderCart();
}
// 5. CHECKOUT
function processPurchase() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  localStorage.clear();
  cart = [];
  total = 0;

  document.body.innerHTML = `
        <div class="text-center mt-5" style="color: white; background: #050505; height: 100vh; padding-top: 100px;">
            <h1 class="text-info">🎉 Order Success!</h1>
            <p>Thank you for choosing COSY AC.</p>
            <button class="btn btn-info" onclick="window.location.href='index.html'">Go Back To Shop</button>
        </div>`;
}

// Initialization on Load
document.addEventListener('DOMContentLoaded', () => {
  renderCart();

  // Baaki animations ko load karein agar exist karti hain
  if (typeof initBrandFilter === 'function') initBrandFilter();
  if (typeof initNavbarScroll === 'function') initNavbarScroll();
  if (typeof initTempAnimation === 'function') initTempAnimation();
  if (typeof initScrollReveal === 'function') initScrollReveal();
});