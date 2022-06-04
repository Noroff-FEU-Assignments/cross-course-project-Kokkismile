let cartContainer = document.querySelector(".cart-items-container");
cartContainer.innerHTML = `<p>Cart is empty</p>`;



//apicall - get array from storepage
const apiKey = "?key=7e4f8935456c47bbb745861dedea99ef";
const gameUrl = "https://api.rawg.io/api/games/";
let cartIds = JSON.parse(localStorage.getItem("cartIdArray"))
for(i = 0; i < cartIds.length; i++) {
  let gameId = cartIds[i];
  console.log(gameId)
}



async function getCartItems(gameId) {

  try {
    const cartUrl = gameUrl + gameId + apiKey;
    const getGameAndKey = await fetch(cartUrl);
    const jsonData = await getGameAndKey.json();
    console.log(jsonData);

    cartContainer.innerHTML += `<div class="cart-items-bg">
                               <div class="cart-item-img" style="background-image: url(${jsonData.background_image});"></div>
                               <div class="cart-item-info">
                               <p>${jsonData.name}</p>
                               </div>
                               </div>
                               
                               `;
  } catch(error) {
    console.log(error)
  }
}
getCartItems();


//Get array from detailspage
let cartStorage = JSON.parse(localStorage.getItem("cartArray"));
console.log(cartStorage);

//Create object from array
let cartObject = {}
  for(i = 0; i < cartStorage.length; i++) {
    cartObject = {img: cartStorage[0], name: cartStorage[2], id: cartStorage[1], price: cartStorage[4], released: cartStorage[3]}
    
  }

//Create HTML
function assembleCart() {
    cartContainer.innerHTML = ``;


        cartContainer.innerHTML += `<div class="cart-items-bg">
                                     <div class="cart-item-img" style="background-image: url(${cartObject.img});"></div>
                                     <div class="cart-item-info">
                                       <p>${cartObject.name}</p>
                                       <p>Game ID: ${cartObject.id}</p>
                                       <p>Released: ${cartObject.released}</p>
                                       <p class="text-green">Price: ${cartObject.price}</p>
                                     </div>
                                   </div>`;
                                  

}

assembleCart();

//Clear cart
const clear = document.querySelector(".clear-cart");

clear.onclick = function(event) {
  console.log(event)
  cartContainer.innerHTML = `<p>Cart is empty</p>`;
  clear.style.display = "none"
}