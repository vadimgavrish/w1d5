module.exports = {
    howManyYears: function(input){
        if ( input <= currentYear() ) {
            console.log('Please enter a year greater than ' + currentYear() + "!");
        } else {
            return input - currentYear();
        }
    }
}

function currentYear () {
    let year = new Date().getFullYear();
    return year;
}
