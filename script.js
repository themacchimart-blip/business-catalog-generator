/* =========================================
   THE MACCHI MART
   Catalog + Cart + WhatsApp Ordering
========================================= */


/* =========================================
   BUSINESS SETTINGS
========================================= */

// IMPORTANT:
// Replace this number later with your
// actual WhatsApp number including country code.
//
// Example India:
// 919876543210
//
// Do NOT use +, spaces or dashes.

const WHATSAPP_NUMBER = "918652065885";


/* =========================================
   STATE
========================================= */

let cart = [];
let selectedCategory = "all";
let searchText = "";


/* =========================================
   ELEMENTS
========================================= */

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");

const cartButton = document.getElementById("cartButton");
const cartPanel = document.getElementById("cartPanel");
const closeCartButton = document.getElementById("closeCart");
const overlay = document.getElementById("overlay");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const whatsappOrderButton =
  document.getElementById("whatsappOrder");

const productResultText =
  document.getElementById("productResultText");

const currentYear =
  document.getElementById("currentYear");


/* =========================================
   CURRENCY
========================================= */

function formatPrice(price) {
  return Number(price).toLocaleString("en-IN");
}


/* =========================================
   DISPLAY PRODUCTS
========================================= */

function displayProducts() {

  let filteredProducts = products.filter((product) => {

    const categoryMatch =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||

      product.description
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||

      product.category
        .toLowerCase()
        .includes(searchText.toLowerCase());

    return categoryMatch && searchMatch;
  });


  productGrid.innerHTML = "";


  if (filteredProducts.length === 0) {

    productGrid.innerHTML = `
      <div class="empty-cart">
        <h3>No products found</h3>
        <p>Try another search or category.</p>
      </div>
    `;

    productResultText.textContent =
      "0 products found";

    return;
  }


  filteredProducts.forEach((product) => {

    const productCard =
      document.createElement("article");

    productCard.className = "product-card";


    productCard.innerHTML = `

      <img
        class="product-image"
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
        onerror="
          this.src='https://placehold.co/600x450?text=Product+Image'
        "
      >

      <div class="product-info">

        <span class="product-category">
          ${product.category}
        </span>

        <h3 class="product-name">
          ${product.name}
        </h3>

        <p class="product-description">
          ${product.description}
        </p>

        <div class="product-bottom">

          <span class="product-price">
            ₹${formatPrice(product.price)}
          </span>

          ${
            product.inStock

              ? `
                <button
                  class="add-cart"
                  type="button"
                  onclick="addToCart(${product.id})"
                >
                  Add to Cart
                </button>
              `

              : `
                <button
                  class="add-cart"
                  type="button"
                  disabled
                >
                  Out of Stock
                </button>
              `
          }

        </div>

      </div>
    `;


    productGrid.appendChild(productCard);

  });


  productResultText.textContent =
    `${filteredProducts.length} products found`;
}


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener("input", (event) => {

  searchText = event.target.value.trim();

  displayProducts();
});


/* =========================================
   CATEGORY FILTER
========================================= */

categoryButtons.forEach((button) => {

  button.addEventListener("click", () => {

    categoryButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    selectedCategory =
      button.dataset.category;

    displayProducts();

  });

});


/* =========================================
   ADD TO CART
========================================= */

function addToCart(productId) {

  const product =
    products.find(
      (item) => item.id === productId
    );


  if (!product || !product.inStock) {
    return;
  }


  const existingItem =
    cart.find(
      (item) => item.id === productId
    );


  if (existingItem) {

    existingItem.quantity += 1;

  } else {

    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });

  }


  updateCart();

  openCart();
}


/* =========================================
   INCREASE QUANTITY
========================================= */

function increaseQuantity(productId) {

  const item =
    cart.find(
      (product) => product.id === productId
    );


  if (!item) {
    return;
  }


  item.quantity += 1;

  updateCart();
}


/* =========================================
   DECREASE QUANTITY
========================================= */

function decreaseQuantity(productId) {

  const item =
    cart.find(
      (product) => product.id === productId
    );


  if (!item) {
    return;
  }


  item.quantity -= 1;


  if (item.quantity <= 0) {

    removeFromCart(productId);

    return;
  }


  updateCart();
}


/* =========================================
   REMOVE FROM CART
========================================= */

function removeFromCart(productId) {

  cart = cart.filter(
    (item) => item.id !== productId
  );

  updateCart();
}


/* =========================================
   UPDATE CART
========================================= */

function updateCart() {

  cartItems.innerHTML = "";


  if (cart.length === 0) {

    cartItems.innerHTML = `
      <div class="empty-cart">

        <div style="font-size:45px;">
          🛒
        </div>

        <h3>Your cart is empty</h3>

        <p>
          Add some products to start your order.
        </p>

      </div>
    `;

  } else {

    cart.forEach((item) => {

      const cartItem =
        document.createElement("div");

      cartItem.className = "cart-item";


      cartItem.innerHTML = `

        <div>

          <h4>
            ${item.name}
          </h4>

          <p>
            ₹${formatPrice(item.price)}
            ×
            ${item.quantity}
          </p>


          <div class="cart-controls">

            <button
              class="quantity-btn"
              type="button"
              onclick="decreaseQuantity(${item.id})"
            >
              −
            </button>


            <strong>
              ${item.quantity}
            </strong>


            <button
              class="quantity-btn"
              type="button"
              onclick="increaseQuantity(${item.id})"
            >
              +
            </button>


            <button
              class="remove-item"
              type="button"
              onclick="removeFromCart(${item.id})"
            >
              Remove
            </button>

          </div>

        </div>


        <strong>
          ₹${formatPrice(
            item.price * item.quantity
          )}
        </strong>
      `;


      cartItems.appendChild(cartItem);

    });

  }


  const totalQuantity =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  const totalPrice =
    cart.reduce(
      (total, item) =>
        total +
        item.price * item.quantity,
      0
    );


  cartCount.textContent =
    totalQuantity;


  cartTotal.textContent =
    formatPrice(totalPrice);
}


/* =========================================
   OPEN CART
========================================= */

function openCart() {

  cartPanel.classList.add("open");
  overlay.classList.add("show");

  document.body.style.overflow = "hidden";
}


/* =========================================
   CLOSE CART
========================================= */

function closeCart() {

  cartPanel.classList.remove("open");
  overlay.classList.remove("show");

  document.body.style.overflow = "";
}


cartButton.addEventListener(
  "click",
  openCart
);


closeCartButton.addEventListener(
  "click",
  closeCart
);


overlay.addEventListener(
  "click",
  closeCart
);


/* =========================================
   WHATSAPP ORDER
========================================= */

function orderOnWhatsApp() {

  if (cart.length === 0) {

    alert(
      "Your cart is empty. Please add products first."
    );

    return;
  }


  if (
    WHATSAPP_NUMBER === "919999999999" ||
    WHATSAPP_NUMBER.trim() === ""
  ) {

    alert(
      "Please add the business WhatsApp number in script.js first."
    );

    return;
  }


  let message = "";

  message +=
    "🐠 *THE MACCHI MART*%0A";

  message +=
    "New Order Enquiry%0A%0A";


  let total = 0;


  cart.forEach((item, index) => {

    const itemTotal =
      item.price * item.quantity;

    total += itemTotal;


    message +=
      `${index + 1}. *${item.name}*%0A`;

    message +=
      `Qty: ${item.quantity}%0A`;

    message +=
      `Price: ₹${formatPrice(
        item.price
      )}%0A`;

    message +=
      `Subtotal: ₹${formatPrice(
        itemTotal
      )}%0A%0A`;

  });


  message +=
    `💰 *Total: ₹${formatPrice(total)}*%0A%0A`;

  message +=
    "Hello, I would like to order these products.";


  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


  window.open(
    whatsappURL,
    "_blank"
  );
}


/* =========================================
   WHATSAPP BUTTON
========================================= */

whatsappOrderButton.addEventListener(
  "click",
  orderOnWhatsApp
);


/* =========================================
   CURRENT YEAR
========================================= */

if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();
}


/* =========================================
   INITIAL LOAD
========================================= */

displayProducts();

updateCart();
