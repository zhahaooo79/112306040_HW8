document.getElementById("calculatorForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const operator = document.getElementById("operator").value;

    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Invalid input. Please enter valid numbers.";
    } else {
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Error: Division by zero.";
                break;
            default:
                result = "Invalid operator.";
        }
    }

    document.getElementById("result").textContent = `Result: ${result}`;
});
