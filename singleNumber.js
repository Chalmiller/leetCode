function findNonDuplicate(numberArray) {
    var sortedArray = numberArray.sort(function(a,b) {return a-b});
    console.log(sortedArray);
    for (var i=0; i<sortedArray.length; i+2) {
        if (!(sortedArray[i] == sortedArray[i+1])) {
            return sortedArray[i];
        }
    }
};