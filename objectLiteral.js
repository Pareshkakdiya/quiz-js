// let users = ["Shubham","alex","Ranveer","Rakesh"];

// let men = {
//     name : "Rohit",
//     email : "rohit@gmail.com",
//     age : 25,
//     isLoggedIn : false
// };

// console.log(men);
// console.log(typeof men);
// console.log(men.name);
// men.isLoggedIn = true;
// console.log(men.isLoggedIn);
// console.log(men["email"]);
// console.log(men["name"]);

// let key = "name";
// console.log(men.key); // it gives undefined
// console.log(men[key]);

let men = {
    name : "Rohit",
    email : "rohit@gmail.com",
    age : 25,
    login : function(){
        console.log("LOGIN");
    },
    logOut : function(){
        console.log("LOGOUT");
    },
    loginPerson : function(){
        return this.name;
    },
    blogs : [
        {title : "Blog 1", numComment : 5, wordCount :571},
        {title : "Blog 2", numComment : 6, wordCount :561}
    ],
    allBlogs : function(){
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }

};

men.login();
console.log(men.loginPerson());
console.log(this); //In this we cannot use arrow function and here 'this' keyword
//has global scope, And if 'this' keyword in any object it has Object scope.

//let person = [
//    {},
//    {},
//    {},
//    {}
//];
console.log(men.blogs[0].title);
men.allBlogs();

const num = 25.3;
console.log(Math.PI);
console.log(Math.round(Math.random()*100));
console.log(Math);

let arr1 = ["Shubham", "Sahil" ];
let arr2 =  [...arr1];
arr1.push("Deppak");

console.log(arr1);
console.log(arr2);

let obj1 = {title: "Learning", rank:2};
let obj2 ={...obj1, publish: "09-12-2023"};

console.log(obj1);
console.log(obj2);



