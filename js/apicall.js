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
        console.log("testlog: " + json.results)

        

        for(i = 0; i < results.length; i++) {
            
            let game = results[i].name;
            console.log("logging game: " + game);

            gameCard.innerHTML += `<a href="store-details.html?id=${results[i].id}" class="card">
                                     <div class="card-styling">
                                     <h2>Game:${game}</h2>
                                     <img src="${results[i].background_image}" class="card-img"></img>
                                     </div>
                                   </a>`;
        }

    } catch(error) {
        console.log(error);
    }
}

fetchGames();