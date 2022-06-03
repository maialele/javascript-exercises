const sumAll = function(num1, num2) {
    var sum = 0;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
    }
    else {
        for (let i = num2; i <= num1; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
