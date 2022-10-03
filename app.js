const inputDob = document.querySelector("#date-of-birth");
const inputLuckyNum = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-dob");
const output = document.querySelector(".output-message");

function compareVal(sum, luckyNum){
    if(sum&&luckyNum){
        if(sum%luckyNum == 0){
            output.innerHTML = "Congrats your birthday is LUCKY🥳🥰";
            
        }else{
            output.innerHTML = "Oops! sorry your birthday isnt lucky🤒😩";
        }
    }else{
        output.innerHTML = "Please enter both the input to check if your birthday is lucky or not!"
    }
    
}

function checkLuckyDob(){
    var dob = inputDob.value;
    var luckyNum = inputLuckyNum.value;
    var sum = calculateSum(dob);
    var output = compareVal(sum, luckyNum);
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