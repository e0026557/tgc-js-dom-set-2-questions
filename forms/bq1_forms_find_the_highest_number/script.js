document.querySelector('#process').addEventListener('click', function () {
    let largestNumber = -Infinity;
    
    let nums = document.querySelectorAll('[type="text"]');
    for (let num of nums) {
        let currentNumber = Number(num.value);
        if (currentNumber > largestNumber) {
            largestNumber = currentNumber;
        }
    }

    console.log(largestNumber);
});