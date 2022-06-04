//GET CART
function getCart() {
	const cart = localStorage.getItem("cart");

	if (cart === null) {
		return [];
	} else {
		return JSON.parse(cart);
	}
}

//CLEAR CART
function clearCart() {
	localStorage.removeItem("cart");
}

const clear = document.querySelector(".clear-cart");

clear.onclick = function (event) {
	clearCart();
	assembleCart();
};

//CREATE HTML
let cartContainer = document.querySelector(".cart-items-container");
cartContainer.innerHTML = "<p>Cart is empty</p>";

function assembleCart() {
	const cartStorage = getCart();

	if (cartStorage.length === 0) {
		return (cartContainer.innerHTML = "<p>Cart is empty</p>");
	}

	cartContainer.innerHTML = "";

	cartStorage.forEach(function (game) {
		cartContainer.innerHTML += `<div class="cart-items-bg">
                                     <div class="cart-item-img" style="background-image: url(${game.image});"></div>
                                     <div class="cart-item-info">
                                       <p>${game.name}</p>
                                       <p>Game ID: ${game.id}</p>
                                       <p class="text-green">Price: ${game.price}</p>
                                     </div>
                                   </div>`; 
    console.log(game)
	});
}

assembleCart();
