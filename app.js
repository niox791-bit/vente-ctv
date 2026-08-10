/* =========================================================
   PRODUITS JNR
========================================================= */

const products = [
    {
        id: 1,
        name: "JNR Falcon",
        desc: "Mytille / Cerise",
        priceNum: 1500,
        price: "1 500 FCFA",
        likes: 8,
        stock: 20,
        category: "categories",
        image: "images/jnr-falcon.jpg"
    },
    {
        id: 2,
        name: "JNR Falcon X 28000",
        desc: "Fraise / Kiwi",
        priceNum: 1800,
        price: "1 800 FCFA",
        likes: 12,
        stock: 20,
        category: "new",
        image: "images/jnr-falcon-kiwi.jpg"
    },
    {
        id: 3,
        name: "JNR Vapor",
        desc: "Collection JNR",
        priceNum: 1600,
        price: "1 600 FCFA",
        likes: 10,
        stock: 20,
        category: "liked",
        image: "images/jnr-falcon.jpg"
    },
    {
        id: 4,
        name: "JNR Collection",
        desc: "Édition spéciale",
        priceNum: 2000,
        price: "2 000 FCFA",
        likes: 7,
        stock: 20,
        category: "categories",
        image: "images/jnr-falcon-kiwi.jpg"
    }
];


/* =========================================================
   CONFIGURATION BACKEND
========================================================= */

const API_BASE_URL = "https://jnr-backend-1.onrender.com";


/* =========================================================
   PANIER
========================================================= */

let cart = [];


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    initTelegram();
    renderProducts(products);
    updateCartUI();
});


/* =========================================================
   TELEGRAM
========================================================= */

function initTelegram() {
    const closeButton = document.getElementById("tg-close-btn");

    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;

        tg.ready();
        tg.expand();

        try {
            tg.setHeaderColor("#000000");
            tg.setBackgroundColor("#000000");
        } catch (error) {
            console.log(
                "Configuration Telegram WebApp impossible."
            );
        }

        if (
            tg.initDataUnsafe &&
            tg.initDataUnsafe.user
        ) {
            const user = tg.initDataUnsafe.user;

            const name = document.getElementById(
                "client-name"
            );

            if (name) {
                name.value =
                    `${user.first_name || ""} ${user.last_name || ""}`.trim();
            }
        }

        if (closeButton) {
            closeButton.onclick = () => {
                tg.close();
            };
        }
    } else {
        if (closeButton) {
            closeButton.onclick = () => {
                if (window.history.length > 1) {
                    window.history.back();
                }
            };
        }
    }
}


/* =========================================================
   NAVIGATION
========================================================= */

function switchTab(tabName, element) {
    const views = document.querySelectorAll(".view");

    views.forEach(view => {
        view.classList.remove("active");
    });

    const target = document.getElementById(
        `view-${tabName}`
    );

    if (target) {
        target.classList.add("active");
    }

    document
        .querySelectorAll(".nav-item")
        .forEach(item => {
            item.classList.remove("active");
        });

    if (element) {
        element.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   PRODUITS
========================================================= */

function renderProducts(items) {
    const grid = document.getElementById(
        "products-grid"
    );

    if (!grid) {
        return;
    }

    if (!items.length) {
        grid.innerHTML = `
            <div style="
                grid-column: 1 / -1;
                text-align: center;
                padding: 40px;
                color: #888;
            ">
                <i
                    class="fa-solid fa-box-open"
                    style="
                        font-size: 2rem;
                        color: #008cff;
                    "
                ></i>

                <br><br>

                Aucun produit disponible.
            </div>
        `;

        return;
    }

    grid.innerHTML = items
        .map(product => `
            <div
                class="product-card"
                onclick="addToCart(${product.id})"
            >

                <div
                    class="heart-badge"
                    onclick="toggleLike(event, ${product.id})"
                >
                    <i class="fa-solid fa-heart"></i>
                    ${product.likes}
                </div>

                <div class="product-img-wrapper">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-img"
                        loading="lazy"
                    >
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-desc">
                    ${product.desc}
                </div>

                <div class="product-stock">
                    <i class="fa-solid fa-box"></i>
                    Stock : ${product.stock}
                </div>

                <span class="product-tag">
                    ${product.price}
                </span>

            </div>
        `)
        .join("");
}


/* =========================================================
   FILTRES / CATÉGORIES
========================================================= */

function filterProducts(type, element) {
    document
        .querySelectorAll(".pill-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    if (element) {
        element.classList.add("active");
    }

    let filtered = [];

    if (type === "categories") {
        filtered = [...products];
    }

    if (type === "liked") {
        filtered = [...products].sort(
            (a, b) => b.likes - a.likes
        );
    }

    if (type === "new") {
        filtered = products.filter(
            product => product.category === "new"
        );
    }

    renderProducts(filtered);
}


/* =========================================================
   LIKE
========================================================= */

function toggleLike(event, id) {
    event.stopPropagation();

    const product = products.find(
        product => product.id === id
    );

    if (!product) {
        return;
    }

    product.likes++;

    const activeButton = document.querySelector(
        ".pill-btn.active"
    );

    if (
        activeButton &&
        activeButton.innerText
            .toLowerCase()
            .includes("plus aimé")
    ) {
        filterProducts(
            "liked",
            activeButton
        );
    } else {
        renderProducts(products);
    }

    haptic("medium");
}


/* =========================================================
   AJOUT AU PANIER
========================================================= */

function addToCart(id) {
    const product = products.find(
        product => product.id === id
    );

    if (!product) {
        return;
    }

    if (product.stock <= 0) {
        alert(
            "Ce produit est en rupture de stock."
        );

        return;
    }

    const item = cart.find(
        item => item.id === id
    );

    if (item) {
        if (item.qty >= product.stock) {
            alert(
                "Vous avez atteint le stock disponible."
            );

            return;
        }

        item.qty++;
    } else {
        cart.push({
            ...product,
            qty: 1
        });
    }

    updateCartUI();
    haptic("success");

    const badge = document.getElementById(
        "cart-count"
    );

    if (badge) {
        badge.classList.remove("bump");

        void badge.offsetWidth;

        badge.classList.add("bump");
    }
}


/* =========================================================
   QUANTITÉ
========================================================= */

function updateQuantity(id, change) {
    const item = cart.find(
        item => item.id === id
    );

    if (!item) {
        return;
    }

    const product = products.find(
        product => product.id === id
    );

    if (!product) {
        return;
    }

    if (
        change > 0 &&
        item.qty >= product.stock
    ) {
        alert(
            "Vous avez atteint le stock disponible."
        );

        return;
    }

    item.qty += change;

    if (item.qty <= 0) {
        cart = cart.filter(
            item => item.id !== id
        );
    }

    updateCartUI();
}


/* =========================================================
   PANIER
========================================================= */

function updateCartUI() {
    const count = cart.reduce(
        (total, item) =>
            total + item.qty,
        0
    );

    const badge = document.getElementById(
        "cart-count"
    );

    if (badge) {
        badge.textContent = count;
    }

    const container =
        document.getElementById(
            "cart-items-container"
        );

    const summary =
        document.getElementById(
            "cart-summary"
        );

    if (!container || !summary) {
        return;
    }

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">

                <i
                    class="fa-solid fa-basket-shopping fa-2x"
                ></i>

                <br><br>

                Votre panier est vide.

                <br>

                Ajoutez un produit depuis l'accueil.

            </div>
        `;

        summary.classList.add("hidden");

        return;
    }

    container.innerHTML = cart
        .map(item => `
            <div class="cart-item">

                <div class="cart-item-info">

                    <img
                        src="${item.image}"
                        class="cart-item-img"
                        alt="${item.name}"
                    >

                    <div class="cart-item-details">

                        <h4>
                            ${item.name}
                        </h4>

                        <span>
                            ${item.price}
                        </span>

                    </div>

                </div>

                <div class="qty-controls">

                    <button
                        class="qty-btn"
                        onclick="updateQuantity(${item.id}, -1)"
                    >
                        −
                    </button>

                    <span class="qty-number">
                        ${item.qty}
                    </span>

                    <button
                        class="qty-btn"
                        onclick="updateQuantity(${item.id}, 1)"
                    >
                        +
                    </button>

                </div>

            </div>
        `)
        .join("");

    const subtotal = cart.reduce(
        (total, item) =>
            total +
            item.priceNum * item.qty,
        0
    );

    const shipping = 150;

    const total = subtotal + shipping;

    const subtotalElement =
        document.getElementById(
            "subtotal-amount"
        );

    const totalElement =
        document.getElementById(
            "total-amount"
        );

    if (subtotalElement) {
        subtotalElement.textContent =
            `${formatPrice(subtotal)} FCFA`;
    }

    if (totalElement) {
        totalElement.textContent =
            `${formatPrice(total)} FCFA`;
    }

    summary.classList.remove("hidden");
}


/* =========================================================
   PRIX
========================================================= */

function formatPrice(number) {
    return Number(number).toLocaleString(
        "fr-FR",
        {
            maximumFractionDigits: 0
        }
    );
}


/* =========================================================
   PAIEMENT PAYDUNYA
========================================================= */

async function checkout() {
    if (cart.length === 0) {
        alert("Votre panier est vide.");
        return;
    }

    const nameElement =
        document.getElementById(
            "client-name"
        );

    const phoneElement =
        document.getElementById(
            "client-phone"
        );

    const addressElement =
        document.getElementById(
            "client-address"
        );

    const notesElement =
        document.getElementById(
            "client-notes"
        );

    const name = nameElement
        ? nameElement.value.trim()
        : "";

    const phone = phoneElement
        ? phoneElement.value.trim()
        : "";

    const address = addressElement
        ? addressElement.value.trim()
        : "";

    const notes = notesElement
        ? notesElement.value.trim()
        : "";

    if (!name || !phone || !address) {
        alert(
            "Veuillez remplir votre nom, téléphone et adresse."
        );

        return;
    }

    /*
        Le backend PayDunya calcule lui-même
        le montant total en FCFA.

        Le navigateur envoie uniquement :
        - les informations client
        - les produits
        - les quantités
    */

    const orderItems = cart.map(item => ({
        id: item.id,
        quantity: item.qty
    }));

    const payload = {
        customer: {
            name: name,
            phone: phone,
            address: address,
            notes: notes
        },
        items: orderItems
    };

    const checkoutButton =
        document.querySelector(
            '[onclick="checkout()"]'
        );

    const originalButtonText =
        checkoutButton
            ? checkoutButton.innerHTML
            : "";

    try {
        if (checkoutButton) {
            checkoutButton.disabled = true;

            checkoutButton.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Ouverture du paiement...';
        }

        const response = await fetch(
            `${API_BASE_URL}/create-checkout-session`,
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify(payload)
            }
        );

        let data;

        try {
            data = await response.json();
        } catch (jsonError) {
            throw new Error(
                "Le serveur a renvoyé une réponse invalide."
            );
        }

        if (!response.ok) {
            throw new Error(
                data.detail ||
                data.message ||
                "Impossible de créer le paiement."
            );
        }

        if (
            !data ||
            typeof data.url !== "string" ||
            !data.url.trim()
        ) {
            throw new Error(
                "PayDunya n'a pas fourni de lien de paiement."
            );
        }

        /*
            REDIRECTION DIRECTE VERS PAYDUNYA
        */

        window.location.href =
            data.url;

    } catch (error) {
        console.error(
            "Erreur paiement PayDunya :",
            error
        );

        alert(
            "Impossible de lancer le paiement.\n\n" +
            error.message
        );

        if (checkoutButton) {
            checkoutButton.disabled = false;

            checkoutButton.innerHTML =
                originalButtonText;
        }
    }
}


/* =========================================================
   HAPTIC TELEGRAM
========================================================= */

function haptic(type) {
    if (
        window.Telegram &&
        window.Telegram.WebApp &&
        window.Telegram.WebApp.HapticFeedback
    ) {
        const haptic =
            window.Telegram.WebApp.HapticFeedback;

        if (type === "success") {
            haptic.notificationOccurred(
                "success"
            );
        } else {
            haptic.impactOccurred(type);
        }
    }
}
