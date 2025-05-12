
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Товар додано в кошик!');
}

function showCart() {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let cartDiv = document.getElementById('cart');
    if (!cart.length) {
        cartDiv.innerHTML = '<p>Кошик порожній</p>';
        return;
    }
    cartDiv.innerHTML = '<ul>' + cart.map(item => `<li>${item.name} — ${item.price} грн</li>`).join('') + '</ul>';
}

if (document.getElementById('cart')) showCart();
