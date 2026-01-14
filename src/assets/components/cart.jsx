export let cart = JSON.parse(localStorage.getItem('cart')) ||[];

export function addToCart(productId) {
  console.log(productId);
  let matchingItems;
  cart.forEach((cartItems) => {
    if (productId === cartItems.productId) {
      matchingItems = cartItems;
    }
  });

  if (matchingItems) {
    matchingItems.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1, deliveryOptionId: "1" });
  }
  console.log(cart);
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))
}