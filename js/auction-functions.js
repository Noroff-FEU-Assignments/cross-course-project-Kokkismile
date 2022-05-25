//AUCTION LISTING
const games = [{Name: Avorion}, {Name: PrisonArchietects}]
let auctionArray = "";

export function createList() {

    for(i = 0; i < games.length; i++) {

        auctionArray = [{user: "Moonfly",
                     games: games.Name[i]}]
    }
}