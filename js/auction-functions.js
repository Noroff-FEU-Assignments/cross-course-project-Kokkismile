//AUCTION LISTING
const games = [{name: "Avorion"}, {name: "PrisonArchietects"}, {name: "Skyrim"}, {name: "Elden Ring"}, {name: "Fallout"}];
const users = [{user: "Moonfly"}, {user: "MRcool"}, {user: "Zhico"}, {user: "Grimshot"}, {user: "Rexxar"}];

function createList() {

    for(let i = 0; i < users.length; i++) {

        let auctionSeller = users[i].user;
        console.log(auctionSeller);
    }
}

createList();

