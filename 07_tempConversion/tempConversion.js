const ftoc = function(temp) {
    let celsius = (temp - 32) * (5/9);
    return celsius;
};

const ctof = function(temp) {
  let fahrenheit = temp * (9/5) + 32;
  return fahrenheit;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
