document.querySelector('#submit')
.addEventListener('click', function() {
    // Set flags
    // 1. number of scoops
    // -> number of scoops must be between 1 to 5
    let invalidScoopNumber = false;
    // -> number of scoops must be whole number (integer)
    let scoopNotANumber = false;

    // 2. number of toppings
    // -> number of toppings must not exceed 3
    let tooMuchToppings = false;
 
    // Select textbox #number-of-scoop
    // -> cast to integer (whole number)
    let numberOfScoop = parseInt(document.querySelector('#number-of-scoop').value);

    if (!numberOfScoop || numberOfScoop < 1 || numberOfScoop > 5) {
        invalidScoopNumber = true;
    }

    // Select all checked checkboxes (toppings)
    let selectedToppings = [];
    let checkboxes = document.querySelectorAll('.toppings');
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            selectedToppings.push(checkbox.value);
        }
    }

    if (selectedToppings.length > 3) {
        tooMuchToppings = true;
    }

    // Error string
    let errorArr = [];
    if (invalidScoopNumber) {
        errorArr.push('invalid-scoop-number');
    }
    if (tooMuchToppings) {
        errorArr.push('too-much-toppings');
    }

    console.log(errorArr);

});