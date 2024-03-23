const billAmount = document.querySelector("#bill-amount");
const tipPercentage = document.querySelector("#tip-percentage");
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#total-bill");

calculate.addEventListener("click", function calculateTip (){
    if(billAmount.value === "" || tipPercentage.value === ""){
        alert("Please enter the values");
        return;
    }
    else if (billAmount.value < 0 || tipPercentage.value < 0){
        alert("Please enter positive values");
        return;
    }else{
        const billAmountValue = parseFloat(billAmount.value);
        const tipPercentageValue = parseFloat(tipPercentage.value);
        // console.log(billAmountValue,tipPercentageValue);
        const tipAmount = billAmountValue * (tipPercentageValue/100);
        const totalBill = billAmountValue + tipAmount;
        output.innerText = totalBill;
    }
});
