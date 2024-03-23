const inputButton = document.querySelector(".dob-input");

const calculateButton = document.querySelector(".calc-age");

const ageResult = document.querySelector(".result");

calculateButton.addEventListener("click", () => {
    if(inputButton.value == ""){
        alert("Please enter your date of birth");
    }else{
        console.log(inputButton.value);
        const dob = new Date(inputButton.value);
        console.log("dob",dob);
        const fullYear = dob.getFullYear();
        console.log("fullYear",fullYear);

        // current

        const now = new Date();
        console.log("now",now);
        const nowYear = now.getFullYear();
        console.log("nowYear",nowYear);
        const age = nowYear - fullYear;
        console.log("age",age);

        ageResult.innerHTML = `Your age is: ${age} year`
    }
});