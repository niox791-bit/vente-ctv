
/* =========================================================
   PRODUITS JNR
   Objets virtuels du jeu
========================================================= */

const products = [
    {
        id: 1,
        name: "Strawberry Watermelon Ice",
        desc: "Objet virtuel JNR - Strawberry / Watermelon Ice",
        priceNum: 13500,
        price: "13 500 FCFA",
        likes: 18,
        stock: 119,
        category: "new",
        image: "images/default (1).jpg"
    },
    {
        id: 2,
        name: "Mixed Berries",
        desc: "Objet virtuel JNR - Mixed Berries",
        priceNum: 13500,
        price: "13 500 FCFA",
        likes: 24,
        stock: 119,
        category: "categories",
        image: "images/default (1).webp"
    },
    {
        id: 3,
        name: "Black Dragon Ice",
        desc: "Objet virtuel JNR - Black Dragon Ice",
        priceNum: 13000,
        price: "13 500 FCFA",
        likes: 31,
        stock: 119,
        category: "liked",
        image: "images/default (2).jpg"
    },
    {
        id: 4,
        name: "Peach Berry",
        desc: "Objet virtuel JNR - Peach Berry",
        priceNum: 20000,
        price: "13 500 FCFA",
        likes: 16,
        stock: 119,
        category: "categories",
        image: "images/default (2).webp"
    },
    {
        id: 5,
        name: "Blueberry Pomegranate Ice",
        desc: "Objet virtuel JNR - Blueberry Pomegranate Ice",
        priceNum: 13500,
        price: "13 500 FCFA",
        likes: 27,
        stock: 119,
        category: "new",
        image: "images/default (3).jpg"
    },
    {
        id: 6,
        name: "Blackberry Red Raspberry",
        desc: "Objet virtuel JNR - Blackberry Red Raspberry",
        priceNum: 13500,
        price: "13 500 FCFA",
        likes: 22,
        stock: 119,
        category: "categories",
        image: "images/default (3).webp"
    },
    {
        id: 7,
        name: "Mango Passion Fruit",
        desc: "Objet virtuel JNR - Mango Passion Fruit",
        priceNum: 13500,
        price: "13 500 FCFA",
        likes: 35,
        stock: 119,
        category: "liked",
        image: "images/default (4).jpg"
    },
    {
        id: 8,
        name: "Strawberry Kiwi",
        desc: "Objet virtuel JNR - Strawberry Kiwi",
        priceNum: 13500,
        price: "13 500 FCFA",
        likes: 29,
        stock: 119,
        category: "new",
        image: "images/default (4).webp"
    },
    {
        id: 9,
        name: "Watermelon Mango Peach",
        desc: "Objet virtuel JNR - Watermelon Mango Peach",
        priceNum: 13500,
        price: "13 500 FCFA",
        likes: 19,
        stock: 119,
        category: "categories",
        image: "images/default (5).jpg"
    },
    {
        id: 10,
        name: "Blueberry Raspberry Cherry",
        desc: "Objet virtuel JNR - Blueberry Raspberry Cherry",
        priceNum: 18500,
        price: "18 500 FCFA",
        likes: 26,
        stock: 119,
        category: "liked",
        image: "images/default (5).webp"
    },
    {
        id: 11,
        name: "Watermelon Bubblegum",
        desc: "Objet virtuel JNR - Watermelon Bubblegum",
        priceNum: 19000,
        price: "13 500 FCFA",
        likes: 33,
        stock: 119,
        category: "new",
        image: "images/default (6).jpg"
    },
    {
        id: 12,
        name: "Cherry Watermelon Freeze",
        desc: "Objet virtuel JNR - Cherry Watermelon Freeze",
        priceNum: 13500,
        price: "13 500 FCFA",
        likes: 37,
        stock: 119,
        category: "liked",
        image: "images/default (6).webp"
    },
    {
        id: 13,
        name: "Cherry Ice",
        desc: "Objet virtuel JNR - Cherry Ice",
        priceNum: 13500,
        price: "13 500 FCFA",
        likes: 15,
        stock: 119,
        category: "categories",
        image: "images/default (7).jpg"
    },
    {
        id: 14,
        name: "Blueberry Sour Raspberry",
        desc: "Objet virtuel JNR - Blueberry Sour Raspberry",
        priceNum: 13500,
        price: "13 500 FCFA",
        likes: 32,
        stock: 119,
        category: "new",
        image: "images/default (7).webp"
    },
    {
        id: 15,
        name: "Watermelon Ice",
        desc: "Objet virtuel JNR - Watermelon Ice",
        priceNum: 13500,
        price: "19 000 FCFA",
        likes: 21,
        stock: 119,
        category: "categories",
        image: "images/default (8).jpg"
    },
    {
        id: 16,
        name: "Love 66",
        desc: "Objet virtuel JNR - Love 66",
        priceNum: 13500,
        price: "13 500 FCFA",
        likes: 40,
        stock: 200,
        category: "liked",
        image: "images/default (8).webp"
    },
    {
        id: 17,
        name: "Fizzy Cherry Cola",
        desc: "Objet virtuel JNR - Fizzy Cherry Cola",
        priceNum: 13500,
        price: "13 500 FCFA",
        likes: 28,
        stock: 159,
        category: "new",
        image: "images/default (9).webp"
    },
    {
        id: 18,
        name: "Golden Dragon Ice",
        desc: "Objet virtuel JNR - Golden Dragon Ice",
        priceNum: 19000,
        price: "13 500 FCFA",
        likes: 34,
        stock: 119,
        category: "liked",
        image: "images/default.jpg"
    }
];


/* =========================================================
   CONFIGURATION BACKEND
========================================================= */

const API_BASE_URL = "https://jnr-backend-1.onrender.com";


/* =========================================================
   PANIER
========================================================= */

const CART_STORAGE_KEY = "jnr_shop_cart";

let cart = [];


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    loadCart();

    initTelegram();

    renderProducts(products);

    updateCartUI();

    initImageZoom();

    handlePaymentReturn();

    setTimeout(() => {

        const loadingScreen =
            document.getElementById("loading-screen");

        if (loadingScreen) {
            loadingScreen.classList.add("loaded");
        }

    }, 1900);
});


/* =========================================================
   LOCAL STORAGE
========================================================= */

function saveCart() {

    try {

        localStorage.setItem(
            CART_STORAGE_KEY,
            JSON.stringify(cart)
        );

    } catch (error) {

        console.error(
            "Impossible de sauvegarder le panier :",
            error
        );
    }
}


function loadCart() {

    try {

        const saved =
            localStorage.getItem(
                CART_STORAGE_KEY
            );

        if (!saved) {

            cart = [];

            return;
        }

        const parsed =
            JSON.parse(saved);

        if (!Array.isArray(parsed)) {

            cart = [];

            return;
        }

        cart = parsed
            .map(item => {

                const product =
                    products.find(
                        product =>
                            product.id === item.id
                    );

                if (!product) {
                    return null;
                }

                const quantity =
                    Math.max(
                        1,
                        Math.min(
                            Number(item.qty) || 1,
                            product.stock
                        )
                    );

                return {
                    ...product,
                    qty: quantity
                };

            })
            .filter(Boolean);

    } catch (error) {

        console.error(
            "Panier localStorage invalide :",
            error
        );

        cart = [];
    }
}


/* =========================================================
   RETOUR APRÈS PAIEMENT BICTORYS
========================================================= */

function handlePaymentReturn() {

    const params =
        new URLSearchParams(
            window.location.search
        );

    const payment =
        params.get("payment");

    if (payment !== "success") {
        return;
    }

    /*
     * Bictorys a redirigé l'utilisateur
     * vers la Mini App après le paiement.
     *
     * On supprime maintenant le panier
     * local enregistré sur cet appareil.
     */

    cart = [];

    localStorage.removeItem(
        CART_STORAGE_KEY
    );

    updateCartUI();

    /*
     * On conserve l'identifiant de commande
     * jusqu'à ce que le retour soit traité,
     * puis on le nettoie.
     */

    localStorage.removeItem(
        "jnr_last_order_id"
    );

    /*
     * Nettoyage de l'URL afin que :
     *
     * ?payment=success&order=...
     *
     * ne reste pas affiché.
     */

    window.history.replaceState(
        {},
        document.title,
        window.location.pathname
    );

    alert(
        "✅ Paiement effectué !\n\n" +
        "Votre commande a bien été enregistrée."
    );
}


/* =========================================================
   TELEGRAM
========================================================= */

function initTelegram() {

    const closeButton =
        document.getElementById(
            "tg-close-btn"
        );

    if (
        window.Telegram &&
        window.Telegram.WebApp
    ) {

        const tg =
            window.Telegram.WebApp;

        tg.ready();

        tg.expand();

        try {

            tg.setHeaderColor(
                "#000000"
            );

            tg.setBackgroundColor(
                "#000000"
            );

        } catch (error) {

            console.log(
                "Configuration Telegram WebApp impossible."
            );
        }

        if (
            tg.initDataUnsafe &&
            tg.initDataUnsafe.user
        ) {

            const user =
                tg.initDataUnsafe.user;

            const name =
                document.getElementById(
                    "client-name"
                );

            if (name) {

                name.value =
                    `${user.first_name || ""} ${user.last_name || ""}`
                        .trim();
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

                if (
                    window.history.length > 1
                ) {

                    window.history.back();
                }
            };
        }
    }
}


/* =========================================================
   NAVIGATION
========================================================= */

function switchTab(
    tabName,
    element
) {

    const views =
        document.querySelectorAll(
            ".view"
        );

    views.forEach(view => {

        view.classList.remove(
            "active"
        );

    });

    const target =
        document.getElementById(
            `view-${tabName}`
        );

    if (target) {

        target.classList.add(
            "active"
        );
    }

    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });

    if (element) {

        element.classList.add(
            "active"
        );
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

    const grid =
        document.getElementById(
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

    grid.innerHTML =
        items
            .map(product => `

                <div
                    class="product-card"
                    onclick="openProduct(${product.id})"
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
                            alt="${escapeHtml(product.name)}"
                            class="product-img"
                            loading="lazy"
                        >

                    </div>

                    <div class="product-name">
                        ${escapeHtml(product.name)}
                    </div>

                    <div class="product-desc">
                        ${escapeHtml(product.desc)}
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
   FICHE PRODUIT
========================================================= */

function openProduct(id) {

    const product =
        products.find(
            product =>
                product.id === id
        );

    if (!product) {
        return;
    }

    const modal =
        document.getElementById(
            "product-modal"
        );

    const image =
        document.getElementById(
            "detail-image"
        );

    const name =
        document.getElementById(
            "detail-name"
        );

    const description =
        document.getElementById(
            "detail-description"
        );

    const price =
        document.getElementById(
            "detail-price"
        );

    const stock =
        document.getElementById(
            "detail-stock"
        );

    const category =
        document.getElementById(
            "detail-category"
        );

    const addButton =
        document.getElementById(
            "detail-add-button"
        );

    if (
        !modal ||
        !image ||
        !name ||
        !description ||
        !price ||
        !stock ||
        !addButton
    ) {
        return;
    }

    image.src = product.image;

    image.alt = product.name;

    name.textContent =
        product.name;

    description.textContent =
        product.desc;

    price.textContent =
        product.price;

    stock.textContent =
        product.stock;

    if (category) {

        category.textContent =
            product.category === "new"
                ? "NOUVEAU"
                : "JNR";
    }

    addButton.disabled =
        product.stock <= 0;

    addButton.innerHTML =
        product.stock <= 0
            ? '<i class="fa-solid fa-ban"></i> Rupture de stock'
            : '<i class="fa-solid fa-cart-plus"></i> Ajouter au panier';

    addButton.onclick = () => {

        addToCart(product.id);

        closeProductModal();
    };

    modal.classList.remove(
        "hidden"
    );

    document.body.style.overflow =
        "hidden";
}


function closeProductModal(event) {

    if (
        event &&
        event.target &&
        event.target.id !== "product-modal"
    ) {
        return;
    }

    const modal =
        document.getElementById(
            "product-modal"
        );

    if (modal) {

        modal.classList.add(
            "hidden"
        );
    }

    document.body.

