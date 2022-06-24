const firstNum = parseFloat(prompt("Enter first number"));
const secNum = parseFloat(prompt("Enter second number"));
const operator = window.prompt("Enter '+' to add, '-' to subtract, '/' to divide or '*' to multiply");
let result = 0;

if (isNaN(firstNum) || isNaN(secNum)){
    alert("Wrong input. Please enter a valid number.");
    window.reload(true);

} else {
    if (operator == "+"){
        let answer = firstNum + secNum;
        alert(firstNum + " + " + secNum + " = " + answer);
        window.location.reload;
    }

    if (operator == "-"){
        let answer = firstNum - secNum;
        alert(firstNum + " - " + secNum + " = " + answer);
        window.location.reload;
    }

    if (operator == "/"){
        let answer = firstNum / secNum;
        alert(firstNum + " / " + secNum + " = " + answer);
        window.location.reload;
    }

    if (operator == "*"){
        let answer = firstNum * secNum;
        alert(firstNum + " * " + secNum + " = " + answer);
        window.location.reload;
    }
}


