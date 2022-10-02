const inputDob = document.querySelector("#date-of-birth");
const inputLuckyNum = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-dob");

function clickHandler(){
    console.log("clicked");
}

checkBtn.addEventListener("click", clickHandler);