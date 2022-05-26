document.querySelector('#process').addEventListener('click', function() {
    // Set state variable 
    let value = null;

    // Select all radio buttons
    let radioBtns = document.querySelectorAll('.btnRadio');
    for (let radioBtn of radioBtns) {
        if (radioBtn.checked) {
            value = radioBtn.value;
            break;
        }
    }

    if (value) {
        console.log(value);
    }
    else {
        console.log(0);
    }
});