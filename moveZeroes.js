//Function that takes in a list of numbers and keeps the numerical order whilst
//pushing the values of 0 to the end of the list.

function moveZeroes(nums) {
	var sortedArray = [];
    for (var i =0; i < nums.length; i++) {
        if (nums[i] === 0) {
            sortedArray.push(nums[i]);
        }
    }
   	for (var j = 0; j < nums.length; j++) {
   		if (!(nums[i] === 0)) {
   			sortedArray.push(nums[i]);
   		}
   	}
   	return sortedArray;
};