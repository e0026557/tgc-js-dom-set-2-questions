document.querySelector('#process').addEventListener('click', function () {
    // Get all checkboxes
    let count = 0;
    let checkboxes = document.querySelectorAll('.numbers');
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            count++;
        }
    }
    console.log(count);
});