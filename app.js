let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    // WebApp Telegram
    const tg = window.Telegram?.WebApp;
    if (tg) {
        try {
            tg.ready();
            tg.expand();
            if (tg.initDataUnsafe?.user?.first_name) {
                document.getElementById('username').textContent = tg.initDataUnsafe.user.first_name;
            }
        } catch (e) {
            console.log("Mode classique hors Telegram");
        }
    }

    // Gestion du changement de vue (Panier / Boutique)
    const btnGoCart = document.getElementById('btn-go-cart');
    const btnSeeCart = document.getElementById('btn-see-cart');
    const btnBackShop = document.getElementById('btn-back-shop');

    if (btnGoCart) btnGoCart.addEventListener('click', () => switchView('view-cart'));
    if (btnSeeCart) btnSeeCart.addEventListener('click', () => switchView('view-cart'));
    if (btnBackShop) btnBackShop.addEventListener('click', () => switchView('view-shop'));

    // Événements d'ajout au panier
    document.querySelectorAll('.add-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const btn = e.currentTarget;
            const name = btn.getAttribute('data-name');
            const price = parseInt(btn.getAttribute('data-price'), 10);
            addToCart(name, price);
        });
    });

    // Filtre des catégories
    document.querySelectorAll('.cat-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            const btn = e.currentTarget;
            btn.classList.add('active');

            const category = btn.getAttribute('data-cat');
            document.querySelectorAll('.product-card').forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'all' || cardCat === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Bouton valider la commande
    const btnConfirm = document.getElementById('btn-confirm-order');
    if (btnConfirm) {
        btnConfirm.addEventListener('click', confirmOrder);
    }

    renderCart();
});

function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (target) target.classList.add('active');
}

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    renderCart();
}

function updateQty(name, delta) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.name !== name);
        }
    }
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cart-items-list');
    if (!cartList) return;

    cartList.innerHTML = '';
    let total = 0;
    let totalItems = 0;

    if (cart.length === 0) {
        cartList.innerHTML = `<p style="text-align:center; color:#94a3b8; font-size:0.85rem; padding:10px;">Votre panier est vide 🛒</p>`;
    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;
            totalItems += item.quantity;

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div>
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${(item.price * item.quantity).toLocaleString('fr-FR')} FCFA</div>
                </div>
                <div class="cart-controls">
                    <button type="button" class="btn-qty btn-minus">-</button>
                    <span>${item.quantity}</span>
                    <button type="button" class="btn-qty btn-plus">+</button>
                </div>
            `;

            div.querySelector('.btn-minus').addEventListener('click', () => updateQty(item.name, -1));
            div.querySelector('.btn-plus').addEventListener('click', () => updateQty(item.name, 1));

            cartList.appendChild(div);
        });
    }

    document.getElementById('cart-count').textContent = totalItems;
    document.getElementById('shop-total').textContent = `${total.toLocaleString('fr-FR')} FCFA`;
    document.getElementById('summary-subtotal').textContent = `${total.toLocaleString('fr-FR')} FCFA`;
    document.getElementById('summary-total').textContent = `${total.toLocaleString('fr-FR')} FCFA`;
}

function confirmOrder() {
    const tg = window.Telegram?.WebApp;

    if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
    }

    const address = document.getElementById('delivery-address').value.trim();
    const note = document.getElementById('order-note').value.trim();

    if (!address) {
        alert("Veuillez remplir votre adresse de livraison.");
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const order = { cart, total, currency: "FCFA", address, note };

    if (tg && tg.sendData) {
        tg.sendData(JSON.stringify(order));
    } else {
        alert(`Commande confirmée !\nTotal : ${total.toLocaleString('fr-FR')} FCFA\nAdresse : ${address}`);
    }
}