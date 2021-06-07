let first = document.getElementById("btn");
first.addEventListener('click', () => {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let bmi = Math.round(weight / (height ** 2));

    if (bmi < 18.5) {
        document.getElementById("result")
            .innerHTML = "Your BMI is " + bmi + ", you are underweight";            

    } else if (bmi < 25) {
        document.getElementById("result")
            .innerHTML = "Your BMI is " + bmi + ", you have normal weight";

    } else if (bmi < 30) {
        document.getElementById("result")
            .innerHTML = "Your BMI is " + bmi + ", you are overweight";

    } else if (bmi <  35) {
        document.getElementById("result")
            .innerHTML = "Your BMI is " + bmi + ", you are obese";
    } else {
        document.getElementById("result")
            .innerHTML = "Your BMI is " + bmi + ", you are extremely obese";
    }

}, false);