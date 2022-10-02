const inputDob = document.querySelector("#date-of-birth");
const inputLuckyNum = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-dob");

function checkLuckyDob(){
    var dob = inputDob.value;
    var luckyNum = inputLuckyNum.value;
    var sum = calculateSum(dob);
}
function calculateSum(dob){
    var sum = 0;
    dob = dob.replaceAll("-","");    
    for(let i = 0; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkBtn.addEventListener("click", checkLuckyDob);