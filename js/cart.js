let cartContainer = document.querySelector(".cart-items-container");
cartContainer.innerHTML = `<p>Cart is empty</p>`;

//Get array from localstorage
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