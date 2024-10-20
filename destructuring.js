const numbers = [23,12,30]
const [num1, num2, num3] = numbers;

const student = {
    age: 25;
   name:'Sakib khan';
   movies:['boss' , 'hero'];
   specification:{
    weight:62;
    height: 67;
    address:'kurmitola'
   }


}

const [firstMovie, secondMovie] = student.movies;



const {age, name} = student; 

const {weight, address} = student.specification; 