// const date = new Date();
// console.log(date);

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getUTCSeconds());

// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

const futureDate = new Date('December 25, 2023 01:29:00');
console.log(futureDate);
console.log(futureDate.getTime());

const todayDate =  new Date();
console.log(todayDate);
console.log(todayDate.getTime());

const gap = futureDate - todayDate;
timeGap = Math.round(gap/1000/60/60/24);
console.log(`Blog will posted after ${timeGap} days`);

localStorage.setItem("name","Paresh");
localStorage.setItem("age",25);

const name = localStorage.getItem("name");
const age = localStorage.getItem("age");

console.log(name, age);
console.log(typeof name, typeof age);

// localStorage.removeItem("name");
// localStorage.removeItem("age");

localStorage.clear();

const data = [
    {username: "shubham", age: 25},
    {username: "john", age: 29}
];

const dataStringify = JSON.stringify(data);
localStorage.setItem("data", dataStringify);

const accessData = JSON.parse(localStorage.getItem("data"));

console.log(accessData);


