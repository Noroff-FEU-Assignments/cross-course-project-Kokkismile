const apiKey = "7e4f8935456c47bbb745861dedea99ef";
const gameUrl = "https://api.rawg.io/api/games?key=";

const gameCard = document.querySelector(".game-cards");
gameCard.innerHTML = `<h1>LOADING ⌛️</h1>`;
let cartArray = [];
async function fetchGames() {

    try {

        const response = await fetch(gameUrl + apiKey);
        const json = await response.json();

        gameCard.innerHTML = "";
        
        const results = json.results;
        

        for(i = 0; i < results.length; i++) {

            gameCard.innerHTML += `<div class="store-card-wrap">
                                       <button id="add-to-cart" class="target-button" data-id=${results[i].id}>
                                         <i class="fa-solid fa-cart-plus icon"></i>
                                         </button>
                                       <div class="card-styling">
                                         <a href="store-details.html?id=${results[i].id}" class="card">
                                         <h2 class="padding-10px">Game:${results[i].name}</h2>
                                         <div class="card-bg-img" style="background-image: url(${results[i].background_image});">
                                         </div>
                                         </a>
                                       </div>
                                   </div>`;
        
        }
            //cartArray.push(results[i].background_image + apiKey, results[i].name, results[i].released, "$50");


        const cart = document.querySelectorAll("#add-to-cart");
            console.log(cart)
        
        cart.forEach(function(cart) {
            cart.onclick = function(event) {
                localStorage.setItem("cartArray", JSON.stringify(cartArray));
                //console.log(cartArray)

                console.log(cart.dataset.id);
            }
        })
        

    } catch(error) {
        console.log(error);
    }
}
fetchGames();

