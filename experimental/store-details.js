import getCart, { saveCart } from "../experimental/storage";

const apiKey = "?key=7e4f8935456c47bbb745861dedea99ef";
const gameUrl = "https://api.rawg.io/api/games/";

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");

if (!id) {
	location.href = "/";
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

		gameDetails.innerHTML = `
                                     <div class="detail-card">
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
				const game = { image: detailsJson.background_image + apiKey, name: detailsJson.name, id: detailsJson.id };
				cartArray.push(game);
				saveCart(cartArray);
			} else {
				const newCart = cartArray.filter((game) => game.id !== Number(id));
				saveCart(newCart);
			}

			// cartArray.push(game);
			// console.log(cartArray);
			// localStorage.setItem("cartArray", JSON.stringify(cartArray));
			// let cartStorage = JSON.parse(localStorage.getItem("cartArray"));
			// console.log(cartStorage);
		}

		//BUY NOW BUTTON
		const buyButton = document.querySelector(".buy");
		buyButton.addEventListener("click", buyNow);

		function buyNow() {
			cartArray.push(detailsJson.background_image + apiKey, id, detailsJson.name, detailsJson.released, "$50");
			console.log(cartArray);
			localStorage.setItem("cartArray", JSON.stringify(cartArray));
			let cartStorage = JSON.parse(localStorage.getItem("cartArray"));
			console.log(cartStorage);
		}
	} catch (error) {
		console.log(error);
	}
}

fetchDetails();
