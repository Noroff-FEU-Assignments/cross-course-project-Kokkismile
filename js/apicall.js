const apiKey = "7e4f8935456c47bbb745861dedea99ef";
const gameUrl = "https://api.rawg.io/api/games?key=";

const gameCard = document.querySelector(".game-cards");
gameCard.innerHTML = `<h1>LOADING ⌛️</h1>`;

async function fetchGames() {

    try {

        const response = await fetch(gameUrl + apiKey);
        const json = await response.json();

        gameCard.innerHTML = "";
        
        const results = json.results;

        

        for(i = 0; i < results.length; i++) {
            
            let game = results[i].name;
            let gameId = results[i].id;
            //console.log(gameId)

            gameCard.innerHTML += `<div class="store-card-wrap">
                                       <button id="add-to-cart" data-product=${gameId}>
                                         <i class="fa-solid fa-cart-plus icon"></i>
                                         </button>
                                       <div class="card-styling">
                                         <a href="store-details.html?id=${gameId}" class="card">
                                         <h2 class="padding-10px">Game:${game}</h2>
                                         <div class="card-bg-img" style="background-image: url(${results[i].background_image});">
                                         </div>
                                         </a>
                                       </div>
                                   </div>`;

            let cartArray = [];

        const cart = document.querySelectorAll("#add-to-cart");
        
        cart.forEach(function(cart) {
            cart.onclick = function(event) {
                console.log(gameId)
            }
        })

        }

        



    } catch(error) {
        console.log(error);
    }
}
fetchGames();

