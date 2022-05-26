document.querySelector('#process').addEventListener('click', function () {
    // TODO
    let values = [];
    
    let checkboxes = document.querySelectorAll('.numbers');
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            // Convert checkbox value to number
            let checkboxValue = Number(checkbox.value);
            values.push(checkboxValue);
        }
    }

    // Console log 0 if values array is empty
    if (values.length == 0) {
        console.log(0);
    }
    else {
        let maxValue = values[0];
        for (let value of values) {
            if (value > maxValue) {
                maxValue = value;
            }
        }
        console.log(maxValue);
    }
});