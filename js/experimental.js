const productsUrl = "https://gamehub-wp-api.one/gamehub/wp-json/wc/store/products";

const gameCard = document.querySelector(".game-cards");
gameCard.innerHTML = `<h1>LOADING ⌛️</h1>`;

const actionTag = document.querySelector(".action");
const coOpTag = document.querySelector(".co-op")

//let cartArray = [];
async function fetchGames() {

    try {

        const response = await fetch(productsUrl);
        const json = await response.json();
        console.log(json)

        gameCard.innerHTML = "";

        //Looping json result from api call.
        for(i = 0; i < json.length; i++) { 

            let gameTags = [];
            let filteredArray = [];
            //Looping through categories inside json result to get categories tags on each game.
            for(index = 0; index < json[i].categories.length; index++) {
                gameTags.push(json[i].categories[index].name);

                let gameId = json[i].id;
                let gameName = json[i].name;
                let gameImage = json[i].images[0].src;
                let gamePrice = json[i].prices.price;

                function createHtml() {
                    gameCard.innerHTML = `<div class="store-card-wrap">
                    <div class="card-styling">
                        <a href="store-details.html?id=${gameId}" class="card">
                            <h2 class="store-card-name">${gameName}</h2>
                            <div class="card-bg-img" style="background-image: url(${gameImage});"></div>
                            <p class="store-card-info">${gamePrice} kr</p>
                            <p class="store-card-info">Tags: ${gameTags}</p>
                        </a>
                    </div>
                </div>`
                };

            //Filter by gametags
            function checkTagAction(action) {
                return action === "action";
            }

            actionTag.onclick = function() {
                    filteredArray = gameTags.filter(checkTagAction);
                    console.log(filteredArray)
                    createHtml();
            };

            function checkTagCoOp(coOp) {
                return coOp === "co-op";
            }

            coOpTag.onclick = function() {
                filteredArray = gameTags.filter(checkTagCoOp);
                console.log(filteredArray)
                createHtml();
            }

            };
            
            if(filteredArray.length === 0) {
                //Creating game-cards without filter.
                gameCard.innerHTML += `<div class="store-card-wrap">
                                           <div class="card-styling">
                                               <a href="store-details.html?id=${json[i].id}" class="card">
                                                  <h2 class="store-card-name">${json[i].name}</h2>
                                                  <div class="card-bg-img" style="background-image: url(${json[i].images[0].src});"></div>
                                                  <p class="store-card-info">${json[i].prices.price} kr</p>
                                                  <p class="store-card-info">Tags: ${gameTags}</p>
                                               </a>
                                           </div>
                                       </div>`;
            };
        };
  
    } catch(error) {
        console.log(error);
        
    };
    
};

fetchGames();

