//filter Method
const arr = [5,6,8,10,2,11,0,56];

const arrValue = arr.filter((ar) => {
    return ar > 6 ;
});

console.log(arrValue);

//map Method
//this method visit indivisual element and perform some action and 
//store in new array
const numbers = [25,56,41,78,29];

const num = numbers.map((number) => {
    let n = number+5
    return n;
});

console.log(num);

const products = [
    {name: "Bread", price: 25, tax: 0.05},
    {name: "Butter", price: 50, tax: 0.05},
    {name: "Water", price: 18, tax: 0},
    {name: "Material", price: 75, tax: 0.18}
];

const mapProduct = products.map((product) => {
    let totalPrice = product.price + (product.price * product.tax);
     return {name: product.name, price: totalPrice, tax: product.tax}

});

console.log(mapProduct);

//reduce Method
//syntax : reduce(accumulator,initialization) or
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const rnums = [10,20,40,60,55];
const reduceTotal = rnums.reduce((total,current) => {
    total = total + current;
    return total;
},0);
console.log(reduceTotal);

const students = [
    {name: "Shubham", marks: 8},
    {name: "Paresh", marks: 9},
    {name: "Hitesh", marks: 7},
    {name: "Rajni", marks: 10},
    {name: "Shubham", marks: 7},
    {name: "Paresh", marks: 10},
    {name: "Hitesh", marks: 9},
    {name: "Shubham", marks: 5},
    {name: "Paresh", marks: 9},
    {name: "Hitesh", marks: 6},
];

const reduceStudent = students.reduce((total,current) => {
    if(current.name === "Shubham"){
    total = total + current.marks;
    }
    return total;
},0);
console.log(reduceStudent);

//find method
const fnums = [15,25,70,62,32,15];
const findNumber = fnums.find((fnum) => {
    return fnum > 25;
});
console.log(findNumber);

//sort Method
const snums = [1,5,6,3,10,12];
snums.sort();
console.log(snums);

const snumsingle = [4,5,9,8,2,3,7];
snumsingle.sort();
console.log(snumsingle);

const stringName = ["Rakesh", "Ashish", "Prakash","Zuhil"];
stringName.sort();
console.log(stringName);

//sorting method take first letter for sort, sorting is destructive
//method that's why change original array and store in it. Do not
//make new array and it work for equal lenth of character otherwise
//it start compare with next element.

const snumc = [2,6,10,23,56,1,24];
snumc.sort((a,b) => {
    return a-b;
});
console.log(snumc);

const movie = [
    {name:"Bug finder", rating:7},
    {name:"Lost coder", rating:5},
    {name:"Dev at night", rating:9},
    {name:"Speed quality", rating:10}
];

movie.sort((a,b) => {
    return b.rating - a.rating;
});

console.log(movie);

//reverse Method : it also destructive method simply reverse array

//Chaining
const numbersChaining = [12,23,68,45,91,56,78,89];
const result = numbersChaining.reverse().filter(num => num > 60).map(num => num + 5); 

console.log(result);