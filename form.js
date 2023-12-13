// const form = document.querySelector(".feedback-form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     console.log(form.username.value);
//     console.log(form.feedback.value);
// });

//Regular Expression
//Expression write betweeen /  /
//[a-zA-Z]{6,10} means from this any charater and size between
//6 to 10
//^ it use for same start and $ use for same end

const form = document.querySelector(".feedback-form");
const p = document.querySelector("p");

const userPattern = /^[a-z0-9]{6,10}$/;
const feedbackPattern = /^.{20,50}$/;

form.addEventListener("submit", (event) => {
    console.log(form.username.value);
    event.preventDefault();
    const userResult = userPattern.test(form.username.value);
    const feedbackResult = feedbackPattern.test(form.feedback.value);

    if(userResult && feedbackResult){
        p.setAttribute("class","success");
        p.textContent = "Feedback submitted successfully, Thank you";
    }else{
        p.setAttribute("class","error");
        p.textContent = "Please give proper feedback";
    }
});

const formUser = document.querySelector("#username");
formUser.addEventListener("keyup",(event) => {
    const userResult = userPattern.test(event.target.value);
    if(userResult){
        formUser.setAttribute("class", "accepted");
    }else{
        formUser.setAttribute("class", "rejected");
    }
});
