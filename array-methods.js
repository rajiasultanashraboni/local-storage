const products = [
  { name: "laptop", price: 3200, brand: "hp", color: "black" },
  { name: "camera", price: 1200, brand: "canon", color: "red" },
  { name: "watch", price: 2200, brand: "casio", color: "green" },
  { name: "phone", price: 3500, brand: "samsung", color: "yellow" },
  { name: "sunglass", price: 2000, brand: "rebon", color: "white" },
];
// map
const brands = products.map((product) => product.brand);
const prices = products.map((product) => product.price);
const names = products.map((product) => product.name);
const colors = products.map((product) => product.color);
// console.log(brands);
// console.log(prices);
// console.log(names);
// console.log(colors);

// forEach

// products.forEach((product) => console.log(product));
// products.forEach((product) => console.log(product.color));
// products.forEach((product) => console.log(product.name));
// products.forEach((product) => console.log(product.brand));
// products.forEach((product) => console.log(product.price));

// filter
const cheap = products.filter((product) => product.price < 5000);
// console.log(cheap);

const specificName = products.filter((product) => product.name.includes("n"));
// console.log(specificName);

const name = products.filter((product) => product.name.includes("p"));
// console.log(name);
const findS = products.filter((product) => product.name.includes("s"));
// console.log(findS);

// find
const findN = products.find((product) => product.name.includes("n"));
console.log(findN);

const findP = products.find((product) => product.name.includes("p"));
console.log(findP);
