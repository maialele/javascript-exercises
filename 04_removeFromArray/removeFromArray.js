const removeFromArray = function(array,element) {
   var del = array.indexOf(element);
   array.splice(del, 1);
   return array;
};

// Do not edit below this line
module.exports = removeFromArray;
