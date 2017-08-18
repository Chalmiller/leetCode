//Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

nums = [1,4,3,2];

function arrayPairSum(nums) {
    var numSort = nums.sort(function(a,b) {return (a-b)});
    var nCount = 0;
    for (var i=0; i <numSort.length; i+2) {
        nCount += (Math.min(numSort[i]) - Math.min(numSort[i]));
    }
    console.log(nCount);
};

arrayPairSum(nums);