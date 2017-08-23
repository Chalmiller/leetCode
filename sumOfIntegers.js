// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
var c = -3
var d = -3

var getSum = function(a, b) {
    var numList = [];
    if (a < 0 || b < 0) {
        for (var i = a; i < 0; i++) {
            numList.push(parseInt("-" + i));
        }
        for (var j = b; j < 0; j++) {
            numList.push(parseInt("-" + j));
        }
    return (parseInt("-" + numList.length));
    } else {
        for (var i = 0; i < a; i++) {
            numList.push(parseInt(i));
        }
        for (var j = 0; j < b; j++) {
            numList.push(parseInt(j));
        }
    }
    return (numList.length);
};



getSum(c, d);