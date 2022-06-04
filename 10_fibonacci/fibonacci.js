const fibonacci = function(num1) {
    fibarray = [0,1]
    for (let i = 1; i <= num1; i++ ) {
        fibarray.push(fibarray[i] + fibarray[i - 1]);
    }
    return fibarray[num1];
};

// Do not edit below this line
module.exports = fibonacci;
