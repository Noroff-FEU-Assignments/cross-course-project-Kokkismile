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
                                       <div class="card-styling">
                                         <a href="store-details.html?id=${results[i].id}" class="card">
                                         <h2 class="padding-10px">${results[i].name}</h2>
                                         <p class="text-margin-1rem text-green padding-10px">$50</p>
                                         <div class="card-bg-img" style="background-image: url(${results[i].background_image});">
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

