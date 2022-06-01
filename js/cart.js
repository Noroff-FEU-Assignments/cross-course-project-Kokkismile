let cartContainer = document.querySelector(".cart-items-container");

let cartStorage = JSON.parse(localStorage.getItem("cartArray"));
console.log(cartStorage);

cartContainer.innerHTML = `<p>Cart is empty</p>`;

function asembleCart() {
    cartContainer.innerHTML = ``;

    for(i = 0; i < cartStorage.length; i++) {
        cartContainer.innerHTML = `<div class="cart-items-bg">
                                     <div class="cart-item-img" style="background-image: url(${cartStorage[0]});"></div>
                                     <div class="cart-item-info">
                                       <p>${cartStorage[2]}</p>
                                       <p>Game ID: ${cartStorage[1]}</p>
                                       <p class="text-green">Price: ${cartStorage[4]}</p>
                                     </div>
                                   </div>`;
    }
}

asembleCart();