import { getCart, clearCart } from "./utils/storage.js";

let cartContainer = document.querySelector(".cart-items-container");
cartContainer.innerHTML = "<p>Cart is empty</p>";

//Get array from detailspage

function assembleCart() {
	const cartStorage = getCart();

	if (cartStorage.length === 0) {
		return (cartContainer.innerHTML = "<p>Cart is empty</p>");
	}

	cartContainer.innerHTML = "";

	cartStorage.forEach(function (game) {
		cartContainer.innerHTML += `<div class="cart-items-bg">
                                     <div class="cart-item-img" style="background-image: url(${game.img});"></div>
                                     <div class="cart-item-info">
                                       <p>${game.name}</p>
                                       <p>Game ID: ${game.id}</p>
                                       <p>Released: ${game.released}</p>
                                       <p class="text-green">Price: ${game.price}</p>
                                     </div>
                                   </div>`;
	});
}

assembleCart();

//Clear cart
const clear = document.querySelector(".clear-cart");

clear.onclick = function (event) {
	clearCart();
	assembleCart();
	// console.log(event);
	// cartContainer.innerHTML = `<p>Cart is empty</p>`;
	// clear.style.display = "none";
};
