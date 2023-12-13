//Till we have been manipulated page when page loading, but when from user we
//want to manipulate page use "event" in java script ex: onClick, onMouse, etc...
//Event depend on user activity.
//Event Steps: 1) First we get element 2) Second what want to do User(task
// which type)) 3)Third what we want to do(Task functionality).

// const product = document.querySelector("button");
// product.addEventListener("click",() => {
//     console.log("Button Clicked!");
// })

// const products = document.querySelectorAll("li");
// products.forEach((product) => {
//     product.addEventListener("click",(event) => {
//         console.log(event.target.textContent);
//     })
// });

//syntax for Java script
//element.addEventListener(eventName, callbackFunction)
//In java script forEach loop use callBack function
//syntax : forEach(() => {}) like this way

// const products = document.querySelectorAll("li");
// products.forEach((product) => {
//     product.addEventListener("click",(event) => {
//         event.target.remove();
//     })
// });

// const addProduct = document.querySelector("ul");
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     addProduct.innerHTML = "<li>New Item</li>" +  addProduct.innerHTML;
//     console.log(addProduct.innerHTML);
// });
//In above example New element add but eventListner not added for this use append
// prepend method to add HTML

// const addProduct = document.querySelector("ul");
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     const newLi = document.createElement("li");
//     newLi.innerText = "New Product";
//     addProduct.append(newLi);
//     console.log(addProduct.innerHTML);
// });

// const addProduct = document.querySelector("ul");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//     const newLi = document.createElement("li");
//     newLi.innerText = "New Product";
//     addProduct.append(newLi);
// });

// addProduct.addEventListener("click", (event) => {
//     console.log(event.target);
//     if(event.target.tagName === "LI"){
//         event.target.remove();
//     }
// });

// Event Bubbling:
// If more than one event on different element at child parent, so when we click
// all event takeplace to stop we use method it called event bubbling.
// for that on which element want to fire event on that we put 
// event.stopPropogation();

// const addProduct = document.querySelector("ul");
// addProduct.addEventListener("click", (event) => {
//     if(event.target.tagName === "LI"){
//         console.log("UL Called");
//     }
// });

// const newLi = document.querySelector(".active");
// newLi.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("LI Called");
// });

const item = document.querySelector("ul");
const copyAlert = (event) => {
    if(event.target.tagName = "LI"){
        alert(event.target.textContent);
    }
}
item.addEventListener("copy", copyAlert);

const webPage = document.querySelector("body");
webPage.addEventListener("mousemove", (event) => {
    console.log(event.clientX, event.clientY);
});

//For scroll we use 'wheel' event instead of 'mousemove' 




