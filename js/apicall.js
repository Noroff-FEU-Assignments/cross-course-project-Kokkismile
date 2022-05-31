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

            gameCard.innerHTML += `<div class="card-styling">
                                     <a href="store-details.html?id=${results[i].id}" class="card">
                                     <h2 class="padding-10px">Game:${game}</h2>
                                     <div class="store-game-img" style="background-image: url(${results[i].background_image});"></div>
                                     </a>
                                   </div>`;
        }

    } catch(error) {
        console.log(error);
    }
}

fetchGames();