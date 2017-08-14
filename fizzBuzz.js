var fizzBuzz = function(n) {
    var fizzBuzzList = [];
    for (var i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            fizzBuzzList.push('FizzBuzz');
        } else if (i % 3 == 0) {
            fizzBuzzList.push('Fizz');
        } else if (i % 5 == 0) {
            fizzBuzzList.push('Buzz');
        } else {
            fizzBuzzList.push(i.toString())
        }
    }
    return fizzBuzzList;
};