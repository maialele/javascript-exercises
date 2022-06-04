const fibonacci = function(num) {
    fibarray = [0,1]
    for (let i = 1; i <= num; i++ ) {
        fibarray.push(fibarray[i] + fibarray[i - 1]);
    }
    return fibarray[num];
};

// Do not edit below this line
module.exports = fibonacci;
