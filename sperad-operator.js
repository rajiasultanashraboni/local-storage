const numbers = [12, 15, 16, 33];

const newNumbers = [...numbers];
const currentNumber = [...numbers, 55];
numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(newNumbers);
console.log(numbers);
console.log(currentNumber);
