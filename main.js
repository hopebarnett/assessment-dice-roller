let inputNumberOfRolls_Element = document.querySelector("#input-number")
let buttonRoll_Element = document.querySelector("#roll-dice-button")
let totalSum_Element = document.querySelector("#total_sum")
let buttonShowAllRolls_Element = document.querySelector("#show_all_rolls")
let allRolls_Element = document.querySelector("#allRolls")
let resetButton_Element = document.querySelector("#reset-Button")
let dieRolls = [];  
let userInput;  
let totalSumOfRolls;  
buttonRoll_Element.addEventListener("click", function () {
    userInput = inputNumberOfRolls_Element.value;  
    console.log("user_input: " + userInput);
    let counter_01 = 0;
    while (counter_01 < userInput) {
        let randomNumber = (Math.round(Math.random() * 5 + 1)); 
        console.log('random_number: ' + randomNumber);
        dieRolls.push(randomNumber); 
        console.log(dieRolls.toString())
        counter_01++;
    }
    console.log('***' + dieRolls.toString());
    let counter_02 = 0;
    totalSumOfRolls = 0;
    console.log("dieRolls.length: " + dieRolls.length);
    while (counter_02 < dieRolls.length) {  
        totalSumOfRolls += dieRolls[counter_02];   
        console.log('totalSumOfRolls:' + totalSumOfRolls);
        counter_02++;
    }
totalSum_Element.innerHTML = totalSumOfRolls;
})
buttonShowAllRolls_Element.addEventListener("click", function () {
    let counter_03 = 0;
    while (counter_03 < dieRolls.length) {
        let new_li = '<li id="allRolls">' + dieRolls[counter_03] + '</li>';
        allRolls_Element.innerHTML += new_li;
        counter_03++;
    }
})





