const reverseString = function(string) {
    let splitstring = string.split("");
    let reverse = splitstring.reverse();
    let completestring = reverse.join("");
    return completestring;
};

// Do not edit below this line
module.exports = reverseString;
