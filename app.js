/* =========================================================
   PRODUITS
========================================================= */

const products = [

    {
        id: 1,
        name: 'Ballon Doré 2',
        desc: 'Édition Or',
        priceNum: 2500,
        price: '2 500 FCFA',
        likes: 4,
        category: 'categories',
        image: 'https://cdn-icons-png.flaticon.com/512/3198/3198348.png'
    },

    {
        id: 2,
        name: 'Arche de Ballons',
        desc: 'Kit Anniversaire',
        priceNum: 15000,
        price: '15 000 FCFA',
        likes: 2,
        category: 'liked',
        image: 'https://cdn-icons-png.flaticon.com/512/2909/2909761.png'
    },

    {
        id: 3,
        name: 'Guirlande Fête',
        desc: 'Décoration Luxe',
        priceNum: 5000,
        price: '5 000 FCFA',
        likes: 1,
        category: 'new',
        image: 'https://cdn-icons-png.flaticon.com/512/1625/1625052.png'
    },

    {
        id: 4,
        name: 'Pompe Électrique',
        desc: 'Accessoire',
        priceNum: 8000,
        price: '8 000 FCFA',
        likes: 5,
        category: 'categories',
        image: 'https://cdn-icons-png.flaticon.com/512/1147/1147802.png'
    }

];


/* =========================================================
   VARIABLES
========================================================= */

let cart = [];


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

    initTelegramSDK();

    renderProducts(products);

    updateCartUI();

});


/* =========================================================
   TELEGRAM
========================================================= */

function initTelegramSDK() {

    if (
        window.Telegram &&
        window.Telegram.WebApp
    ) {

        const tg =
            window.Telegram.WebApp;

        tg.ready();

        tg.expand();

        /*
         * Utilisation de la couleur Telegram
         * si disponible.
         */

        try {

            tg.setHeaderColor('#000000');

            tg.setBackgroundColor('#000000');

        } catch (error) {

            console.log(
                'Configuration Telegram non disponible.'
            );

        }


        /*
         * Pré-remplir le nom
         * de l'utilisateur Telegram.
         */

        if (
            tg.initDataUnsafe &&
            tg.initDataUnsafe.user
        ) {

            const user =
                tg.initDataUnsafe.user;

            const nameInput =
                document.getElementById(
                    'client-name'
                );

            if (nameInput) {

                const fullName =
                    `${user.first_name || ''} ${user.last_name || ''}`
                    .trim();

                if (fullName) {

                    nameInput.value =
                        fullName;

                }

            }

        }


        /*
         * Bouton Fermer.
         */

        const closeButton =
            document.getElementById(
                'tg-close-btn'
            );

        if (closeButton) {

            closeButton.addEventListener(
                'click',
                () => {

                    tg.close();

                }
            );

        }

    } else {

        /*
         * Si le site est ouvert
         * directement dans le navigateur,
         * le bouton Fermer revient à
         * l'historique précédent.
         */

        const closeButton =
            document.getElementById(
                'tg-close-btn'
            );

        if (closeButton) {

            closeButton.addEventListener(
                'click',
                () => {

                    if (
                        window.history.length > 1
                    ) {

                        window.history.back();

                    } else {

                        window.close();

                    }

                }
            );

        }

    }

}


/* =========================================================
   NAVIGATION ENTRE LES ONGLETS
========================================================= */

function switchTab(
    tabName,
    element
) {

    /*
     * Cacher toutes les pages.
     */

    document
        .querySelectorAll('.view')
        .forEach(view => {

            view.classList.remove(
                'active'
            );

        });


    /*
     * Afficher la page demandée.
     */

    const targetView =
        document.getElementById(
            `view-${tabName}`
        );

    if (targetView) {

        targetView.classList.add(
            'active'
        );

    }


    /*
     * Modifier l'onglet actif.
     */

    document
        .querySelectorAll('.nav-item')
        .forEach(item => {

            item.classList.remove(
                'active'
            );

        });


    if (element) {

        element.classList.add(
            'active'
        );

    }


    /*
     * Retour en haut.
     */

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

}


/* =========================================================
   AFFICHAGE DES PRODUITS
========================================================= */

function renderProducts(items) {

    const grid =
        document.getElementById(
            'products-grid'
        );

    if (!grid) {
        return;
    }


    /*
     * Aucun produit.
     */

    if (!items || items.length === 0) {

        grid.innerHTML = `

            <div
                style="
                    grid-column: 1 / -1;
                    text-align: center;
                    color: #8e8e93;
                    padding: 40px 10px;
                "
            >

                <i
                    class="fa-solid fa-box-open"
                    style="
                        font-size: 2rem;
                        color: #ffb700;
                        margin-bottom: 10px;
                    "
                ></i>

                <br>

                Aucun produit disponible.

            </div>

        `;

        return;
    }


    grid.innerHTML = items
        .map(product => {

            return `

                <div
                    class="product-card"
                    onclick="addToCart(${product.id})"
                >

                    <div
                        class="heart-badge"
                        onclick="toggleLike(event, ${product.id})"
                    >

                        <i
                            class="fa-solid fa-heart"
                        ></i>

                        ${
                            product.likes > 0
                                ? product.likes
                                : ''
                        }

                    </div>


                    <div class="product-img-wrapper">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            class="product-img"
                            loading="lazy"
                            onerror="this.style.display='none'"
                        >

                    </div>


                    <div class="product-name">
                        ${product.name}
                    </div>


                    <div class="product-desc">
                        ${product.desc}
                    </div>


                    <span class="product-tag">
                        ${product.price}
                    </span>

                </div>

            `;

        })
        .join('');

}


/* =========================================================
   FILTRES
========================================================= */

function filterProducts(
    filterType,
    element
) {

    /*
     * Bouton actif.
     */

    document
        .querySelectorAll('.pill-btn')
        .forEach(btn => {

            btn.classList.remove(
                'active'
            );

        });


    if (element) {

        element.classList.add(
            'active'
        );

    }


    /*
     * Toutes les catégories.
     */

    if (
        filterType ===
        'categories'
    ) {

        renderProducts(
            products
        );

        return;

    }


    /*
     * Plus aimé.
     */

    if (
        filterType ===
        'liked'
    ) {

        const filtered =
            products.filter(
                product =>
                    product.likes > 0
            );

        /*
         * On trie du plus aimé
         * au moins aimé.
         */

        filtered.sort(
            (a, b) =>
                b.likes - a.likes
        );

        renderProducts(
            filtered
        );

        return;

    }


    /*
     * Nouveautés.
     */

    if (
        filterType ===
        'new'
    ) {

        const filtered =
            products.filter(
                product =>
                    product.category ===
                    'new'
            );

        renderProducts(
            filtered
        );

    }

}


/* =========================================================
   LIKES
========================================================= */

function toggleLike(
    event,
    id
) {

    /*
     * Empêche le clic de
     * déclencher addToCart().
     */

    if (event) {

        event.stopPropagation();

    }


    const product =
        products.find(
            product =>
                product.id === id
        );

    if (!product) {
        return;
    }


    product.likes++;


    /*
     * Actualiser l'affichage.
     */

    renderProducts(
        products
    );


    /*
     * Vibration Telegram.
     */

    if (
        window.Telegram &&
        window.Telegram.WebApp &&
        window.Telegram.WebApp.HapticFeedback
    ) {

        window.Telegram.WebApp.HapticFeedback
            .impactOccurred(
                'medium'
            );

    }

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


    const existingItem =
        cart.find(
            item =>
                item.id === id
        );


    if (existingItem) {

        existingItem.qty++;

    } else {

        cart.push({

            ...product,

            qty: 1

        });

    }


    updateCartUI();


    /*
     * Notification Telegram.
     */

    if (
        window.Telegram &&
        window.Telegram.WebApp &&
        window.Telegram.WebApp.HapticFeedback
    ) {

        window.Telegram.WebApp.HapticFeedback
            .notificationOccurred(
                'success'
            );

    }


    /*
     * Petit passage automatique
     * vers le panier.
     */

    const cartButton =
        document.querySelector(
            '.nav-item:nth-child(3)'
        );

    /*
     * On ne change pas
     * automatiquement de page :
     * le produit reste sur l'accueil.
     */

}


/* =========================================================
   QUANTITÉS
========================================================= */

function updateQuantity(
    id,
    change
) {

    const item =
        cart.find(
            product =>
                product.id === id
        );

    if (!item) {
        return;
    }


    item.qty += change;


    if (item.qty <= 0) {

        cart =
            cart.filter(
                product =>
                    product.id !== id
            );

    }


    updateCartUI();

}


/* =========================================================
   AFFICHAGE DU PANIER
========================================================= */

function updateCartUI() {

    /*
     * Nombre total d'articles.
     */

    const totalCount =
        cart.reduce(
            (sum, item) =>
                sum + item.qty,
            0
        );


    const cartCount =
        document.getElementById(
            'cart-count'
        );

    if (cartCount) {

        cartCount.textContent =
            totalCount;

    }


    /*
     * Conteneur du panier.
     */

    const cartContainer =
        document.getElementById(
            'cart-items-container'
        );

    const summaryBox =
        document.getElementById(
            'cart-summary'
        );


    if (
        !cartContainer ||
        !summaryBox
    ) {

        return;

    }


    /*
     * Panier vide.
     */

    if (cart.length === 0) {

        cartContainer.innerHTML = `

            <div class="empty-cart">

                <i
                    class="fa-solid fa-basket-shopping fa-2x"
                ></i>

                <br><br>

                Votre panier est vide.

                <br>

                Ajoutez des produits depuis
                l'accueil.

            </div>

        `;

        summaryBox.classList.add(
            'hidden'
        );

        return;

    }


    /*
     * Produits du panier.
     */

    cartContainer.innerHTML =
        cart.map(item => {

            return `

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

            `;

        }).join('');


    /*
     * Calculs.
     */

    const subtotal =
        cart.reduce(
            (sum, item) =>
                sum +
                (
                    item.priceNum *
                    item.qty
                ),
            0
        );


    const shipping = 1500;

    const total =
        subtotal +
        shipping;


    const subtotalElement =
        document.getElementById(
            'subtotal-amount'
        );

    const totalElement =
        document.getElementById(
            'total-amount'
        );


    if (subtotalElement) {

        subtotalElement.textContent =
            `${formatPrice(subtotal)} FCFA`;

    }


    if (totalElement) {

        totalElement.textContent =
            `${formatPrice(total)} FCFA`;

    }


    summaryBox.classList.remove(
        'hidden'
    );

}


/* =========================================================
   FORMAT PRIX
========================================================= */

function formatPrice(
    amount
) {

    return Number(amount)
        .toLocaleString(
            'fr-FR'
        );

}


/* =========================================================
   CHECKOUT
========================================================= */

function checkout() {

    if (cart.length === 0) {

        alert(
            'Votre panier est vide.'
        );

        return;

    }


    /*
     * Récupération des informations.
     */

    const name =
        document
            .getElementById(
                'client-name'
            )
            .value
            .trim();


    const phone =
        document
            .getElementById(
                'client-phone'
            )
            .value
            .trim();


    const address =
        document
            .getElementById(
                'client-address'
            )
            .value
            .trim();


    const notes =
        document
            .getElementById(
                'client-notes'
            )
            .value
            .trim();


    /*
     * Vérification.
     */

    if (
        !name ||
        !phone ||
        !address
    ) {

        alert(
            'Veuillez remplir votre nom, numéro de téléphone et adresse de livraison.'
        );

        return;

    }


    /*
     * Création du message.
     */

    let message =
        '📋 NOUVELLE COMMANDE\n\n';


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
        '\n🛒 ARTICLES :\n';


    cart.forEach(item => {

        message +=
            `• ${item.name} x${item.qty} — ${item.price}\n`;

    });


    /*
     * Calcul du prix.
     */

    const subtotal =
        cart.reduce(
            (sum, item) =>
                sum +
                (
                    item.priceNum *
                    item.qty
                ),
            0
        );


    const shipping = 1500;

    const total =
        subtotal +
        shipping;


    message +=
        `\n💰 Sous-total : ${formatPrice(subtotal)} FCFA`;

    message +=
        `\n🚚 Livraison : ${formatPrice(shipping)} FCFA`;

    message +=
        `\n✅ TOTAL : ${formatPrice(total)} FCFA`;


    /*
     * Si l'application est ouverte
     * depuis Telegram, sendData()
     * permet d'envoyer directement
     * les données au bot qui a lancé
     * la Mini App.
     */

    if (
        window.Telegram &&
        window.Telegram.WebApp
    ) {

        const tg =
            window.Telegram.WebApp;


        try {

            tg.sendData(
                message
            );

            /*
             * Petite confirmation visuelle.
             */

            alert(
                'Commande envoyée !'
            );

            return;

        } catch (error) {

            console.error(
                'Erreur Telegram sendData:',
                error
            );

        }

    }


    /*
     * Fallback si la page est ouverte
     * hors Telegram.
     *
     * Cela ouvre le bot.
     */

    const encodedMessage =
        encodeURIComponent(
            message
        );


    window.open(
        `https://t.me/vente_puff_bot?text=${encodedMessage}`,
        '_blank'
    );

}


/* =========================================================
   UTILITAIRES
========================================================= */

/*
 * Permet de revenir sur l'accueil
 * avec le bouton Accueil si nécessaire.
 */

function goHome() {

    const homeButton =
        document.querySelector(
            '.nav-item'
        );

    switchTab(
        'accueil',
        homeButton
    );

}