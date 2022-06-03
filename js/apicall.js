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

            gameCard.innerHTML += `<div class="store-card-wrap">
                                       <button class="add-to-cart">
                                         <i class="fa-solid fa-cart-plus icon"></i>
                                         </button>
                                       <div class="card-styling">
                                         <a href="store-details.html?id=${results[i].id}" class="card">
                                         <h2 class="padding-10px">Game:${game}</h2>
                                         <div class="card-bg-img" style="background-image: url(${results[i].background_image});">
                                         </div>
                                         </a>
                                       </div>
                                   </div>`;

            let cartArray = [];
            
            const cart = document.querySelector(".add-to-cart");
            cart.addEventListener("click", cartFunctionStore);

            function cartFunctionStore() {
            cartArray.push(results[i].id);
            console.log("logging id in array: " + cartArray);
            localStorage.setItem("cartArrayStore", JSON.stringify(cartArray));
            //console.log("storage" + JSON.parse(localStorage.getItem("cartArray")))
        }

        cartFunctionStore();
        }

    } catch(error) {
        console.log(error);
    }
}
fetchGames();