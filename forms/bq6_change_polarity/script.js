document.querySelector('#process').addEventListener('click', function () {
    // Set state variable
    let operation = null;

    // Select radio buttons
    let radioBtns = document.querySelectorAll('.operation');
    for (let radioBtn of radioBtns) {
        if (radioBtn.checked) {
            operation = radioBtn.value;
            break;
        }
    }

    function multiply(a, b) {
        return a*b;
    }

    function plus(a,b) {
        return a+b;
    }

    let operationFn = operation == 'multiply' ? multiply : plus;

    // Select all checkboxes
    let numbers = [];
    let checkboxes = document.querySelectorAll('.numbers');
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            numbers.push(Number(checkbox.value));
        }
    }

    if (numbers.length > 0) {
        let result = numbers.reduce(operationFn);
        console.log(result);
    }
    else {
        console.log(0);
    }
});