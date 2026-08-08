const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();

  try {
    tg.setHeaderColor("#070707");
    tg.setBackgroundColor("#070707");
  } catch (e) {}
}


/* =========================
   PRODUITS JNR
========================= */

const products = [
  {
    id: 1,
    name: "JNR Essential",
    category: "9K",
    price: 9000,
    description: "La sélection essentielle JNR."
  },
  {
    id: 2,
    name: "JNR Classic",
    category: "9K",
    price: 9000,
    description: "Un article simple et efficace."
  },
  {
    id: 3,
    name: "JNR Premium",
    category: "15K",
    price: 15000,
    description: "Une sélection premium signée JNR."
  },
  {
    id: 4,
    name: "JNR Urban",
    category: "15K",
    price: 15000,
    description: "Un style moderne et propre."
  },
  {
    id: 5,
    name: "JNR Black",
    category: "20K",
    price: 20000,
    description: "Une sélection haut de gamme."
  },
  {
    id: 6,
    name: "JNR Gold",
    category: "20K",
    price: 20000,
    description: "Notre sélection exclusive."
  }
];


let cart = JSON.parse(
  localStorage.getItem("jnrCart") || "[]"
);

let activeCategory = "Tous";
let searchQuery = "";
let selectedProduct = null;
let modalQuantity = 1;


/* =========================
   PRIX FCFA
========================= */

function formatPrice(price) {
  return new Intl.NumberFormat("fr-FR").format(price) + " FCFA";
}


/* =========================
   ELEMENTS
========================= */

const productsContainer =
  document.getElementById("products");

const categoriesContainer =
  document.getElementById("categories");

const searchInput =
  document.getElementById("search");


/* =========================
   CATEGORIES
========================= */

function renderCategories() {

  categoriesContainer.innerHTML = "";

  ["Tous", "9K", "15K", "20K"].forEach(category => {

    const button = document.createElement("button");

    button.className = "category";

    if (category === activeCategory) {
      button.classList.add("active");
    }

    button.textContent = category;

    button.onclick = () => {

      activeCategory = category;

      renderCategories();
      renderProducts();

      haptic();

    };

    categoriesContainer.appendChild(button);

  });

}


/* =========================
   PRODUITS
========================= */

function renderProducts() {

  const filtered = products.filter(product => {

    const categoryOK =
      activeCategory === "Tous" ||
      product.category === activeCategory;

    const searchOK =
      product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    return categoryOK && searchOK;

  });


  productsContainer.innerHTML = "";


  if (!filtered.length) {

    productsContainer.innerHTML = `
      <div class="empty">
        Aucun article trouvé.
      </div>
    `;

    return;
  }


  filtered.forEach((product, index) => {

    const card = document.createElement("article");

    card.className = "product";

    card.style.animationDelay =
      `${index * 60}ms`;


    card.innerHTML = `

      <div class="product-image">

        <div class="product-bottle">
          JNR
        </div>

      </div>


      <div class="product-info">

        <h3>
          ${product.name}
        </h3>

        <p>
          ${product.category}
        </p>


        <div class="product-bottom">

          <span class="price">
            ${formatPrice(product.price)}
          </span>

          <button
            class="add"
            onclick="
              event.stopPropagation();
              addToCart(${product.id});
            "
          >
            +
          </button>

        </div>

      </div>
    `;


    card.onclick = () => {
      openProduct(product.id);
    };


    productsContainer.appendChild(card);

  });

}


/* =========================
   RECHERCHE
========================= */

searchInput.addEventListener("input", e => {

  searchQuery = e.target.value;

  renderProducts();

});


/* =========================
   RESET
========================= */

function resetFilters() {

  activeCategory = "Tous";
  searchQuery = "";

  searchInput.value = "";

  renderCategories();
  renderProducts();

}


/* =========================
   PANIER
========================= */

function saveCart() {

  localStorage.setItem(
    "jnrCart",
    JSON.stringify(cart)
  );

  updateCart();

}


function updateCart() {

  const count = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  document.getElementById(
    "cartCount"
  ).textContent = count;


  renderCart();
  renderCartPage();

}


function addToCart(id, quantity = 1) {

  const product = products.find(
    p => p.id === id
  );

  if (!product) return;


  const existing = cart.find(
    item => item.id === id
  );


  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: id,
      quantity: quantity
    });
  }


  saveCart();

  haptic("medium");

  showToast(
    `${product.name} ajouté au panier ✓`
  );

}


/* =========================
   QUANTITES
========================= */

function changeQuantity(id, amount) {

  const item = cart.find(
    item => item.id === id
  );

  if (!item) return;


  item.quantity += amount;


  if (item.quantity <= 0) {

    cart = cart.filter(
      item => item.id !== id
    );

  }


  saveCart();

}


function removeFromCart(id) {

  cart = cart.filter(
    item => item.id !== id
  );

  saveCart();

}


/* =========================
   TOTAL
========================= */

function calculateTotal() {

  return cart.reduce(
    (total, item) => {

      const product = products.find(
        p => p.id === item.id
      );

      if (!product) return total;

      return total +
        product.price * item.quantity;

    },
    0
  );

}


/* =========================
   PANIER RAPIDE
========================= */

function openCart() {

  renderCart();

  document
    .getElementById("cart")
    .classList.add("open");

  document
    .getElementById("overlay")
    .classList.add("show");

}


function closeCart() {

  document
    .getElementById("cart")
    .classList.remove("open");

  document
    .getElementById("overlay")
    .classList.remove("show");

}


/* =========================
   RENDU PANIER
========================= */

function renderCart() {

  const container =
    document.getElementById("cartItems");


  if (!cart.length) {

    container.innerHTML = `
      <div class="empty">
        🛒<br><br>
        Ton panier est vide.
      </div>
    `;

  } else {

    container.innerHTML = "";


    cart.forEach(item => {

      const product = products.find(
        p => p.id === item.id
      );

      if (!product) return;


      const element =
        document.createElement("div");

      element.className = "cart-item";


      element.innerHTML = `

        <div class="cart-image">
          JNR
        </div>


        <div>

          <h4>
            ${product.name}
          </h4>

          <p>
            ${formatPrice(product.price)}
          </p>


          <div class="cart-controls">

            <button
              onclick="
                changeQuantity(
                  ${product.id},
                  -1
                )
              "
            >
              −
            </button>

            <b>
              ${item.quantity}
            </b>

            <button
              onclick="
                changeQuantity(
                  ${product.id},
                  1
                )
              "
            >
              +
            </button>

          </div>

        </div>


        <button
          class="remove"
          onclick="
            removeFromCart(
              ${product.id}
            )
          "
        >
          Suppr.
        </button>

      `;


      container.appendChild(element);

    });

  }


  document.getElementById(
    "cartTotal"
  ).textContent =
    formatPrice(calculateTotal());

}


/* =========================
   PAGE PANIER
========================= */

function showCartPage() {

  closeCart();

  document.getElementById(
    "home"
  ).style.display = "none";


  document.getElementById(
    "cartPage"
  ).classList.add("active");


  setActiveNav("navCart");

  renderCartPage();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function renderCartPage() {

  const container =
    document.getElementById(
      "cartPageItems"
    );


  if (!cart.length) {

    container.innerHTML = `
      <div class="empty">

        🛒

        <br><br>

        Ton panier est vide.

        <br><br>

        <button
          class="discover-btn"
          onclick="goHome()"
        >
          Découvrir les articles →
        </button>

      </div>
    `;

  } else {

    container.innerHTML = "";


    cart.forEach(item => {

      const product =
        products.find(
          p => p.id === item.id
        );

      if (!product) return;


      const element =
        document.createElement("div");


      element.className =
        "cart-page-item";


      element.innerHTML = `

        <div class="cart-page-image">
          JNR
        </div>


        <div class="cart-page-info">

          <h3>
            ${product.name}
          </h3>

          <span>
            ${product.category}
          </span>

          <strong>
            ${formatPrice(product.price)}
          </strong>


          <div class="cart-controls">

            <button
              onclick="
                changeQuantity(
                  ${product.id},
                  -1
                )
              "
            >
              −
            </button>

            <b>
              ${item.quantity}
            </b>

            <button
              onclick="
                changeQuantity(
                  ${product.id},
                  1
                )
              "
            >
              +
            </button>

          </div>

        </div>


        <button
          class="remove"
          onclick="
            removeFromCart(
              ${product.id}
            )
          "
        >
          ×
        </button>

      `;


      container.appendChild(element);

    });

  }


  document.getElementById(
    "pageCartTotal"
  ).textContent =
    formatPrice(calculateTotal());

}


/* =========================
   ACCUEIL
========================= */

function goHome() {

  document.getElementById(
    "cartPage"
  ).classList.remove("active");


  document.getElementById(
    "home"
  ).style.display = "block";


  setActiveNav("navHome");


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================
   BOUTIQUE
========================= */

function scrollToShop() {

  document.getElementById(
    "cartPage"
  ).classList.remove("active");


  document.getElementById(
    "home"
  ).style.display = "block";


  setActiveNav("navShop");


  setTimeout(() => {

    document.getElementById(
      "shop"
    ).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 50);

}


/* =========================
   NAVIGATION
========================= */

function setActiveNav(id) {

  document
    .querySelectorAll(".bottom-nav button")
    .forEach(button => {
      button.classList.remove("active");
    });


  document
    .getElementById(id)
    ?.classList.add("active");

}


/* =========================
   PRODUIT
========================= */

function openProduct(id) {

  selectedProduct =
    products.find(
      p => p.id === id
    );

  if (!selectedProduct) return;


  modalQuantity = 1;


  document.getElementById(
    "modalCategory"
  ).textContent =
    selectedProduct.category;


  document.getElementById(
    "modalName"
  ).textContent =
    selectedProduct.name;


  document.getElementById(
    "modalDescription"
  ).textContent =
    selectedProduct.description;


  document.getElementById(
    "modalPrice"
  ).textContent =
    formatPrice(
      selectedProduct.price
    );


  document.getElementById(
    "modalQty"
  ).textContent = "1";


  document.getElementById(
    "modalImage"
  ).innerHTML = `
    <div class="product-bottle">
      JNR
    </div>
  `;


  document
    .getElementById("productModal")
    .classList.add("show");

}


function closeProduct() {

  document
    .getElementById("productModal")
    .classList.remove("show");

}


/* =========================
   QUANTITE MODAL
========================= */

function changeModalQty(amount) {

  modalQuantity += amount;

  if (modalQuantity < 1) {
    modalQuantity = 1;
  }


  document.getElementById(
    "modalQty"
  ).textContent =
    modalQuantity;

}


function addModalProduct() {

  if (!selectedProduct) return;


  addToCart(
    selectedProduct.id,
    modalQuantity
  );


  closeProduct();

}


/* =========================
   COMMANDE
========================= */

function checkout() {

  if (!cart.length) {

    showToast(
      "Ton panier est vide."
    );

    return;
  }


  const order = {

    shop: "JNR",

    products: cart,

    total: calculateTotal(),

    telegramUser:
      tg?.initDataUnsafe?.user || null,

    date:
      new Date().toISOString()

  };


  console.log(
    "COMMANDE JNR :",
    order
  );


  try {

    tg?.sendData(
      JSON.stringify(order)
    );

  } catch (e) {

    console.log(e);

  }


  showToast(
    "Commande envoyée ✓"
  );

}


/* =========================
   TELEGRAM
========================= */

function haptic(type = "light") {

  try {

    tg?.HapticFeedback
      ?.impactOccurred(type);

  } catch (e) {}

}


/* =========================
   TOAST
========================= */

function showToast(message) {

  const toast =
    document.createElement("div");


  toast.textContent = message;

  toast.style.position = "fixed";
  toast.style.zIndex = "9999";
  toast.style.left = "50%";
  toast.style.bottom = "95px";
  toast.style.transform = "translateX(-50%)";

  toast.style.padding = "13px 19px";

  toast.style.background = "#ffd400";
  toast.style.color = "#000";

  toast.style.borderRadius = "50px";

  toast.style.fontSize = "11px";
  toast.style.fontWeight = "900";

  toast.style.boxShadow =
    "0 10px 35px rgba(0,0,0,.5)";


  document.body.appendChild(toast);


  setTimeout(() => {
    toast.remove();
  }, 1800);

}


/* =========================
   INITIALISATION
========================= */

renderCategories();
renderProducts();
updateCart();

console.log("JNR STORE chargé.");