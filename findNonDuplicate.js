function sortNumber(a,b) {
    return a-b;
}

function findNonDuplicate(numberArray) {
    var sortedArray = [];
    for (var i=0; i<numberArray.length; i++) {
        sortNumber(numberArray[i], numberArray[i+1]) += sortedArray;
    };
    for (var j=0; j<sortedArray.length; j++) {
        if (sortedArray[j] == sortedArray[j+1]) {
            continue
        } else {
            return sortedArray[j];
        }
    }
}

findNonDuplicate([1,3,4,5,7,8,9,2,2,1,3,4,5,7,8,9])