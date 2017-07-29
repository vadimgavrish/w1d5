var chalk = require("chalk");

var message = chalk.blue("Hello ") + chalk.green("World!") + chalk.cyan(" This is my first time using " + chalk.bgBlue("CHALK!"));
console.log(message);