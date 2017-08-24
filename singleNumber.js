numArray = [17, 12, 5, -6, 12, 4, 17, -5, 2, -3, 2, 4, 5, 16, -3, -4, 15, 15, -4, -5, -6]

singleNumber = function(numberArray) {
    if (numberArray.length > 1) {
        var sortedArray = numberArray.sort(function(a, b) {
            return a - b
        });
        for (var i = 0; i < sortedArray.length; i = i + 2) {
            var culprit = 0;
            if (sortedArray[i] !== sortedArray[i + 1]) {
                culprit += sortedArray[i];
                return culprit;
            }
        }
    } else if (numberArray.length == 1) {
    	return numberArray[0];
    }
}

singleNumber(numArray);