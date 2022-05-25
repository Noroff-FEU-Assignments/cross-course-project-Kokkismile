//AUCTION LISTING
const games = [{name: "Avorion"}, {name: "PrisonArchietects"}, {name: "Skyrim"}, {name: "Elden Ring"}, {name: "Fallot"}];
const users = [{user: "Moonfly"}, {user: "MRcool"}, {user: "Zhico"}, {user: "Grimshot"}, {user: "Rexxar"}];
let auctionArray = "";

function createList() {

    for(i = 0; i < games.length; i++) {

        auctionArray = [{user: "Moonfly",
                     games: games.name[i]}]
    }
}

createList();

console.log(auctionArray);