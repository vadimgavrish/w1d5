function square (num) {
    return num * num;
}

function circumference (radius) {
    return 2 * Math.PI * radius;
}

module.exports = {
    square: square,
    circumference: circumference
}
