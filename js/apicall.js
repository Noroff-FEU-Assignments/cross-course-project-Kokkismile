const productsUrl = "https://gamehub-wp-api.one/gamehub/wp-json/wc/store/products";

const gameCard = document.querySelector(".game-cards");
gameCard.innerHTML = `<h1>LOADING ⌛️</h1>`;

let cartArray = [];
async function fetchGames() {

    try {

        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log(json)

        gameCard.innerHTML = "";
        
        const results = json.products;

        for(i = 0; i < json.length; i++) {

            gameCard.innerHTML += `<div class="store-card-wrap">
                                       <div class="card-styling">
                                         <a href="store-details.html?id=${json[i].id}" class="card">
                                         <h2 class="store-card-name">${json[i].name}</h2>
                                         <div class="card-bg-img" style="background-image: url(${json[i].images[0].src});">
                                         </div>
                                         <p class="store-card-info">${json[i].prices.price} kr</p>
                                         </a>
                                       </div>
                                   </div>`;
        }
        
    } catch(error) {
        console.log(error);
    }
}

fetchGames();

