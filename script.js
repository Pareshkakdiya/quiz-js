const userPattern = /^[a-z0-9]{6,10}$/;
const feedbackPattern = /^.{20,50}$/;

function usernameValidation(event){
    const userResult = userPattern.test(event.target.value);
    if(userResult){
        event.target.setAttribute("class", "accepted");
    }else{
        event.target.setAttribute("class", "rejected");
    }
}

function displayData(event){
    event.preventDefault();
    console.log(event);
}