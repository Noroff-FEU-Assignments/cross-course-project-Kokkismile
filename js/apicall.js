//const apiKey = "7e4f8935456c47bbb745861dedea99ef";
const productsUrl = "http://localhost/gamehub-wp-api/wordpress-6.0.1/wordpress/wp-json/wc/store/products";

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
                                         <a href="store-details.html?id=0" class="card">
                                         <h2 class="padding-10px">${json[i].name}</h2>
                                         <p class="text-margin-1rem text-green padding-10px">$50</p>
                                         <div class="card-bg-img" style="background-image: url(${json[i].images[0].src});">
                                         </div>
                                         </a>
                                       </div>
                                   </div>`;
        }
        
    } catch(error) {
        console.log(error);
    }
}

fetchGames();

