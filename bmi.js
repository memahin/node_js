const weightInput = process.argv[2];
const heightInput = process.argv[3];

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

const bmi = calculateBMI(weightInput, heightInput);

console.log(`Your BMI is: ${bmi}`);

if (bmi < 18.5) {
    console.log("You are underweight.");
} else if (bmi >= 18.5 && bmi < 24.9) {
    console.log("You have a normal weight.");
} else if (bmi >= 25 && bmi < 29.9) {
    console.log("You are overweight.");
} else {
    console.log("You are obese.");
}           