// function myFunction(numOne, numTwo){
//     return numOne+numTwo;
// }
// let addition = myFunction(5,6);
// console.log(myFunction(2,3));
// console.log(addition);

// function intro(){
//     console.log("welcome");
// }

// intro();

// let fun = function(){
//     console.log("Welcome in Mumbai");
// }
// fun();

//console.log(random);  it give error
//let random = 20;
// but in javascript you can call function before declare because first java script
//read whole code than execute

//  function fullName(firstName, lastName){
//      console.log(`welcome ${firstName} ${lastName}`);
//  }
// fullName("Paresh","Kakadiya");

// function fullName1(firstName="ABC", lastName="XYZ"){
//       console.log(`welcome ${firstName} ${lastName}`);
//   }
//  fullName1();

//return value we can use in further operation, also we can store and display
//that's why return necessary

// let fun1 = () => {
//     console.log("Welcome in Surat");
// }
// fun1();

//let print = num => console.log(num);  for single argument
//print(2);

//function is free form and method atteched with some one like instance or
// property. this is the difference


// let callback = function(a,b){
//     return a+b;
// }

// function calculator(num1,num2,call){
//     console.log(call(num1,num2));
// }

// calculator(5,10,callback);

// let products = ["bread","butter","jam","bottle"];

// let callBack = function (product){
//     console.log(product);
// };
// products.forEach(callBack);

 let students = ["kailash","Haresh","Anthem","Raju"];

 students.forEach((student) => {
    console.log(student);
});
