function check(num) {

    var numArr = num.split('').reverse();
    var oddArr = [];
    var evenArr = [];

    for (var i = 0; i < numArr.length; i++) {
        numArr[i] = parseInt(numArr[i]);
    }

    for (var i = 0; i < numArr.length; i += 2) {
        oddArr.push(numArr[i]);
    }

    var oddSum = oddArr.reduce((a, b) => a + b, 0);

    for (var i = 1; i < numArr.length; i +=2 ) {
        evenArr.push(numArr[i])
    }

    for (var i = 0; i < evenArr.length; i++) {
        evenArr[i] = evenArr[i] * 2;

        if (evenArr[i] >= 10) {
            evenArr[i] = evenArr[i] - 9;
        }
    }

    var evenSum = evenArr.reduce((a, b) => a + b, 0);

    var product = oddSum + evenSum;

    if (product % 10 === 0) {
        return "This is a valid card number!";
    } else {
        return "This is not a valid card number!";
    }
}

console.log(check("374964009777496"));              // valid AMEX number
console.log(check("5274216328690110"));             // valid MasterCard number
console.log(check("4532649671468802"));             // valid VISA number
console.log(check("4532644671468802"));             // not valid