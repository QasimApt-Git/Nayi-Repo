/* =============================================
   COSY AIRCONDITIONERS — app.js
   All interactive features
   ============================================= */

// ---- Product Data (for compare feature) ----
const products = {
  "samsung-windfree": {
    name: "Samsung WindFree Elite",
    brand: "Samsung",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "WindFree™ + AI",
    wifi: "Yes",
    filter: "HEPA + Deodorizer",
    warranty: "5 Years",
    price: "PKR 145,000",
    noise: "19 dB (ultra-silent)",
    cooling: "5,200 W"
  },
  "samsung-classic": {
    name: "Samsung Wind-Free Classic",
    brand: "Samsung",
    capacity: "1 Ton",
    star: "3-Star",
    tech: "WindFree™",
    wifi: "Yes",
    filter: "Anti-Bacterial",
    warranty: "3 Years",
    price: "PKR 98,000",
    noise: "22 dB",
    cooling: "3,500 W"

  },
  "lg-dual": {
    name: "LG Dual Inverter Pro",
    brand: "LG",
    capacity: "2 Ton",
    star: "5-Star",
    tech: "Dual Inverter",
    wifi: "Yes (ThinQ)",
    filter: "Anti-Virus + HD",
    warranty: "10 Yrs (Compressor)",
    price: "PKR 178,000",
    noise: "21 dB",
    cooling: "6,700 W"
  },
  "daikin-streamer": {
    name: "Daikin Streamer X-Series",
    brand: "Daikin",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "Streamer Technology",
    wifi: "Yes",
    filter: "Streamer Purifier",
    warranty: "5 Years",
    price: "PKR 195,000",
    noise: "20 dB",
    cooling: "5,200 W"
  },
  "whirlpool-magicool": {
    name: "Whirlpool Magicool Pro",
    brand: "Whirlpool",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "6th Sense AI",
    wifi: "Yes",
    filter: "Auto-Dry + Purifier",
    warranty: "5 Years",
    price: "PKR 125,000",
    noise: "24 dB",
    cooling: "5,100 W"
  },
  "haier-cleancool": {
    name: "Haier CleanCool Ultra",
    brand: "Haier",
    capacity: "1 Ton",
    star: "3-Star",
    tech: "Self-Clean",
    wifi: "No",
    filter: "Self-Cleaning Filter",
    warranty: "3 Years",
    price: "PKR 75,000",
    noise: "26 dB",
    cooling: "3,400 W"
  },
  "gree-fairy": {
    name: "Gree Fairy Series",
    brand: "Gree",
    capacity: "1.5 Ton",
    star: "5-Star",
    tech: "Heat Pump Inverter",
    wifi: "No",
    filter: "Dust Filter",
    warranty: "3 Years",
    price: "PKR 85,000",
    noise: "25 dB",
    cooling: "5,000 W"
  }
};

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

  const pA = products[keyA];
  const pB = products[keyB];

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
    // 1. Product details nikalna
    const productData = products[productId];
    if (!productData) return;

    const name = productData.name;
    const priceStr = productData.price;
    const maxStock = productData.stock;

    let numericPrice = parseInt(priceStr.replace(/[^\d]/g, '')) || 0;

    // 2. Check karein ke cart mein pehle se hai ya nahi
    const existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        // Agar pehle se hai, toh check karein stock limit
        if (existingProduct.quantity < maxStock) {
            existingProduct.quantity += 1;
            total += numericPrice;
            alert(`${name} quantity updated!`);
        } else {
            alert(`Sorry! Only ${maxStock} units of ${name} are available in stock.`);
            return; // Yahin se wapis, mazeed add nahi hoga
        }
    } else {
        // Agar naya hai toh check karein stock zero toh nahi
        if (maxStock > 0) {
            cart.push({ name, price: numericPrice, quantity: 1, maxStock: maxStock });
            total += numericPrice;
        } else {
            alert("Out of stock!");
            return;
        }
    }
    
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
  if (countEl) countEl.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (totalNavEl) totalNavEl.innerText = total.toLocaleString();

  const tableBody = document.getElementById('cart-table-body');
  const pageTotal = document.getElementById('cart-page-total');

  if (tableBody) {
    if (cart.length === 0) {
      tableBody.innerHTML = '<tr><td colspan="4" class="text-center">Your cart is empty</td></tr>';
      if (pageTotal) pageTotal.innerText = "0";
    } else {
      tableBody.innerHTML = cart.map((item, index) => {
        // Safety check: agar quantity missing ho toh 1 dikhaye
        const qty = item.quantity || 1;
        return `
        <tr>
            <td>${item.name}</td>
            <td>PKR ${item.price.toLocaleString()}</td>
            <td>x ${qty}</td>
            <td><button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button></td>
        </tr>`;
      }).join('');

      // Navbar count ke liye bhi safety lagayein:
      if (countEl) {
        const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
        countEl.innerText = totalItems;
      }
      if (pageTotal) pageTotal.innerText = total.toLocaleString();
    }
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