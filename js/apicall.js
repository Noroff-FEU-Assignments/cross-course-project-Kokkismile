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


        for(i = 0; i < json.length; i++) {

            let gameTags = [];
            for(index = 0; index < json[i].categories.length; index++) {gameTags.push(json[i].categories[index].name); console.log("tags: " + gameTags)}

            gameCard.innerHTML += `<div class="store-card-wrap">
                                       <div class="card-styling">
                                         <a href="store-details.html?id=${json[i].id}" class="card">
                                         <h2 class="store-card-name">${json[i].name}</h2>
                                         <div class="card-bg-img" style="background-image: url(${json[i].images[0].src});">
                                         </div>
                                         <p class="store-card-info">${json[i].prices.price} kr</p>
                                         <p class="store-card-info">Tags: ${gameTags}</p>
                                         </a>
                                       </div>
                                   </div>`;
        }
        
    } catch(error) {
        console.log(error);
    }
}

fetchGames();

