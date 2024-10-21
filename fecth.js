const student = {
  age: 25,
  name: "Sakib khan",
  movies: ["boss", "hero"],
  specification: {
    weight: 62,
    height: 67,
    address: "kurmitola",
  },
};

const studentJson = JSON.stringify(student);
// console.log(studentJson);

const studentObj = JSON.parse(studentJson);
// console.log(studentObj);

// fetch
// fetch("url")
//   .then((res) => res.JSON())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

const keys = Object.keys(student);
// console.log(keys);
const values = Object.values(student);
// console.log(values);

const products = [
  { name: "laptop", price: 3200, brand: "hp", color: "black" },
  { name: "camera", price: 1200, brand: "canon", color: "red" },
  { name: "watch", price: 2200, brand: "casio", color: "green" },
  { name: "phone", price: 3500, brand: "samsung", color: "yellow" },
  { name: "sunglass", price: 2000, brand: "rebon", color: "white" },
];

const newProduct = { name: "canon", price: 3700, color: "red" };
const newProducts = [...products, newProduct];
// console.log(newProducts);

const remaining = products.filter((p) => p.name !== "laptop");
console.log(remaining);
