// =========================================================
// JNR SHOP - APPLICATION
// =========================================================

// ---------------------------------------------------------
// PRODUITS
// ---------------------------------------------------------

const products = [
    {
        id: 1,
        name: "JNR Falcon X",
        desc: "Puff JNR",
        priceNum: 2500,
        price: "2 500 FCFA",
        likes: 12,
        category: "categories",
        image: "https://www.ecigplanete.com/32645-large_default/puff-falcon-x-28000-jnr.jpg"
    },

    {
        id: 2,
        name: "JNR Falcon X 28000",
        desc: "Grande autonomie",
        priceNum: 15000,
        price: "15 000 FCFA",
        likes: 25,
        category: "liked",
        image: "https://www.ecigplanete.com/32645-large_default/puff-falcon-x-28000-jnr.jpg"
    },

    {
        id: 3,
        name: "JNR Vapor",
        desc: "Nouveau modèle",
        priceNum: 5000,
        price: "5 000 FCFA",
        likes: 8,
        category: "new",
        image: "https://www.ecigplanete.com/32645-large_default/puff-falcon-x-28000-jnr.jpg"
    },

    {
        id: 4,
        name: "JNR Collection",
        desc: "Collection JNR",
        priceNum: 8000,
        price: "8 000 FCFA",
        likes: 18,
        category: "categories",
        image: "https://www.ecigplanete.com/32645-large_default/puff-falcon-x-28000-jnr.jpg"
    }
];


// ---------------------------------------------------------
// PANIER
// ---------------------------------------------------------

let cart = [];


// ---------------------------------------------------------
// INITIALISATION
// ---------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {

    initTelegramSDK();

    renderProducts(products);

    updateCartUI();

    setupNavigation();

});


// ---------------------------------------------------------
// TELEGRAM
// ---------------------------------------------------------

function initTelegramSDK() {

    if (
        window.Telegram &&
        window.Telegram.WebApp
    ) {

        const tg = window.Telegram.WebApp;

        tg.ready();

        tg.expand();

        // Nom Telegram
        if (
            tg.initDataUnsafe &&
            tg.initDataUnsafe.user
        ) {

            const user = tg.initDataUnsafe.user;

            const nameInput =
                document.getElementById("client-name");

            if (nameInput) {

                nameInput.value =
                    `${user.first_name || ""} ${user.last_name || ""}`.trim();

            }

        }

        // Bouton fermer
        const closeButton =
            document.getElementById("tg-close-btn");

        if (closeButton) {

            closeButton.addEventListener(
                "click",
                () => {

                    tg.close();

                }
            );

        }

    } else {

        // Le bouton doit quand même fonctionner
        const closeButton =
            document.getElementById("tg-close-btn");

        if (closeButton) {

            closeButton.addEventListener(
                "click",
                () => {

                    window.history.back();

                }
            );

        }

    }

}


// ---------------------------------------------------------
// NAVIGATION
// ---------------------------------------------------------

function setupNavigation() {

    document
        .querySelectorAll(".nav-item")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const onclick =
                        button.getAttribute("onclick");

                    if (!onclick) return;

                }
            );

        });

}


function switchTab(tabName, element) {

    // Cacher toutes les pages
    document
        .querySelectorAll(".view")
        .forEach(view => {

            view.classList.remove("active");

        });


    // Trouver la page demandée
    const targetView =
        document.getElementById(
            `view-${tabName}`
        );


    if (targetView) {

        targetView.classList.add("active");

    }


    // Modifier le bouton actif
    document
        .querySelectorAll(".nav-item")
        .forEach(item => {

            item.classList.remove("active");

        });


    if (element) {

        element.classList.add("active");

    }


    // Remonter en haut
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    haptic("light");

}


// ---------------------------------------------------------
// FILTRES PRODUITS
// ---------------------------------------------------------

function filterProducts(
    filterType,
    element
) {

    document
        .querySelectorAll(".pill-btn")
        .forEach(button => {

            button.classList.remove("active");

        });


    if (element) {

        element.classList.add("active");

    }


    let filteredProducts;


    if (filterType === "categories") {

        filteredProducts = products;

    }

    else if (filterType === "liked") {

        filteredProducts =
            products.filter(
                product => product.likes > 0
            );

    }

    else if (filterType === "new") {

        filteredProducts =
            products.filter(
                product => product.category === "new"
            );

    }

    else {

        filteredProducts = products;

    }


    renderProducts(filteredProducts);

    haptic("light");

}


// ---------------------------------------------------------
// AFFICHAGE PRODUITS
// ---------------------------------------------------------

function renderProducts(items) {

    const grid =
        document.getElementById("products-grid");


    if (!grid) return;


    if (!items || items.length === 0) {

        grid.innerHTML = `
            <div class="empty-cart">
                Aucun produit disponible.
            </div>
        `;

        return;

    }


    grid.innerHTML =
        items.map(product => `

            <div
                class="product-card"
                onclick="addToCart(${product.id})"
            >

                <div
                    class="heart-badge"
                    onclick="toggleLike(event, ${product.id})"
                >

                    <i class="fa-solid fa-heart"></i>

                    <span>
                        ${product.likes}
                    </span>

                </div>


                <div class="product-img-wrapper">

                    <img
                        src="${product.image}"
                        alt="${escapeHTML(product.name)}"
                        class="product-img"
                        onerror="this.style.display='none'"
                    >

                </div>


                <div class="product-name">
                    ${escapeHTML(product.name)}
                </div>


                <div class="product-desc">
                    ${escapeHTML(product.desc)}
                </div>


                <span class="product-tag">
                    ${product.price}
                </span>

            </div>

        `).join("");

}


// ---------------------------------------------------------
// LIKE
// ---------------------------------------------------------

function toggleLike(event, id) {

    if (event) {

        event.stopPropagation();

    }


    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    product.likes++;


    renderProducts(products);


    haptic("medium");

}


// ---------------------------------------------------------
// AJOUT PANIER
// ---------------------------------------------------------

function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    const existingItem =
        cart.find(
            item => item.id === id
        );


    if (existingItem) {

        existingItem.qty++;

    }

    else {

        cart.push({
            ...product,
            qty: 1
        });

    }


    updateCartUI();


    animateCartBadge();


    playAddSound();


    haptic("success");

}


// ---------------------------------------------------------
// QUANTITÉ
// ---------------------------------------------------------

function updateQuantity(
    id,
    change
) {

    const item =
        cart.find(
            product => product.id === id
        );


    if (!item) return;


    item.qty += change;


    if (item.qty <= 0) {

        cart =
            cart.filter(
                product => product.id !== id
            );

    }


    updateCartUI();


    haptic("light");

}


// ---------------------------------------------------------
// INTERFACE PANIER
// ---------------------------------------------------------

function updateCartUI() {

    const count =
        cart.reduce(
            (sum, item) =>
                sum + item.qty,
            0
        );


    const cartCount =
        document.getElementById("cart-count");


    if (cartCount) {

        cartCount.textContent = count;

    }


    const container =
        document.getElementById(
            "cart-items-container"
        );


    const summary =
        document.getElementById(
            "cart-summary"
        );


    if (!container || !summary) return;


    // Panier vide
    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <i class="
                    fa-solid
                    fa-basket-shopping
                    fa-2x
                "></i>

                <br><br>

                Votre panier est vide.

            </div>

        `;

        summary.classList.add("hidden");

        return;

    }


    // Articles
    container.innerHTML =
        cart.map(item => `

            <div class="cart-item">

                <div class="cart-item-info">

                    <img
                        src="${item.image}"
                        class="cart-item-img"
                        alt="${escapeHTML(item.name)}"
                    >

                    <div class="cart-item-details">

                        <h4>
                            ${escapeHTML(item.name)}
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

                    <span>
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

        `).join("");


    // Calculs
    const subtotal =
        cart.reduce(
            (sum, item) =>
                sum +
                item.priceNum *
                item.qty,
            0
        );


    const shipping = 1500;

    const total =
        subtotal + shipping;


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


// ---------------------------------------------------------
// CHECKOUT
// ---------------------------------------------------------

function checkout() {

    if (cart.length === 0) {

        alert("Votre panier est vide.");

        return;

    }


    const name =
        getValue("client-name");

    const phone =
        getValue("client-phone");

    const address =
        getValue("client-address");

    const notes =
        getValue("client-notes");


    if (
        !name ||
        !phone ||
        !address
    ) {

        alert(
            "Veuillez remplir votre nom, votre numéro de téléphone et votre adresse."
        );

        return;

    }


    let message =
        "📋 NOUVELLE COMMANDE\n\n";


    message +=
        `👤 Nom : ${name}\n`;

    message +=
        `📞 Téléphone : ${phone}\n`;

    message +=
        `📍 Adresse : ${address}\n`;


    if (notes) {

        message +=
            `📝 Note : ${notes}\n`;

    }


    message +=
        "\n🛒 ARTICLES :\n";


    cart.forEach(item => {

        message +=
            `• ${item.name} x${item.qty} — ${item.price}\n`;

    });


    const subtotal =
        cart.reduce(
            (sum, item) =>
                sum +
                item.priceNum *
                item.qty,
            0
        );


    const shipping = 1500;

    const total =
        subtotal + shipping;


    message +=
        `\n💰 Sous-total : ${formatPrice(subtotal)} FCFA`;

    message +=
        `\n🚚 Livraison : ${formatPrice(shipping)} FCFA`;

    message +=
        `\n✅ Total : ${formatPrice(total)} FCFA`;


    const encodedMessage =
        encodeURIComponent(message);


    const telegramURL =
        `https://t.me/vente_puff_bot?text=${encodedMessage}`;


    // Telegram WebApp
    if (
        window.Telegram &&
        window.Telegram.WebApp
    ) {

        try {

            window.Telegram.WebApp.openTelegramLink(
                telegramURL
            );

            return;

        } catch (error) {

            console.log(
                "openTelegramLink fallback",
                error
            );

        }

    }


    // Navigateur normal
    window.open(
        telegramURL,
        "_blank"
    );

}


// ---------------------------------------------------------
// ANIMATION PANIER
// ---------------------------------------------------------

function animateCartBadge() {

    const badge =
        document.getElementById(
            "cart-count"
        );


    if (!badge) return;


    badge.classList.remove("bump");


    void badge.offsetWidth;


    badge.classList.add("bump");

}


// ---------------------------------------------------------
// SON AJOUT PANIER
// ---------------------------------------------------------

function playAddSound() {

    try {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;


        if (!AudioContext) return;


        const audioContext =
            new AudioContext();


        const oscillator =
            audioContext.createOscillator();


        const gain =
            audioContext.createGain();


        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(
            520,
            audioContext.currentTime
        );

        oscillator.frequency.exponentialRampToValueAtTime(
            780,
            audioContext.currentTime + 0.08
        );


        gain.gain.setValueAtTime(
            0.0001,
            audioContext.currentTime
        );

        gain.gain.exponentialRampToValueAtTime(
            0.08,
            audioContext.currentTime + 0.01
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            audioContext.currentTime + 0.12
        );


        oscillator.connect(gain);

        gain.connect(
            audioContext.destination
        );


        oscillator.start();

        oscillator.stop(
            audioContext.currentTime + 0.13
        );

    } catch (error) {

        console.log(
            "Audio non disponible",
            error
        );

    }

}


// ---------------------------------------------------------
// HAPTIC TELEGRAM
// ---------------------------------------------------------

function haptic(type) {

    if (
        window.Telegram &&
        window.Telegram.WebApp &&
        window.Telegram.WebApp.HapticFeedback
    ) {

        const hapticAPI =
            window.Telegram.WebApp.HapticFeedback;


        if (
            type === "success" &&
            hapticAPI.notificationOccurred
        ) {

            hapticAPI.notificationOccurred(
                "success"
            );

        }

        else if (
            hapticAPI.impactOccurred
        ) {

            hapticAPI.impactOccurred(
                type
            );

        }

    }

}


// ---------------------------------------------------------
// UTILITAIRES
// ---------------------------------------------------------

function formatPrice(number) {

    return Number(number).toLocaleString(
        "fr-FR"
    );

}


function getValue(id) {

    const element =
        document.getElementById(id);


    if (!element) return "";


    return element.value.trim();

}


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}