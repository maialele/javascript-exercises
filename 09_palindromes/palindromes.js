const palindromes = function (string) {
    let splitstring = string.split("");
    let reverse = splitstring.reverse();
    let completestring = reverse.join("");
    if (string == completestring) {
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = palindromes;
