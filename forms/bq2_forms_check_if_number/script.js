// write your code here
document.querySelector('#process').addEventListener('click', function () {
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    let num3 = Number(document.querySelector('#num3').value);

    let isError = [num1, num2, num3].some((num)=> !isNumber(num));

    if (isError) {
        console.log('error');
    }
    else {
        let average = (num1 + num2 + num3) / 3;
        console.log(average);
    }

});


// --- LEAVE THE BELOW ALONE ----
function isNumber(x) {
    return !isNaN(x);
}

try {
   module.exports = exports = {isNumber};
} catch (e) {}