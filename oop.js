// older or earlier we use like this
//---------------------------------------------------------------------
function User(username,age){
    this.username = username;
    this.age = age;
    this.active = false;
} 

User.prototype.login = function(){
    console.log("LOGIN");
}

User.prototype.logout = function(){
    console.log("LOGOUT");
}

const userOne = new User("Avinash",25);
console.log(userOne.username);
userOne.logout();

function Student(username,age,semester,rank){
    User.call(this,username,age);
    this.semester = semester;
    this.rank = rank;
}

  Student.prototype = Object.create(User.prototype);

Student.prototype.updateRank = function(newRank){
    this.rank = newRank;
    console.log(this.rank);
}

console.log(User.prototype);
console.log(Student.prototype);

const studentOne = new Student("John",60,5,10);
console.log(studentOne.username);
studentOne.updateRank(20);




//----------------------------------------------------------------------

//Arry object
//const students = ["Rahu","Rami","Raonu"];
//const names = new Array("Ketan","Kalpesh");

//const info = {}; --->its just create object instance without call constructor
//const name = new object();---> Here new means called constructor with creating instance
//const product = new String();


// const userOne = {
//     userName: "Shubham",
//     fullName: "Shubham sarda",
//     email: "test@gmail.com",
//     age: 25,
//     login() {
//         console.log("LOGIN");
//     },
//     logout() {
//         console.log("LOGOUT");
//     },
// };

//If more than one user same pattern follow as above for the create object, that become more
//line code so we have to make one class and from that we can create as many as we want 
//users its become one line code.

// class User {
//     username;
//     age;
//     constructor(username, age){
//         this.username = username;
//         this.age = age;
//     }
//     login() {
//       console.log("LOGIN");
//       return this;
//     }
//     display(){
//         console.log("Hi");
//     }
// }
// const userOne = new User("Shubham",25);
// console.log(userOne.username);

// const userTwo = new User("alex",30);
// console.log(userTwo.username);

// const userThree = new User("deepak",20);
// console.log(userThree.username);

//Without return in method chaining calling not possible 
//userOne.login().display(); ---> like this is not possible if login method have not return keyword
//if login() method return something than and than only we can call more than one method by chaining
 
// class Student extends User {
//     constructor(username, age, semester, rank){
//         super(username,age);
//         this.semester = semester;
//         this.rank = rank;
//     }

//     updatedRank(newRank){
//         this.rank = newRank;
//         console.log(this.rank);
//     }
// }

// const studentOne = new Student("john",60,5,10);
// studentOne.login().display();
// console.log(studentOne.rank);
// studentOne.updatedRank(15);

//static Keyword
// class Calculator{
//     static result = 0;

//     static add(number){
//         Calculator.result += number;
//         //if variable not depend on other class you can use this keyword as below
//         //this.result += number;
//     }

//     static sub(number){
//         this.result -= number;
//     }
// }

// console.log(Calculator.result);

// Calculator.add(5);
// console.log(Calculator.result);

// Calculator.add(22);
// console.log(Calculator.result);

// Calculator.sub(10);
// console.log(Calculator.result);

class Guest {
    constructor(first,last){
        this.first =first;
        this.last = last;
    }
    get fullname(){
        return `${this.first} ${this.last}`;
    }
    set fullname(newValue){
        const[first, last] = newValue.split(" ");
        this.first = first;
        this.last = last;
    }
}

const guest = new Guest("Shubham","Sarda");
console.log(guest.first);
console.log(guest.last);
console.log(guest.fullname);// to fetch return by get method  you just write name
// no need to write '()'
console.log("----");
guest.first = "SHUBHAM";
guest.fullname = "SHUBHAM SARDA";
console.log(guest.fullname);

//get method behave like method but appear like property
//what ever value from get through return statement which value we will have
//complasary set in set method taking as parameter.
//Every file in javascript is module.

// -------------------------------------------
//for better understanding view 15 number videos

// import and export concept
//when in one project more than one js file like helper.js, config.js
//and all function, variable whic in this file use in main js file at that time
//we need to import those file in main file.
//for this  we have to write in HTML file in script tag type = "module" and all
// this file we have to import by import keyword, also whichever file want to import 
//in this file we have to use export keyword with every variable,method,function.
//And main javascript file this files we import with import keyword like
//import { methodName } from "./filename.js";


//but with name of every property, variable, method write export not right way so can create 
//library type means ex: export {username, age,connect,disconnect};
//And where we import this all property use refrence name so avoid confusione
//ex: username as name, convert as conversion also we do in lightning web component
//default thing not write in  {}. It write without {}.
//only one value default, if more than one value default than last default value consider as 
//default earlier value ignore as default in one file.

//try{

// }catch(error){
//     console.log(error.message);
//     console.log(error.stack);
//     console.log(error);
// } 

//Error and Excpetion is different 
//Error : when you work with something and unintentionally create a problem it gives error
//Exception : when we create some type of condition  and that condition not fullfilled at that
// time we raise a problem.

//const username = 52;
//if(typeof username !== "string"){
//     throw Error("Not an String");
// }