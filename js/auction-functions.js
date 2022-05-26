//AUCTION LISTING
const games = [{name: "Avorion"}, {name: "PrisonArchietects"}, {name: "Skyrim"}, {name: "Elden Ring"}, {name: "Fallout"}];
const users = [{user: "Moonfly"}, {user: "MRcool"}, {user: "Zhico"}, {user: "Grimshot"}, {user: "Rexxar"}];

const listContainer = document.querySelector(".auction-listing-container");

function createList() {

    for(let i = 0; i < users.length; i++) {

        let auctionSeller = users[i].user;
        console.log(auctionSeller);
    }

    for(let i = 0; i < games.length; i++) {

        let auctionGame = games[i].name;
        console.log(auctionGame);
    }
}

createList();

