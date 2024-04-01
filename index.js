// index.js

const products = [
  {
    name: "Scooter",
    price: 199.99,
  },
  {
    name: "Headphones",
    price: 99.99,
  },
  {
    name: "Smartphone",
    price: 599.99,
  },
  {
    name: "Laptop",
    price: 999.99,
  },
  {
    name: "Watch",
    price: 149.99,
  },
  {
    name: "Sunglasses",
    price: 49.99,
  },
  {
    name: "Backpack",
    price: 79.99,
  },
  {
    name: "Gaming Console",
    price: 399.99,
  },
];

const container = document.getElementById("product-container");
const cart = document.getElementById("cart");

const cartProducts = [];

products.forEach((product) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const name = document.createElement("h2");
  name.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = "$" + product.price.toFixed(2);

  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.classList.add("add-to-cart-btn");
  button.addEventListener("click", () => {
    addToCart(product);
  });

  productDiv.appendChild(name);
  productDiv.appendChild(price);
  productDiv.appendChild(button);

  container.appendChild(productDiv);
});


function addToCart(product) {
  cartProducts.push(product);
  renderCart();
}


function renderCart() {

  cart.innerHTML = "";
  cartProducts.forEach((product) => {
    const cartItem = document.createElement("div");
    const productName = document.createElement("span");
    productName.textContent = product.name;

    const productPrice = document.createElement("span");
    productPrice.textContent = "$" + product.price.toFixed(2);

    cartItem.appendChild(productName);
    cartItem.appendChild(document.createTextNode(" - ")); 
    cartItem.appendChild(productPrice);

    cart.appendChild(cartItem);
  });
}
