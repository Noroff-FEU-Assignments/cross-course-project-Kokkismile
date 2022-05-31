const apiKey = "?key=7e4f8935456c47bbb745861dedea99ef";
const gameUrl = "https://api.rawg.io/api/games/";

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");

const detailsUrl = gameUrl + id + apiKey;

const gameDetails = document.querySelector(".details-container");
gameDetails.innerHTML = `<h1>LOADING ⌛️</h1>`;

const addCart = document.querySelector(".add-to-cart");

async function fetchDetails() {
    try {
        const getDetails = await fetch(detailsUrl);
        const detailsJson = await getDetails.json();
        console.log(detailsJson)
        gameDetails.innerHTML = "";

            gameDetails.innerHTML = `
                                     <div class="detail-card">
                                     <img src="${detailsJson.background_image_additional}" class="card-img detail-img">
                                     <div class="detail-info-text-wrap">
                                     <h1>${detailsJson.name}</h1>
                                     <p>${detailsJson.description}</p>
                                     </div>
                                     </div>`;

            /* addCart.innerHTML = `<button class="add-to-cart">
                                   <i class="fa-solid fa-cart-plus icon"></i>
                                 </button>` */

    } catch(error) {
        console.log(error)
    }
}

fetchDetails()

const cart = document.querySelectorAll(".add-to-cart");

