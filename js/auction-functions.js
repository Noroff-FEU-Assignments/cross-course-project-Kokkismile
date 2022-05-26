//AUCTION LISTING
//Example users and games
const games = [{name: "Avorion", user: "Moonfly"}, {name: "PrisonArchitects", user: "MRcool"}, {name: "Skyrim", user: "Zhico"}, {name: "Elden Ring", user: "Grimshot"}, {name: "Fallout", user: "Rexxar"}];

//Listing container
const listContainer = document.querySelector(".auction-listing-container");
/* let auctionListing = listContainer.innerHTML = `<div class="auction-listing-wrap">
                                                    <p>test</p>
                                                    <p>test</p>
                                                    <p>test</p>
                                                    <p>test</p>
                                                  </div>`; */

//Creating auction list
function createList() {


    for(let i = 0; i < games.length; i++) {

        let auctionGame = games[i].name;
        let auctionSeller = games[i].user

        listContainer.innerHTML += `<div class="auction-listing-wrap">
        <p>${auctionGame}</p>
        <p>${auctionSeller}</p>
      </div>`;
    }

}

createList();

