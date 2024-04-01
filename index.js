const products = [
  {
    name: "Scooter",
    price: 199.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Scooter",
  },
  {
    name: "Headphones",
    price: 99.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Headphones",
  },
  {
    name: "Smartphone",
    price: 599.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Smartphone",
  },
  {
    name: "Laptop",
    price: 999.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Laptop",
  },
  {
    name: "Watch",
    price: 149.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Watch",
  },
  {
    name: "Sunglasses",
    price: 49.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Sunglasses",
  },
  {
    name: "Backpack",
    price: 79.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Backpack",
  },
  {
    name: "Gaming Console",
    price: 399.99,
    imageUrl: "https://api.dicebear.com/8.x/icons/svg?seed=Gaming%20Console",
  },
];

const container = document.getElementById("product-container");
const cartDiv = document.getElementById("cart");
let cart = [];


function displayProducts() {
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const image = document.createElement("img");
    image.src = product.imageUrl;
    image.alt = product.name;
    image.classList.add("product-image");

    imageContainer.appendChild(image);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const name = document.createElement("h2");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = "$" + product.price.toFixed(2);

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.classList.add("add-to-cart-btn");
    button.addEventListener("click", function() {
      addToCart(product);
    });

    infoDiv.appendChild(name);
    infoDiv.appendChild(price);
    infoDiv.appendChild(button);

    productDiv.appendChild(imageContainer);
    productDiv.appendChild(infoDiv);

    container.appendChild(productDiv);
  });
}

function addToCart(product) {
  const existingCartItem = cart.find(item => item.name === product.name);
  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cart.push({...product, quantity: 1});
  }
  displayCart();
}

function displayCart() {
  cartDiv.innerHTML = "";
  let totalPrice = 0;
  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
      <p>${product.name} - $${(product.price * product.quantity).toFixed(2)}</p>
      <input type="number" min="1" value="${product.quantity}" onchange="updateQuantity('${product.name}', this.value)">
      <button onclick="removeFromCart('${product.name}')">Remove</button>
    `;
    cartDiv.appendChild(cartItem);
    totalPrice += product.price * product.quantity;
  });
  cartDiv.innerHTML += `<p>Total Price: $${totalPrice.toFixed(2)}</p>`;
}


function removeFromCart(productName) {
  cart = cart.filter((product) => product.name !== productName);
  displayCart();
}


function updateQuantity(productName, quantity) {
  const product = cart.find(item => item.name === productName);
  product.quantity = parseInt(quantity);
  displayCart();
}


displayProducts();