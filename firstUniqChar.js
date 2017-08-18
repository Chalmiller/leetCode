function firstUniqChar(s) {
    splitString = s.split('');
    for (var i=0; i<s.length; i++) {
        for (var j=0; j<s.length; j++) {
            if (splitString[i] === splitString[j]) {
                return i;
            } else {
                continue
            }
        }
    }
}