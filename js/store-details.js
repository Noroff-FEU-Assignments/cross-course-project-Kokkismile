const apiKey = "?key=7e4f8935456c47bbb745861dedea99ef";
const gameUrl = "https://api.rawg.io/api/games/";

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");

const detailsUrl = gameUrl + id + apiKey;

const gameDetails = document.querySelector(".game-cards-details");
gameDetails.innerHTML = `<h1>LOADING ⌛️</h1>`;

async function fetchDetails() {
    try {
        const getDetails = await fetch(detailsUrl);
        const detailsJson = await getDetails.json();
        console.log(detailsJson)
        gameDetails.innerHTML = "";

            gameDetails.innerHTML = `<div>
                                     <h1>${detailsJson.name}</h1>
                                     <img src="${detailsJson.background_image_additional}" class="card-img">
                                     <p>${detailsJson.description}</p>
                                     </div>`;
            
        

    } catch(error) {
        console.log(error)
    }
}

fetchDetails()