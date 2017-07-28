// var request = require('request');

// function displaySize(error, response, body) {
//     console.log("This page is " + body.length + " bytes long!");
// }

// request.get('https://en.wikipedia.org/wiki/Kitten', displaySize);



var math = require('./math');

console.log('5 squared = ' + math.square(5));
console.log('Circumference of a circle with radius 5 = ' + math.circumference(5));