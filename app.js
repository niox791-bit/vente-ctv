/* =========================================================
   PRODUITS JNR
   Objets virtuels du jeu
========================================================= */

const products = [
    {
        id: 1,
        name: "Strawberry Watermelon Ice",
        desc: "Objet virtuel JNR - Strawberry / Watermelon Ice",
        priceNum: 17500,
        price: "17 500 FCFA",
        likes: 18,
        stock: 119,
        category: "new",
        image: "https://placehold.co/700x700/101010/008cff?text=Strawberry+Watermelon+Ice"
    },
    {
        id: 2,
        name: "Mixed Berries",
        desc: "Objet virtuel JNR - Mixed Berries",
        priceNum: 18500,
        price: "18 500 FCFA",
        likes: 24,
        stock: 119,
        category: "categories",
        image: "https://placehold.co/700x700/101010/008cff?text=Mixed+Berries"
    },
    {
        id: 3,
        name: "Black Dragon Ice",
        desc: "Objet virtuel JNR - Black Dragon Ice",
        priceNum: 19000,
        price: "19 000 FCFA",
        likes: 31,
        stock: 119,
        category: "liked",
        image: "https://placehold.co/700x700/101010/008cff?text=Black+Dragon+Ice"
    },
    {
        id: 4,
        name: "Peach Berry",
        desc: "Objet virtuel JNR - Peach Berry",
        priceNum: 20000,
        price: "20 000 FCFA",
        likes: 16,
        stock: 119,
        category: "categories",
        image: "https://placehold.co/700x700/101010/008cff?text=Peach+Berry"
    },
    {
        id: 5,
        name: "Blueberry Pomegranate Ice",
        desc: "Objet virtuel JNR - Blueberry Pomegranate Ice",
        priceNum: 17500,
        price: "17 500 FCFA",
        likes: 27,
        stock: 119,
        category: "new",
        image: "https://placehold.co/700x700/101010/008cff?text=Blueberry+Pomegranate"
    },
    {
        id: 6,
        name: "Blackberry Red Raspberry",
        desc: "Objet virtuel JNR - Blackberry Red Raspberry",
        priceNum: 18500,
        price: "18 500 FCFA",
        likes: 22,
        stock: 119,
        category: "categories",
        image: "https://placehold.co/700x700/101010/008cff?text=Blackberry+Raspberry"
    },
    {
        id: 7,
        name: "Mango Passion Fruit",
        desc: "Objet virtuel JNR - Mango Passion Fruit",
        priceNum: 19000,
        price: "19 000 FCFA",
        likes: 35,
        stock: 119,
        category: "liked",
        image: "https://placehold.co/700x700/101010/008cff?text=Mango+Passion+Fruit"
    },
    {
        id: 8,
        name: "Strawberry Kiwi",
        desc: "Objet virtuel JNR - Strawberry Kiwi",
        priceNum: 20000,
        price: "20 000 FCFA",
        likes: 29,
        stock: 119,
        category: "new",
        image: "https://placehold.co/700x700/101010/008cff?text=Strawberry+Kiwi"
    },
    {
        id: 9,
        name: "Watermelon Mango Peach",
        desc: "Objet virtuel JNR - Watermelon Mango Peach",
        priceNum: 17500,
        price: "17 500 FCFA",
        likes: 19,
        stock: 119,
        category: "categories",
        image: "https://placehold.co/700x700/101010/008cff?text=Watermelon+Mango+Peach"
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
        image: "https://placehold.co/700x700/101010/008cff?text=Blueberry+Raspberry+Cherry"
    },
    {
        id: 11,
        name: "Watermelon Bubblegum",
        desc: "Objet virtuel JNR - Watermelon Bubblegum",
        priceNum: 19000,
        price: "19 000 FCFA",
        likes: 33,
        stock: 119,
        category: "new",
        image: "https://placehold.co/700x700/101010/008cff?text=Watermelon+Bubblegum"
    },
    {
        id: 12,
        name: "Cherry Watermelon Freeze",
        desc: "Objet virtuel JNR - Cherry Watermelon Freeze",
        priceNum: 20000,
        price: "20 000 FCFA",
        likes: 37,
        stock: 119,
        category: "liked",
        image: "https://placehold.co/700x700/101010/008cff?text=Cherry+Watermelon"
    },
    {
        id: 13,
        name: "Cherry Ice",
        desc: "Objet virtuel JNR - Cherry Ice",
        priceNum: 17500,
        price: "17 500 FCFA",
        likes: 15,
        stock: 119,
        category: "categories",
        image: "https://placehold.co/700x700/101010/008cff?text=Cherry+Ice"
    },
    {
        id: 14,
        name: "Blueberry Sour Raspberry",
        desc: "Objet virtuel JNR - Blueberry Sour Raspberry",
        priceNum: 18500,
        price: "18 500 FCFA",
        likes: 32,
        stock: 119,
        category: "new",
        image: "https://placehold.co/700x700/101010/008cff?text=Blueberry+Sour+Raspberry"
    },
    {
        id: 15,
        name: "Watermelon Ice",
        desc: "Objet virtuel JNR - Watermelon Ice",
        priceNum: 19000,
        price: "19 000 FCFA",
        likes: 21,
        stock: 119,
        category: "categories",
        image: "https://placehold.co/700x700/101010/008cff?text=Watermelon+Ice"
    },
    {
        id: 16,
        name: "Love 66",
        desc: "Objet virtuel JNR - Love 66",
        priceNum: 20000,
        price: "20 000 FCFA",
        likes: 40,
        stock: 119,
        category: "liked",
        image: "https://placehold.co/700x700/101010/008cff?text=Love+66"
    },
    {
        id: 17,
        name: "Fizzy Cherry Cola",
        desc: "Objet virtuel JNR - Fizzy Cherry Cola",
        priceNum: 17500,
        price: "17 500 FCFA",
        likes: 28,
        stock: 119,
        category: "new",
        image: "https://placehold.co/700x700/101010/008cff?text=Fizzy+Cherry+Cola"
    },
    {
        id: 18,
        name: "Golden Dragon Ice",
        desc: "Objet virtuel JNR - Golden Dragon Ice",
        priceNum: 19000,
        price: "19 000 FCFA",
        likes: 34,
        stock: 119,
        category: "liked",
        image: "https://placehold.co/700x700/101010/008cff?text=Golden+Dragon+Ice"
    }
];


/* =========================================================
   CONFIGURATION BACKEND
   NE PAS MODIFIER
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

    document.body.style.overflow =
        "";
}


/* =========================================================
   ZOOM
========================================================= */

function initImageZoom() {

    const image =
        document.getElementById(
            "detail-image"
        );

    if (!image) {
        return;
    }

    image.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            const zoomImage =
                document.getElementById(
                    "zoom-image"
                );

            const zoomOverlay =
                document.getElementById(
                    "image-zoom"
                );

            if (
                !zoomImage ||
                !zoomOverlay
            ) {
                return;
            }

            zoomImage.src =
                image.src;

            zoomImage.alt =
                image.alt;

            zoomOverlay.classList.remove(
                "hidden"
            );
        }
    );
}


function closeImageZoom() {

    const zoom =
        document.getElementById(
            "image-zoom"
        );

    if (zoom) {
        zoom.classList.add(
            "hidden"
        );
    }
}


/* =========================================================
   FILTRES
========================================================= */

function filterProducts(
    type,
    element
) {

    document
        .querySelectorAll(".pill-btn")
        .forEach(btn => {
            btn.classList.remove(
                "active"
            );
        });

    if (element) {
        element.classList.add(
            "active"
        );
    }

    let filtered = [];

    if (type === "categories") {

        filtered = [
            ...products
        ];
    }

    if (type === "liked") {

        filtered =
            [...products].sort(
                (a, b) =>
                    b.likes - a.likes
            );
    }

    if (type === "new") {

        filtered =
            products.filter(
                product =>
                    product.category === "new"
            );
    }

    renderProducts(
        filtered
    );
}


/* =========================================================
   LIKE
========================================================= */

function toggleLike(
    event,
    id
) {

    event.stopPropagation();

    const product =
        products.find(
            product =>
                product.id === id
        );

    if (!product) {
        return;
    }

    product.likes++;

    const activeButton =
        document.querySelector(
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

        renderProducts(
            products
        );
    }

    haptic("medium");
}


/* =========================================================
   AJOUT AU PANIER
========================================================= */

function addToCart(id) {

    const product =
        products.find(
            product =>
                product.id === id
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

    const item =
        cart.find(
            item =>
                item.id === id
        );

    if (item) {

        if (
            item.qty >=
            product.stock
        ) {

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

    saveCart();

    updateCartUI();

    haptic("success");

    const badge =
        document.getElementById(
            "cart-count"
        );

    if (badge) {

        badge.classList.remove(
            "bump"
        );

        void badge.offsetWidth;

        badge.classList.add(
            "bump"
        );
    }

    showCartPopup();
}


/* =========================================================
   POPUP PANIER
========================================================= */

function showCartPopup() {

    const popup =
        document.getElementById(
            "cart-popup-overlay"
        );

    if (popup) {
        popup.classList.remove(
            "hidden"
        );
    }
}


function closeCartPopup(event) {

    if (
        event &&
        event.target &&
        event.target.id !==
            "cart-popup-overlay"
    ) {
        return;
    }

    const popup =
        document.getElementById(
            "cart-popup-overlay"
        );

    if (popup) {
        popup.classList.add(
            "hidden"
        );
    }
}


function continueShopping() {

    closeCartPopup();

    const homeButton =
        document.querySelector(
            '.nav-item[onclick*="accueil"]'
        );

    switchTab(
        "accueil",
        homeButton
    );
}


function goToCart() {

    closeCartPopup();

    const cartButton =
        document.querySelector(
            '.nav-item[onclick*="panier"]'
        );

    switchTab(
        "panier",
        cartButton
    );
}


/* =========================================================
   QUANTITÉ
========================================================= */

function updateQuantity(
    id,
    change
) {

    const item =
        cart.find(
            item =>
                item.id === id
        );

    if (!item) {
        return;
    }

    const product =
        products.find(
            product =>
                product.id === id
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

        cart =
            cart.filter(
                item =>
                    item.id !== id
            );
    }

    saveCart();

    updateCartUI();
}


/* =========================================================
   PANIER
========================================================= */

function updateCartUI() {

    const count =
        cart.reduce(
            (total, item) =>
                total + item.qty,
            0
        );

    const badge =
        document.getElementById(
            "cart-count"
        );

    if (badge) {
        badge.textContent =
            count;
    }

    const container =
        document.getElementById(
            "cart-items-container"
        );

    const summary =
        document.getElementById(
            "cart-summary"
        );

    if (
        !container ||
        !summary
    ) {
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

        summary.classList.add(
            "hidden"
        );

        return;
    }

    container.innerHTML =
        cart
            .map(item => `

                <div class="cart-item">

                    <div class="cart-item-info">

                        <img
                            src="${item.image}"
                            class="cart-item-img"
                            alt="${escapeHtml(item.name)}"
                        >

                        <div class="cart-item-details">

                            <h4>
                                ${escapeHtml(item.name)}
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
                            aria-label="Retirer"
                        >
                            −
                        </button>

                        <span class="qty-number">
                            ${item.qty}
                        </span>

                        <button
                            class="qty-btn"
                            onclick="updateQuantity(${item.id}, 1)"
                            aria-label="Ajouter"
                        >
                            +
                        </button>

                    </div>

                </div>

            `)
            .join("");

    const subtotal =
        cart.reduce(
            (total, item) =>
                total +
                item.priceNum *
                item.qty,
            0
        );

    /*
        Affichage uniquement côté front.
        Le backend PayDunya continue de
        calculer le montant de la commande.
    */

    const shipping = 1500;

    const total =
        subtotal +
        shipping;

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

    summary.classList.remove(
        "hidden"
    );
}


/* =========================================================
   PRIX
========================================================= */

function formatPrice(number) {

    return Number(number)
        .toLocaleString(
            "fr-FR",
            {
                maximumFractionDigits: 0
            }
        );
}


/* =========================================================
   PAIEMENT PAYDUNYA
   CONSERVÉ
========================================================= */

async function checkout() {

    if (cart.length === 0) {

        alert(
            "Votre panier est vide."
        );

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

    const name =
        nameElement
            ? nameElement.value.trim()
            : "";

    const phone =
        phoneElement
            ? phoneElement.value.trim()
            : "";

    const address =
        addressElement
            ? addressElement.value.trim()
            : "";

    const notes =
        notesElement
            ? notesElement.value.trim()
            : "";

    if (
        !name ||
        !phone ||
        !address
    ) {

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

    const orderItems =
        cart.map(item => ({
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

            checkoutButton.disabled =
                true;

            checkoutButton.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Ouverture du paiement...';
        }

        const response =
            await fetch(
                `${API_BASE_URL}/create-checkout-session`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify(
                            payload
                        )
                }
            );

        let data;

        try {

            data =
                await response.json();

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
            typeof data.url !==
                "string" ||
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

            checkoutButton.disabled =
                false;

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

        const hapticApi =
            window.Telegram.WebApp
                .HapticFeedback;

        if (type === "success") {

            hapticApi.notificationOccurred(
                "success"
            );

        } else {

            hapticApi.impactOccurred(
                type
            );
        }
    }
}


/* =========================================================
   SÉCURITÉ AFFICHAGE TEXTE
========================================================= */

function escapeHtml(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


/* =========================================================
   FERMETURE AVEC ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }

        closeProductModal();

        closeImageZoom();

        closeCartPopup();
    }
);
