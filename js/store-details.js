//storage
const CART = "cart";

function getCart() {
	const cart = localStorage.getItem(CART);

	if (cart === null) {
		return [];
	} else {
		return JSON.parse(cart);
	}
}

function saveCart(cartArray) {
	localStorage.setItem(CART, JSON.stringify(cartArray));
}

//Get game details
const apiKey = "?key=7e4f8935456c47bbb745861dedea99ef";
const gameUrl = "https://api.rawg.io/api/games/";

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");

if (!id) {
	location.href = "/store.html";
}

const detailsUrl = gameUrl + id + apiKey;

const gameDetails = document.querySelector(".details-container");
gameDetails.innerHTML = `<h1>LOADING ⌛️</h1>`;

async function fetchDetails() {

	try {
		const getDetails = await fetch(detailsUrl);
		const detailsJson = await getDetails.json();
		console.log(detailsJson);
		gameDetails.innerHTML = "";

		gameDetails.innerHTML = `<div class="detail-card">
                                     <img src="${detailsJson.background_image_additional}" class="card-img detail-img">
                                     <div class="detail-info-text-wrap">
                                     <h1>${detailsJson.name}</h1>
                                     <p>${detailsJson.description_raw}</p>
                                     </div>
                                 </div>`;

		const cart = document.querySelector(".add-to-cart");
		cart.addEventListener("click", cartFunction);
		let cartArray = []  
		function cartFunction() {
			const cartArray = getCart();

			const gameExists = cartArray.find(function (game) {
				console.log(typeof game.id);
				console.log(typeof id);
				return game.id === Number(id);
			});

			console.log(gameExists);

			if (!gameExists) {
				const game = { image: detailsJson.background_image + apiKey, name: detailsJson.name, id: detailsJson.id, price: "$50" };
				cartArray.push(game);
				saveCart(cartArray);
			} else {
				const newCart = cartArray.filter((game) => game.id !== Number(id));
				saveCart(newCart);
			}
		}

		//BUY NOW BUTTON
		const buyButton = document.querySelector(".buy");
		buyButton.addEventListener("click", buyNow);

		function buyNow() {
            const thisGame = { image: detailsJson.background_image + apiKey, name: detailsJson.name, id: detailsJson.id, price: "$50" }
			cartArray.push(thisGame)
			localStorage.setItem("cart", JSON.stringify(cartArray));
		}
	} catch (error) {
		console.log(error);
	}
}

fetchDetails();
