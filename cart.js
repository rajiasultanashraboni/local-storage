const addProduct = () => {
  const productFiled = document.getElementById("product-name");
  const quantityFiled = document.getElementById("product-quantity");
  const product = productFiled.value;
  const quantity = quantityFiled.value;
  productFiled.value = "";
  quantityFiled.value = "";
  console.log(product, quantity);
  displayProduct(product, quantity);
};

const displayProduct = (product, quantity) => {
  const ul = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = `${product}: ${quantity}`;
  ul.appendChild(li);
};
