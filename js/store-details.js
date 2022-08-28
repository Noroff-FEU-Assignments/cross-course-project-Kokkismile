const gameUrl = "https://gamehub-wp-api.one/gamehub/wp-json/wc/store/products/";

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");

if (!id) {
	location.href = "/store.html";
}

const detailsUrl = gameUrl + id;

const gameDetails = document.querySelector(".details-container");
gameDetails.innerHTML = `<h1>LOADING ⌛️</h1>`;

async function fetchDetails() {

	try {
		const getDetails = await fetch(detailsUrl);
		const detailsJson = await getDetails.json();

		let imageUrl = detailsJson.images[0].src;
		gameDetails.innerHTML = "";

		gameDetails.innerHTML = `<div class="detail-card">
                                     <img src="${imageUrl}" class="card-img detail-img">
                                     <div class="detail-info-text-wrap">
                                     <h1>${detailsJson.name}</h1>
                                     <p>${detailsJson.description}</p>
                                     </div>
                                 </div>`;

		
		//Notification/CARTICON
		let cartRemove = document.querySelector(".remove-fromcart");
		let cartAdd = document.querySelector(".add-tocart");
		let cartNotification = document.querySelector(".addedcart-message");

		//CART (storage)
		const CART = "cart";

		function getCart() {

			const cart = localStorage.getItem(CART);
			if (cart === null) {
				return [];
			} else {
				return JSON.parse(cart);
			}
		};
		
		function saveCart(cartArray) {

			localStorage.setItem(CART, JSON.stringify(cartArray));
		};
		
		//ADD TO CART
		const cart = document.querySelector(".add-to-cart");
		cart.addEventListener("click", cartFunction);

		let cartArray = [];
		function cartFunction() {

			const cartArray = getCart();

			const gameExists = cartArray.find(function (game) {

				return game.id === Number(id);
			});

			if (!gameExists) {

				cartAdd.style.display = "none";
				cartRemove.style.display = "block";
				cartNotification.style.display = "block";

				//ADD GAME TO CART
				const game = { image: imageUrl, name: detailsJson.name, id: detailsJson.id, price: detailsJson.prices.price };
				cartArray.push(game);
				saveCart(cartArray);

			} else {

				cartAdd.style.display = "block";
				cartRemove.style.display = "none";
				cartNotification.style.display = "none";

				const newCart = cartArray.filter((game) => game.id !== Number(id));
				saveCart(newCart);
			};
		};

		//BUY NOW BUTTON
		const buyButton = document.querySelector(".buy");
		buyButton.addEventListener("click", buyNow);

		function buyNow() {

            const thisGame = { image: imageUrl, name: detailsJson.name, id: detailsJson.id, price: detailsJson.prices.price };
			cartArray.push(thisGame);
			localStorage.setItem("cart", JSON.stringify(cartArray));
		};

	} catch (error) {

		console.log(error);
	};
};

fetchDetails();
