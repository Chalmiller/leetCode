//Function that takes in a list of numbers and keeps the numerical order whilst
//pushing the values of 0 to the end of the list.

numArray = [0, 1, 0, 3, 12];

function moveZeroes(nums) {
    nums = nums.map(function(obj) {
        console.log(obj);
        var index;
        if (obj == 0) {
            index = nums.indexOf(obj);
            nums.splice(index, 1);
            nums.push(0);
            console.log(nums);
        }
    })
}


moveZeroes(numArray);