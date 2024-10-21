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
console.log(keys);
const values = Object.values(student);
console.log(values);
