const maxSubArray = function(nums) {
    if(nums.length === 1) return nums[0];
    let maxSum=nums[0],sum=0;
    for(let i=0; i < nums.length; i++) {
        sum += nums[i];
        if(sum > maxSum) maxSum = sum;
        if(sum < 0) sum = 0;
    }
    return maxSum
};

console.log(maxSubArray([-1,4,2,-5,3,5,-3,-4,6]))