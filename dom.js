// let description = document.querySelectorAll('p');
// console.log(description);
// description.forEach(paragraph => {
//     console.log(paragraph);
// });

// let description1 = document.querySelector('#re');
// console.log(description1);

// let description2 = document.getElementById("re"); //id always one so Element
// console.log(description2);

//document.getElementsByClassName();--> so many classes so Elements
//document.getElementsByTagName();-->Tag also so many so Elements
//and above both give HTML list so we access only by indexing not by forEach loop
//for this you have to convert this list into array

//that always use querySelectorAll();
let sub = document.querySelector(".heading");
console.log(sub.innerText);
sub.innerText = "--Any Object--";
console.log(sub.innerText);

//innerText change text inside element
//innerHTML change inside content of which we access it done with = if we want
//add we can use +=

// Attribute
//getAttribute(''href);
//setAttribute('href','www.example.com');

let brandName = document.querySelector("#re");
console.log(brandName);
console.log(brandName.style);
brandName.setAttribute("Style","margin:50px");
console.log(brandName);
console.log(brandName.style.margin);
brandName.style.color = "blue";

let header = document.querySelector("H1");
console.log(header.classList);

header.classList.add("highlight");

console.log(header.classList);
header.classList.remove("highlight");

header.classList.toggle("highlight");

// console.log(header.children);
console.log(brandName.parentElement);
console.log(brandName.nextElementSibling);
//console.log(brandName.previousElementSibling)
